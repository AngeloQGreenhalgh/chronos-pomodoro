import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

// Usardo destruturing para pegar os atributos, se trata de usar chaves {}
// para pegar os atributos esperados no componente, sem precisar informar props.atributo
export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logoLink} href='/'>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}
