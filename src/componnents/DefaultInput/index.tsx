import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labeltext: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labeltext,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labeltext} </label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
