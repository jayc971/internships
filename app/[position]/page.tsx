'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { getPositionById } from '@/lib/positions';

// Mapping of clean slugs to position IDs
const slugToPositionId: Record<string, string> = {
  'qaintern': 'qa-intern',
  'frontend': 'frontend-intern',
  'backend': 'backend-intern',
  'uiux': 'uiux-intern',
  // Also support the original IDs
  'qa-intern': 'qa-intern',
  'frontend-intern': 'frontend-intern',
  'backend-intern': 'backend-intern',
  'uiux-intern': 'uiux-intern',
};

export function generateStaticParams() {
  return Object.keys(slugToPositionId).map((slug) => ({
    position: slug,
  }));
}

export default function PositionApplyPage({ params }: { params: { position: string } }) {
  const router = useRouter();
  const positionId = slugToPositionId[params.position];

  useEffect(() => {
    if (!positionId) {
      notFound();
      return;
    }

    const position = getPositionById(positionId);

    if (!position) {
      notFound();
      return;
    }

    // Client-side redirect to the apply page with the position parameter
    router.replace(`/apply?position=${positionId}`);
  }, [positionId, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
}
