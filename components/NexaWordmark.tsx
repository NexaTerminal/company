type Size = 'sm' | 'md' | 'lg';

export default function NexaWordmark({ size = 'md', className = '' }: { size?: Size; className?: string }) {
  const sizeClass: Record<Size, string> = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <span
      className={`font-bold lowercase tracking-tight text-[#1E4DB7] leading-none select-none ${sizeClass[size]} ${className}`}
      aria-label="Nexa"
    >
      nexa
    </span>
  );
}
