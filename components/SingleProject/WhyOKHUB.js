import gsap from "gsap"
import { useEffect, useRef } from "react";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export const WhyOKHUB = ({data})=>{

    const scrollItem = useRef()
    const reasonItems = useRef([])

    reasonItems.current=[]

    useEffect(()=>{

        reasonItems.current= reasonItems.current.filter((value) => value != null)
        
 

        var screenHeight = window.innerHeight;
        
        var ItemScrollHeight = scrollItem.current.scrollHeight

        
        
        var tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.why-okhub',
                // markers:true,
                start:'top 0%',
                end:'150% 0%',
                pin:'.why-okhub',
                scrub:true
            }
        })

        tl.to(scrollItem.current,{
            y: -(ItemScrollHeight - screenHeight +128)
        })

        reasonItems.current.forEach((element,index)=>{
            var tl1 = gsap.timeline({
                scrollTrigger:{
                    trigger:element,
                    // markers:true,
                    start:'top 80%',
                    end:'bottom 80%',
                    scrub:1
                }
            })

            tl1.to(element,{
                opacity:1
            })
        })

        

        return ()=>{
            if(tl.scrollTrigger){tl.scrollTrigger.kill()}
            tl.kill()
            reasonItems.current.forEach((element,index)=>{
                gsap.killTweensOf(element)
            })
        }
    })


    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
    
    
    return (
        <>
            <div className="container-padding why-okhub">
                <div className="why-okhub-wrapper">
                <div className="column-1" ref={scrollItem}>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">01</div>
                        <div className="title">Tốc độ</div>
                        <div className="content">
                            Sau khi nhận thấy vấn đề mà GUMAC gặp phải, chúng tôi đã cùng nhau brainstorm, phác thảo và ra được 2 bản thiết kế concept nhận được đánh giá cao.
                        </div>

                    </div>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">02</div>
                        <div className="title">Sáng tạo</div>
                        <div className="content">
                        Xuyên suốt quá trình thiết kế giao diện, chúng tôi liên tục
đề xuất những idea mới, mang xu hướng thiết kế hiện đại
và nhận được nhiều lời khen từ phía GUMAC.
                        </div>

                    </div>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">03</div>
                        <div className="title">Nhiệt tình và Trách nhiệm</div>
                        <div className="content">
                        Đã có thời điểm team OkHub phải Overtime thâu đêm để đẩy nhanh tiến độ của dự án. Account của chúng tôi liên tục hỗ trợ team GUMAC 24/24.
                        </div>

                    </div>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">04</div>
                        <div className="title">Tốc độ</div>
                        <div className="content">
                            Sau khi nhận thấy vấn đề mà GUMAC gặp phải, chúng tôi đã cùng nhau brainstorm, phác thảo và ra được 2 bản thiết kế concept nhận được đánh giá cao.
                        </div>

                    </div>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">05</div>
                        <div className="title">Tốc độ</div>
                        <div className="content">
                            Sau khi nhận thấy vấn đề mà GUMAC gặp phải, chúng tôi đã cùng nhau brainstorm, phác thảo và ra được 2 bản thiết kế concept nhận được đánh giá cao.
                        </div>

                    </div>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">06</div>
                        <div className="title">Tốc độ</div>
                        <div className="content">
                            Sau khi nhận thấy vấn đề mà GUMAC gặp phải, chúng tôi đã cùng nhau brainstorm, phác thảo và ra được 2 bản thiết kế concept nhận được đánh giá cao.
                        </div>

                    </div>
                    <div className="reason-item" ref={el => reasonItems.current.push(el)}>
                        <div className="index">07</div>
                        <div className="title">Tốc độ</div>
                        <div className="content">
                            Sau khi nhận thấy vấn đề mà GUMAC gặp phải, chúng tôi đã cùng nhau brainstorm, phác thảo và ra được 2 bản thiết kế concept nhận được đánh giá cao.
                        </div>

                    </div>
                </div>

                <div className="column-2">
                <span className="reason_text">

                    Lý do <span className="client-name">GUMAC</span> tin tưởng <br></br>và lựa chọn OKHUB
                <div className="the-trust">
                    The Trust
                </div>
                </span>

                
                </div>

                </div>
            </div>
        </>
    )
}