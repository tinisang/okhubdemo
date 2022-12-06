import { useEffect } from "react"
import { ExpandingLogo } from "../../components/SingleProject/ExpandingLogo"
import { Showcase } from "../../components/SingleProject/Showcase"
import { WhyOKHUB } from "../../components/SingleProject/WhyOKHUB"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { BackgroundHeader } from "../../components/SingleProject/BackgroundHeader";
import { TheProblem } from "../../components/SingleProject/TheProblem";
import { JudgeOkhub } from "../../components/SingleProject/JudgeOkhub";
import { useLocomotiveScroll } from "react-locomotive-scroll";
export default function SingleProject(){
  // ScrollTrigger.refresh()
  const { scroll : locoScroll} = useLocomotiveScroll()
  useEffect(()=>{
    // ScrollTrigger.addEventListener("refresh", () => locoScroll?.update());
    ScrollTrigger.refresh();
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