import './PortfolioItem.css';

const PortfolioItem = ({ imgSrc, imgAlt, imgTitle, imgPrice }) => {
  return (
    <div className="portfolio-item">
      <img src={imgSrc} alt={imgAlt} />
      <p className="portfolio-item-title">{imgTitle}</p>
      <p className="portfolio-item-price">${imgPrice}</p>
    </div>
  );
};

export default PortfolioItem;
