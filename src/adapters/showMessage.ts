import { toast } from 'react-toastify';

// Este Adaptar foi utilizado para isolar a a implementação do Toastify,
// isolando a implementação principal do Toastify, prevendo futuras mudanças
// e centralizando todas as mudanças do Toastify no mesmo local
export const showMessage = {
  success: (msg: string) => toast.success(msg),
  error: (msg: string) => toast.error(msg),
  warn: (msg: string) => toast.warn(msg),
  warning: (msg: string) => toast.warning(msg),
  info: (msg: string) => toast.info(msg),
  dismiss: () => toast.dismiss(),
};
