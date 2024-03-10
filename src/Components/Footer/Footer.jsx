import Logo from "../../assets/icons/navbar-logo.png";
import MapLogo from "../../assets/icons/map.svg";
import MailIcon from "../../assets/icons/email.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='wrapper'>
            <div className='footer-content'>
                <div className="footer-contact">
                    <img src={Logo} width={200} />
                    <p className="footer-paragraph">FoodTrove is the biggest market of grocery products. Get your daily needs from our store.</p>
                    <span>
                    <img src={MapLogo} />
                        51 Green St.Huntington ohio beach ontario, NY
                        11746 KY 4783, USA.
                    </span>
                    <span>
                        <img src={MailIcon} color="red"/>
                        example@gmail.com
                    </span>
                    <span>
                        <img src={PhoneIcon} />
                        +91 123 4567890
                    </span>
                </div>
                <div className="footer-navlinks">
                    <b>Company</b>
                    <a href="">About Us</a>
                    <a href="">Delivery information</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                    <a href="">contact Us</a>
                    <a href="">Support Center</a>
                </div>
                <div className="footer-categories">
                    <b>Category</b>
                    <a href="">Dairy & Bakery</a>
                    <a href="">Fruits & Vegetables</a>
                    <a href="">Snack & Spice</a>
                    <a href="">Juice & Drinks</a>
                    <a href="">Chicken & Meat</a>
                    <a href="">Fast Food</a>
                </div>
            </div>
        </div>
        <div className="end-section"> 
            made by <a href="https://github.com/adisagar2003" target="_blank" className="green" style={{textDecoration:'underline'}}>Aditya</a>
        </div>
    </div>
  )
}

export default Footer