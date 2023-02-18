import { Provider } from 'react-redux';
import Header from './components/Header';
import MainRoutes from './routes/MainRoutes';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <MainRoutes/>
    </Provider>
  );
}

export default App;
