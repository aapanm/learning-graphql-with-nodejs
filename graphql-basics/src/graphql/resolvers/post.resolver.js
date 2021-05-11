const Post = {
  author(parent, args, { db }, info) {
    return db.userData.find((user) => {
      return user.id == parent.author;
    });
  },

  comments(parent, args, { db }, info) {
    return db.commentData.filter((comment) => {
      return comment.post == parent.id;
    });
  },
};

export { Post as default };
