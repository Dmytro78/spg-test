"use strict";

module.exports = (app) => {
  const ListUsers = require("./../controllers/ListUsers");
  const ListUser = require("./../controllers/ListUser");
  const AddUser = require("./../controllers/AddUser");

  app.route("/users").get(ListUsers.users);
  app.route("/user/:id").post(ListUser.user);
  app.route("/user").put(AddUser.add);
};
