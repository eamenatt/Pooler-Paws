import axios from "axios";

export default {
  // Gets all books
  getCats: function() {
    return axios.get("/api/cats");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveCat: function(catData) {
    console.log(catData);
    return axios.post("/api/cats", catData);
  }
};
