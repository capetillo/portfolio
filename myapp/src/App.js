import './App.css';
import image from './favicon.png'

function App() {
  return (
    <div className="App">
      <div class="container">
        {/* <img src={image} alt="Rolling Circle" class="rolling-circle"/> */}
      </div>
      <div id="menu-outer">
        <div class="table">
          <ul id="horizontal-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Experience</a></li>
          </ul>
        </div>
      </div>
      <h1 class="name">Carolina Capetillo</h1>
      <div class="about-me">
        I'm a full stack engineer who enjoys making fun stuff with software
      </div>
      </div>

  );
}

export default App;
