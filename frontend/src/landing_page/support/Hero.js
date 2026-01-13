import React from "react";
function Hero() {
  return (
    <div className="container mt-5 p-5" style={{backgroundColor:"rgb(230,230,230)"}}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Support Portal</h2>
        <button className="btn btn-primary">My tickets</button>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-5"
        placeholder="Eg: How do I open my account, How do I activate F&O..."
      />
    </div>
    
  );
}

export default Hero;
