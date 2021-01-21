import axios from "axios";

export default {
  // Gets all books
  getCats: function() {
    return axios.get("/api/cats");
  },
  // Gets the book with the given id
  getCat: function(id) {
    return axios.get("/api/cats/" + id);
  },
  // Deletes the book with the given id
  deleteCat: function(id) {
    return axios.delete("/api/cats/" + id);
  },
  // Saves a book to the database
  saveCat: function(catData) {
    console.log(catData);
    return axios.post("/api/cats", catData);
  }
};
