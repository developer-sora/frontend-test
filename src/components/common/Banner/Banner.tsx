import "./Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Link to="">
      <div className="banner-container">
        <img src="https://www.mnetplus.world/static/images/uploaded/25ad89fb-c4f7-42a2-bb12-24477a9d0937?webp=1&w=1240" />
        <div className="desc-wrapper">
          <div>이미지 소개</div>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
