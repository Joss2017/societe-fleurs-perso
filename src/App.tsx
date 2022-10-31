import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

const App = () => {
  const message: string = "Hello world";

  const handleClick = (name: string) => alert(`Bonjour ${name} !`);
  const handleClickSansParam = () => alert("Yes Papa !");
  return (
    <div>
      {/* On utilise notre composant dans notre JSX */}
      <NavBar />
      <p className="color-pink">{message}</p>
      {/* Liaison de l'évènement click avec l'appel de la fonction handleClick avec paramètre */}
      <button className="btn btn-success" onClick={() => handleClick("Joseph")}>
        Test Joseph
      </button>
      <button onClick={() => handleClick("COCO")}>Test Coco</button>
      <p>CouCou</p>
      {/* Liaison de l'évènement click avec l'appel de la fonction handleClickSansParam sans paramètre */}
      <button onClick={handleClickSansParam}>TEST 2</button>
    </div>
  );
};

export default App;
