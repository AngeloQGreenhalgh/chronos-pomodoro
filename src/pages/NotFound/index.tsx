import { Container } from '../../componnents/Container';
import { MainTemplate } from '../../templates/MainTemplates';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          provident repellendus accusamus impedit iure ullam, ex, a, obcaecati
          accusantium voluptatibus magnam inventore eius non quas fugit
          doloremque quod at. Accusamus?
        </p>
      </Container>
    </MainTemplate>
  );
}
