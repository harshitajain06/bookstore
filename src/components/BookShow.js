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
        <div className="flex">
          <h3 className="text-blue-500 pb-4">Comments  | Edit |</h3>
          <button onClick={() => dispatch(remove(id))} className="text-blue-500 pb-4 ml-2 cursor-pointer" type="button">Remove</button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <div className="animate-spin rounded-full h-14 w-14 transform-origin-center bg-gray-300" />
        <div>
          <h4 className="text-2xl">59%</h4>
          <h6 className="opacity-50">Completed</h6>
        </div>
      </div>
      <div>
        <h3 className="cursor-pointer mr-20 mt-6 mb-2 text-sm px-2 py-1 text-gray-600">CURRENT CHAPTER</h3>
        <h3 className="mr-20 mb-2 text-sm px-2 py-1">Introduction</h3>
        <button className="bg-blue-500 cursor-pointer text-gray-600 mr-20 mt-2 mb-6 text-sm px-2 py-1 " type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookShow.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookShow;
