import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  let portfolioWorks = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1554519934-e32b1629d9ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1568339434357-18719cd7f25b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1550791752-97b2f57d2b15?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1549236177-f9b0031756eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1554519515-242161756769?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1513325631248-abd221e009a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80',
    },
  ];
  document.title = 'Portfolio';

  return (
    <main>
      <section className="portfolio-page-section">
        <h1>Portfolio page</h1>
        <div className="portfolio-items-wrapper">
          {portfolioWorks.map((item) => (
            <div className="single-portfolio-img">
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
