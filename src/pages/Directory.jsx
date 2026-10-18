import it from '../i18n/it.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';

export default function Directory() {
  useDocumentTitle(`${it.directory.title} | ${it.meta.title}`);
  return <PageHeader title={it.directory.title} description={it.directory.description} />;
}
