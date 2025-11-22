import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaining: number;
  formatedSecondsRemaining: string;
  activeTask: TaskModel | null;
  currentCycle: number; // 1 à 8
  config: {
    workTime: number; // em minutos
    shortBreakTime: number; // em minutos
    longBreakTime: number; // em minutos
  };
};
