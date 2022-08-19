import React from 'react';
import Books from '../components/Books';
import AddBook from '../components/UI/AddBook';

const Home = () => (
  <section className="home-container">
    <Books />
    <AddBook />
  </section>
);

export default Home;
