// Esta função é usada para incorporara arquivo de áudio,
// como o arquivo de áudio não pode ser associado diretamente as ações
// criamos uma função de controle que executa o disparo de um arquivo de áudio específico
import gravitationalBeep from '../assets/audios/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log(`Esso ao tocar áudio: ${error}`));
  };
}
