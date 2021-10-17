import React from 'react';
import { Layout } from './components/Layout';
import Routes from './routes';

import './normalize.css';


const App = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

export default App;