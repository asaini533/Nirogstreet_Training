import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons"
library.add(fas, far)
function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
export default appWithTranslation(MyApp, nextI18NextConfig)
