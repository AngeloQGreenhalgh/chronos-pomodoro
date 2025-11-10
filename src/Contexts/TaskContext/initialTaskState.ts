import type { TaskStateModel } from '../../models/TaskStateModel';

// Estado inicial do contexto
export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaing: 0,
  formatedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 1,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
