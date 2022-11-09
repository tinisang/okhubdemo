import logoNews from "../../public/imgs/logoNews.png";
import menuNews from "../../public/imgs/menuNews.png";
import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="news__header">
          <Image src={logoNews} />
          <Image src={menuNews} />
        </div>
      </div>
    </>
  );
};
