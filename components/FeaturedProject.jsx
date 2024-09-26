import React, { useEffect } from "react";
import { useRef } from "react";
import { useScroll,motion, useTransform } from "framer-motion";
import Link from "next/link";

const FeaturedProject = ({i,progress,range,targetScale,styles}) => {
    const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: container,
//       offset: ["start end", "start start"],
//     });
//     const imageScale = useTransform(scrollYProgress, [0, 1], [1.4, 1.2]);
//     useEffect(()=>{
//       console.log(progress,range,targetScale)
//     },[progress,range,targetScale])
//   const scale = progress && range ? useTransform(progress, range, [1, targetScale]) : 1;
  return (
      <div
        className={styles.project_card}
      >
          <img src="/004.jpg" alt="Project 1" className={styles.project_img} />

        <div className={styles.project_info}>
          <h3 className={styles.project_title}>Dawn Museum</h3>
          <div className={styles.line}></div>
          <p className={styles.project_scope}>
            scope: website, management, curation
          </p>
          <p className={styles.project_by}>by: Nyunt, Han, Min Khaung</p>
          <div className={styles.line}></div>
          <p className={styles.project_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            adipisci minus dicta praesentium, modi doloribus quaerat cum sed
            harum hic.
          </p>
          <Link href="/case_studies/1" className={styles.view_project}>
            View Project
          </Link>
        </div>
      </div>
  );
};

export default FeaturedProject;
