//demo users data
const userData = [
  {
    id: "1",
    name: "apon",
    email: "a@mcom",
  },
  {
    id: "2",
    name: "andrew",
    email: "a@d.com",
    age: 28,
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@em.com",
  },
];

const postData = [
  {
    id: "1",
    title: "hello",
    body: "great tutorial",
    published: true,
    author: "1",
  },
  {
    id: "2",
    title: "world",
    body: "great going",
    published: false,
    author: "1",
  },
  {
    id: "3",
    title: "graphql",
    body: "graphql learning",
    published: true,
    author: "3",
  },
];

const commentData = [
  {
    id: "1",
    text: "this is 1st comment",
    author: "1",
    post: "1",
  },
  {
    id: "2",
    text: "this is 2nd comment",
    author: "1",
    post: "2",
  },
  {
    id: "3",
    text: "this is 3rd comment",
    author: "1",
    post: "2",
  },
  {
    id: "4",
    text: "this is 4th comment",
    author: "3",
    post: "3",
  },
];

const db = {
  userData,
  postData,
  commentData,
};

export { db as default };
