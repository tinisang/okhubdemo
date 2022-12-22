import { News } from "../../components/News/News"
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { getFilterNews } from "../../api store/news";
import { getAllPostCagtegories } from "../../../../TIM PROJECT/final tim/tim/store/action/new";
import { useRouter } from "next/router";


export default  function NewsPage(props){

    const router = useRouter();
    
    
    return (
        <>
        <News
          allPostCategories={props.allPostCategories} 
          allInitialPosts = {props.allInitialPosts}
          totalPost = {props.totalPost}  
          />
        </>
    )
}

  
export async function getStaticProps({ params }) {

 

    const allInitialPosts = await getFilterNews(5,null);
    const allPostCategories = await getAllPostCagtegories()
  
  
  
    return {
      props: {
        
        allInitialPosts: allInitialPosts?.data?.data?.posts?.nodes || null,
        allPostCategories: allPostCategories?.data?.data?.categories?.edges || null,
        totalPost :  allInitialPosts?.data?.data?.posts?.pageInfo?.offsetPagination?.total
  
      },
      revalidate: 1,
    };
  }
  