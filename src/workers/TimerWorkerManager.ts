/* Este método é do tipo "Singleton", ou seja, a classe não pode ser instanciada,
   o construtor é privado, o método 'getInstance()' é um método estático, e o único
   que pode criar uma instância da classe, quando essa não existir, os demais 
   métodos são para controle.*/

import type { TaskStateModel } from "../models/TaskStateModel";

let instance : TimerWorkerManager | null = null;

export class TimerWorkerManager{
  private worker : Worker;

  private constructor(){
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url))
  }

  static getInstance() {

    if(!instance){
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  postMessage(message: TaskStateModel){
    this.worker.postMessage(message);
  }

  onmessage(cb: (e:MessageEvent) => void){
    this.worker.onmessage = cb;
  }

  terminate(){
    this.worker.terminate();
    instance = null;
  }
}