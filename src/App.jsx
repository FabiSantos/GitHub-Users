import PrivateRoutes from './Routes/Routes';
import './App.scss'
import Alert from './components/Alert/index';

const App = () => {
  return (
    <div className='app'>
      <PrivateRoutes />
      {/*       <Alert message={"hola"} /> */}
    </div>
  )
}

export default App;
