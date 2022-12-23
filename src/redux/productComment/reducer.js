import avatarUser1 from 'assets/images/thuyduong.jpg';
const { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT } = require("./constants");

const initState = {
  comments: [
    {
      id:1,
      user: {
        id: 1,
        username: "thuyduong",
        avatar: avatarUser1,
        fullName: "Thuy Duong",
        email: 'thuyduong@mail.com'
      },
      content: "sản phẩm rất tốt, rất hợp với da khô...",
      createAt: new Date(),
      parentId: null,
      rating: 5,
    },
    {
      id:2,
      user: {
        id: 2,
        username: "Mai Mai",
        avatar: null,
        fullName: "Nguyễn Mai ",
        email: 'thuyduong@mail.com'
      },
      content: "Thương em là điều anh không thể ngờ, ngăn nỗi nhớ cũng không thể ngăn trái tim..",
      createAt: new Date(),
      parentId: null,
      rating: 2,
    },
    {
      id:3,
      user: {
        id: 3,
        username: "Anonymous",
        avatar: null,
        fullName: "No Name",
        email: 'thuyduong@mail.com'
      },
      content: "Ét o ét ec......",
      createAt: new Date(),
      parentId: 2,
      avatar: null,
    },
  ],
};

const commentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_COMMENT:
      console.log('add comment')
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    case DELETE_COMMENT:
      return{
        ...state,
        comments: state.comments.filter(item => item.id !== payload),
      };
    case UPDATE_COMMENT:
      return {
        ...state,
        comments: state.comments.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              ...payload,
            }
          } else {
            return item
          }
        }),
      };
    default:
      return state;
  }
}

export default commentReducer;