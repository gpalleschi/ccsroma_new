export function PageHeader({ title, description }) {
  return (
    <div className="mx-auto w-full max-w-content px-6 py-10 text-center sm:py-14">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">{title}</h1>
      {description ? <p className="mt-4 text-neutral-600">{description}</p> : null}
    </div>
  );
}
