import { Container } from '../../componnents/Container';
import { Logo } from '../../componnents/Logo';
import { Menu } from '../../componnents/Menu';
import { Footer } from '../../componnents/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
