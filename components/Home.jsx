"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/Home.module.css"; // Import the CSS module
import Footer from "./Footer";

export default function HomePage({userPreferences}) {
  const horizontalScrollsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("overview");

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const horizontalScrolls = horizontalScrollsRef.current;
      const contents = gsap.utils.toArray(".content", horizontalScrolls);

      gsap.to(contents, {
        xPercent: -100 * (contents.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalScrolls,
          pin: true,
          scrub: 1,
          snap: 1 / (contents.length - 1),
          end: () => "+=" + horizontalScrolls.offsetWidth,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: horizontalScrollsRef }
  );

  return (
    <div className={styles.home}>
      <div className={styles.hero_box}>
        <div className={styles.hero_txt}>
          <h1>laa labs</h1>
          <span>the lab of everything</span>
        </div>
        <img
          src="/logo.png"
          alt=""  
          className={styles.hero_img}
          width={500}
        />
      </div>
      <div
        ref={horizontalScrollsRef}
        id="horizontal-scrolls"
        className={styles.horizontal_scrolls}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={`${styles.content} content`}>
            <div className={styles.content_box}>
              <img
                src="/004.jpg"
                alt=""
                className={styles.profile_pic}
                width={200}
                height={200}
              />
              <div className={styles.profile_text_box}>
                <div className={styles.profile_title_box}>
                  <div className={styles.profile_job_title_box}>
                    <h2 className={styles.profile_name}>
                      Min Khaung Kyaw Swar
                    </h2>
                    <h3 className={styles.profile_job_title}>web developer</h3>
                  </div>
                  <img
                    src="./logo.png"
                    alt=""
                    className={styles.profile_badge}
                  />
                </div>
                <div className={styles.profile_subtitle_box}>
                  <span>
                    I wouldn&apos;t know what design is if it hits me on the
                    head.
                  </span>
                </div>
                <div className={styles.profile_headers_box}>
                  <button
                    className={`${styles.profile_headers} ${
                      activeTab === "overview" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    overview
                  </button>
                  <button
                    className={`${styles.profile_headers} ${
                      activeTab === "about" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("about")}
                  >
                    about me
                  </button>
                  <button className={styles.profile_headers}>showcase</button>
                </div>
                {activeTab === "overview" && (
                  <div
                    id="overview-content"
                    className={styles.overview_content}
                  >
                    <h3>stats</h3>
                    <div className={styles.stats_box}>
                      <div className={styles.stats}>
                        <span>design</span>
                        <div className={styles.stats_indicator}>
                          <div className={styles.active}></div>
                        </div>
                        <span>-99/10</span>
                      </div>
                      <div className={styles.stats}>
                        <span>design</span>
                        <div className={styles.stats_indicator}>
                          <div className={styles.active}></div>
                        </div>
                        <span>-99/10</span>
                      </div>
                      <div className={styles.stats}>
                        <span>design</span>
                        <div className={styles.stats_indicator}>
                          <div className={styles.active}></div>
                        </div>
                        <span>-99/10</span>
                      </div>
                    </div>
                    <h3>traits</h3>
                    <div className={styles.traits_box}>
                      <div style={{ width: "60%" }} className={styles.trait}>
                        <span>obsessed with technology</span>
                      </div>
                      <div style={{ width: "32.5%" }} className={styles.trait}>
                        <span>a little crazy</span>
                      </div>
                      <div style={{ width: "30%" }} className={styles.trait}>
                        <span>lifeless</span>
                      </div>
                      <div style={{ width: "40%" }} className={styles.trait}>
                        <span>perfectionist</span>
                      </div>
                      <div style={{ width: "20%" }} className={styles.trait}>
                        <span>neet</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "about" && (
                  <div
                    id="about-me-content"
                    className={styles.about_me_content}
                  >
                    <div className={styles.about_infos}>
                      <div className={styles.info}>
                        <span>age: 23</span>
                        <span>birthday: October 30, 2000</span>
                      </div>
                      <div className={styles.info}>
                        <span>gender: male</span>
                        <span>origin: Myanmar</span>
                      </div>
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consequuntur totam, reiciendis corporis sapiente illum
                      nulla quae fugit quisquam facilis in.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit natus tempora aliquid similique, vero beatae,
                      voluptates ratione, hic excepturi voluptatem placeat.
                      Nesciunt alias a molestias, eos tempora ab officiis nemo.
                    </p>
                  </div>
                )}
                <button className={styles.see_details}>see more</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.projects_sections}>
        <h3>our top projects</h3>
        <div className={styles.portfolio_box}>
          <div className={styles.portfolio_card}>
            <img src="../004.jpg" alt="" className={styles.portfolio_img} />
            <h3>Portable web-page engine</h3>
            <p>
              A component based web-page builder built from scratch along with a
              custom render engine for Katex specialized to handle special
              cases.
            </p>
            <div className={styles.portfolio_action_box}>
              <button className={styles.see_more_btn}>see details</button>
              <span className={styles.break_line}>
                <span>internal</span>
                <span>toolkit</span>
              </span>
            </div>
          </div>
          <div className={styles.portfolio_card}>
            <img src="../004.jpg" alt="" className={styles.portfolio_img} />
            <h3>Portable web-page engine</h3>
            <p>
              A component based web-page builder built from scratch along with a
              custom render engine for Katex specialized to handle special
              cases.
            </p>
            <div className={styles.portfolio_action_box}>
              <button className={styles.see_more_btn}>see details</button>
              <span className={styles.break_line}>
                <span>internal</span>
                <span>toolkit</span>
              </span>
            </div>
          </div>
          <div className={styles.portfolio_card}>
            <img src="../004.jpg" alt="" className={styles.portfolio_img} />
            <h3>Portable web-page engine</h3>
            <p>
              A component based web-page builder built from scratch along with a
              custom render engine for Katex specialized to handle special
              cases.
            </p>
            <div className={styles.portfolio_action_box}>
              <button className={styles.see_more_btn}>see details</button>
              <span className={styles.break_line}>
                <span>internal</span>
                <span>toolkit</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
