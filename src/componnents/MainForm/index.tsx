import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
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
  );
}
