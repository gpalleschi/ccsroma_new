import it from '../../i18n/it.js';

export function HeroSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-black py-6 sm:py-8">
      <img
        src="/logos/logo-white.png"
        alt={it.header.logoAlt}
        className="mx-auto h-auto w-[38vw] max-w-[560px] sm:w-[24vw] sm:max-w-[380px]"
      />
      <h1 className="mt-2 font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:mt-3 sm:text-6xl">
        {it.home.welcome}
      </h1>
    </div>
  );
}
