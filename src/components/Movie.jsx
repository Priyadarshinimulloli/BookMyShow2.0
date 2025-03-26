import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import movie1 from "../assets/movie1/empuran.avif";
import movie2 from "../assets/movie2/chhaava.avif";
import movie3 from "../assets/movie3/snowwhite.avif";
import movie4 from "../assets/movie4/Rakshasa.avif";
import movie5 from "../assets/movie5/movie5.avif";
import movie6 from "../assets/movie6/movieflow.avif";
import movie7 from "../assets/movie7/movie7.avif";
import movie8 from "../assets/movie8/movie8.avif";

import "./movie.css";

const movies = [
  {
    id: 1,
    title: "Empuran",
    image: movie1,
    genre: "Action/Crime/Thriller",
    releaseDate: "March 27, 2025",
    rating: 9.7,
    price: "₹400",
  },
  {
    id: 2,
    title: "Chhaava",
    image: movie2,
    genre: "Action/Drama/Historical",
    releaseDate: "February 14, 2025",
    rating: 9.3,
    price: "₹350",
  },
  {
    id: 3,
    title: "SnowWhite",
    image: movie3,
    genre: "Adventure/Drama/Family",
    releaseDate: "March 21, 2025",
    rating: 7,
    price: "₹250",
  },
  {
    id: 4,
    title: "Rakshasa",
    image: movie4,
    genre: "Horror/Thriller",
    releaseDate: "7 Mar, 2025",
    rating: 8.3,
    price: "₹300",
  },
  { id: 5,
   title: "Tumko Meri Kasam",
   image: movie5,
   genre: "Biography/Drama/Thriller",
   releaseDate: "21 Mar,2025",
   rating: 8.1,
   price: "₹300",},
  { id: 6,
   title: "Flow",
   image: movie6,
   genre: "Family/Adventure/Animation",
   releaseDate: "1 January,2025",
   rating: 9.1,
   price: "₹350",},
  { id: 7,
   title: "Mufasa: The Lion King",
   image: movie7,
   genre: "Adventure/Drama/Animation",
   releaseDate: "20 Dec,2024",
   rating: 9.1,
   price: "₹330"},
  { id: 8,
   title: "Veera Dheera Sooran - Part 2",
   image: movie8,
   genre: "Adventure/Drama/Animation",
   releaseDate: "27 March,2025",
   rating: 8.0,
   price: "₹300"},
];

export default function Movie() {
  return (
    <Container className="mt-4">
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md="3" className="mb-4">
            <Card className="movie-card">
              <Card.Img
                variant="top"
                src={movie.image}
                alt={movie.title}
                className="movie-img"
              />
              <Card.Body className="movie-body">
                <Card.Title>{movie.title}</Card.Title>
                <p>Genre: {movie.genre}</p>
                <p>Release Date: {movie.releaseDate}</p>
                <p>⭐ {movie.rating}/10</p>
                <p>Price: {movie.price}</p>
                <Button variant="primary" className="book-btn">Book Now</Button>
                <Button variant="outline-light" className="trailer-btn">
                  Watch Trailer
                </Button>
                <Button
                  variant="secondary"
                  className="coming-soon-btn"
                  disabled
                >
                  Coming Soon
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
