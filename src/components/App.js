import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import MainSection from "./MainSection"
import Navbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects"
import Contact from "./Contact";

const useStyles = makeStyles(() => ({
  paper: {
    paddingTop: theme.spacing(10),
    color: '#949493',
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    background: "#f0ece3",
    paddingBottom: 100,
  },
  paper2: {
    color: '#c7b198;',
    display: 'flex',
    alignItems: 'center',
    flexDirection: "column",
    background: "#fff",
    paddingBottom: 100
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      light: '#494949',
      main: '#222222',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#aaadff',
      main: '#37438e',
      dark: '#4552b2',
      contrastText: '#fff',
    },
  },
});

export default function App() {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Navbar t={t} classes={classes} />
      <div >
        <MainSection t={t} classes={classes} />
      </div>
      <div>
        <Skills t={t} classes={classes} />
      </div>
      <div>
        <Projects t={t} classes={classes} />
      </div>
      <div>
        <Contact t={t} classes={classes} />
      </div>
    </ThemeProvider>

  );
}


