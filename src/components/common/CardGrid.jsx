import { Link } from 'react-router-dom';
import { PlaceholderImage } from './PlaceholderImage.jsx';

export function CardGrid({ items = [], columnsDesktop = 2, columnsMobile = 1 }) {
  const desktopClass =
    columnsDesktop === 3 ? 'lg:grid-cols-3' : columnsDesktop === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-1';
  const mobileClass = columnsMobile === 2 ? 'grid-cols-2' : 'grid-cols-1';

  return (
    <div className={`grid ${mobileClass} ${desktopClass} gap-4`}>
      {items.map((item, index) => {
        const image = item.src ? (
          <img src={item.src} alt={item.alt || item.label || ''} loading="lazy" className="h-auto w-full" />
        ) : (
          <PlaceholderImage label={item.label} ratio={item.ratio || '16 / 9'} />
        );
        const wrapClass = 'block overflow-hidden rounded-lg transition-opacity hover:opacity-90';
        const ariaLabel = item.label || item.alt || undefined;

        let content = image;
        if (item.to) {
          content = (
            <Link to={item.to} className={wrapClass} aria-label={ariaLabel}>
              {image}
            </Link>
          );
        } else if (item.href) {
          content = (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className={wrapClass} aria-label={ariaLabel}>
              {image}
            </a>
          );
        }

        return (
          <div key={index} className="flex flex-col gap-3">
            {content}
          </div>
        );
      })}
    </div>
  );
}
