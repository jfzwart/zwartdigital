import React from 'react';
import Item1 from '../assets/website.jpg'
import '../stylesheets/portfolio.scss';

const items = [
        {id:1,title:'Streams', desc: "Twitch Like Streaming Platform", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/Streams", link: "", img: Item1},
        {id:2,title:'Watchbuddy', desc: "Social Stream Recommendation Service", lang: ["Ruby", "JS", "HTML", "SCSS"], code: "https://github.com/Gerro385/watchbuddy", link: "", img: Item1},
        {id:3,title:'Widgets', desc: "Widgets", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/widgets", link: "", img: Item1},
        {id:4,title:'IenaBerlin', desc: "Berlin Fashion Brand Portfolio", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/ienaberlin", link: "", img: Item1},
        {id:5,title:'Rails Mr. Cocktail', desc: "Cocktail Platform", lang: ["Ruby", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/cocktail-app-new", link: "", img: Item1},
        {id:6,title:'React Shopping Cart', desc: "Shopping Cart", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/react-shopping-cart", link: "", img: Item1},
        {id:7,title:'Youtube API', desc: "React Hooks Video Tool", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/videos", link: "", img: Item1},
        {id:8,title:'Zwart Portfolio', desc: "Portfolio Website", lang: ["React", "JS", "HTML", "SCSS"], code: "https://github.com/jfzwart/zwartportfolio", link: "", img: Item1},
        {id:9,title:'AirBnB Clone', desc: "Airbnb Like Website Offering Fancy Vehicles", lang: ["Ruby", "JS", "HTML", "SCSS"], code: "https://github.com/kasia-gwc/AirBnB_for_Cars", link: "", img: Item1},
];

const itemList = items.map(item => {
    return (
       <div className="card">
           <div className="card-image">
            <img src={item.img} alt={item.title} />
            <button className="btn btn-success">
                Code
            </button>
           </div>
           <div className="card-content">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.desc}</p>
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
