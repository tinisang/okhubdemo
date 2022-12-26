import Image from "next/image";
import img1 from "../../public/imgs/category.svg";
import img2 from "../../public/imgs/layer.svg";
import img3 from "../../public/imgs/people.svg";
import { DataItem } from "./DataItem";
export const TheProblem = ({dataInfo, dataProblem}) => {
    return (
        <div className="problem">
            <div className="problem__wrap">
                {/* Dữ liệu */}
                <div className="problem__data">
                    <ul className="problem__data--list">
                        <DataItem title="LĨNH VỰC" image={img1} txt={
                            dataInfo?.projectFields?.map((item, index) =>{
                                return item.name
                            }).join(' / ')
                        } />
                        <DataItem title="HẠNG MỤC CÔNG VIỆC" image={img2} txt={
                            dataInfo?.projectCategories?.map((item,index)=>{
                                return item.name
                            }).join(' / ')
                        }/>
                        <DataItem title="THÀNH VIÊN" image={img3} txt={
                            dataInfo?.member?.map((item, index)=>{
                                return item.name
                            }).join(' / ')
                        } />
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
                        {dataProblem?.description}
                    </p>
                </div>
                {/* Danh sách trở ngại */}
                <div className="problem__list">

                    {
                        dataProblem?.problem?.map((item, index)=>{
                            return(
                            <div className="problem__item" key={index}>
                                {item.problemItem}
                            </div>

                            )
                        })
                    }
                
                </div>
            </div>
        </div>
    )
}