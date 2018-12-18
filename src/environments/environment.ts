const dev = (process.env.NODE_ENV === 'development') ? true : false;

export const environment = {
  production: false,
  api_url: dev ? 'http:localhost:3000/api/' : 'http:api-ramen.herokuapp.com/api/'
};
