import React, { useState } from "react";

const movies = [
  { id: 1, title: "Empuran", genre: "Action/Crime/Thriller", release: "March 27, 2025", rating: "9.7/10", price: "₹400" },
  { id: 2, title: "Chhaava", genre: "Action/Drama/Historical", release: "February 14, 2025", rating: "9.3/10", price: "₹350" },
  { id: 3, title: "SnowWhite", genre: "Adventure/Drama/Family", release: "March 21, 2025", rating: "7/10", price: "₹250" },
  { id: 4, title: "Rakshasa", genre: "Horror/Thriller", release: "March 7, 2025", rating: "8.3/10", price: "₹300" },
  { id: 5, title: "Tumko Meri Kasam", genre: "Biography/Drama/Thriller", release: "March 21, 2025", rating: "8.1/10", price: "₹300" },
  { id: 6, title: "Flow", genre: "Family/Adventure/Animation", release: "January 1, 2025", rating: "9.1/10", price: "₹350" },
  { id: 7, title: "Mufasa: The Lion King", genre: "Adventure/Drama/Animation", release: "December 20, 2024", rating: "9.1/10", price: "₹330" },
  { id: 8, title: "Veera Dheera Sooran - Part 2", genre: "Adventure/Drama/Animation", release: "March 27, 2025", rating: "8.0/10", price: "₹300" }
];

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre.includes(selectedGenre));

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Now Showing</h2>
      
      
      <select style={styles.dropdown} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option>All Genres</option>
        {[...new Set(movies.map(movie => movie.genre))].map(genre => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      
      <table style={styles.table}>
        <thead>
          <tr style={styles.headerRow}>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Title</th>
            <th style={styles.th}>Genre</th>
            <th style={styles.th}>Release Date</th>
            <th style={styles.th}>Rating</th>
            <th style={styles.th}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie, index) => (
            <tr key={movie.id} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td style={styles.td}>{movie.id}</td>
              <td style={styles.td}>{movie.title}</td>
              <td style={styles.td}>{movie.genre}</td>
              <td style={styles.td}>{movie.release}</td>
              <td style={styles.td}>
                <span style={styles.star}>⭐</span> {movie.rating}
              </td>
              <td style={styles.price}>{movie.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const styles = {
  container: {
    backgroundColor: "#112d4e",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "900px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
  },
  heading: {
    textAlign: "center",
    color: "#66fcf1",
    marginBottom: "15px"
  },
  dropdown: {
    display: "block",
    width: "100%",
    maxWidth: "250px",
    margin: "0 auto 15px auto",
    padding: "8px",
    backgroundColor: "#1b263b",
    color: "#66fcf1",
    border: "2px solid #66fcf1",
    borderRadius: "6px",
    fontSize: "14px"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor:"rgb(161, 206, 254)"
  },
  headerRow: {
    backgroundColor: "#112d4e",
    color: "#66fcf1"
  },
  th: {
    padding: "10px",
    textAlign: "left",
    fontWeight: "bold",
    backgroundColor: "#112d4e",
    color: "#66fcf1"
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    color: "#112d4e"
  },
  evenRow: {
    backgroundColor: "#f0f4f8"
  },
  oddRow: {
    backgroundColor: "#dbe2ef"
  },
  star: {
    color: "#ffcc00",
    fontSize: "16px"
  },
  price: {
    fontWeight: "bold",
    color: "#ff9800",
    padding: "10px"
  }
};

export default MoviesPage;
