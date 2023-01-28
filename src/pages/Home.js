import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import AllBooks from '../components/AllBooks';
import { add } from '../redux/books/books';

const Home = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});

  const addBook = (e) => {
    e.preventDefault();
    dispatch(add(book));
    e.target.title.value = '';
    e.target.author.value = '';
  };

  return (
    <div>
      <h2 className="pt-20 pl-10 pr-10"><AllBooks /></h2>
      <div className="ml-20 mt-20 pl-6 mr-20 pb-4 pt-4 border-2 border-solid shadow-xl">
        <h1 className=" text-2xl font-semibold text-gray-600">ADD NEW BOOK</h1>
        <form onSubmit={addBook} className="flex justify-between gap-2 mt-8">
          <input
            className="border-2 border-solid p-2 w-80 text-black"
            type="text"
            placeholder="Book Title"
            onChange={(e) => setBook({
              ...book, title: e.target.value, item_id: uuid(), category: 'Fiction',
            })}
            required
          />
          <input className="border-2 border-solid p-2 w-80 text-black" type="text" placeholder="Book Author" onChange={(e) => setBook({ ...book, author: e.target.value })} required />
          <input className="bg-blue-500 p-2 mr-10 cursor-pointer text-white font-bold w-40" type="submit" value="ADD BOOK" />
        </form>
      </div>
      <br />
      <br />
    </div>
  );
};
export default Home;
