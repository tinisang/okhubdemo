import { Base } from '../components/Base';
import '../styles/Base.css'
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
import "../styles/Introduce/ItemWorkingCustomer.css"
import '../styles/Loading.css'
import '../styles/News/dropDownCss.css'
import "../styles/Smooth Scroll/Style.css"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { ScrollTriggerProxy } from '../components/ScrollTriggerProxy';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Refresh } from '../components/RefreshScrollTriger';


function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const Layout = Component.Layout ? Component.Layout : Base;
  const variants = {
    hidden: { opacity: 0, y: 0, x: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
}



  useEffect(()=>{
    // ScrollTrigger.refresh()


  })


  return (
    <>
      <Layout >

      <AnimatePresence mode='wait' initial={false}>
        <motion.div 
        key={router.route}
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" 
        // onAnimationComplete={handleComplete}
        // data-scroll-section
        >
     

        <Component {...pageProps} />
       

        </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}



export default MyApp
