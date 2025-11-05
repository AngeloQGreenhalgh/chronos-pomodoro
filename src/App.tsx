import './styles/theme.css';
import './styles/global.css';

import { Container } from './componnents/Container';
import { Logo } from './componnents/Logo';
import { Menu } from './componnents/Menu';
import { CountDown } from './componnents/CountDown';
import { DefaultInput } from './componnents/DefaultInput';
import { Cycles } from './componnents/Cycles';
import { DefaultButton } from './componnents/DefaultButton';
import { Footer } from './componnents/Footer';
import { PlayCircleIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRown'>
            <DefaultInput
              id='meuInput'
              type='text'
              labeltext='task'
              placeholder='Digite algo'
            />
          </div>
          <div className='formRown'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRown'>
            <Cycles />
          </div>
          <div className='formRown'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
