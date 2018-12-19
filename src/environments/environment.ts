// const dev = (Process.env.NODE_ENV === 'development') ? true : false;
const dev = true;

export const environment = {
  production: false,
  api_url: dev ? 'http:localhost:3000/api/' : 'http:api-ramen.herokuapp.com/api/'
};
