import hero from "../../assets/images/food/hero.png"
import './Honey.css'
const Honey = () => {
    return (
        <div className="honey-container">
            <img src={hero} alt="" />
            <div className="honey-body">
                <h2>Living well begins <br /> with eating well</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam nulla quidem expedita, debitis unde fugit adipisci veniam cupiditate accusamus.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, debitis unde fugit adipisci veniam cupiditate accusamus laboriosam.</p>
                <div>
                <a href="">Explore story</a>

                </div>
            </div>
        </div>
    );
};

export default Honey;