'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi';

interface RemoveBtnProps {
  id: string;
}

export default function RemoveBtn({ id }: RemoveBtnProps) {
  const router = useRouter();

  async function removeTopic() {
    const confirmed = confirm(`Are you sure to delete the topic of ${id}? `);
    if (confirmed) {
      const res = await fetch(`/api/topics?id=${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
