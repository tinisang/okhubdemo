import React from "react";
import { ProjectPost } from "./ProjectPost";
import { ButtonMobile } from "../../Button/ButtonMobile";

const dataProjectSpecial = [
  {
    id: 0,
    // logo: require('../../../public/imgs/logoPostMobile.svg').default,
    projectName: "Thiết kế website BaaBaby",
    hastags: ["thoitrang", "duannoibat"],
    // imgProject: {imgProject},
    amountLike: 198,
    amountShare: 56,
    desc: "Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại. Gumac đã quyết định làm lại khi website cũ có những vấn đề Đọc tiếp",
  },
  {
    id: 1,
    // logo: "https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg",
    projectName: "Thiết kế website BaaBaby",
    hastags: ["thoitrang", "duannoibat"],
    // imgProject: {imgProject},
    amountLike: 198,
    amountShare: 56,
    desc: "Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại. Gumac đã quyết định làm lại khi website cũ có những vấn đề Đọc tiếp",
  },
  {
    id: 2,
    // logo: "https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg",
    projectName: "Thiết kế website BaaBaby",
    hastags: ["thoitrang", "duannoibat"],
    // imgProject: {imgProject},
    amountLike: 198,
    amountShare: 56,
    desc: "Nhận thấy website cũ ảnh hưởng đến quá trình quảng bá và thương mại. Gumac đã quyết định làm lại khi website cũ có những vấn đề Đọc tiếp",
  },
];

export const ProjectSpecialMobile = () => {
  return (
    <div className="container__project-special">
      <h2>Dự án nổi bật</h2>

      {dataProjectSpecial.map((item, index) => (
        <ProjectPost
          key={item.id}
          // logo = {item.logo}
          projectName={item.projectName}
          hastags={item.hastags}
          // imgProject = {item.imgProject}
          amountLike={item.amountLike}
          amountShare={item.amountShare}
          desc={item.desc}
        />
      ))}
      <div className="btn_all-project">
        <ButtonMobile text="Xem tất cả dự án" />
      </div>
    </div>
  );
};
