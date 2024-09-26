import Contact from "@/components/Contact";
import React from "react";
import "@/styles/Article.css";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="case_studies_page">
      <article>
        <div className="article_header">
          <img src="/logo.png" alt="" className="article_header_img" />
          <div className="header_overlay">
            <h2>Article Title</h2>
          </div>
        </div>
        <div className="article_box">
          <div className="article_content">
            <p>
              if it works don’t ask me to fix it, because I probably don’t know
              what eldrich magic is making it work.if it works don’t ask me to
              fix it, because I probably don’t know what eldrich magic is making
              it work.if it works don’t ask me to fix it, because I probably
              don’t know what eldrich magic is making it work.if it works don’t
              ask me to fix it, because I probably don’t know what eldrich magic
              is making it work.
            </p>
            <div className="left_i_txt_box">
              <p>
                if it works don’t ask me to fix it, because I probably don’t
                know what eldrich magic is making it because I probably don’t
                know what eldrich magic is making it work.
              </p>
              <img src="/logo.png" alt="" />
            </div>
            <div className="right_i_txt_box">
              <p>
                if it works don’t ask me to fix it, because I probably don’t
                know what eldrich magic is making it because I probably don’t
                know what eldrich magic is making it work.
              </p>
              <img src="/logo.png" alt="" />
            </div>
            <p>
              if it works don’t ask me to fix it, because I probably don’t know
              what eldrich magic is making it work.if it works don’t ask me to
              fix it, because I probably don’t know what eldrich magic is making
              it work.if it works don’t ask me to fix it, because I probably
              don’t know what eldrich magic is making it work.if it works don’t
              ask me to fix it, because I probably don’t know what eldrich magic
              is making it work.
            </p>
          </div>
          <div className="recommendation_tabs">
            <div className="recommendation_tab">
              <div className="article_card">
                <img src="/logo.png" alt="" />
                <div className="article_card_content">
                  <h3 className="article_card_title">
                    Article Title qowepwqoe [pwqeopiwqepow iqopeiwqope iwopqeiwqop]
                  </h3>
                  <span className="article_date"> 2024-01-01</span>
                  <p className="article_summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus temporibus consequuntur, quae debitis rerum magni hic facilis dignissimos, delectus at praesentium rem consectetur esse illo enim reprehenderit, molestias ullam accusamus!</p>
                </div>
              </div>
            </div>
            <div className="related_tab">
            <div className="article_card">
                <img src="/logo.png" alt="" />
                <div className="article_card_content">
                  <h3 className="article_card_title">
                    Article Title qowepwqoe [pwqeopiwqepow iqopeiwqope iwopqeiwqop]
                  </h3>
                  <span className="article_date"> 2024-01-01</span>
                  <p className="article_summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus temporibus consequuntur, quae debitis rerum magni hic facilis dignissimos, delectus at praesentium rem consectetur esse illo enim reprehenderit, molestias ullam accusamus!</p>
                </div>
              </div>
              <div className="article_card">
                <img src="/logo.png" alt="" />
                <div className="article_card_content">
                  <h3 className="article_card_title">
                    Article Title qowepwqoe [pwqeopiwqepow iqopeiwqope iwopqeiwqop]
                  </h3>
                  <span className="article_date"> 2024-01-01</span>
                  <p className="article_summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus temporibus consequuntur, quae debitis rerum magni hic facilis dignissimos, delectus at praesentium rem consectetur esse illo enim reprehenderit, molestias ullam accusamus!</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </article>
      <Contact />
      <Footer />
    </div>
  );
};

export default CaseStudies;
