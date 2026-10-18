import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import it from '../../i18n/it.js';
import { ChevronDownIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from '../common/Icons.jsx';
import site from '../../data/site.json';

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const moreRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { label: it.header.nav.home, to: '/' },
    { label: it.header.nav.calendar, to: '/calendario' },
    { label: it.header.nav.give, to: '/dona' },
    { label: it.header.nav.messages, to: '/messaggi' },
    { label: it.header.nav.contacts, to: '/contatti' },
  ];

  const moreLinks = [
    { label: it.header.moreMenu.checkIn, to: '/check-in' },
    { label: it.header.moreMenu.directory, to: '/directory' },
    { label: it.header.moreMenu.events, to: '/eventi' },
    { label: it.header.moreMenu.groups, to: '/gruppi' },
    { label: it.header.moreMenu.kids, to: '/harvest-kids' },
  ];

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const headerHeight = scrolled ? 'h-[68px]' : 'h-[88px] md:h-[136px]';

  return (
    <>
      <a href="#main-content" className="skip-link">
        {it.header.skipToContent}
      </a>

      <header
        className={`sticky top-0 z-50 w-full border-b border-neutral-200 bg-white transition-all duration-200 ${headerHeight}`}
      >
        <div className="mx-auto flex h-full w-full max-w-header items-center justify-between px-6">
          <Link to="/" className="flex items-center" aria-label={it.header.orgName}>
            <img
              src="/logos/logo-black.png"
              alt={it.header.logoAlt}
              className={`object-contain transition-all duration-200 ${
                scrolled ? 'h-[52px]' : 'h-[72px] md:h-[104px]'
              }`}
            />
          </Link>

          <nav className="hidden items-center md:flex" aria-label="Navigazione principale">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 text-[0.9rem] transition-colors ${
                    isActive ? 'font-semibold text-neutral-900' : 'font-normal text-neutral-500 hover:text-neutral-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={moreOpen}
                className="flex items-center gap-1 px-3 py-2 text-[0.9rem] text-neutral-500 transition-colors hover:text-neutral-900"
              >
                {it.header.nav.more}
                <ChevronDownIcon className={`h-3 w-3 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-1 w-56 overflow-hidden rounded-lg border border-neutral-200 bg-white py-1 shadow-lg">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/accedi"
              className={({ isActive }) =>
                `px-3 py-2 text-[0.9rem] transition-colors ${
                  isActive ? 'font-semibold text-neutral-900' : 'font-normal text-neutral-500 hover:text-neutral-900'
                }`
              }
            >
              {it.header.nav.login}
            </NavLink>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={it.header.openMenu}
          >
            <span className="block h-[3px] w-7 rounded bg-neutral-700" />
            <span className="block h-[3px] w-7 rounded bg-neutral-700" />
            <span className="block h-[3px] w-7 rounded bg-neutral-700" />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
            aria-label={it.header.closeMenu}
          />
          <div className="absolute bottom-0 right-0 top-0 flex w-[280px] flex-col border-l border-neutral-200 bg-white shadow-xl">
            <div className="flex h-[88px] items-center justify-between border-b border-neutral-200 px-6">
              <div className="flex items-center gap-2">
                <img src="/logos/logo-black.png" alt={it.header.logoAlt} className="h-10 object-contain" />
                <span className="font-bold text-neutral-900">{it.header.orgName}</span>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={it.header.closeMenu}
                className="text-2xl leading-none text-neutral-700"
              >
                &times;
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4" aria-label="Navigazione principale">
              {[...navLinks, ...moreLinks].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-base ${
                      isActive ? 'bg-neutral-100 font-semibold text-neutral-900' : 'text-neutral-700 hover:bg-neutral-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/accedi"
                className="rounded-lg px-4 py-3 text-base text-neutral-700 hover:bg-neutral-50"
              >
                {it.header.nav.login}
              </NavLink>
            </nav>

            <div className="flex items-center justify-center gap-6 border-t border-neutral-200 py-6">
              {site.social.map((link) => {
                const Icon = socialIcons[link.id];
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
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
