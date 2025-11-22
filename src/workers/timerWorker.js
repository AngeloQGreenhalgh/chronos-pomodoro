let isRunnung = false;

// Evento de monitoramento de ações de recebimento de mensagens pelo Web Worker
// ou seja, monitora eem backgound qualquer ação disparada no frontend
self.onmessage = function (event) {
  if(isRunnung) return;

  isRunnung = true;

  const state = event.data;
  const {activeTask , secondsRemaing} = state;
  const endDate = activeTask.startDate + secondsRemaing * 1000;
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
