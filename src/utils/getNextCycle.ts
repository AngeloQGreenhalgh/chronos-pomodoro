export function getNextCycle(currentCycle: number) {
  // Retorna as etapas do ciclo de trabalho, caso seja 0 ou 8, reinicia para 1
  return currentCycle === 0 || currentCycle === 8 ? 1 : currentCycle + 1;
}
