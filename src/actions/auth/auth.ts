'use server';

import bcrypt from 'bcryptjs';

import { createSession, logout } from '@/lib/auth';
import { prisma } from '@/lib/db';

export async function login(email: string, password: string) {
  console.log('PRISMA', prisma);

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return { success: false, error: 'user_not_found' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return { success: false, error: 'invalid_credentials' };
    }

    await createSession(user.id);

    return { success: true };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'An error occurred during login' + JSON.stringify(error),
    };
  }
}

export async function register(email: string, password: string) {
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { success: false, error: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    await createSession(user.id);

    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error: 'An error occurred during registration' };
  }
}

export async function logoutAction() {
  await logout();
  return { success: true };
}
