import { News } from "../../components/News/News"
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default  function NewsPage(){
    const { scroll: locoScroll } = useLocomotiveScroll()
    if (locoScroll){

        locoScroll.on("scroll", function(){
              ScrollTrigger.update()
           
        
            });
    
          // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            ScrollTrigger.scrollerProxy('[data-scroll-container]', {
              scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
              }, // we don't have to define a scrollLeft because we're only scrolling vertically.
              getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
              },
              // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
              pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
            });
            ScrollTrigger.defaults({scroller: '[data-scroll-container]'})
        }
        if (locoScroll){

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();
        }
    
    return (
        <>
        <News/>
        </>
    )
}