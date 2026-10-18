import { useMemo, useState } from 'react';
import it from '../i18n/it.js';
import events from '../data/events.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';
import { EmptyState } from '../components/common/EmptyState.jsx';

const DAY_ORDER = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];

function groupByDay(list) {
  const grouped = DAY_ORDER.map((day) => ({
    day,
    events: list.filter((event) => event.day === day),
  }));
  return grouped.filter((group) => group.events.length > 0);
}

function MonthGrid() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const cells = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const result = [];
    for (let i = 0; i < firstDay; i++) result.push(null);
    for (let d = 1; d <= daysInMonth; d++) result.push(d);
    return result;
  }, [year, month]);

  const monthName = new Date(year, month).toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });

  return (
    <div className="mx-auto w-full max-w-content px-6">
      <h2 className="mb-4 text-lg font-semibold capitalize text-neutral-900">{monthName}</h2>
      <div className="grid grid-cols-7 gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200">
        {DAY_ORDER.map((day) => (
          <div key={day} className="bg-white px-1 py-2 text-center text-xs font-semibold text-neutral-500">
            {day.slice(0, 3)}
          </div>
        ))}
        {cells.map((day, index) => {
          const isToday = day === today.getDate();
          return (
            <div
              key={index}
              className={`flex min-h-[48px] items-center justify-center bg-white text-sm ${
                isToday ? 'font-bold text-brand-dark' : 'text-neutral-700'
              }`}
            >
              {day ?? ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Calendar() {
  useDocumentTitle(`${it.calendar.title} | ${it.meta.title}`);
  const [view, setView] = useState('list');

  const grouped = groupByDay(events);

  return (
    <>
      <PageHeader title={it.calendar.title} />

      <div className="mx-auto flex w-full max-w-content items-center justify-center gap-2 px-6">
        {[
          { key: 'list', label: it.calendar.list },
          { key: 'month', label: it.calendar.month },
        ].map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => setView(option.key)}
            aria-pressed={view === option.key}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              view === option.key ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <Divider />

      {view === 'list' ? (
        <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-6 py-8">
          {grouped.length === 0 ? (
            <EmptyState message={it.calendar.noEvents} />
          ) : (
            grouped.map((group) => (
              <div key={group.day}>
                <h3 className="mb-2 font-semibold text-neutral-900">{group.day}</h3>
                <ul className="flex flex-col divide-y divide-neutral-200">
                  {group.events.map((event) => (
                    <li key={event.id} className="flex gap-4 py-3">
                      <span className="w-24 shrink-0 text-neutral-500">
                        {event.startTime} – {event.endTime}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-medium text-neutral-900">{event.title}</span>
                        <span className="text-sm text-neutral-500">{event.location}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="py-8">
          <MonthGrid />
          {grouped.length > 0 && (
            <div className="mx-auto mt-8 w-full max-w-content px-6">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                {it.calendar.month}
              </h3>
              <ul className="flex flex-col divide-y divide-neutral-200">
                {events.map((event) => (
                  <li key={event.id} className="flex gap-4 py-3">
                    <span className="w-24 shrink-0 font-medium text-neutral-700">{event.day}</span>
                    <div className="flex flex-col">
                      <span className="font-medium text-neutral-900">{event.title}</span>
                      <span className="text-sm text-neutral-500">
                        {event.startTime} – {event.endTime}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}
