import React from 'react';
import BookShow from '../components/BookShow';

const Home = () => (
  <div>
    <h2 className="pt-20 pl-10 pr-10"><BookShow /></h2>
    <div className="ml-14 mt-20">
      <h1 className=" text-2xl font-semibold text-gray-600">ADD NEW BOOK</h1>
      <form className="flex gap-2 mt-8">
        <input className="border-2 border-solid p-2 text-black" type="text" placeholder="Book Title" />
        <input className="border-2 border-solid p-2 text-black" type="text" placeholder="Book Author" />
        <input className="bg-blue-500 p-2 cursor-pointer text-white font-bold" type="button" value="ADD BOOK" />
      </form>
    </div>
  </div>
);

export default Home;
