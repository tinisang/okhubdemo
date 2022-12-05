import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll"

export const ScrollTriggerProxy = ()=>{

    console.log('proxy config -----------------')
    
    const {scroll: locoScroll} = useLocomotiveScroll();

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        if (locoScroll){
            const element = locoScroll?.el;
           


            locoScroll.on("scroll", ScrollTrigger.update);

            // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            ScrollTrigger.scrollerProxy(element, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: element.style.transform ? "transform" : "fixed"
            });

            // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
            
            ScrollTrigger.defaults({ scroller: '[data-scroll-container]', markers:true });
            
        }
        
     
        return ()=>{
            ScrollTrigger.addEventListener("refresh", () => locoScroll?.update());
          
        }
    })

    return (
        <></>
    )

}