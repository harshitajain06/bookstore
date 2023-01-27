import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import Home from './pages/Home';
import Category from './pages/Category';
import store from './redux/configureStore';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}
