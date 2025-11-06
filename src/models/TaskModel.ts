import type { TaskStateModel } from './TaskStateModel';

export type TaskModel = {
  id: string;
  name: string;
  duration: number; // duração em minutos
  startDate: number; // timestamp
  completedDate: number | null; // quamdo a data for finalizado
  interruptedDate: number | null; // quando a data for interrompida
  type: keyof TaskStateModel['config']; // 'workTime' | 'shortBreakTime' | 'longBreakTime'
};
