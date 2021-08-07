import React from 'react';
import i18n from 'i18next';
import { Us, Pl } from 'react-flags-select';
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        padding: 15,
        display: 'flex',
        alignItems: 'right',
        flexDirection: "row-reverse",
        background: "#f0ece3",
    },
}))

export default function Navbar(props) {
    const classes = useStyles();
    const lngs = {
        en: { name: "English", nativeFlag: <Us /> },
        pl: { name: "Polski", nativeFlag: <Pl /> }
    };
    return (
        <div className={classes.navbar}>
            <React.Fragment className={props.classes.paper}>
                <CssBaseline />
                {Object.keys(lngs).map((lng) => (
                    <Button component="ul" key={lng} style={{ marginRight: 10 }} color="primary" type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeFlag}
                    </Button>
                ))}
            </React.Fragment >
        </div>
    );
}