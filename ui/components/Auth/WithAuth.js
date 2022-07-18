import { getAuth, isAuthenticated } from '../../services/identity.service'
import { isProtected } from "./Security";

const isBrowser = () => typeof window !== "undefined";

const WithAuth = ({ router, children }) => {  
    const auth = getAuth();
    if (isBrowser() && !isAuthenticated(auth) && isProtected(router.pathname)) {
      router.replace('/');
    }
  return children;
};

export default WithAuth;
