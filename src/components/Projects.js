import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import ProjectsCard from "./ProjectsCard.jsx";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper3: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
        color: '#c7b198;'
    },
}))

export default function Projects(props) {
    const classes = useStyles();

    return (
        <div className={classes.paper3}>
            <CssBaseline />
            <Typography variant="h2">
                {props.t('projects.title')}
            </Typography>
            <Container maxWidth="lg">
                <Grid container>
                    <ProjectsCard classes={props.classes} />
                </Grid>
            </Container>

        </div>
    )
}