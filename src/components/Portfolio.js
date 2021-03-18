import React from 'react';
import Item1 from '../assets/socialape.png';
// import Item2 from '../assets/ienaberlin.png';
import Item3 from '../assets/watchbuddy.png';
import Item4 from '../assets/widgets.png';
import Item5 from '../assets/shopping.png';
import Item6 from '../assets/youtube.png';
import Item7 from '../assets/wehicle.png';

// import '../stylesheets/portfolio.scss';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 30,
        paddingBottom: 60,
    },
    card: {
        minWidth: 225,
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    },

}));


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

const Portfolio = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const itemList = items.map(item => {

        return (
            <Grid item xs={12} sm={6} m={3}> 
                <Card className={classes.card}>
                <CardHeader title={item.title} />
                <CardMedia
                    className={classes.media}
                    image={item.img}
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {item.desc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and
                        set aside for 10 minutes.
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </Grid>
            );
    })

    return (
        <React.Fragment> 
            <Container maxWidth="m">
                <Grid container className={classes.root} spacing={6} >
                        {itemList}
                </Grid>
            </Container>
        </React.Fragment>
    )
};

export default Portfolio;

