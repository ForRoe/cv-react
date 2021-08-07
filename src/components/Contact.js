import React from 'react';
import Box from "@material-ui/core/Box"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    uppercat: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: "column",
    },
}));


export default function MainSection(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={props.classes.paper}>
                <Box className={classes.uppercat}>
                    <img src="./cat4.png" alt="cat5" width="15%" />
                    <p>Cat graphics from <Link href="https://www.freepik.com/">Freepik</Link></p>
                </Box>
            </div>

        </div>
    )
}