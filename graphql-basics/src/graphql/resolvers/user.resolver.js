const User = {
  posts(parent, args, { db }, info) {
    return db.postData.filter((post) => {
      return post.author == parent.id;
    });
  },

  comments(parent, args, { db }, info) {
    return db.commentData.filter((comment) => {
      return comment.author == parent.id;
    });
  },
};

export { User as default };
