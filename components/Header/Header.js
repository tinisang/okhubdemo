import logoNewsDetail from "../../public/imgs/logoNewsDetail.png";
import menuNewsDetail from "../../public/imgs/menuNewsDetail.png";

import whitelogo from '../../public/imgs/whitelogo.svg'

import Image from "next/image";
import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { DropDown } from "./Dropdown";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import gsap from "gsap";

export const Header = () => {

  const {scroll : locoScroll} = useLocomotiveScroll()
  const [isOpen,setOpen] = useState(false)
  const header = useRef()

  const handleOpenMenu= ()=>{
     
    header.current.style.transform = "translateY(0%)"
          header.current.style.background = "transparent"
    setOpen(!isOpen)
  }


  
  const handleMenuItemCliked = ()=>{
    // var routChangeDiv = document.querySelector('.route-change');
    // routChangeDiv.classList.add('loading')
    if (isOpen){
      setOpen(!isOpen)

    }
  }


  useEffect(()=>{
    var fakeScrollY = 0;

    locoScroll?.on('scroll',function(){
      var thisScrollY = locoScroll.scroll.instance.scroll.y;
      var dropdown = document.querySelector('.dropdown-section')
      header.current.style.top= thisScrollY+'px'
      dropdown.style.top= thisScrollY+'px'

      if (thisScrollY > 0) {
    
     
      } else {
 
      
      }

      /*---SCROLL UP----*/
      if (fakeScrollY > thisScrollY) {

        header.current.style.transform = "translateY(0%)"
        header.current.style.background = "white"
        
      }
      /*---SCROLL DOWN----*/
      if (fakeScrollY < thisScrollY && thisScrollY > 300) {
        
        header.current.style.background = "white"
        header.current.style.transform = "translateY(-100%)"
        
      }
      
      if (fakeScrollY == thisScrollY){

      }
      
      if (thisScrollY == 0) {
        header.current.style.transform = "translateY(0%)"
        header.current.style.background = "transparent"
      }
      
      if (isOpen){
        
        header.current.style.transform = "translateY(0%)"
        header.current.style.background = "transparent"
        }
    fakeScrollY = thisScrollY
    })
  
    



    
        var tl = gsap.timeline({
          repeat:3,
          
        });
    
        tl
          .from('.logo-icon .center',{
            opacity: 0.3,
          })
          .from('.logo-icon .radius1',{
            opacity: 0.3,
          })
          .from('.logo-icon .radius2',{
            opacity: 0.3,
          })

    return ()=>{
      tl.kill()
  
    }
    
  })
  
  
  return (
    <>
    <div className="header-wrapper">

    
      <div className={" container-padding header-section "+ (isOpen ? 'opening' : '')} ref={header} >
          <div className="logo-area">
              <Link href='/'>
              <div className="logo-icon" onClick={handleMenuItemCliked}>
               
              {
                isOpen ?
                <svg width="175" height="74" viewBox="0 0 175 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="center" d="M27.2502 54.5599C27.6039 54.7548 27.997 54.8676 28.4002 54.8899C28.9541 54.9267 29.5063 54.7968 29.9857 54.517C30.4651 54.2372 30.8498 53.8202 31.0902 53.3199C31.4027 52.6496 31.4383 51.8831 31.1893 51.1867C30.9403 50.4903 30.4268 49.9202 29.7602 49.5999C29.2376 49.317 28.638 49.209 28.0495 49.2918C27.461 49.3745 26.9145 49.6438 26.4902 50.0599C25.9963 50.5378 25.7001 51.1838 25.6602 51.8699C25.6238 52.4262 25.756 52.9806 26.0397 53.4605C26.3234 53.9404 26.7453 54.3236 27.2502 54.5599Z" fill="url(#paint0_linear_518_2518)"/>
                  <path className="radius1" d="M26.5904 44.6898C26.6058 44.7611 26.6258 44.8312 26.6504 44.8998C26.6859 44.9838 26.7294 45.0642 26.7804 45.1398C26.7804 45.1398 26.7804 45.2098 26.8304 45.2398C26.8957 45.336 26.9694 45.4264 27.0504 45.5098C27.4256 45.8925 27.9346 46.1148 28.4704 46.1298H28.6604C30.159 46.2541 31.5654 46.9045 32.6305 47.966C33.6957 49.0275 34.351 50.4316 34.4804 51.9298C34.4816 52.312 34.5876 52.6866 34.7868 53.0128C34.986 53.339 35.2709 53.6043 35.6104 53.7798C35.9201 53.9377 36.2628 54.0199 36.6104 54.0198C36.7867 54.0185 36.9618 53.9915 37.1304 53.9398C37.5754 53.8267 37.9702 53.5688 38.2526 53.2067C38.535 52.8447 38.689 52.399 38.6904 51.9398C38.6904 51.9398 38.6904 51.9398 38.6904 51.8698C38.6132 49.3478 37.5975 46.9455 35.8423 45.1329C34.0871 43.3203 31.7186 42.2281 29.2004 42.0698C29.0004 42.0698 28.8004 42.0698 28.6004 42.0698H28.4904C28.0157 42.0891 27.5623 42.2719 27.2069 42.5871C26.8516 42.9024 26.6161 43.3308 26.5404 43.7998C26.5404 43.9098 26.5404 44.0198 26.5404 44.1298C26.5256 44.2661 26.5256 44.4036 26.5404 44.5398C26.5536 44.5909 26.5703 44.641 26.5904 44.6898Z" fill="url(#paint1_linear_518_2518)"/>
                  <path className="radius2" d="M47.0998 51.3399C46.92 46.9146 45.1746 42.697 42.1747 39.4388C39.1747 36.1806 35.1152 34.0937 30.7198 33.5499H30.4998H30.2398C29.5073 33.5437 28.7979 33.8057 28.2452 34.2865C27.6926 34.7673 27.335 35.4336 27.2398 36.1599C27.23 36.2997 27.23 36.4401 27.2398 36.5799C27.2398 36.5799 27.2398 36.5799 27.2398 36.6499C27.2405 36.8112 27.2573 36.972 27.2898 37.1299C27.2898 37.1299 27.2898 37.1799 27.2898 37.1999C27.3225 37.3462 27.366 37.49 27.4198 37.6299V37.7099C27.473 37.8446 27.5365 37.975 27.6098 38.0999V38.1599C27.6883 38.2912 27.7787 38.4151 27.8798 38.5299C27.9787 38.6471 28.0857 38.7574 28.1998 38.8599H28.2498C28.3639 38.9545 28.4841 39.0414 28.6098 39.1199H28.6698C28.7981 39.1932 28.9318 39.2568 29.0698 39.3099H29.1298C29.2768 39.3656 29.4271 39.4124 29.5798 39.4499C31.6674 39.6478 33.672 40.3664 35.4098 41.5399C36.9955 42.5863 38.3168 43.9863 39.2698 45.6299C40.2924 47.3788 40.8821 49.3468 40.9898 51.3699C40.9898 51.4699 40.9898 51.5799 40.9898 51.6799C41.0082 52.1936 41.1524 52.695 41.4098 53.1399C41.4698 53.2399 41.5398 53.3399 41.6098 53.4399C41.6598 53.4999 41.7098 53.5699 41.7698 53.6299L41.8798 53.7199C41.9115 53.7583 41.9485 53.792 41.9898 53.8199L42.0498 53.8799H42.1098C42.4653 54.1541 42.8794 54.3424 43.3198 54.4299C43.4867 54.4707 43.658 54.4909 43.8298 54.4899H43.9398C44.7354 54.4899 45.4985 54.1738 46.0611 53.6112C46.6237 53.0486 46.9398 52.2856 46.9398 51.4899V51.6899C47.1198 51.5499 47.1098 51.4399 47.0998 51.3399Z" fill="url(#paint2_linear_518_2518)"/>
                  <path d="M36.87 60.3799C36.45 60.6332 36.02 60.8732 35.58 61.0999L35.26 61.2699C31.808 63.0276 27.9876 63.9395 24.1138 63.9305C20.2401 63.9215 16.424 62.9919 12.9801 61.2182C9.5363 59.4445 6.5634 56.8776 4.30658 53.7292C2.04976 50.5807 0.573658 46.9409 0 43.1099C0.0185036 47.2795 0.693435 51.4202 2 55.3799C3.67654 60.7352 7.04073 65.4044 11.59 68.6899C15.3423 71.2711 19.7408 72.7534 24.29 72.9699C24.8 72.9699 25.29 73.0199 25.81 73.0199C30.1473 72.9987 34.3807 71.6901 37.9733 69.26C41.566 66.8299 44.3561 63.3877 45.99 59.3699L43.64 58.9799C41.2886 58.6268 38.8885 59.1232 36.87 60.3799Z" fill="url(#paint3_linear_518_2518)"/>
                  <path d="M31.0797 62.46C30.618 62.5085 30.1539 62.5319 29.6897 62.53C26.8859 62.492 24.1695 61.5484 21.9459 59.8401C19.7223 58.1317 18.1107 55.7502 17.3515 53.0509C16.5923 50.3516 16.7263 47.4791 17.7334 44.8621C18.7405 42.2452 20.5667 40.024 22.9397 38.53C23.7545 37.9835 24.403 37.2231 24.814 36.3323C25.225 35.4414 25.3827 34.4546 25.2697 33.48C25.1497 30.05 22.9997 26.86 21.0697 23.23C20.5707 22.2892 20.1493 21.3093 19.8097 20.3C19.289 18.8061 18.9303 17.2605 18.7397 15.69C18.6309 14.8876 18.5674 14.0796 18.5497 13.27C18.5497 13.07 18.5497 12.88 18.5497 12.68C18.5157 11.1566 18.6498 9.63402 18.9497 8.14C19.5381 5.19547 20.7672 2.41645 22.5497 0C22.2497 0.11 21.9697 0.240003 21.6797 0.370003C20.3584 1.04454 19.0913 1.82018 17.8897 2.69C17.6107 2.88392 17.3436 3.09429 17.0897 3.32C15.636 4.54174 14.4016 6.00273 13.4397 7.64C13.2997 7.87 12.9697 8.46 12.9597 8.47C12.9497 8.48 12.7897 8.8 12.7097 8.96L12.5097 9.34C10.318 13.9197 9.85975 19.1384 11.2197 24.03C11.4722 24.922 11.7898 25.7943 12.1697 26.64C12.5913 27.5903 13.0861 28.5064 13.6497 29.38C11.4775 26.8026 9.74735 23.8831 8.52967 20.74C8.26967 20.07 8.01967 19.4 7.80967 18.74C7.60967 18.21 7.42967 17.66 7.25967 17.11C6.89967 17.78 6.52967 18.46 6.16967 19.17C5.28461 20.8941 4.79281 22.793 4.72967 24.73C4.72967 24.87 4.72967 25.02 4.72967 25.16C4.76177 26.8168 5.01741 28.4616 5.48966 30.05C6.21263 32.4663 7.25876 34.7738 8.59966 36.91C8.59966 36.91 6.02967 34.53 5.02967 33.36C4.71967 33 4.42967 32.62 4.14966 32.24C3.41966 31.24 2.74967 30.24 2.02967 29.24C1.25421 31.7089 0.701979 34.2424 0.379661 36.81C0.108083 38.912 -0.0122269 41.0308 0.01966 43.15C0.593318 46.981 2.06942 50.6209 4.32624 53.7693C6.58306 56.9177 9.55597 59.4846 12.9998 61.2583C16.4436 63.032 20.2598 63.9617 24.1335 63.9707C28.0072 63.9796 31.8276 63.0677 35.2797 61.31C33.9554 61.9299 32.535 62.3188 31.0797 62.46Z" fill="url(#paint4_linear_518_2518)"/>
                  <path d="M69.6601 64.4799C67.9688 64.5021 66.2899 64.1895 64.72 63.5599C63.2495 62.9721 61.9135 62.0921 60.7929 60.9731C59.6722 59.8542 58.7901 58.5195 58.2 57.0499C56.9737 53.8639 56.9737 50.336 58.2 47.1499C58.7909 45.6824 59.6718 44.3491 60.7901 43.2299C61.9142 42.1106 63.2502 41.2267 64.72 40.6299C67.9026 39.4033 71.4275 39.4033 74.61 40.6299C76.0782 41.2243 77.4115 42.1085 78.53 43.2299C79.6545 44.3497 80.5331 45.6916 81.11 47.1699C82.3107 50.3538 82.3107 53.866 81.11 57.0499C80.5279 58.5197 79.6497 59.854 78.53 60.9699C77.4109 62.0882 76.0776 62.9691 74.61 63.5599C73.037 64.1905 71.3546 64.5032 69.6601 64.4799ZM69.6601 59.0199C70.8165 59.0503 71.958 58.7527 72.9525 58.1617C73.947 57.5706 74.7539 56.7102 75.28 55.6799C75.8258 54.5654 76.1095 53.3409 76.1095 52.0999C76.1095 50.859 75.8258 49.6344 75.28 48.5199C74.7525 47.4901 73.9455 46.6296 72.9516 46.0371C71.9576 45.4447 70.8169 45.1441 69.6601 45.1699C68.4858 45.1515 67.3295 45.4596 66.3201 46.0599C65.3418 46.6497 64.5484 47.502 64.03 48.5199C63.497 49.6381 63.2204 50.8612 63.2204 52.0999C63.2204 53.3387 63.497 54.5618 64.03 55.6799C64.5484 56.6979 65.3418 57.5501 66.3201 58.1399C67.3305 58.7367 68.4867 59.0414 69.6601 59.0199Z" fill="white"/>
                  <path d="M85.9404 64.1396V38.8896H91.4004V52.4397L97.6404 46.0296H104.84L96.4804 53.8696L104.67 64.1396H98.2204L92.9004 57.2197L91.4004 58.6096V64.1396H85.9404Z" fill="white"/>
                  <path d="M107.87 64.1398V40.2598H113.67V49.6898H122.67V40.3098H128.47V64.1898H122.67V54.8798H113.67V64.1898L107.87 64.1398Z" fill="white"/>
                  <path d="M140.05 64.5198C139.174 64.5656 138.299 64.4162 137.488 64.0824C136.676 63.7487 135.95 63.2388 135.36 62.5898C134.154 61.0689 133.553 59.1568 133.67 57.2198V46.0298H139.16V56.4698C139.106 57.3919 139.383 58.3029 139.94 59.0398C140.214 59.3554 140.556 59.6041 140.941 59.7671C141.326 59.93 141.742 60.0027 142.16 59.9798C142.589 59.9963 143.018 59.926 143.42 59.7731C143.822 59.6202 144.189 59.3878 144.5 59.0898C144.798 58.798 145.032 58.4471 145.187 58.0597C145.342 57.6723 145.414 57.2568 145.4 56.8398V46.0298H150.9V64.1398H145.75L145.61 61.8198C144.973 62.6576 144.156 63.3412 143.22 63.8198C142.234 64.3023 141.147 64.5423 140.05 64.5198Z" fill="white"/>
                  <path d="M166.66 64.5197C165.545 64.5306 164.44 64.3021 163.42 63.8497C162.509 63.4718 161.685 62.9101 161 62.1996L160.86 64.1096H155.78V38.8896H161.27V47.8896C161.908 47.1955 162.685 46.6435 163.55 46.2697C164.493 45.8467 165.517 45.6319 166.55 45.6396C168.036 45.6152 169.494 46.0443 170.73 46.8696C171.969 47.7088 172.962 48.8613 173.61 50.2097C174.341 51.7202 174.704 53.3821 174.67 55.0596C174.719 56.745 174.377 58.4187 173.67 59.9496C173.039 61.3026 172.055 62.46 170.82 63.2997C169.591 64.1223 168.139 64.5481 166.66 64.5197ZM165.23 59.9097C165.789 59.9291 166.345 59.8213 166.856 59.5943C167.367 59.3674 167.82 59.0273 168.18 58.5997C168.963 57.595 169.357 56.3416 169.29 55.0697C169.358 53.813 168.963 52.5751 168.18 51.5896C167.819 51.1633 167.366 50.8247 166.855 50.5994C166.344 50.3742 165.788 50.2683 165.23 50.2897C164.665 50.2672 164.101 50.3725 163.582 50.5975C163.063 50.8226 162.601 51.1617 162.23 51.5896C161.441 52.5718 161.042 53.8112 161.11 55.0697C161.042 56.3433 161.441 57.5981 162.23 58.5997C162.6 59.0295 163.061 59.3705 163.581 59.5973C164.1 59.8241 164.664 59.9308 165.23 59.9097Z" fill="white"/>
                  <defs>
                  <linearGradient id="paint0_linear_518_2518" x1="26.3302" y1="51.0499" x2="36.5102" y2="55.8799" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F2F2F2"/>
                  <stop offset="0.43" stopColor="#B3B3B3"/>
                  <stop offset="1" stopColor="#999999"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_518_2518" x1="32.0204" y1="45.9298" x2="44.9104" y2="62.3098" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.43" stopColor="#B3B3B3"/>
                  <stop offset="1" stopColor="#808080"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_518_2518" x1="36.1798" y1="40.4299" x2="50.0498" y2="61.5099" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.43" stopColor="#B3B3B3"/>
                  <stop offset="1" stopColor="#808080"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_518_2518" x1="1.96" y1="56.5399" x2="43.25" y2="62.8699" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.43" stopColor="#B3B3B3"/>
                  <stop offset="1" stopColor="#B3B3B3"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_518_2518" x1="18.4197" y1="17.64" x2="17.0897" y2="74.58" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.43" stopColor="#E6E6E6"/>
                  <stop offset="1" stopColor="#B3B3B3"/>
                  </linearGradient>
                  </defs>
                  </svg>


                :
              <svg width="66" height="102" viewBox="0 0 66 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="center" d="M37.9066 75.8981C38.3858 76.1518 38.9214 76.3209 39.5134 76.3632C41.1343 76.4619 42.586 75.5457 43.2484 74.1645C43.4598 73.7275 43.5867 73.2484 43.6149 72.741C43.7135 71.106 42.7974 69.6543 41.402 69.0059C40.9228 68.7381 40.3872 68.5831 39.7953 68.5408C38.6536 68.4703 37.6107 68.8932 36.8496 69.6402C36.1871 70.2885 35.7502 71.1624 35.6938 72.1631C35.5811 73.7839 36.5113 75.2357 37.9066 75.8981Z" fill="url(#paint0_radial_1455_3177)"/>
                  <path className="radius1" d="M37.033 62.1279C37.0612 62.2266 37.0894 62.3252 37.1176 62.4098C37.1739 62.5225 37.2303 62.6353 37.3008 62.7481C37.329 62.7904 37.3431 62.8467 37.3712 62.889C37.4558 63.0299 37.5686 63.1427 37.6813 63.2696C37.6954 63.2837 37.6954 63.2978 37.7095 63.3119C38.2169 63.8333 38.9075 64.1434 39.6686 64.1716V64.1857C39.7532 64.1857 39.8519 64.1857 39.9364 64.1998C41.1626 64.2703 42.3043 64.6226 43.3191 65.1864C46.0252 66.4549 47.8998 69.161 48.0125 72.2759C48.0125 72.2618 48.0125 72.2336 48.0125 72.2195C48.0125 73.347 48.6609 74.3055 49.5911 74.7847C49.9857 74.9961 50.4368 75.123 50.916 75.123C51.1697 75.123 51.4093 75.0807 51.6489 75.0243C52.8751 74.7001 53.7912 73.6149 53.8194 72.29C53.8194 72.2618 53.8194 72.2477 53.8194 72.2195C53.8194 72.1913 53.8053 72.1631 53.8053 72.1349C53.5939 64.9468 47.928 58.9567 40.613 58.4916C40.3311 58.4775 40.0492 58.4634 39.7814 58.4634C39.7673 58.4634 39.7532 58.4634 39.7391 58.4634C39.725 58.4634 39.725 58.4634 39.7109 58.4634C39.6827 58.4634 39.6545 58.4634 39.6404 58.4634L39.6264 58.4774C38.2451 58.5338 37.1316 59.5486 36.9202 60.8876C36.892 61.0286 36.8779 61.1836 36.8779 61.3386C36.8779 61.536 36.892 61.7192 36.9343 61.9024C36.9766 61.9588 37.0048 62.0434 37.033 62.1279Z" fill="url(#paint1_linear_1455_3177)"/>
                  <path className="radius2" d="M65.5048 71.4163C65.5048 71.4022 65.5048 71.374 65.5048 71.3599V71.3458C64.9974 58.5199 55.2018 48.1465 42.7282 46.6243C42.6296 46.6102 42.5309 46.5961 42.4182 46.582C42.2913 46.5679 42.1786 46.5679 42.0517 46.5679C39.9235 46.5679 38.1757 48.1465 37.8938 50.1901C37.8657 50.3875 37.8516 50.5707 37.8516 50.768C37.8516 50.7962 37.8516 50.8385 37.8516 50.8666C37.8516 51.0922 37.8798 51.3177 37.922 51.5291C37.922 51.5573 37.9361 51.5996 37.9361 51.6278C37.9784 51.8392 38.0348 52.0365 38.1053 52.2197C38.1194 52.262 38.1335 52.2902 38.1476 52.3325C38.218 52.5298 38.3167 52.713 38.4154 52.8822C38.4294 52.9104 38.4435 52.9385 38.4576 52.9526C38.5704 53.1359 38.6831 53.305 38.8241 53.4741C38.965 53.6433 39.1201 53.7842 39.2751 53.9252C39.3033 53.9392 39.3174 53.9674 39.3456 53.9815C39.5006 54.1084 39.6697 54.2352 39.8389 54.3339C39.8671 54.348 39.8953 54.3762 39.9375 54.3902C40.1208 54.4889 40.304 54.5876 40.4872 54.658C40.5154 54.6721 40.5436 54.6722 40.5718 54.6863C40.7691 54.7567 40.9805 54.8272 41.206 54.8695L41.2201 54.8977C44.194 55.1937 46.9706 56.2084 49.3244 57.8011C51.5372 59.2528 53.3695 61.212 54.6803 63.4953C56.0615 65.849 56.9213 68.5692 57.0763 71.4727C57.0904 71.6136 57.0904 71.7546 57.0904 71.9096C57.1045 72.6566 57.3159 73.3472 57.6683 73.9533C57.6683 73.9533 57.6683 73.9533 57.6683 73.9674C57.7529 74.1083 57.8515 74.2493 57.9502 74.3902C57.9643 74.4184 57.9925 74.4325 58.0066 74.4607C58.0207 74.4748 58.0348 74.4889 58.0348 74.503C58.0348 74.503 58.0347 74.5171 58.0488 74.5171C58.1193 74.6016 58.2039 74.7003 58.2744 74.7848C58.3166 74.8271 58.373 74.8694 58.4153 74.9117C58.4717 74.954 58.514 75.0104 58.5704 75.0526C58.5985 75.0808 58.6267 75.109 58.6549 75.1231C58.6831 75.1372 58.7113 75.1513 58.7254 75.1795C59.2187 75.5459 59.7825 75.8279 60.4026 75.9547C60.6281 75.997 60.8677 76.0252 61.1073 76.0393C61.1637 76.0393 61.206 76.0533 61.2624 76.0533C63.5457 76.0533 65.4061 74.2211 65.4625 71.9519C65.4625 71.9237 65.4528 72.1808 65.4528 72.1526C65.5232 72.0117 65.5189 71.5573 65.5048 71.4163Z" fill="url(#paint2_linear_1455_3177)"/>
                  <path d="M51.2818 83.9886C50.704 84.341 50.0979 84.6792 49.4919 85.0034C49.3368 85.088 49.1959 85.1585 49.0408 85.243C44.4179 87.5968 39.1889 88.9358 33.6357 88.9358C16.5814 88.9358 2.45884 76.3635 0.0205078 59.9858C0.147357 68.9358 2.12058 75.3769 2.75483 77.0401C2.75483 77.0401 2.75482 77.0542 2.76891 77.0542C5.23543 84.3692 9.53424 90.8949 16.1727 95.5601C21.4017 99.2247 27.5328 101.142 33.8189 101.508C34.5236 101.55 35.2283 101.578 35.933 101.578C46.6166 101.536 56.0035 95.983 61.3875 87.6109C62.4023 86.0323 63.2762 84.3692 63.9809 82.6074L60.711 82.0718C57.427 81.508 54.1148 82.2691 51.2818 83.9886Z" fill="url(#paint3_linear_1455_3177)"/>
                  <path d="M49.4932 84.9894C50.0992 84.6652 50.6912 84.3411 51.2831 83.9746C51.1845 84.031 51.0717 84.0873 50.9731 84.1578C50.4938 84.4679 49.9865 84.7357 49.4932 84.9894Z" fill="#00AEEF"/>
                  <path d="M43.2206 86.8779C42.5864 86.9484 41.938 86.9765 41.2897 86.9765C31.3391 86.9765 23.263 78.9146 23.263 68.9498C23.263 62.4382 26.7161 56.73 31.9028 53.5587C34.5385 51.952 35.2291 49.1331 35.1305 46.5397C34.9613 41.7617 31.9733 37.322 29.2954 32.2903C28.6048 30.9936 28.041 29.6265 27.5477 28.217C26.8288 26.1733 26.3355 24.0169 26.0537 21.804C25.9127 20.6906 25.8141 19.5771 25.7859 18.4496C25.7859 18.1818 25.7859 17.914 25.7859 17.6321C25.7295 15.5602 25.9127 13.4461 26.3355 11.3178C27.1953 7.06129 28.943 3.22762 31.3391 0C30.9303 0.155038 30.5357 0.338259 30.141 0.521486C27.9 1.55038 25.0107 3.65046 24.8697 3.74912C24.4751 4.01691 24.0945 4.32698 23.7563 4.62296C21.7831 6.25791 20.0635 8.28752 18.6682 10.6272C18.485 10.9514 18.0198 11.7688 18.0057 11.7829C17.8789 12.0085 17.7661 12.2339 17.6534 12.4736C17.5688 12.6427 17.4702 12.8118 17.3856 12.995V13.0091C15.2996 17.2657 14.3553 22.0577 14.5526 26.8216C14.6513 29.0627 14.9755 31.2896 15.5815 33.446C15.9339 34.6863 16.3708 35.8984 16.8923 37.0824C17.4843 38.4072 18.1749 39.6758 18.9642 40.8879C17.2588 38.8583 15.7366 36.6736 14.4399 34.348C13.4533 32.5862 12.5935 30.754 11.8465 28.8653C11.48 27.9492 11.1418 27.019 10.8458 26.0605C10.578 25.3135 10.3243 24.5525 10.0847 23.7914C9.5773 24.7075 9.0699 25.6659 8.5625 26.6525C7.35039 29.0345 6.63157 31.6842 6.5611 34.3903C6.5611 34.5877 6.54702 34.785 6.54702 34.9964C6.54702 35.0105 6.54702 35.0387 6.54702 35.0528C6.5752 37.3502 6.95574 39.6335 7.58999 41.8463C8.5625 45.2289 10.1129 48.4565 11.917 51.3882C11.917 51.3882 8.35109 48.0901 6.95574 46.4551C6.53291 45.9477 6.12417 45.4404 5.74362 44.9048C4.71473 43.5235 3.7986 42.0718 2.7979 40.6624C1.65625 44.3128 0.923337 47.8505 0.500505 51.1909C0.105862 54.3198 -0.0350693 57.2797 0.0072139 59.9999C2.44555 76.3776 16.554 88.9498 33.6223 88.9498C39.1755 88.9498 44.4046 87.6108 49.0275 85.257C47.2376 86.0745 45.2925 86.6524 43.2206 86.8779Z" fill="url(#paint4_linear_1455_3177)"/>
                  <defs>
                  <radialGradient id="paint0_radial_1455_3177" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.6075 72.4637) scale(7.79845 7.79842)">
                  <stop stopColor="#6A6A6A"/>
                  <stop offset="0.432" stopColor="#444444"/>
                  <stop offset="1"/>
                  </radialGradient>
                  <linearGradient id="paint1_linear_1455_3177" x1="34.8107" y1="51.5535" x2="52.734" y2="74.3238" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A6A6A"/>
                  <stop offset="0.432" stopColor="#444444"/>
                  <stop offset="1"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_1455_3177" x1="42.4793" y1="44.3171" x2="61.7552" y2="73.6256" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A6A6A"/>
                  <stop offset="0.432" stopColor="#444444"/>
                  <stop offset="1"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_1455_3177" x1="2.73932" y1="78.6488" x2="60.1491" y2="87.4413" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A6A6A"/>
                  <stop offset="0.432" stopColor="#444444"/>
                  <stop offset="1"/>
                  </linearGradient>
                  <linearGradient id="paint4_linear_1455_3177" x1="11.319" y1="13.5003" x2="31.1585" y2="90.1534" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6A6A6A"/>
                  <stop offset="0.432" stopColor="#444444"/>
                  <stop offset="1"/>
                  </linearGradient>
                  </defs>
                </svg>
             

              } 

              </div>

              </Link>
          </div>

          <div className={"menu-trigger "+ (isOpen ? 'opening' : '')} onClick={()=>{handleOpenMenu()}} >
            <div className="hamburger-icon">
              <span className="line1 line"></span>
              <span className="line2 line"></span>
              <span className="line3 line"></span>
            </div>
          </div>
          
      </div>

    {<DropDown status={isOpen} functionClick ={handleMenuItemCliked} />}
      </div>
    </>
  );
};
