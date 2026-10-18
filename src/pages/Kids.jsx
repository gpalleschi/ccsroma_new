import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';
import { CardGrid } from '../components/common/CardGrid.jsx';

export default function Kids() {
  useDocumentTitle(`${it.kids.title} | ${it.meta.title}`);

  return (
    <>
      <PageHeader title={it.kids.title} description={it.kids.description} />
      <Divider />
      <div className="page-block py-8">
        <CardGrid
          items={[
            { label: 'Bambini', href: '#' },
            { label: 'Famiglie', href: '#' },
          ]}
          columnsDesktop={2}
          columnsMobile={1}
        />
      </div>
    </>
  );
}
