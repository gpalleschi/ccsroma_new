export function TextBlock({ paragraphs = [], boldLast = false, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {paragraphs.map((text, index) => {
        const isBold = boldLast && index === paragraphs.length - 1;
        return (
          <p key={index} className={isBold ? 'font-semibold' : 'font-normal'}>
            {text}
          </p>
        );
      })}
    </div>
  );
}
