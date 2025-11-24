import { Bounce, ToastContainer } from 'react-toastify';

type MessagesContainerProps = {
  children: React.ReactNode;
};
// Este componente encapsula as configurações do Toastity para não poulir o componente do APP
export function MessagesContainer({ children }: MessagesContainerProps) {
  return (
    <>
      {children}

      <ToastContainer
        position='top-center'
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
