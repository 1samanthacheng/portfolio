export default function Happy({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeWidth="2" d="M9.402 13.5a3 3 0 0 0 5.196 0" />
        <rect
          width="3.25"
          height="2.25"
          x="6.875"
          y="7.875"
          fill="currentColor"
          strokeWidth="0.25"
          rx="1.125"
        />
        <rect
          width="3.25"
          height="2.25"
          x="13.875"
          y="7.875"
          fill="currentColor"
          strokeWidth="0.25"
          rx="1.125"
        />
      </g>
    </svg>
  );
}
