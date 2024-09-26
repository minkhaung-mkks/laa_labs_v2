import React from "react";
import styles from "@/styles/Talent.module.css";
import Footer from "@/components/Footer";

const Talent = () => {
  return (
    <div className={styles.talentPage}>
      <div className={styles.content}>
        <div className={styles.content_box}>
          <img src="../004.jpg" alt="" className={styles.profile_pic} />
          <div className={styles.profile_text_box}>
            <div className={styles.profile_title_box}>
              <div className={styles.profile_job_title_box}>
                <h2 className={styles.profile_name}>Min Khaung Kyaw Swar</h2>
                <h3 className={styles.profile_job_title}>web developer</h3>
              </div>
              <img
                src="../Laa_logo_only_testrender11_(diff_lighting_fsl1fsl2).png"
                alt=""
                className={styles.profile_badge}
              />
            </div>
            <div id="about-me-content" className={styles.about_me_content}>
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
                Consequuntur totam, reiciendis corporis sapiente illum nulla
                quae fugit quisquam facilis in.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                natus tempora aliquid similique, vero beatae, voluptates
                ratione, hic excepturi voluptatem placeat. Nesciunt alias a
                molestias, eos tempora ab officiis nemo.
              </p>
            </div>
            <button className={styles.see_details}>see more</button>
          </div>
        </div>
      </div>
      <div className={styles.skillset_box}>
        {/* moving carosel with technologies */}
        <br />
        <h3 style={{textAlign: "center"}}>my skills</h3>
        <br />
        <div className={styles.bento_grid}>
          <div className={`${styles.bento_item} ${styles.span_2_cols}`}>
            <img src="/004.jpg" alt="" className={styles.bento_image} />
            <h4>React</h4>
            <p>My passion for React runs deep. I've spent countless hours crafting intuitive user interfaces and optimizing performance. From complex state management to custom hooks, I love the challenge of building scalable, modern web applications that users love to interact with.</p>
          </div>
          <div className={styles.bento_item}>
            <img src="/004.jpg" alt="" className={styles.bento_image} />
            <h4>Node.js</h4>
            <p>Backend development is where I truly shine. With Node.js, Express, and MongoDB, I've built robust APIs and real-time applications. I enjoy architecting efficient database schemas and implementing secure authentication systems that can handle high traffic loads.</p>
          </div>
          <div className={`${styles.bento_item} ${styles.span_2_rows}`}>
            <img src="/004.jpg" alt="" className={styles.bento_image} />
            <h4>Artificial Intelligence</h4>
            <p>AI is where my curiosity truly peaks. I've implemented neural networks for image recognition and natural language processing tasks. The potential of AI to solve complex problems fascinates me, and I'm constantly exploring new algorithms and techniques to push the boundaries of what's possible.</p>

          </div>
          <div className={styles.bento_item}>
            <img src="/004.jpg" alt="" className={styles.bento_image} />
            <h4>Golang</h4>
            <p>Go's simplicity and performance have made it my preferred language for building microservices. I've designed and implemented highly concurrent APIs that can handle thousands of requests per second. The efficiency of Go never fails to impress me, especially in resource-constrained environments.</p>
          </div>
          <div className={styles.bento_item}>
            <img src="/004.jpg" alt="" className={styles.bento_image} />
            <h4>Python</h4>
            <p>Python has been my go-to language for data analysis and automation. I've developed machine learning models to predict market trends and created scripts that save hours of manual work. The versatility of Python never ceases to amaze me, and I'm always excited to tackle new challenges with it.</p>
 
          </div>
          <div className={`${styles.bento_item} ${styles.span_2_cols}`}>
            <img src="/004.jpg" alt="" className={styles.bento_image} />
            <h4>AWS</h4>
            <p>Cloud infrastructure is the backbone of modern applications, and AWS is my playground. I've architected serverless solutions that scale automatically, set up CI/CD pipelines for seamless deployments, and optimized cloud costs. The ever-evolving nature of AWS services keeps me on my toes and excited to learn more.</p>
          </div>
        </div>
      </div>
      <br />
      <h3 style={{textAlign: "center"}}>my projects</h3>
      <br />
      <div className={styles.portfolio_box}>

        <div className={styles.portofolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <button className={styles.see_more_btn}>see details</button>
            <span className={styles.break_line}>
              <span>internal</span>
              <span>toolkit</span>
            </span>
          </div>
        </div>
        <div className={styles.portofolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <button className={styles.see_more_btn}>see details</button>
            <span className={styles.break_line}>
              <span>internal</span>
              <span>toolkit</span>
            </span>
          </div>
        </div>
        <div className={styles.portofolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <button className={styles.see_more_btn}>see details</button>
            <span className={styles.break_line}>
              <span>internal</span>
              <span>toolkit</span>
            </span>
          </div>
        </div>
        <div className={styles.portofolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <button className={styles.see_more_btn}>see details</button>
            <span className={styles.break_line}>
              <span>internal</span>
              <span>toolkit</span>
            </span>
          </div>
        </div>
        <div className={styles.portofolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <button className={styles.see_more_btn}>see details</button>
            <span className={styles.break_line}>
              <span>internal</span>
              <span>toolkit</span>
            </span>
          </div>
        </div>
        <div className={styles.portofolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
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
      <Footer />
    </div>
  );
};

export default Talent;
