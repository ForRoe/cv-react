import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    navbar: {
                        pl: 'Polish',
                        en: 'English',
                    },
                    front: {
                        title: "I'm Krystyna",
                        subtitle: 'a front-end developer.',
                    },
                    education: {
                        title: "Education",
                        hs: 'Ambroży Towarnicki High School in Rzeszowie, profile: jornualism',
                        studies: 'University of Zielona Góra, Department od Humanities, profile: Popular Literature and Creation of Games, specialization: Creative Writing'
                    },
                    courses: {
                        title: "Courses",
                        name: 'The Complete 2021 Web Development Bootcamp - Udemy',
                    },
                    skills: {
                        title: "My skills",
                    },
                    projects: {
                        title: "My projects",
                        name1: "Nightwatch Studio",
                        desc1: "A fully-working front page for a game studio, including dedicated gallery, full translation and media page.",
                        name2: "Quiz: Which Teen Titan are you?",
                        desc2: "Randomized quiz made for TitansGo.pl for celebration of Fanfics Day 2021.",
                        name3: "TinCat",
                        desc3: "Simple demo front page for a start-up made during The Complete 2021 Web Developement Bootcamp.",
                        button: " Learn more"
                    },

                }
            },
            pl: {
                translation: {
                    navbar: {
                        pl: 'Polski',
                        en: 'Angielski',
                    },
                    front: {
                        title: "Krystyna Stec",
                        subtitle: 'front-end developer.',
                    },
                    education: {
                        title: "Edukacja",
                        hs: 'VI Liceum Ogólnokształcące im. A. Towarnickiego w Rzeszowie, profil dziennikarski',
                        studies: 'Uniwersytet Zielonogórski, Wydział Humanistyczny, kierunek: Literatura Popularna i Kreacje Światów Gier, specjalizacja: Pisanie kreatywne'
                    },
                    courses: {
                        title: "Kursy",
                        name: 'The Complete 2021 Web Development Bootcamp - Udemy',
                    },
                    skills: {
                        title: "Umiejętności",
                    },
                    projects: {
                        title: "Moje projekty",
                        name1: "Nightwatch Studio",
                        desc1: "W pełni funkcjonalna strona-wizytówka dla studia gier, zawiewrająca dedykowaną galerię, pełne tłumaczenie i stronę z mediami.",
                        name2: "Quiz: Którym Tytanem jesteś?",
                        desc2: "Randomizowany quiz przygotowany dla TitansGo.pl z okazji Dnia Fanfików 2021.",
                        name3: "TinCat",
                        desc3: "Prosta strona pokazowa dla start-upu stworzona podczas The Complete 2021 Web Developement Bootcamp.",
                        button: "Więcej"
                    },

                }
            },
        }
    });

export default i18n;
