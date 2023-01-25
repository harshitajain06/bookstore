import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Nav from './components/Nav';
import Home from './pages/Home';
import Category from './pages/Category';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>

    );
  }
}
