import { NewsDetail} from "../../components/NewsDetail/NewsDetail";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getAllPostSlug } from "../../api store/news";
import { getPostContentBySlug } from "../../api store/news";
import gsap from "gsap";
import Script from 'next/script'
export default function SingleNew(props){



    return (
      <>

        <div>

        <NewsDetail data={props.postContent}  />
   
          <Script src="https://www.videoask.com/embed/embed.js"></Script>
        </div>

      </>
      
    )
}


export async function getStaticPaths() {
    const allNew = await getAllPostSlug();
 
    const paths = allNew?.data?.data?.posts?.nodes.map((data) => ({
      params: { slug: data.slug },
    }));


    
    return {
      paths,
      fallback: true,
    };
  }



  
export async function getStaticProps({ params }) {

 

    const [postContent, res1] = await  Promise.all([getPostContentBySlug(params.slug)]);
  
  
    return {
      props: {
        postContent: postContent?.data?.data?.post || null,
       
  
      },
      revalidate: 1,
    };
  }
  