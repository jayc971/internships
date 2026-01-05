import Link from 'next/link';
import { Position } from '@/lib/types';

interface PositionCardProps {
  position: Position;
}

// Convert position ID to clean slug
function getPositionSlug(positionId: string): string {
  const slugMap: Record<string, string> = {
    'qa-intern': 'qaintern',
    'frontend-intern': 'frontend',
    'backend-intern': 'backend',
    'uiux-intern': 'uiux',
  };
  return slugMap[positionId] || positionId;
}

export default function PositionCard({ position }: PositionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <h3 className="text-xl font-semibold text-text mb-3">{position.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{position.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-medium text-text mb-2">You&apos;ll learn:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {position.learningOutcomes.slice(0, 2).map((outcome, index) => (
            <li key={index} className="flex items-start">
              <span className="text-success mr-2">•</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/${getPositionSlug(position.id)}`}
        className="inline-block w-full text-center bg-primary hover:bg-secondary text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200"
      >
        Apply Now
      </Link>
    </div>
  );
}
