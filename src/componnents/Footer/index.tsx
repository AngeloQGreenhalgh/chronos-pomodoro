import styles from './styles.module.css';

// Usardo destruturing para pegar os atributos, se trata de usar chaves {}
// para pegar os atributos esperados no componente, sem precisar informar props.atributo
export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda a técnica pomodoro 🍅</a>
      <a href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </a>
    </footer>
  );
}
