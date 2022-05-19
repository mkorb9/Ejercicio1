import '../styles/globals.css';
import GlobalProvider from '../context/global';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Publicidad from '../components/Publicidad';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Publicidad/>
        <Component {...pageProps} />
        <Footer />
      </GlobalProvider>
    </>
    
  )
}

export default MyApp
