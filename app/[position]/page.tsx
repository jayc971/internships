'use client';

import { notFound, redirect } from 'next/navigation';
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

export default function PositionApplyPage({ params }: { params: { position: string } }) {
  const positionId = slugToPositionId[params.position];

  if (!positionId) {
    notFound();
  }

  const position = getPositionById(positionId);

  if (!position) {
    notFound();
  }

  // Redirect to the apply page with the position parameter
  redirect(`/apply?position=${positionId}`);
}
