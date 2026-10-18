import { useState } from 'react';
import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';

const presetAmounts = ['10', '25', '50', '100'];

export default function Giving() {
  useDocumentTitle(`${it.giving.title} | ${it.meta.title}`);
  const [recurring, setRecurring] = useState(false);
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const value = parseFloat(amount);
    if (!amount || Number.isNaN(value) || value <= 0) {
      nextErrors.amount = it.forms.validation.required;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = it.forms.validation.email;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <PageHeader title={it.giving.title} description={it.giving.intro} />
      <Divider />

      <div className="mx-auto w-full max-w-content px-6 py-8">
        {submitted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center" role="status">
            <p className="font-semibold text-green-800">{it.forms.success}</p>
            <p className="mt-2 text-sm text-green-700">
              {it.giving.title} · €{amount}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            <div className="flex rounded-lg border border-neutral-200 p-1">
              {[false, true].map((value) => (
                <button
                  key={String(value)}
                  type="button"
                  onClick={() => setRecurring(value)}
                  aria-pressed={recurring === value}
                  className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    recurring === value ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {value ? it.giving.recurring : it.giving.oneTime}
                </button>
              ))}
            </div>

            <div>
              <label htmlFor="giving-amount" className="mb-2 block text-sm font-medium text-neutral-700">
                {it.giving.amount}
              </label>
              <div className="mb-2 flex flex-wrap gap-2">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setAmount(preset);
                      setErrors((prev) => ({ ...prev, amount: undefined }));
                    }}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                      amount === preset ? 'bg-brand text-neutral-900' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    €{preset}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">€</span>
                <input
                  id="giving-amount"
                  type="number"
                  inputMode="decimal"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  placeholder={it.giving.other}
                  aria-invalid={Boolean(errors.amount)}
                  className="w-full rounded-lg border border-neutral-300 py-2 pl-7 pr-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
              {errors.amount ? (
                <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="giving-email" className="mb-2 block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                id="giving-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-invalid={Boolean(errors.email)}
                className="w-full rounded-lg border border-neutral-300 py-2 px-3 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
              />
              {errors.email ? (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              {it.giving.giveButton}
            </button>
          </form>
        )}
      </div>
    </>
  );
}
