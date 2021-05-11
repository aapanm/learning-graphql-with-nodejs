const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) return db.userData;

    return db.userData.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  posts(parent, args, { db }, info) {
    if (!args.query) return db.postData;
    db.postData.filter((post) => {
      return post.title.toLowerCase().includes(args.query.toLowerCase());
    });
  },

  comments(parent, args, { db }, info) {
    return db.commentData;
  },
};

export { Query as default };
