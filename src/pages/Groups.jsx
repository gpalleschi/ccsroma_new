import it from '../i18n/it.js';
import groups from '../data/groups.json';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { PageHeader } from '../components/common/PageHeader.jsx';
import { Divider } from '../components/common/Divider.jsx';
import { EmptyState } from '../components/common/EmptyState.jsx';

export default function Groups() {
  useDocumentTitle(`${it.groups.title} | ${it.meta.title}`);

  return (
    <>
      <PageHeader title={it.groups.title} />
      <Divider />
      {groups.length === 0 ? <EmptyState message={it.groups.empty} /> : null}
    </>
  );
}
