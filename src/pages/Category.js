import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);

  return (
    <div>
      <div className="flex justify-center align-middle">
        <button onClick={() => dispatch(checkStatus())} className="bg-blue-500 cursor-pointer mr-20 mt-14 mb-14 text-sm px-2 py-1 text-white font-bold" type="button">CHECK STATUS</button>
      </div>
      <h1 className=" text-4xl text-center font-bold">{status}</h1>
    </div>
  );
};

export default Category;
