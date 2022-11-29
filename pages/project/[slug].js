import { useEffect } from "react"
import { ExpandingLogo } from "../../components/SingleProject/ExpandingLogo"
import { Showcase } from "../../components/SingleProject/Showcase"
import { WhyOKHUB } from "../../components/SingleProject/WhyOKHUB"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { BackgroundHeader } from "../../components/SingleProject/BackgroundHeader";
import { TheProblem } from "../../components/SingleProject/TheProblem";
import { JudgeOkhub } from "../../components/SingleProject/JudgeOkhub";
export default function SingleProject(){
    useEffect(()=>{
       
        return ()=>{
            ScrollTrigger.refresh()
        }
})
    return (
        <>
            <div className="">
                <BackgroundHeader />
                <TheProblem />
                <WhyOKHUB/>
                <ExpandingLogo/>
                <Showcase/>
                <JudgeOkhub />
            </div>
        </>
    )
}