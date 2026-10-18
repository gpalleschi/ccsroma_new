import it from '../i18n/it.js';
import events from '../data/events.json';
import site from '../data/site.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';
import { ButtonLink } from '../components/common/ButtonLink.jsx';
import { EmptyState } from '../components/common/EmptyState.jsx';

export default function Events() {
  useDocumentTitle(`${it.events.title} | ${it.meta.title}`);

  return (
    <>
      <PageHeader title={it.events.title} />
      <Divider />

      {events.length === 0 ? (
        <EmptyState message={it.events.noEvents} />
      ) : (
        <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-4 px-6 py-8 sm:grid-cols-2">
          {events.map((event) => (
            <article key={event.id} className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-brand-dark">{event.day}</span>
                <h3 className="text-lg font-semibold text-neutral-900">{event.title}</h3>
              </div>
              <p className="text-sm text-neutral-500">
                {event.startTime} – {event.endTime}
              </p>
              <p className="flex-1 text-sm text-neutral-600">{event.description}</p>
              <p className="text-sm text-neutral-500">{event.location}</p>
              <ButtonLink href={site.external.eventRegistration} variant="secondary" compact>
                {it.events.registerButton}
              </ButtonLink>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
