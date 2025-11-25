import { TaskContextProvider } from './Contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routers/MainRouter';
import { MessagesContainer } from './components/MessagesContainer';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
