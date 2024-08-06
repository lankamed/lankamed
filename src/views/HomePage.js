import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to the Lanka MED</h2>
        <p>This is the home page.</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;