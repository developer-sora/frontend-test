import "./Banner.scss";

interface BannerProps {
  imgSrc: string;
  title: string;
  date: string;
  url: string;
}

const Banner = ({ imgSrc, title, date, url }: BannerProps) => {
  return (
    <a href={url} target="_blank">
      <div className="banner-container">
        <img className="banner-image" src={imgSrc} alt="배너 이미지" />
        <div className="desc-wrapper">
          <div className="desc-title">{title}</div>
          <div className="desc-date">{date}</div>
        </div>
      </div>
    </a>
  );
};

export default Banner;
