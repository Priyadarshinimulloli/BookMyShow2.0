import React from "react";
import { Carousel, Container } from "react-bootstrap";
import photo1 from "../assets/photo1/rblmon1216.avif"
import photo2 from "../assets/photo2/icici-bank-complimentary-offer-iciccom724.avif"
import photo3 from "../assets/photo3/union-bank-of-india-divaa-rupay-credit-card-offer-ucorp0125.avif"


export default function OffersCarousel() {
  return (
    <Container className="mt-4">
      <Carousel  interval={3000}  
        pause="hover"  
        fade 
        indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo1}
            alt="2 movie tickets per month"
          />
          <Carousel.Caption>
            <div style={{ background: "rgba(0, 0, 0, 0.6)", padding: "10px", borderRadius: "5px" }}>
              <h3 className="text-white"> Cool Card Membership!</h3>
              <p className="text-white"> Enjoy 2 Free Tickets Every Month!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo2}
            alt="Credit Card Cashback"
          />
          <Carousel.Caption>
            <div style={{ background: "rgba(0, 0, 0, 0.6)", padding: "10px", borderRadius: "5px" }}>
              <h3 className="text-white">ICICI Bank Exclusive Offer</h3>
              <p className="text-white"> Get Complimentary Movie Tickets!.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={photo3}
            alt="Exclusive Event Pass"
          />
          <Carousel.Caption>
            <div style={{ background: "rgba(0, 0, 0, 0.6)", padding: "10px", borderRadius: "5px" }}>
              <h3 className="text-white"> UCO Women Aparajita Platinum Offer</h3>
              <p className="text-white"> Flat ₹250 OFF!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

