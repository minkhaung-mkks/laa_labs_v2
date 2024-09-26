import Footer from '@/components/Footer'
import React from 'react'
import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <div className={styles.about_us_page}>
      <div className={styles.title_box}>
        <h1 className={styles.title_text_1}>space, time and</h1>
        <h1 className={styles.title_text_2}>impermanence</h1>
      </div>
      <div className={styles.subtitle_box}>
        attempting for timelessness despite the impermanence of space and time 
      </div>
      <div className={styles.video_box}>
        <img src="/004.jpg" alt="About us" />
      </div>
      <div className={styles.content}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto iste quaerat voluptatibus, veritatis enim dolor alias consectetur voluptate maiores nam.</p>
        <div className={styles.left_img_box}>
          <img src="/004.jpg" alt="Left image" />
          <div className={styles.text_box}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci minus dicta praesentium, modi doloribus quaerat cum sed harum hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id pariatur accusamus perspiciatis excepturi suscipit minima exercitationem commodi ea fuga. Neque asperiores perferendis porro laboriosam velit praesentium accusamus qui deleniti sit tenetur deserunt maiores pariatur aliquid fugiat, cumque tempora consequuntur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci minus dicta praesentium, modi doloribus quaerat cum sed harum hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id pariatur accusamus perspiciatis excepturi suscipit minima exercitationem commodi ea fuga. Neque asperiores perferendis porro laboriosam velit praesentium accusamus qui deleniti sit tenetur deserunt maiores pariatur aliquid fugiat, cumque tempora consequuntur?</p>
          </div>
        </div>
        <div className={styles.right_img_box}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci minus dicta praesentium, modi doloribus quaerat cum sed harum hic.Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id pariatur accusamus perspiciatis excepturi suscipit minima exercitationem commodi ea fuga. Neque asperiores perferendis porro laboriosam velit praesentium accusamus qui deleniti sit tenetur deserunt maiores pariatur aliquid fugiat, cumque tempora consequuntur?</p>
          <img src="/004.jpg" alt="Right image" />
        </div>
        <div className={styles.big_img_box}>
          <img src="/004.jpg" alt="Big image" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About