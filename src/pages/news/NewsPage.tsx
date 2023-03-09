import React from "react";
import "./news-page.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newsList from "./newsList";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NewsPage = () => {
  return (
    <div id="news-page-container">
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        <div className="card">
          <div className="inner-card-content-container">
            <span className="month-text">MAY</span>
            <span className="date-text">2023</span>
          </div>
          <div className="inner-card-content-container">
          <div className="inner-card-content-container">
            <span className="month-text">JUN</span>
            <span className="date-text">2023</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-card-content-container">
            <span className="month-text">JUL</span>
            <span className="date-text">2023</span>
          </div>
          <div className="inner-card-content-container">
          <div className="inner-card-content-container">
            <span className="month-text">AUG</span>
            <span className="date-text">2023</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-card-content-container">
            <span className="month-text">SEP</span>
            <span className="date-text">2023</span>
          </div>
          <div className="inner-card-content-container">
          <div className="inner-card-content-container">
            <span className="month-text">OCT</span>
            <span className="date-text">2023</span>
          </div>
          </div>
        </div>
        <div className="card">
          <div className="inner-card-content-container">
            <span className="month-text">NOV</span>
            <span className="date-text">2023</span>
          </div>
          <div className="inner-card-content-container">
          <div className="inner-card-content-container">
            <span className="month-text">DEC</span>
            <span className="date-text">2023</span>
          </div>
          </div>
        </div>
      </Carousel>

      <div className="events-container">
        {
            newsList.map((event: any, index) => {
                return (
                 <div key={index} className="card">
                    <div className="card-desc-template">
                        <p>{event.date_day}</p>
                        <p>{event.month}</p>
                        <p>{event.date}</p>
                    </div>
                    <img src={event.image}/>
                    <div className="card-description">
                        <h4>{event.eventTitle}</h4>
                        <button>GET TICKET</button>
                    </div>
                    <div className="location-container">
                      <h6>{event.location}</h6>
                    </div>
                 </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default NewsPage;
