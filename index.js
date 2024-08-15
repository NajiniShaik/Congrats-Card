const element = (
  // Write your code here.

  <div className="bg-container">
    <h1 className="greetings">Congratulations</h1>

    <div className="detailed-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img"
      />

      <h1 className="name">Kiran V</h1>
      <p className="about">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
