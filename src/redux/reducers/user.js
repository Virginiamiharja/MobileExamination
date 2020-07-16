const init_state = {
  // id: 0,
  // fullName: "",
  username: "",
  restaurant: "Nama",
  // email: "",
  // profilePicture: "",
  // bio: "",
};

export default (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, ...action.payload };
    case "USER_LOGOUT":
      return { ...init_state };
    case "RESTAURANT":
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
