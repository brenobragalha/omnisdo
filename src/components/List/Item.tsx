import { ITask } from '../../App';

import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';

import styles from './Item.module.css';

interface Props {
  data: ITask;
  removeTask: (id: string) => void;
  toggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleRemove() {
    removeTask(data.id);
  }

  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  const checkboxCheckedClassName = data.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked'];
  const paragraphCheckedClassName = data.isChecked
    ? styles['paragraph-checked']
    : '';

  return (
    <div className={styles.container}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <div>
          <input
            className={styles.checkBoxInput}
            readOnly
            type="checkbox"
            checked={data.isChecked}
          />
          <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
            {data.isChecked && <CheckIcon className={styles.checkIcon} />}
          </span>
        </div>

        <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
          {data.text}
        </p>
      </label>

      <button onClick={handleRemove}>
        <TrashIcon className={styles.trashIcon} />
      </button>
    </div>
  );
}
