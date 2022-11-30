import Image from "next/image";
import img1 from "../../public/imgs/category.svg";
import img2 from "../../public/imgs/layer.svg";
import img3 from "../../public/imgs/people.svg";
import { DataItem } from "./DataItem";
export const TheProblem = () => {
    return (
        <div className="problem">
            <div className="problem__wrap">
                {/* Dữ liệu */}
                <div className="problem__data">
                    <ul className="problem__data--list">
                        <DataItem title="LĨNH VỰC" image={img1} txt="Thời trang" />
                        <DataItem title="HẠNG MỤC CÔNG VIỆC" image={img2} txt="UI Design / UX Research" />
                        <DataItem title="THÀNH VIÊN" image={img3} txt="Trang Nguyễn / Loan Hoàng / Tiến Dũng" />
                    </ul>
                </div>
                {/* Vấn đề */}
                <div className="problem__content">
                    <h1 className="problem__content--heading">
                        Vấn đề gặp phải <br />
                        trước khi thực hiện dự án
                    </h1>
                    <div className="problem__content--hide">
                        The Problems
                    </div>
                    <p className="problem__content--txt">
                        Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại.
                        Gumac đã quyết định làm lại khi website cũ có những vấn đề như:
                    </p>
                </div>
                {/* Danh sách trở ngại */}
                <div className="problem__list">
                    <div className="problem__item">
                        Trải nghiệm mua hàng gặp nhiều trở ngại
                    </div>
                    <div className="problem__item">
                        Giao diện cũ và không còn phù hợp với nhận diện
                    </div>
                    <div className="problem__item">
                        Khó khăn trong việc kết nối với khách hàng
                    </div>
                    <div className="problem__item">
                        Website cũ khó tùy biến giao diện
                    </div>
                </div>
            </div>
        </div>
    )
}