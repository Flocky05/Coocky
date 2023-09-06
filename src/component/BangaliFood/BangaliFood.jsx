import './BangaliFood.css';
import food1 from "../../assets/images/Bangladeshi food/Panta_Ilish.jpg"
import food2 from "../../assets/images/Bangladeshi food/bangladeshi-food-02-960x640.jpg.webp"
import food3 from "../../assets/images/Bangladeshi food/Bangladeshi_Prawn_Curry.jpg"

const BangaliFood = () => {
    return (
        <div className='bangaliFood-container'>
            <div className='bangaliFood-card'>
                <img src={food1} alt="" />
                <h2>Panta Ilish</h2>
                <p>Panta Ilish is a traditional food that almost every Bangladeshi eats at the Pohela Boishakh Festival (the first day of Bangla year). culture and tradition.</p>
                <div className='bangaliFood-card-bottom'>
                    <p>price:350 taka (only)</p>
                    <a href="">buy now</a>
                </div>
            </div>
            <div className='bangaliFood-card'>
                <img src={food2} alt="" />
                <h2>Kacchi Biriyani</h2>
                <p>Panta Ilish is a traditional food that almost every Bangladeshi eats at the Pohela Boishakh Festival (the first day of Bangla year).  tradition.</p>
                <div className='bangaliFood-card-bottom'>
                    <p>price:340 taka (only)</p>
                    <a href="">buy now</a>
                </div>
            </div>
            <div className='bangaliFood-card'>
                <img src={food3} alt="" />
                <h2>Chingri Malaikari</h2>
                <p>Panta Ilish is a traditional food that almost every Bangladeshi eats at the Pohela Boishakh Festival (the first day of Bangla year) d tradition.</p>
                <div className='bangaliFood-card-bottom'>
                    <p>price:540 taka (only)</p>
                    <a href="">buy now</a>
                </div>
            </div>
        </div>
    );
};

export default BangaliFood;