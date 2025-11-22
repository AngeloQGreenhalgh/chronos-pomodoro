import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

// Tipo do provedor do contexto
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// Componente provedor do contexto
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  // Monitoramento do estado do aplicativo
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if(countDownSeconds <= 0){
      console.log("Worker COMPLETED");
      worker.terminate();
    }
  });

  // Monitora o alteração de um valor de uma variável de estado
  useEffect(() => {
    if(!state.activeTask){
      console.log("Worker terminado por falta de activeTask");
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
