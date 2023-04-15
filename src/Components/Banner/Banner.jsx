import "./Banner.scss";
import poster from "./poster.jpeg";
import p1 from "./p1.jpg"
function Banner() {
  return (
    <div id="banner">
      <img className="image" src={poster} alt="Loading"></img>
      <img
        className="image"
        src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/a7592be43104d75e.jpg?q=50"
        alt="Loading"
      ></img>
      <img
        className="image"
        src={p1}
        alt="Loading"
      ></img>
    </div>
  );
}

export default Banner;
