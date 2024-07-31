import React from 'react';


export default function Area1() {
  const imgStyle = {
    height: '300px', // Set a fixed height for all images
    width: '100%',
    objectFit: 'cover',
  };

  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '20px',
  };

  return (
    <div className="container" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#343a40' }}>FOLDHOPE</h1>
      <div className="row">
        <div className="col-md-4">
          <div style={cardStyle}>
            <img
              src="https://www.researchgate.net/publication/342338449/figure/fig2/AS:1009859155730432@1617780593040/Parts-of-Foldscope-and-the-assembled-Foldscope-B-Placing-the-sample-under-Foldscope-and.jpg"
              alt="Foldscope"
              className="img-thumbnail img-fluid"
              style={imgStyle}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div style={cardStyle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Aufgebautes_Foldscope.jpg"
              alt="Foldscope 2"
              className="img-thumbnail img-fluid"
              style={imgStyle}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div style={cardStyle}>
            <img
              src="https://d39lxsrz40jt15.cloudfront.net/downloads/EDG2012/o_1getot1bi5k07s5bm8144v1se9b.jpeg"
              alt="Foldscope 3"
              className="img-thumbnail img-fluid"
              style={imgStyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
