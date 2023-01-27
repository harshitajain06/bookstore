import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from '../redux/books/books';

const BookShow = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className=" flex pl-6 border-2 border-solid justify-between">
      <div>
        <h4 className="text-gray-500 pb-2">Action</h4>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h3 className="text-blue-500 pb-4">{author}</h3>
        <h3 className="text-blue-500 pb-4">Comments  | Edit</h3>

      </div>
      <button onClick={() => dispatch(remove(id))} className="bg-blue-500 cursor-pointer mr-20 mt-14 mb-14 text-sm px-2 py-1 text-white font-bold" type="button">REMOVE</button>

    </div>
  );
};

BookShow.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookShow;
