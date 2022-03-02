
import { Routes, Route } from 'react-router-dom';

import SignIn from '../pages/sign-in';

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
  </Routes>
);

export default AuthRoutes;