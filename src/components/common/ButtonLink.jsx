import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
};

/**
 * Render a button-looking link.
 * - `to` for internal React Router links
 * - `href` for external links (opened in a new tab)
 */
export function ButtonLink({ to, href, variant = 'primary', compact = false, children, className = '', ...rest }) {
  const classes = `btn ${variantClasses[variant] || variantClasses.primary} ${compact ? 'btn-compact' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href || '#'} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
