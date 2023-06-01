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
      <div class="basic-bio">
        I'm a full stack engineer who enjoys making fun stuff for the web
      </div>
      <div class="about-me">
        <p>
        Back in 2018, I received my Bachelor's degree in Psychology from University of California, Santa Barbara. A year later I decided to 
        do a 180° and get into software. I finished General Assembly's Software Engineer Immersive bootcamp in February of 2020. There, I learned 
        how to code with JavaScript, Python, and SQL, along with some databases, like MySQL and MongoDB, and computer science theory.
        I'm now doing online school to learn how to code with Java and C++ 🤓, everyone's favorite languages!
        </p>
      </div>
      <div class="about-work">
        <p>
        Outside of school, my primary focus these days is building products for clients and working on personal projects. But most importantly
        I am actively looking for work. HIRE ME!
        </p>
      </div>
      <div class="personal">
        <p>
        When I'm not creating apps or applying to jobs, I am mostly rock climbing, training for a half marathon, walking my dogs,
        or baking. [insert photos of me baking]
        </p>
      </div>
      </div>

  );
}

export default App;
