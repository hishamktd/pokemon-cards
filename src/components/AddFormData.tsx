'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Any } from '@/types';

export default function AddDataForm() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(e: Any) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: formData.get('title'),
        content: formData.get('content'),
      }),
    });

    if (!response.ok) {
      setError('Failed to add post');
    } else {
      e.target.reset();
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Content</label>
        <textarea name="content" required />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">Add Post</button>
    </form>
  );
}
