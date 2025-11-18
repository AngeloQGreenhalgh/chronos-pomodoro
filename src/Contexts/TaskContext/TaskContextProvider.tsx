import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';

// Tipo do provedor do contexto
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// Componente provedor do contexto
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  // Monitoramento do estado do aplicativo
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  // Monitora o alteração de um valor de uma variável de estado
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
