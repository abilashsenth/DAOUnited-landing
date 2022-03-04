import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Know our founders",
    paragraph:
      "We are excited to announce our founders, who have formidable experience weaved within the crypto and decentralized finance industry",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-footer text-xs mt-32 mb-0">
                  <span className="testimonial-item-name text-color-high">
                    <h3>Robert Thiel</h3>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="mailto:robertthiel1276@outlook.com">Reach out</a>
                  </span>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Robert Thiel is a well known personality in Crypto
                    Industry. Mr. Thiel is Few of the first Investors that got
                    to know Blockchain and Crypto before 2013. As he Quotes
                    “Getting off this Debt burden and securing your future
                    generations is your gift when you start investing in
                    Innovation”. His words are the speaking of the sky. Like in
                    some cultures we say MESSIAH. Crypto is the messiah that
                    will save your wealth. By Nature Robert is Very Introvert
                    Person he has just 3 things in his life Crypto, Eating and
                    Sleeping. In Our Team , He is One Stop Solution for your
                    Every Need.
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-footer text-xs mt-32 mb-0">
                  <span className="testimonial-item-name text-color-high">
                    <h3>Asahi Hidaka</h3>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="mailto:asahihidaka2176@hotmail.com">Reach out</a>
                  </span>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Asahi Hidaka is the person from the land of Satoshi
                    Nakamoto who is well known for his research paper on
                    Bitcoin, First Ever use of Blockchain. The Best way to
                    Explain his goal is, He is the one who, deeply researches
                    all the running and upcoming projects where Project report
                    is then presented infront of DAO where by voting it will
                    decide where to allocate the funds.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-footer text-xs mt-32 mb-0">
                  <span className="testimonial-item-name text-color-high">
                    <h3>Asher Kaplan</h3>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="mailto:asahihidaka2176@hotmail.com">Reach out</a>
                  </span>
                </div>
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Asher Kaplan has deep connections with the Crypto VC’s. He
                    has the responsibilty to bring big whales to our Project. We
                    are with Asher for past 3 months as on writing this article,
                    yet he is so mysterious that we have figuring out how his
                    thought process works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
