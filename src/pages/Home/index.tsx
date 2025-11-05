import { Container } from '../../componnents/Container';
import { CountDown } from '../../componnents/CountDown';
import { MainForm } from '../../componnents/MainForm';
import { MainTemplate } from '../../templates/MainTemplates';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
