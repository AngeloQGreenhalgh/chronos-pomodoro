// Evento de monitoramento de ações de recebimento de mensagens pelo Web Worker
// ou seja, monitora eem backgound qualquer ação disparada no frontend
self.onmessage = function (event) {
  console.log('WORKER recebeu:', event.data);

  // Enviando mensagem de dentro do Web Worker para a aplicação
  switch (event.data) {
    case 'FAVOR': {
      self.postMessage('Sim, posso fazer um favor');
      break;
    }
    case 'FALA_OI': {
      self.postMessage('OK: OI!');
      break;
    }
    case 'FECHAR': {
      self.postMessage('Tá bom, vou fechar');
      // encerrando o worker a partir do web worker
      self.close();
      break;
    }
    default:
      self.postMessage('Não entendi');
  }
};
