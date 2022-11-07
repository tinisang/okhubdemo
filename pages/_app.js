import { Base } from '../components/Base';
import '../styles/globals.css'
import '../styles/HOME/OurServices.css'
import '../styles/Header/Header.css'
import '../styles/HOME/HeroSection.css'
import '../styles/HOME/IconicProjects.css'
// import '../styles/Footer/Footer.js'
import '../styles/Footer/Footer.css'
import '../styles/Footer/FooterForm.css'
import '../styles/Footer/FooterContact.css'


function MyApp({ Component, pageProps }) {
  // console.log(headerData);
  const Layout = Component.Layout ? Component.Layout : Base;
  // const router = useRouter();

  return (
    <>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </>
  );
}



export default MyApp
