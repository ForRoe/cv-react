import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    cards: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",

    },
    root: {
        maxWidth: 300,
        margin: 20
    },
    media: {
        height: 150,
    },

}));


function createData(image, name, description, link) {
    return { image, name, description, link }
}
const cards = [
    createData('https://nightwatch.studio/promo.png',
        'Nightwatch Studio',
        'A fully-working front page for a game studio, including dedicated gallery, full translation and media page.',
        'https://nightwatch.studio'),

    createData('https://titansgo.pl/upload/img/610be43c455af.png',
        'Quiz: Which Teen Titan are you?',
        'Randomized quiz made for TitansGo.pl for celebration of Fanfics Day 2021.',
        'https://titansgo.pl/quiz/index.html'),

    createData('https://titansgo.pl/upload/img/610cfa6587116.png',
        'TinCat',
        'Simple demo front page for a start-up made during The Complete 2021 Web Developement Bootcamp.',
        'https://forroe.github.io/bootstrap-site/?fbclid=IwAR2pW-sy2jRqmA7m_GmrzgCC_1fPbLJBx8qTKrt6Hk6yeJK5I7h604pypPo'),

]
function ProjectsCard(props) {
    const classes = useStyles();
    return (
        <div className={classes.cards}>
            <Grid container>
                {cards.map((card) => (
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            key={card.name}
                            image={card.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {card.description}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small" color="primary" href={card.link}>
                                Learn more
                            </Button>
                        </CardActions>
                    </Card>
                ))
                }
            </Grid>
        </div>
    )
}

export default ProjectsCard