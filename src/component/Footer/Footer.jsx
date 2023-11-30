import './Footer.css'
import img1 from "../../assets/images/food/f1.png"
import img2 from "../../assets/images/food/f2.png"

const Footer = () => {
    return (
        <div className='footer-section '>
            <div className='footer-body'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <h2>Contract Us</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel aut at reiciendis minima quasi necessitatibus laborum distinctio nemo? Cumque itaque ex aliquid, totam cum repudiandae quibusdam facere nisi? Modi dolores quos ipsa minus, assumenda commodi similique repudiandae quaerat!</p>
        </div>
    );
};

export default Footer;