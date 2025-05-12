
import ReactGA from 'react-ga4';

export const initGA = () => {
  // TODO: Replace with actual GA measurement ID
  const MEASUREMENT_ID = 'G-XXXXXXXXXX';
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
