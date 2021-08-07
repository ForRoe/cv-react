import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    cat1: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
    },
    uppercat: {
        marginBottom: theme.spacing(5),
        display: 'flex',
        alignItems: 'right',
        flexDirection: "row-reverse",
    },
    lowercat: {
        marginTop: theme.spacing(10),
        display: 'flex',
        alignItems: 'left',
        flexDirection: "row",
    },

}));


export default function MainSection(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={props.classes.paper}>
                <Box className={classes.uppercat}>
                    <img src="./cat3.png" alt="cat2" width="30%" />
                </Box>
                <Typography variant='h1' style={{ paddingBottom: 10 }} > {props.t('front.title')} </Typography>
                <Typography variant='h2' style={{ paddingBottom: 1 }}> {props.t('front.subtitle')} </Typography>
                <Box className={classes.lowercat}>
                    <img src="./cat2.png" alt="cat2" width="30%" />
                </Box>
            </div>
            <div className={props.classes.paper2}>
                <CssBaseline />
                <Box className={classes.cat1}  >
                    <img src="./cat1.png" alt="cat1" width="30%" />
                </Box>
                <Typography variant="h2">
                    {props.t('education.title')}
                </Typography>
                <Container maxWidth="md">
                    <ul style={{ fontSize: "1.2rem" }}>
                        <li>{props.t('education.hs')}</li>
                        <li>{props.t('education.studies')}</li>
                    </ul>
                </Container>
                <Typography variant="h4">
                    {props.t('courses.title')}
                </Typography>
                <Container maxWidth="md">
                    <ul style={{ fontSize: "1.2rem" }}>
                        <li>{props.t('courses.name')}</li>
                    </ul>
                </Container>
            </div>
        </div>
    )
}