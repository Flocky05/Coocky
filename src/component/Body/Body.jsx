import React from 'react';
import './Body.css'
import chef from '../../assets/images/body/chef2.avif'
const Body = () => {
    return (
        <div className='body-container'>
            <div>
                <h2>Eat <span>Good</span> Think <span>Good</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum dolor dolore sed quae cupiditate aperiam asperiores nisi et, voluptatem ipsa velit alias nobis, commodi facilis rem. Autem nihil maxime iste voluptate eligendi ea recusandae tenetur animi perspiciatis aliquam.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam sapiente omnis quasi, fugit ab, vel quae, architecto quam hic ipsa adipisci quod autem illo aut laborum aperiam magni exercitationem ad possimus dolorum.</p>
                <button>Learn More</button>
            </div>
            <div>
                <img src={chef} alt="" />
            </div>
        </div>
    );
};

export default Body;