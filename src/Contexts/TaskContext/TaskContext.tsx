import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

// Definição do tipo do contexto
type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

// Valor inicial do contexto conforme tipagem
const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

// Criação e exportação do contexto
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
