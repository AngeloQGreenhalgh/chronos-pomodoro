import styles from './styles.module.css';

// Usardo destruturing para pegar os atributos, se trata de usar chaves {}
// para pegar os atributos esperados no componente, sem precisar informar props.atributo
export function CountDown() {
  return <div className={styles.container}>00:00</div>;
}
