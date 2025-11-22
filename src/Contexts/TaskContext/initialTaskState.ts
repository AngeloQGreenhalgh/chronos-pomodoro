import type { TaskStateModel } from '../../models/TaskStateModel';

// Estado inicial do contexto
export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaing: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 1,
    shortBreakTime: 1,
    longBreakTime: 1,
  },
};
