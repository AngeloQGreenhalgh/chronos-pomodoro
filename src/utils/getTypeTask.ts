export function getTypeTask(type: string) {
  const taskTypeDictionary: Record<string, string> = {
    workTime: 'Foco',
    shortBreakTime: 'Descanso curto',
    longBreakTime: 'Descanso Longo',
  };
  return taskTypeDictionary[type];
}
