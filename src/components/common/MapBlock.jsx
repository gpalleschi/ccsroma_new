import { PinIcon, ArrowRightIcon } from './Icons.jsx';
import { ButtonLink } from './ButtonLink.jsx';

export function MapBlock({ addressLines = [], directionsUrl = '#', getDirectionsLabel = 'Ottieni indicazioni', src, alt = 'Mappa' }) {
  const mapImage = src ? (
    <img src={src} alt={alt} className="h-auto w-full" />
  ) : (
    <div className="flex h-[360px] w-full items-center justify-center bg-neutral-200/70" role="img" aria-label={alt}>
      <PinIcon className="h-10 w-10 text-neutral-400" />
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      {mapImage}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <address className="not-italic leading-5 text-neutral-900">
          {addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <ButtonLink href={directionsUrl} variant="secondary" compact>
          {getDirectionsLabel}
          <ArrowRightIcon className="h-4 w-4" />
        </ButtonLink>
      </div>
    </div>
  );
}
