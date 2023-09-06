import './Footer.css'
import img1 from "../../assets/images/food/f1.png"
import img2 from "../../assets/images/food/f2.png"

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-body'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
    );
};

export default Footer;