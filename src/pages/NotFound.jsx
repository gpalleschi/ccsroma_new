import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { ButtonLink } from '../components/common/ButtonLink.jsx';

export default function NotFound() {
  useDocumentTitle(`${it.notFound.title} | ${it.meta.title}`);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-5xl font-bold text-brand-dark">404</p>
      <h1 className="mt-4 text-2xl font-bold text-neutral-900">{it.notFound.title}</h1>
      <p className="mt-2 text-neutral-600">{it.notFound.description}</p>
      <div className="mt-6">
        <ButtonLink to="/" variant="primary">
          {it.common.backHome}
        </ButtonLink>
      </div>
    </div>
  );
}
