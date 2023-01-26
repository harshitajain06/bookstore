import { Link } from 'react-router-dom';

const Nav = () => (

  <div className="px-4 py-2">

    <nav className="text-center flex items-center">
      <h1 className="text-4xl text-blue-500 font-extrabold">Book Store CMS</h1>
      <div className="text-lg flex gap-20 ml-40">
        <Link to="/">BOOKS</Link>
        <Link to="/category">CATEGORIES</Link>
      </div>
    </nav>

  </div>
);
export default Nav;
