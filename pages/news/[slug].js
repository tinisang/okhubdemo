import { NewsDetail} from "../../components/NewsDetail/NewsDetail";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import gsap from "gsap";

export default function SingleNew(){

    
    useEffect(()=>{
        return ()=>{
            ScrollTrigger.refresh()

        }
})
    return (
        <div>

        <NewsDetail/>
        </div>
      
    )
}