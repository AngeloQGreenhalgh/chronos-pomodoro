import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

// Usardo destruturing para pegar os atributos, se trata de usar chaves {}
// para pegar os atributos esperados no componente, sem precisar informar props.atributo
export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda a técnica pomodoro 🍅
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </RouterLink>
    </footer>
  );
}
