import it from '../i18n/it.js';
import data from '../data/messages.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';
import { ButtonLink } from '../components/common/ButtonLink.jsx';

export default function Messages() {
  useDocumentTitle(`${it.messages.title} | ${it.meta.title}`);

  return (
    <>
      <PageHeader title={it.messages.title} description={it.messages.pastMessagesDescription} />
      <Divider />

      <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-6 py-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">{it.messages.pastMessages}</h2>
          <ButtonLink href={data.youtubeChannel} variant="secondary">
            {it.messages.watchButton}
          </ButtonLink>
        </div>

        <ul className="flex flex-col divide-y divide-neutral-200">
          {data.messages.map((message) => (
            <li key={message.id} className="flex items-center gap-4 py-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand text-neutral-900">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14Z" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col">
                <span className="font-medium text-neutral-900">{message.title}</span>
                <span className="text-sm text-neutral-500">
                  {message.speaker} · {new Date(message.date).toLocaleDateString('it-IT')} · {message.duration}
                </span>
              </div>
              <a href={message.url} className="text-sm font-medium text-brand-dark hover:underline" aria-label={message.title}>
                Ascolta
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
