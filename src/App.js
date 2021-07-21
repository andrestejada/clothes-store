import { useDispatch } from 'react-redux';
import { popularProducts } from './actions/productsAction';
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss'


function App() {
  const dispatch = useDispatch()
  dispatch( popularProducts() )
  return (
    <>
      <AppRouter/>
    </>
  );
}

export default App;
