import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Container from "@material-ui/core/Container";
import TableHead from '@material-ui/core/TableHead';

const useStyles = makeStyles((theme) => ({
    skillscat1: {
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'left',
        flexDirection: "row",

    },
    skillscat2: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(5),
        display: 'flex',
        alignItems: 'right',
        flexDirection: "row-reverse",
    },
    table: {
        minWidth: 400,
    },

}));

function createData(name, value) {
    return { name, value };
}

const rows = [
    createData('CSS', 5),
    createData('HTML', 5),
    createData('Bootstrap', 4),
    createData('React', 4),
    createData('React Router', 3),
    createData('Material-ui', 3),
    createData('Writing', 5),
    createData('English', 5),
];

export default function Skills(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={props.classes.paper}>
                <Typography className={classes.skillscat1} variant="h2">{props.t('skills.title')}</Typography>
                <Container maxWidth="md">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        {props.t('skills.title')}
                                    </TableCell>
                                    <TableCell align="right">Rating</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Rating name="read-only" value={row.value} readOnly />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>

            </div>
        </div>
    )
}