import it from '../../i18n/it.js';
import site from '../../data/site.json';
import { MailIcon, PhoneIcon } from '../common/Icons.jsx';

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-neutral-200 bg-[#FAFAFA]">
      <div className="mx-auto flex w-full max-w-header flex-col gap-6 px-6 py-8 sm:flex-row sm:items-start sm:justify-between">
        <ul className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <li>
            <a href={it.footer.termsUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900">
              {it.footer.terms}
            </a>
          </li>
          <li>
            <a href={it.footer.privacyUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-900">
              {it.footer.privacy}
            </a>
          </li>
        </ul>

        <ul className="flex flex-col gap-2 text-sm">
          <li className="font-medium text-neutral-900">{site.org.name}</li>
          <li>
            <a href={`mailto:${site.org.email}`} className="flex items-center gap-2 font-normal text-neutral-500 hover:text-neutral-900">
              <MailIcon className="h-4 w-4" />
              {site.org.email}
            </a>
          </li>
          <li>
            <a href={site.org.phoneHref} className="flex items-center gap-2 font-normal text-neutral-500 hover:text-neutral-900">
              <PhoneIcon className="h-4 w-4" />
              {site.org.phone}
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-neutral-200">
        <div className="mx-auto w-full max-w-header px-6 py-4">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} {site.org.name}. {it.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
