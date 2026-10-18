import { useState } from 'react';
import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';

export default function PrayerRequests() {
  useDocumentTitle(`${it.prayer.title} | ${it.meta.title}`);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    request: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!form.firstName.trim()) nextErrors.firstName = it.forms.validation.required;
    if (!form.lastName.trim()) nextErrors.lastName = it.forms.validation.required;
    if (!form.email.trim()) nextErrors.email = it.forms.validation.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = it.forms.validation.email;
    if (!form.request.trim()) nextErrors.request = it.forms.validation.required;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-lg border border-neutral-300 py-2 px-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand';

  return (
    <>
      <PageHeader title={it.prayer.title} description={it.prayer.description} />
      <Divider />

      <div className="mx-auto w-full max-w-content px-6 py-8">
        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center" role="status">
            <p className="font-semibold text-green-800">{it.forms.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="prayer-first-name" className="mb-2 block text-sm font-medium text-neutral-700">
                  {it.prayer.firstName}
                </label>
                <input
                  id="prayer-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.firstName)}
                  className={inputClass}
                />
                {errors.firstName ? <p className="mt-1 text-sm text-red-600">{errors.firstName}</p> : null}
              </div>

              <div>
                <label htmlFor="prayer-last-name" className="mb-2 block text-sm font-medium text-neutral-700">
                  {it.prayer.lastName}
                </label>
                <input
                  id="prayer-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.lastName)}
                  className={inputClass}
                />
                {errors.lastName ? <p className="mt-1 text-sm text-red-600">{errors.lastName}</p> : null}
              </div>
            </div>

            <div>
              <label htmlFor="prayer-email" className="mb-2 block text-sm font-medium text-neutral-700">
                {it.prayer.email}
              </label>
              <input
                id="prayer-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                className={inputClass}
              />
              {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="prayer-request" className="mb-2 block text-sm font-medium text-neutral-700">
                {it.prayer.request}
              </label>
              <textarea
                id="prayer-request"
                name="request"
                rows={5}
                value={form.request}
                onChange={handleChange}
                placeholder={it.prayer.requestPlaceholder}
                aria-invalid={Boolean(errors.request)}
                className={inputClass}
              />
              {errors.request ? <p className="mt-1 text-sm text-red-600">{errors.request}</p> : null}
            </div>

            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              {it.forms.submit}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
