import "./Hero.css";
import SectionCard from "../../assets/images/section.png"
function Hero() {
  return (
    <div className='hero'>
        <img src={SectionCard} />
        <div className='wrapper'>
            <div className="hero-content">
                <span>
                    <span className='red-underline'>100%</span> Organic Vegetables
                </span>
                <span>
                    The best way to <br />stuff your wallet.
                </span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad iusto incidunt impedit, porro, beatae iure, necessitatibus rerum inventore laborum perspiciatis adipisci rem quia?
                </span>
                <button className="shop-now">
                    Shop now
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero