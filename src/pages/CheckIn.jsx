import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';

export default function CheckIn() {
  useDocumentTitle(`${it.checkIn.title} | ${it.meta.title}`);
  return <PageHeader title={it.checkIn.title} description={it.checkIn.description} />;
}
