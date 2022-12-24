import Image from "next/image";
import gumacBackground from '../../public/imgs/Gumac BG.svg';
import gumacLogo from '../../public/imgs/GUMAC logo.png';
export const BackgroundHeader = ({logo, data}) => {
    return (
       <>
        <div className="image-container bgHead">
            <Image fill  src={data || gumacBackground} className="image-item bgHead__img" />
            <div className="bgHead__wrap">
                <div className="image-container bgHead__logo">
                    <Image fill src={logo || gumacLogo} className="image-item bgHead__logo--img"/>
                </div>
                <div className="bgHead__txt">
                    <p>
                        Thiết kế website <strong>GUMAC</strong>
                        <br />
                        <strong>đưa cả cửa hàng </strong>
                        <strong>
                            <span>lên</span>
                            <br />
                            <span>không gian mạng</span>
                        </strong>
                    </p>
                </div>
            </div>
        </div>
       
       </>
    )
}