import { redirect, notFound } from 'next/navigation';
import { getPositionById } from '@/lib/positions';

// Mapping of clean slugs to position IDs
const slugToPositionId: Record<string, string> = {
  'interns': 'qa-intern',
  'intern': 'qa-intern',
  'qa': 'qa-intern',
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

export default async function PositionApplyPage({ params }: { params: Promise<{ position: string }> }) {
  const { position } = await params;
  const positionId = slugToPositionId[position];

  if (!positionId) {
    notFound();
  }

  const positionData = getPositionById(positionId);

  if (!positionData) {
    notFound();
  }

  // Server-side redirect to the apply page with the position parameter
  redirect(`/apply?position=${positionId}`);
}
