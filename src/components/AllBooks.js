import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import BookShow from './BookShow';
import { getAllBooks } from '../redux/books/books';

const AllBooks = () => {
  const list = useSelector((state) => state.bookshow);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold py-4">Books List</h2>
      {list.map((book) => (
        <BookShow title={book.title} author={book.author} key={book.item_id} id={book.item_id} />
      ))}
    </div>
  );
};

export default AllBooks;
