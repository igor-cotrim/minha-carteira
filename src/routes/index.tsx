
import { BrowserRouter } from 'react-router-dom';


import { useAuth } from '../hooks/useAuth';
import App from './app.routes';
import Auth from './auth.routes';

const Routes = () => {
  const { logged } = useAuth()

  return (
    <BrowserRouter>
      {logged ? <App /> : <Auth />}
    </BrowserRouter>
  );
}

export default Routes;