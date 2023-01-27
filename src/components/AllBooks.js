import { useSelector } from 'react-redux';
import BookShow from './BookShow';

const AllBooks = () => {
  const list = useSelector((state) => state.bookshow);
  return (
    <div className="py-10">
      <h2 className="text-4xl font-bold py-4">Books List</h2>
      {list.map((book) => (
        <BookShow title={book.title} author={book.author} key={book.id} id={book.id} />
      ))}
    </div>
  );
};

export default AllBooks;
