import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';
import type { TaskActionModel } from './taskActions';

// Definição do tipo do contexto
type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

// Valor inicial do contexto conforme tipagem
const initialContextValue = {
  state: initialTaskState,
  dispatch: () => {},
};

// Criação e exportação do contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
