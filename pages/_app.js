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
import '../styles/Footer/FooterNav.css'
import '../styles/Button/Button.css'
import '../styles/NewsDetail/newsDetail.css'
import '../styles/cardNews.css'
import '../styles/NoteBtn.css'
import '../styles/cardReport.css'
import '../styles/HOME/ClientsSection.css'
import '../styles/HOME/ReviewSection.css'
import '../styles/HOME/Video.css'
import '../styles/News/News.css'
import '../styles/numberPage.css'
import '../styles/Project/project.css'
import '../styles/Button/ButtonCategory.css'
import '../styles/Project/cardProject.css'
import "../styles/Project/listProject.css"
import "../styles/Introduce/introduce.css"
import "../styles/Introduce/CardTeams.css"
import "../styles/Project/SingleProject.css"

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
