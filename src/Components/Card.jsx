import "./Card.css";
import Equilbrium from "../assets/image-equilibrium.jpg";
import Clock from "../assets/icon-clock.svg";
import Ethereum from "../assets/icon-ethereum.svg";
import Avatar from "../assets/image-avatar.png";

function Card() {
  return (
    <div className="Card-layout">
      <img className="image-layout" src={Equilbrium} alt="" />
      <h1 className="main-heading">Equilibrium #3429</h1>
      <p className="P-first">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="left-layout">
        <img className="Ethe" src={Ethereum} alt="" />
        <p className="P-second">0.041 ETH</p>
        <div className="right-side">
          <img src={Clock} alt="" />
          <p>3 days left</p>
        </div>
      </div>
      <div className="footer">
        <div className="line"></div>
        <img src={Avatar} alt="" />
        <div className="footer-text">
          Creation of <span>Jules Wyvern</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
