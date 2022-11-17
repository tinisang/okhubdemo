import { Button } from "../../components/Button/Button";
import Image from "next/image";
import { ButtonCategory } from "../../components/Button/ButtonCategory";
import peojectOrderDisplayListBtn from "../../public/imgs/peojectOrderDisplayListBtn.png"
import peojectOrderDisplayGridBtn from "../../public/imgs/peojectOrderDisplayGridBtn.png"
import { CardProject } from "../../components/CardProject";

export default function Projects() {
  return (
    <div className="project__container">
      <div className="project__header">
        <Button text="Credential" />
        <div className="project__header--text">
          <p>Với mỗi dự án<br></br>  là sự đảm <span>bảo</span> <br></br> về <span>sản phẩm {`&`} dịch vụ</span></p>
        </div>
      </div>
      <div className="project__categories">
          <div className="project__categories--title">
              <div className="project__categories--title-text">
                  <p>Đa dạng lĩnh vực</p>
              <div className="project__categories--title-bg"><p>Our Projects</p></div>
              </div>
              <div className="project__categories--item">
                  <ButtonCategory category = "Mỹ phẩm" active = {false}/>
                  <ButtonCategory category = "Tài chính" active = {false}/>
                  <ButtonCategory category = "Tất cả dự án" active = {true}/>
                  <ButtonCategory category = "Nội thất - kiến trúc" active = {false}/>
                  <ButtonCategory category = "Xây dựng" active = {false}/>
                  <ButtonCategory category = "Du lịch" active = {false}/>
                  <ButtonCategory category = "Bất động sản" active = {false}/>
              </div>
          </div>
      </div>
      <div className="project__order">
          <div className="project__order--select">
                    <p>Sắp xếp theo: </p>
          </div>
          <div className="project__order--display">
                <div className="project__order--display-list">
                    <Image src = {peojectOrderDisplayListBtn} alt = ""/>
                </div>
                <div className="project__order--display-grid">
                <Image src = {peojectOrderDisplayGridBtn} alt = "" />
                </div>
          </div>
      </div>
      <div className="project__list">
          <CardProject title = "Website Coteccons" toDo = {`Interaction & Development`} category = "Thời trang"/>
      </div>
    </div>
  );
}
