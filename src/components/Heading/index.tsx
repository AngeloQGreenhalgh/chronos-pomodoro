import styles from './styles.module.css';

// Tipagem do tipo de atributos esperados no componente
type HeadingProps = {
  children: React.ReactNode;
};

// Usardo destruturing para pegar os atributos, se trata de usar chaves {}
// para pegar os atributos esperados no componente, sem precisar informar props.atributo
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
