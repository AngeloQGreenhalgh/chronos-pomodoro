import { useEffect, useReducer, useRef } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './taskActions';
import { loadBeep } from '../../utils/loadBeep';
import { TaskStateModel } from '../../models/TaskStateModel';

// Tipo do provedor do contexto
type TaskContextProviderProps = {
  children: React.ReactNode;
};

// Componente provedor do contexto
export function TaskContextProvider({ children }: TaskContextProviderProps) {
  // Monitoramento do estado do aplicativo
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    // Recuperando o registro da task registrada no localstorage e zerando a task
    const storageState = localStorage.getItem('state');

    if (storageState === null) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formatedSecondsRemaining: '00:00',
    };
  });

  // useRef é utilizado aqui para manter uma referência estável à função que toca o beep,
  // sem que ela seja recriada a cada renderização. Isso é importante porque:
  // - Queremos garantir que a função de tocar o áudio persista entre renders.
  // - Precisamos acessar e modificar essa referência dentro de callbacks assíncronos (ex: worker.onmessage).
  // - O valor de playBeepRef.current pode ser atualizado sem disparar uma nova renderização do componente.
  const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(e => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      // Aqui usamos playBeepRef.current para tocar o beep quando o tempo acaba.
      // Após tocar, limpamos a referência para evitar múltiplas execuções.
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }

      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  // Monitora o alteração de um valor de uma variável de estado
  useEffect(() => {
    // Registro do estado atual no localstorage
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }

    // Exibição do contador da tarefa na barra de título da janela
    document.title = `${state.formatedSecondsRemaining} - Chronos Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    // Quando uma nova tarefa é ativada, inicializamos playBeepRef com a função de beep.
    // Se não houver tarefa ativa, limpamos a referência.
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
