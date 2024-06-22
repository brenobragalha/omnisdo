import styles from './style.module.css';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function Input({ ...rest }: Props) {
  return (
    <input
      className={styles.container}
      placeholder="Add a new task"
      {...rest}
    />
  );
}
