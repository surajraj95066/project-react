import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Data1() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center cont-1-Data1">
        <h1>Here, we will display our survey data</h1>
      </div>
      <Footer />
    </div>
  );
}

