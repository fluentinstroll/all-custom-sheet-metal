// import App from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

/*
const http = require('http');

const hostname = '5.183.11.44';
const port = 8090;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
}); 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
