const BookShow = () => (
  <div className=" flex pl-6 border-2 border-solid justify-between">
    <div>
      <h4 className="text-gray-500 pb-2">Action</h4>
      <h1 className="text-3xl font-bold">The Hunger Games</h1>
      <h3 className="text-blue-500 pb-4">Suzanne Collins</h3>
      <h3 className="text-blue-500 pb-4">Comments  |    Remove  | Edit</h3>

    </div>
    <input className="bg-blue-500 cursor-pointer mr-20 mt-14 mb-14 text-sm px-2 py-1 text-white font-bold" type="button" value="CHECK STATUS" />

  </div>
);

export default BookShow;
