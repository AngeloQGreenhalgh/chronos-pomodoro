import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { initialTaskState } from './initialTaskState';
import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;

      // Calcula o próximo ciclo com base no ciclo atual
      const nextCycle = getNextCycle(state.currentCycle);

      // Calcula os segundos restantes com base na duração da tarefa
      const secondsRemaining = newTask.duration * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
        //  Atualiza a tarefa interrompida na lista de tarefas percorrendo as tasks
        //  através de Map (Loop), localizando a task ativa e a task que tem o mesmo
        //  ID da Task ativa, caso encontrada, altera o parametro 'interruptedDate'
        //  registrando o time stamp a data atual
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask?.id === task.id) {
            return {
              ...task,
              interruptedDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formatedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask?.id === task.id) {
            return {
              ...task,
              completedDate: Date.now(),
            };
          }
          return task;
        }),
      };
    }

    case TaskActionTypes.RESET_STATE: {
      return { ...initialTaskState };
    }

    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formatedSecondsRemaining: formatSecondsToMinutes(
          action.payload.secondsRemaining,
        ),
      };
    }
  }
  // Sempre deve retornar o estado
  return state;
}
