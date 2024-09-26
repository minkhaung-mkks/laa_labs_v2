import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_box}>
        <div className={styles.footer_socials}>
          <p>follow us</p>
          <div className={styles.footer_socials_box}>
            <img src="/logo.png" alt="" />
            <img src="/logo.png" alt="" />
            <img src="/logo.png" alt="" />
            <img src="/logo.png" alt="" />
            <img src="/logo.png" alt="" />
          </div>
        </div>
        <div className={styles.footer_signup}>
          <p>sign up for our newsletter</p>
          <input type="text" placeholder="Enter your email" />
        </div>
      </div>
      <div className={styles.arr}>
        <span>laa labs &copy;</span>
        <span>all rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
