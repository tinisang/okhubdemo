import { Base } from '../components/Base';

import '../styles/globals.css'
import '../styles/HOME/OurServices.css'


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
