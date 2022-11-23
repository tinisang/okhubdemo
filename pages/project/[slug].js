import { useEffect } from "react"
import { ExpandingLogo } from "../../components/SingleProject/ExpandingLogo"
import { Showcase } from "../../components/SingleProject/Showcase"
import { WhyOKHUB } from "../../components/SingleProject/WhyOKHUB"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function SingleProject(){
    useEffect(()=>{
       
        return ()=>{
            ScrollTrigger.refresh()
        }
})
    return (
        <>
            <div>

                <WhyOKHUB/>
                <ExpandingLogo/>
                <Showcase/>
            </div>
        </>
    )
}