const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const category = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Check Status';
    default:
      return state;
  }
};

export default category;
