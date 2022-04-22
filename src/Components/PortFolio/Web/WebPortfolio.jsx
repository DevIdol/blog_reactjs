import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { getPortfolioData } from "../PortfolioData";
import Card from "../../Screens/Card";
import "../All/AllPortfolio.css";
import Button from "../../Screens/Button";
const code = <FaCode />;
const down = <MdDownload />;
const WebPortfolio = () => {
  const [loadmore, setLoadmore] = useState(3);

  const portfolio = getPortfolioData();

  const webportfo = portfolio.filter((data) => {
    return data.type === "web";
  });
  const reverseWebPortfolio = webportfo.slice(0).reverse();
  const sliceporfo = reverseWebPortfolio.slice(0, loadmore);
  const onLoadmore = () => {
    setLoadmore((preValue) => preValue + 3);
  };
  const isLoadmore = webportfo.length > loadmore;
  return (
    <div className="container text-center">
      <div className="row">
        {sliceporfo.map((data, index) => {
          return (
            <div key={index} className="col-md-4 items">
              <Card className="portfolio-item">
                <img className="img" src={data.items.img} alt="" />
                <div className="language">
                  {data.items.language.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
                <a
                  href={data.items.link}
                  className="code"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {code}
                </a>
                <h6 className="title">{data.items.title}</h6>
                <a href={data.items.download} download className="down">
                  {down}
                </a>
              </Card>
            </div>
          );
        })}
      </div>
      {isLoadmore && (
        <Button type="button" onClick={onLoadmore} className="load-btn">
          Load More
        </Button>
      )}
    </div>
  );
};

export default WebPortfolio;
