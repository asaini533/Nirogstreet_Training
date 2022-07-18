import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getAuth = () => {
  const auth = cookies.get('AUTH');
  
  return auth
}

export const setAuth = (authObject) => {
  cookies.set('AUTH', JSON.stringify(authObject), { path: '/' });
  return authObject;
}

export const removeAuth = () => {
  cookies.remove('AUTH', { path: '/' });
  return;
}


export const isInRole = (role, user) => {
  return user.roles && user.roles.includes(role);
}

export const isAuthenticated = (user) => {
  return user != null && user.token;
}


export const getMenu = (user) => {

}

const menu = {
  admin: {
    main: [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Manage Client', url: '/clients' },
      { name: 'Manage Users', url: '/users' },
    ]
  }
}