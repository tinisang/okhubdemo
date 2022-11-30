import Image from "next/image";
import gumacBackground from '../../public/imgs/Gumac BG.svg';
import gumacLogo from '../../public/imgs/GUMAC logo.png';
export const BackgroundHeader = () => {
    return (
        <div className="bgHead">
            <Image src={gumacBackground} className="bgHead__img" />
            <div className="bgHead__wrap">
                <div className="bgHead__logo">
                    <Image src={gumacLogo} className="bgHead__logo--img"/>
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
    )
}