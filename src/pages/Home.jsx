import it from '../i18n/it.js';
import site from '../data/site.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { HeroSection } from '../components/common/HeroSection.jsx';
import { Divider } from '../components/common/Divider.jsx';
import { SocialLinks } from '../components/common/SocialLinks.jsx';
import { ImageBlock } from '../components/common/ImageBlock.jsx';
import { CardGrid } from '../components/common/CardGrid.jsx';
import { ButtonLink } from '../components/common/ButtonLink.jsx';
import { MapBlock } from '../components/common/MapBlock.jsx';

export default function Home() {
  useDocumentTitle(it.meta.title);

  const linkCards = [
    { label: it.home.cards[0].label, to: '/contatti', src: '/images/connect.jpg' },
    { label: it.home.cards[1].label, to: '/richieste-di-preghiera', src: '/images/prayer.jpg' },
    { label: it.home.cards[2].label, to: '/messaggi', src: '/images/messages.jpg' },
    { label: it.home.cards[3].label, to: '/dona', src: '/images/give.jpg' },
  ];

  return (
    <>
      <HeroSection />
      <Divider />

      <div className="page-block py-6">
        <SocialLinks links={site.social} />
      </div>
      <Divider />

      <div className="page-block py-6">
        <ImageBlock src="/images/programma.jpg" alt={it.home.sundayScheduleAlt} />
      </div>
      <Divider />

      <div className="page-block py-6">
        <CardGrid items={linkCards} columnsDesktop={2} columnsMobile={1} />
      </div>
      <Divider />

      <div className="page-block py-6">
        <CardGrid
          items={[{ label: it.home.soulCareAlt, src: '/images/locandina_battesimi.jpg' }, { label: '' }]}
          columnsDesktop={2}
          columnsMobile={2}
        />
      </div>

      <div className="page-block py-6">
        <ImageBlock label={it.home.wednesdayAlt} />
      </div>

      <div className="page-block py-6">
        <CardGrid
          items={[{ label: it.home.youngAdultsAlt, src: '/images/youth.jpg' }, { label: '' }]}
          columnsDesktop={2}
          columnsMobile={2}
        />
      </div>
      <Divider />

      <div className="page-block py-6">
        <p className="text-center font-semibold text-neutral-900">{it.home.serviceTimes}</p>
      </div>

      <div className="page-block py-6">
        <ImageBlock src="/images/womenprayers.jpg" alt={it.home.womenPrayerAlt} />
      </div>
      <Divider />

      <div className="page-block py-6">
        <ImageBlock src="/images/menprayers.jpg" alt={it.home.menPrayerAlt} />
      </div>
      <Divider />

      <div className="page-block py-6 text-center">
        <ButtonLink href="/documents/Preghiera_per_la_Crescita_della_Chiesa.pdf" variant="primary">
          {it.home.growPrayerButton}
        </ButtonLink>
      </div>
      <Divider />

      <div className="page-block py-6">
        <ImageBlock src="/images/godatwork.jpg" alt={it.home.godAtWork.imageAlt} to="/dio-allopera" />
      </div>

      <div className="page-block py-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-neutral-900">{it.home.godAtWork.title}</h2>
          {it.home.godAtWork.paragraphs.map((text, index) => (
            <p key={index} className="text-neutral-800">
              {text}
            </p>
          ))}
          <p className="font-semibold text-neutral-900">{it.home.godAtWork.callToAction}</p>
        </div>
      </div>
      <Divider />

      <div className="page-block py-6">
        <MapBlock
          addressLines={site.org.addressLines}
          directionsUrl={site.org.mapDirectionsUrl}
          getDirectionsLabel={it.home.getDirections}
          src="/images/map.png"
          alt={it.home.mapAlt}
        />
      </div>
    </>
  );
}
