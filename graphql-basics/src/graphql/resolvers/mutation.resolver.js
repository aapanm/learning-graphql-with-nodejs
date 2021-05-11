const Mutation = {
  createUser(parent, args, { db }, info) {
    const isEmail = db.userData.some((user) => user.email === args.data.email);
    if (isEmail) {
      throw new Error("Something is wrong");
    }
    const user = {
      id: uuid(),
      ...args.data,
    };

    db.userData.push(user);

    return user;
  },

  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const user = db.userData.find((user) => user.id === id);

    if (!user) {
      throw new Error("User not found!");
    }

    if (typeof data.email === "string") {
      const emailTaken = db.userData.some((user) => user.email === data.email);
      if (emailTaken) {
        throw new Error("email is taken");
      }
      user.email = data.email;
    }

    if (typeof data.name === "string") {
      user.name = data.name;
    }

    if (typeof data.age !== "undefined") {
      user.age = data.age;
    }

    return user;
  },

  createPost(parent, args, { db }, info) {
    const userExists = db.userData.some((user) => user.id === args.data.author);
    if (!userExists) {
      throw new Error("user not exists");
    }
    const post = {
      id: uuid(),
      ...args.data,
    };
    db.postData.push(post);
    return post;
  },

  updatePost(parent, args, { db }, info) {
    const { id, data } = args;
    const post = db.postData.find((post) => post.id === id);

    if (!post) {
      throw new Error("post not found!");
    }

    if (typeof data.title === "string") {
      post.title = data.title;
    }

    if (typeof data.body === "string") {
      post.body = data.body;
    }

    if (typeof data.published === "boolean") {
      post.published = data.published;
    }
    return post;
  },

  createComment(parent, args, { db }, info) {
    const userExists = db.userData.some((user) => user.id === args.data.author);
    const postExists = db.postData.some(
      (post) => post.id === args.data.post && post.published
    );

    if (!userExists || !postExists) {
      throw new Error("not allowed to comment");
    }

    const comment = {
      id: uuid(),
      ...args.data,
    };

    db.commentData.push(comment);

    return comment;
  },

  updateComment(parent, args, { db }, info) {
    const { id, data } = args;
    const comment = db.commentData.find((cmnt) => cmnt.id === id);
    if (!comment) {
      throw new Error("Comment not found!");
    }
    if (typeof data.text === "string") {
      comment.text = data.text;
    }
    return comment;
  },

  deleteUser(parent, args, { db }, info) {
    const userIndex = db.userData.findIndex((user) => user.id === args.id);

    if (userIndex === -1) {
      throw new Error("user not found");
    }

    const deletedUser = db.userData.splice(userIndex, 1);

    db.postData = db.postData.filter((post) => {
      const isMatch = post.author === args.id;
      if (isMatch) {
        db.commentData = db.commentData.filter((cmnt) => {
          return cmnt.post !== post.id;
        });
      }
      return !isMatch;
    });

    db.commentData = db.commentData.filter((cmnt) => cmnt.author !== args.id);

    return deletedUser[0];
  },

  deletePost(parent, args, { db }, info) {
    const postIndex = db.postData.findIndex((post) => post.id === args.id);
    if (postIndex == -1) {
      throw new Error("post not found");
    }
    const deletePost = db.postData.splice(postIndex, 1);
    db.commentData = db.commentData.filter((cmnt) => cmnt.post !== args.id);
    return deletePost[0];
  },

  deleteComment(parent, args, { db }, info) {
    const commentIndex = db.commentData.findIndex(
      (cmnt) => cmnt.id === args.id
    );
    if (commentIndex === -1) {
      throw new Error("comment not found");
    }

    const deleteComment = db.commentData.splice(commentIndex, 1);

    return deleteComment[0];
  },
};

export { Mutation as default };
