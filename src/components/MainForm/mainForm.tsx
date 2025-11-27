import { useRef } from 'react';

export function MainForm() {
  const setName = useRef<HTMLInputElement>(null);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} action=''>
      <input type='text' ref={setName} />
      <button type='submit'>Enviar</button>
    </form>
  );
}
