export const isProtected = (route) => {
  let unprotectedRoutes = [
    '/','/signUp','/verifyOtp','/adminLogin'
  ];

  return !unprotectedRoutes.includes(route);
}