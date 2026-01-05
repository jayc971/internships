interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 40, height = 40 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="20" cy="20" r="20" fill="#0066CC" />

      {/* Letter "I" */}
      <rect x="10" y="12" width="3" height="16" fill="white" rx="1.5" />

      {/* Letter "L" */}
      <rect x="15" y="12" width="3" height="16" fill="white" rx="1.5" />
      <rect x="15" y="25" width="8" height="3" fill="white" rx="1.5" />

      {/* Sri Lanka flag colors accent - small dots */}
      <circle cx="27" cy="14" r="2" fill="#FFB81C" />
      <circle cx="27" cy="20" r="2" fill="#E03C31" />
      <circle cx="27" cy="26" r="2" fill="#00A651" />
    </svg>
  );
}
