import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailabeThemes = 'dark' | 'light';

export function Menu() {
  // No UseState inicializamos o tema com a preferência armazenada no localStorage através
  // de uma função de inicialização para evitar a leitura do localStorage em cada renderização (Laze initialization).
  // Se não houver preferência armazenada, o tema padrão será 'dark'.
  // Assim, o tema escolhido pelo usuário persiste mesmo após recarregar a página.
  const [theme, setTheme] = useState<AvailabeThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailabeThemes) || ' dark';
    return storageTheme;
  });

  // Objeto que mapeia o tema atual para o ícone correspondente (lookup table)
  const nextthemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    // Armazena a preferência do tema no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {
          // Renderiza o ícone com base no tema atual armazenando o estado do tema em um objeto chamado 'lookup Table'
          // Se o tema for 'dark', mostra o ícone do sol (para mudar para claro)
          // Se o tema for 'light', mostra o ícone da lua (para mudar para escuro)
          nextthemeIcon[theme]
        }
      </a>
    </nav>
  );
}
