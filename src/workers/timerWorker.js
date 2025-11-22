let isRunning = false;

// Evento de monitoramento de ações de recebimento de mensagens pelo Web Worker
// ou seja, monitora eem backgound qualquer ação disparada no frontend
self.onmessage = function (event) {
  if(isRunning) return;

  isRunning = true;

  const state = event.data;
  const {activeTask , secondsRemaining} = state;
  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();

  let countDownSeconds = Math.ceil((endDate - now) / 1000);

  function tick(){
    self.postMessage(countDownSeconds);

    const now = Date.now();
    countDownSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
