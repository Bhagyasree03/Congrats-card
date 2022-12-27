const element = (
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="Card-Container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="Name">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology <br />
        Bhimavaram
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
