import food1 from "../../assets/images/food/p1.png"
import food2 from "../../assets/images/food/p2.png"
import food3 from "../../assets/images/food/p3.png"
import food4 from "../../assets/images/food/p4.png"
import './Food.css'
const Food = () => {
    return (
        <div className="food-container"> 
            <h2>Lets Cheack Popular Products</h2>
            <div className='food-section'>
                <div className='food-card'>
                    <img src={food1} alt="" />
                    <h4>Hanny</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad necessitatibus ullam.</p>
                    <h5>price:231 tk</h5>
                </div>
                <div className='food-card'>
                    <img src={food2} alt="" />
                    <h4>Hanny</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad necessitatibus ullam.</p>
                    <h5>price:231 tk</h5>
                </div>
                <div className='food-card'>
                    <img src={food3} alt="" />
                    <h4>Hanny</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad necessitatibus ullam.</p>
                    <h5>price:231 tk</h5>
                </div>
                <div className='food-card'>
                    <img src={food4} alt="" />
                    <h4>Hanny</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad necessitatibus ullam.</p>
                    <h5>price:231 tk</h5>
                </div>
            </div>
        </div>
    );
};

export default Food;