import { SignJWT } from 'jose';
import { cookies } from 'next/headers';

import { prisma } from './db';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';
const key = new TextEncoder().encode(SECRET_KEY);

export async function createSession(userId: number) {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(key);

  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

  await prisma.session.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });

  (await cookies()).set('session_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: expiresAt,
  });
}

export async function getSession() {
  const token = (await cookies()).get('session_token')?.value;

  if (!token) return null;

  try {
    const session = await prisma.session.findUnique({
      where: { token },
      include: { user: true },
    });

    if (!session || new Date() > session.expiresAt) {
      await prisma.session.delete({ where: { token } });
      (await cookies()).delete('session_token');
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export async function logout() {
  const token = (await cookies()).get('session_token')?.value;

  if (token) {
    await prisma.session.delete({ where: { token } });
    (await cookies()).delete('session_token');
  }
}
