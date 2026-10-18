import { Link } from 'react-router-dom';
import { PlaceholderImage } from './PlaceholderImage.jsx';

export function ImageBlock({ alt = '', label = '', src, to, href, ratio = '16 / 9', className = '' }) {
  const image = src ? (
    <img src={src} alt={alt || label || ''} loading="lazy" className={`h-auto w-full ${className}`} />
  ) : (
    <PlaceholderImage label={label} ratio={ratio} className={className} />
  );

  if (to) {
    return (
      <Link to={to} className="block" aria-label={alt || label || undefined}>
        {image}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block" aria-label={alt || undefined}>
        {image}
      </a>
    );
  }

  return image;
}
