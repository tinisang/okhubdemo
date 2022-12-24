import { News } from "../../components/News/News"
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { getFilterNews } from "../../api store/news";
import { useRouter } from "next/router";
import { getAllPostCagtegories } from "../../api store/news";
import { getAllDocuments } from "../../api store/documents";


export default  function NewsPage(props){

    const router = useRouter();
    
    
    return (
        <>
        <News
          allPostCategories={props.allPostCategories} 
          allInitialPosts = {props.allInitialPosts}
          totalPost = {props.totalPost}  
          allDocuments = {props.allDocuments}
          />
        </>
    )
}

  
export async function getStaticProps({ params }) {

 

    const allInitialPosts = await getFilterNews(5,null);
    const allPostCategories = await getAllPostCagtegories();
    const allDocuments = await getAllDocuments();

  
  
  
    return {
      props: {
        
        allInitialPosts: allInitialPosts?.data?.data?.posts?.nodes || null,
        allPostCategories: allPostCategories?.data?.data?.categories?.edges || null,
        totalPost :  allInitialPosts?.data?.data?.posts?.pageInfo?.offsetPagination?.total,
        allDocuments: allDocuments?.data?.data?.documents?.nodes || null
  
      },
      revalidate: 1,
    };
  }
  