import React from 'react';
import Item1 from '../assets/socialape.png';
// import Item2 from '../assets/ienaberlin.png';
import Item3 from '../assets/watchbuddy.png';
import Item4 from '../assets/widgets.png';
import Item5 from '../assets/shopping.png';
import Item6 from '../assets/youtube.png';
import Item7 from '../assets/wehicle.png';

import '../stylesheets/portfolio.scss';
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const items = [
        // {id:1,title:'Streams', desc: "Twitch Like Streaming Platform", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/Streams", link: "", img: Item1},
        {id:1,title:'SocialApe', desc: "Twitter like social media platform", lang: ["React", "Node.js", "Express.js", "Firebase", "Material-UI"], code: "https://github.com/jfzwart/socialape-client", link: "https://socialape-cfaf3.web.app/", img: Item1},
        {id:2,title:'Watchbuddy', desc: "Social Stream Recommendation Service", lang: ["Ruby", "JS", "HTML", "SCSS"], code: "https://github.com/Gerro385/watchbuddy", link: "http://www.watchbuddy.club/", img: Item3},
        {id:3,title:'Youtube API', desc: "React Hooks Video Tool", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/videos", link: "https://admiring-knuth-c9f417.netlify.app/", img: Item6},
        // {id:4,title:'IenaBerlin', desc: "Berlin Fashion Brand Portfolio", lang: ["React", "JS", "Firebase", "HTML", "SCSS"], code: "https://github.com/jfzwart/ienaberlin", link: "https://www.ienaberlin.com", img: Item2},
        // {id:5,title:'Rails Mr. Cocktail', desc: "Cocktail Platform", lang: ["Ruby", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/cocktail-app-new", link: "https://cocktailmaniaonrails.herokuapp.com/	", img: Item1},
        {id:6,title:'React Shopping Cart', desc: "Shopping Cart", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/react-shopping-cart", link: "https://keen-kalam-d97dac.netlify.app/", img: Item5},
        {id:7,title:'Widgets', desc: "Widgets", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/widgets", link: "https://frosty-volhard-6cac95.netlify.app/", img: Item4},
        // {id:8,title:'Zwart Portfolio', desc: "Portfolio Website", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/zwartportfolio", link: "https://www.jeroenzwart.com/", img: Item1},
        {id:9,title:'AirBnB Clone', desc: "Airbnb Like Website Offering Fancy Vehicles", lang: ["Ruby", "JS", "HTML", "SCSS"], code: "https://github.com/kasia-gwc/AirBnB_for_Cars", link: "https://wehicle.herokuapp.com/", img: Item7},
];

const itemList = items.map(item => {

    return (
        <div className="card" key={item.id} >
            <div className="card-image">
                <a href={item.link} alt={item.title}>
                    <img src={item.img} alt={item.title} />
                </a>
                <a href={item.code}>
                    <button className="btn btn-success">
                    <FontAwesomeIcon icon={faCode} />
                    </button> 
                </a>
            </div>
        </div>
    )
})


const Portfolio = () => {
    return (
        <div className="container">
        <div className="box">
            {itemList}
        </div>
    </div>
    )
};

export default Portfolio;

