import Image from "next/image";
import anh from "../../public/imgs/Live site.png";
import anh2 from '../../public/imgs/mockup 1.png';
import anh3 from '../../public/imgs/brace up.png';
import anh4 from '../../public/imgs/brace down.png';
export const JudgeOkhub = () => {
    return (
        <div className="judge">
            <div className="judge__wrap">
                {/* Phần 1 */}
                <div className="judge__cmt">
                    <Image src={anh2} className="judge__cmt--img" />
                    <div className="judge__cmt--comment">
                        <p className="judge__cmt--txt">
                            <Image src={anh3} className="judge__cmt--brace judge__cmt--brace--up" />
                            <span>
                                Đó là một sự nỗ lực không ngừng nghỉ của các bạn bên OKHUB Việt Nam. GUMAC xin ghi nhận những nỗ lực đó và chúc các bạn luôn thành công
                            </span>
                            <Image src={anh4} className="judge__cmt--brace judge__cmt--brace--down" />
                        </p>
                        <div className="judge__cmt--author">
                            <strong>Mrs. Nguyễn Yến</strong>
                            <br />
                            <span>CMO Thời trang GUMAC</span>
                        </div>
                    </div>
                </div>
                {/* Phần 2 */}
                <div className="judge__heading">
                    OKHUB & GUMAC vẫn tiếp tục hợp tác trong quá trình tối ưu trải nghiệm người dùng
                </div>
                <div className="judge__content">
                    <a href="#" className="judge__content--link">
                        <Image src={anh} className="judge__content--img" />
                    </a>
                    <p className="judge__content--txt">
                        OkHub không chỉ xây dựng website mà còn đồng hành trong việc sử dụng website tạo ra những kết quả tích cực trong phát triển thương hiệu và phát triển kinh doanh.
                    </p>
                </div>
            </div>
        </div>
    )
}