import { FacebookIcon, InstagramIcon, YouTubeIcon } from './Icons.jsx';

export function SocialLinks({ links = [], className = '' }) {
  const icons = {
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    youtube: YouTubeIcon,
  };

  return (
    <div className={`flex items-center justify-center gap-8 ${className}`}>
      {links.map((link) => {
        const Icon = icons[link.id];
        if (!Icon) return null;
        return (
          <a
            key={link.id}
            href={link.url}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 transition-colors hover:text-neutral-700"
          >
            <Icon className="h-8 w-8" />
          </a>
        );
      })}
    </div>
  );
}
