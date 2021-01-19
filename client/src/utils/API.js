import axios from "axios";

export default {

  // Gets all books
  getCats: function() {
    return axios.get("/api/cats");
  },
  // Gets the book with the given id
  getuser: function (username) {
    return axios.get("/api/user/" + username);
  },
  // Deletes the user with the given id
  deleteuser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  validateUser: function (token) {
    return axios.post("/api/user/validate", { token })
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user/register", userData);
  },
  // login user
  loginUser: function (loginData) {
    return axios.post("/api/user/login", loginData);
  },
  updateUser: function (userId, id) {
    return axios.put("/api/user/update/" + userId, id)
  },
  // Saves a book to the database
  saveCat: function(catData) {
    console.log(catData);
    return axios.post("/api/cats", catData);
  }
};