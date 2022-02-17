
import { Routes, Route } from 'react-router-dom';

import Layout from '../components/layout';
import Dashboard from '../pages/dashboard';
import List from '../pages/list';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/lista/:type" element={<List />} />
    </Routes>
  </Layout>
);

export default AppRoutes;