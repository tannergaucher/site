import { useLayoutEffect, useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState(`paleVioletRed`);

  const h1Text = `Tanner Gaucher`;
  const h2Text = `Software Engineer Based in Brooklyn`;

  useLayoutEffect(() => {
    const tenSeconds = setInterval(function () {
      setColor(`palevioletRed`);
    }, 10000);

    const fifteen = setInterval(function () {
      setColor(`#fafafa`);
    }, 15000);
  }, []);

  return (
    <div>
      <h1 className="App-logo" alt="logo">
        {h1Text}
      </h1>
      <hr className="App-logo-2" />
      <h2 className="App-logo" alt="logo">
        {h1Text}
      </h2>
      <hr className="App-logo-2" />
      <h3 className="App-logo" alt="logo">
        {h1Text}
      </h3>
      <hr className="App-logo-2" />
      <h4 className="App-logo" alt="logo">
        {h1Text}
      </h4>
      <hr className="App-logo-2" />
      <h5 className="App-logo" alt="logo">
        {h1Text}
      </h5>
      <hr className="App-logo-2" />
      <h6 className="App-logo" alt="logo">
        {h2Text}
      </h6>
    </div>
  );
}

export default App;
