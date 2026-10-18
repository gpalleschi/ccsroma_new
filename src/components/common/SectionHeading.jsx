export function SectionHeading({ children, level = 2 }) {
  const Tag = `h${level}`;
  return (
    <Tag className="text-center text-2xl font-semibold leading-8 text-neutral-900 sm:text-3xl lg:text-4xl">
      {children}
    </Tag>
  );
}
