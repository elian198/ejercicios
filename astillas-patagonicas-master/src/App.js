import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import { ProtectedRoute } from './helpers/routes';
import AdminPanel from './pages/AdminPanel';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { getProducts } from './store/slices/products/productsSlice';
import { getAboutUsData } from './store/slices/aboutUs/aboutUsSlice';


const App = () => {

  const user = true;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getAboutUsData());
  }, []);

  return (

    <Router>

      <GlobalStyle />

      <Switch>

        <Route path="/" exact component={Home} />

        <Route path="/login" exact component={Signin} />

        <ProtectedRoute user={user} path="/astillasPanel">
          <AdminPanel />
        </ProtectedRoute>

      </Switch>

    </Router>

  )
}

export default App