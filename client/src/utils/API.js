import axios from "axios";

export default {

  // Gets all cats
  getCats: function() {
    return axios.get("/api/cats");
  },
  // Gets the cat with the given id
  getCat: function(id) {
    return axios.get("/api/cats/" + id);
  },
  // Deletes the cat with the given id
  deleteCat: function(id) {
    return axios.delete("/api/cats/" + id, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
  },
  getuser: function (username) {
    return axios.get("/api/user/" + username, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
  },
  // Deletes the user with the given id
  deleteuser: function (id) {
    return axios.delete("/api/user/" + id, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
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
  addFavorite: function (userId, cat) {
    return axios.put("/api/user/update/favorites/" + userId, cat, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    })
  },
  // Saves a cat to the database
  saveCat: function(catData) {
    return axios.post("/api/cats", catData, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
  },
  getFavorites: function(userId) {
    return axios.get("/api/user/favorites/" + userId, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
  },
  addCreated: function (userId, savedCat) {
    return axios.put("/api/user/update/created/" + userId, savedCat, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    })
  },
  getCreated: function(userId) {
    return axios.get("/api/user/created/" + userId, {
      headers: {
        "x-auth-token": localStorage.getItem("auth-token")
      }
    });
  },
  send: function(res) {
    return axios.post("/api/send");
  },
};