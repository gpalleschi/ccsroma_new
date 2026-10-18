import { ImageIcon } from './Icons.jsx';

export function PlaceholderImage({ label = '', ratio = '16 / 9', className = '' }) {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={label || 'Immagine segnaposto'}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <ImageIcon className="h-8 w-8 text-neutral-400" />
        {label ? <span className="text-sm font-medium text-neutral-500">{label}</span> : null}
      </div>
    </div>
  );
}
