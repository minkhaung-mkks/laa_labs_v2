"use client";
import Footer from "@/components/Footer";
import styles from "@/styles/Projects.module.css";
import Link from "next/link";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from 'lenis'
import FeaturedProject from "@/components/FeaturedProject";
const Projects = () => {
 
  const bigContainer = useRef(null);
  const { bigScrollYProgress } = useScroll({
    target: bigContainer,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <div ref={bigContainer} className={styles.projects_page}>
      <div  className={styles.featured_projects}>
        {/* an array that maps 3 times */}
        {[...Array(3)].map((_,i)=>(
          <FeaturedProject i={i} progress={bigScrollYProgress} range={[i*0.33,1]} targetScale={1 - ( (2 - i) * 0.05)} styles={styles} />
        ))}
      </div>
      <h3 style={{ textAlign: "center" }}>more projects</h3>
      <br />
      <div className={styles.portfolio_box}>
        <div className={styles.portfolio_card}>
          <img src="../004.jpg" alt="" className={styles.portfolio_img} />
          <h3>Portable web-page engine</h3>
          <p>
            A component based web-page builder built from scratch along with a
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <Link href={"/case_studies/1"} className={styles.see_more_btn}>
              see details
            </Link>
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
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <Link href={"/case_studies/1"} className={styles.see_more_btn}>
              see details
            </Link>
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
            custom render engine for Katex specialized to handle special cases.
          </p>
          <div className={styles.portfolio_action_box}>
            <Link href={"/case_studies/1"} className={styles.see_more_btn}>
              see details
            </Link>
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

export default Projects;
