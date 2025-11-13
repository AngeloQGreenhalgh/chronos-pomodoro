import { useEffect, useState } from 'react';
import { initialTaskState } from './InitialTaskState';
import { TaskContext } from './TaskContext';

// Tipo do provedor do contexto
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// Componente provedor do contexto
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  // Monitoramento do estado do aplicativo
  const [state, setState] = useState(initialTaskState);

  // Monitora o alteração de um valor de uma variável de estado
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, setState }}>
      {children}
    </TaskContext.Provider>
  );
}
