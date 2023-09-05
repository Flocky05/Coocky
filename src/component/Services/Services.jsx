import logo1 from '../../assets/images/food/c1.png'
import logo2 from '../../assets/images/food/c2.png'
import logo3 from '../../assets/images/food/c3.png'
import './Services.css'
const Services = () => {
    return (
        <div className='services-container'>
            <div className='services-card'>
                <img src={logo1} alt="" />
                <h3>10:00am-8:00pm</h3>
                <p>Working Hourse</p>
            </div>
            <div className='services-card'>
                <img src={logo2} alt="" />
                <h3>Honney Springs 555</h3>
                <p>Get Directions</p>
            </div>
            <div className='services-card'>
                <img src={logo3} alt="" />
                <h3>01799622217</h3>
                <p>Call Us Now</p>
            </div>
        </div>
    );
};

export default Services;