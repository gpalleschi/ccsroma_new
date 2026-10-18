import { useState } from 'react';
import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';

export default function Login() {
  useDocumentTitle(`${it.login.title} | ${it.meta.title}`);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (!email) nextErrors.email = it.forms.validation.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = it.forms.validation.email;
    if (!password) nextErrors.password = it.forms.validation.required;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  return (
    <>
      <PageHeader title={it.login.title} description={it.login.description} />
      <Divider />

      <div className="mx-auto w-full max-w-content px-6 py-8">
        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center" role="status">
            <p className="font-semibold text-green-800">{it.forms.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mx-auto flex max-w-sm flex-col gap-4">
            <div>
              <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                className="w-full rounded-lg border border-neutral-300 py-2 px-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
              />
              {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-neutral-700">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                aria-invalid={Boolean(errors.password)}
                className="w-full rounded-lg border border-neutral-300 py-2 px-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
              />
              {errors.password ? <p className="mt-1 text-sm text-red-600">{errors.password}</p> : null}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              {it.login.title}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
