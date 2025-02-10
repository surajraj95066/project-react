import React, { useState, useRef } from 'react';

function Testing() {
  const [image, setImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Open camera
  const startCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    }
  };

  // Capture image from camera
  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    setImage(canvas.toDataURL('image/png'));
  };

  return (
    <div className="container text-center mt-5">
      <h2>Upload or Capture Image</h2>
      
      {/* File Upload */}
      <input type="file" accept="image/*" onChange={handleFileChange} className="form-control mb-3" />
      
      {/* Camera Capture */}
      <video ref={videoRef} autoPlay style={{ width: '100%', maxHeight: '300px' }}></video>
      <button onClick={startCamera} className="btn btn-primary mt-2">Start Camera</button>
      <button onClick={captureImage} className="btn btn-success mt-2 ml-2">Capture Image</button>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
      
      {/* Image Preview */}
      {image && (
        <div className="mt-3">
          <h4>Preview:</h4>
          <img src={image} alt="Uploaded/Captured" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        </div>
      )}
    </div>
  );
}

export default Testing;
