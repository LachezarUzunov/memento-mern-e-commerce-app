const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin Lacho",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Roni Uzunova",
    email: "roni@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jonny DiMaio",
    email: "jonny@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
