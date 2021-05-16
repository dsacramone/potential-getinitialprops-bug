import App from 'next/app';
import '../styles.css'
export default function MyApp(CTX) {
  console.log("CTX IS: ", CTX)
  const { Component, pageProps, random } = CTX;
  return <Component {...pageProps} random={random} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const response = await fetch('http://names.drycodes.com/10');
  const random = await response.json();

  return { ...appProps, random }
}
