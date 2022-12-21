import { NewsDetail} from "../../components/NewsDetail/NewsDetail";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getAllPostSlug } from "../../api store/news";
import { getPostContentBySlug } from "../../api store/news";
import { getRelatedNews } from "../../api store/news";
import gsap from "gsap";
import Script from 'next/script'
export default function SingleNew(props){

  console.log(props)

    return (
      <>

        <div>

        { props.postContent && <NewsDetail data={props.postContent} relatedPosts={props.relatedPosts}  />}
   
   
        </div>

      </>
      
    )
}


export async function getStaticPaths() {
    const allNew = await getAllPostSlug();
    const data = await allNew;
 
    const paths = data?.data?.data?.posts?.nodes.map((data) => ({
      params: { slug: data.slug },
    }));


    
    return {
      paths,
      fallback: true,
    };
  }



  
export async function getStaticProps({ params }) {

 

    const postContent = await getPostContentBySlug(params.slug);
    const relatedNewsCategories = postContent.data?.data?.post?.categories?.nodes?.map((value) => value.slug)
    const allRelatedPosts = await getRelatedNews(7, relatedNewsCategories)
  
  
    return {
      props: {
        postContent: postContent?.data?.data?.post || null,
        relatedPosts: allRelatedPosts?.data?.data?.posts?.nodes || null
       
  
      },
      revalidate: 1,
    };
  }
  