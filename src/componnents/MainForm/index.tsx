import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../Contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
//import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  // Calcula o próximo ciclo com base no ciclo atual
  const nextCycle = getNextCycle(state.currentCycle);

  // Obtém o tipo do próximo ciclo
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Se o preenchimento do input for nulo, retorna e não faz nada
    if (taskNameInput.current === null) return;

    const taskNameInputValue = taskNameInput.current.value.trim();

    // Se o valor do input for vazio, alerta o usuário e retorna
    if (!taskNameInputValue) {
      alert('Digite o nome da tarefa.');
      return;
    }

    // Cria uma nova tarefa com os valores fornecidos
    const newTask: TaskModel = {
      id: Date.now().toString(), // Gera um ID único baseado no timestamp atual
      name: taskNameInputValue,
      startDate: Date.now(),
      completedDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRown'>
        <DefaultInput
          id='meuInput'
          type='text'
          labeltext='task'
          placeholder='Digite algo'
          ref={taskNameInput}
          disabled={!!state.activeTask}
        />
      </div>
      <div className='formRown'>
        <Tips />
      </div>
      {/*Controla a reenderização de um elemtno na tela */}
      {state.currentCycle > 0 && (
        <div className='formRown'>
          <Cycles />
        </div>
      )}
      <div className='formRown'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            type='submit'
            icon={<PlayCircleIcon />}
            color='green'
            key='Criar uma nova tarefa'
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            type='button'
            icon={<StopCircleIcon />}
            color='red'
            onClick={handleInterruptTask}
            key='Interromper tarefa atual'
          />
        )}
      </div>
    </form>
  );
}
