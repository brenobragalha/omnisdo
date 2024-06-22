import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

import styles from './Empty.module.css';

export function Empty() {
  return (
    <div className={styles.container}>
      <ClipboardDocumentCheckIcon
        className={styles.clipboardDocumentCheckIcon}
      />
      <p>
        <strong>You don't have any tasks registered yet</strong>
        Create tasks and organize your to-do items
      </p>
    </div>
  );
}
