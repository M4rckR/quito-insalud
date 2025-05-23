import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-PZN042QS4V"); // tu ID real
};

export const trackPageview = (path: string) => {
    ReactGA.send({ hitType: "pageview", page: path });
};
