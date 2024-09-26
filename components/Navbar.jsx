'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@/styles/Navbar.module.css";
import useUserStore from "@/stores/userStore";
const Navbar = () => {
  const { userPreferences } = useUserStore();
  const [weather, setWeather] = useState("");
  const [weatherMain, setWeatherMain] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherTemp, setWeatherTemp] = useState("");

  useEffect(() => {
    if (userPreferences && userPreferences.location) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${userPreferences.location}&appid=4c121fd61dc55282f30ad5e7cdb92a31&units=metric`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data && data.main) {
            setWeatherTemp(`${data.main.temp}`);
            setWeatherMain(`${data.weather[0].main}`);
            setWeather(`${data.weather[0].description}`);
            setWeatherIcon(`${data.weather[0].icon}`);
          } else {  
            setWeather("Weather not available");
          }
        })
        .catch((error) => {
          console.error("Error fetching weather:", error);
          setWeather("Error fetching weather");
        });
    }
  }, [userPreferences]);

  return (
    <nav className={styles.nav}>
      <img src="/logo.png" alt="" className={styles.logo} />
      <div className={styles.navLinks}>
        <Link href="/">home</Link>
        <Link href="/projects">projects</Link>
        <div className={styles.dropdown}>
          <Link href="/" className={styles.dropdownToggle}>
            talents
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={styles.dropdownIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <div className={styles.dropdownContent}>
            <div className={styles.dropdownItemBox}>
              <Link className={styles.dropdownItem} href="/our_people/min-khaung-kyaw-swar">
                <img src="/004.jpg" alt="nyunt" />
                <h3>nyunt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, suscipit?</p>
              </Link>
              <Link className={styles.dropdownItem} href="/our_people/min-khaung-kyaw-swar">
                <img src="/004.jpg" alt="nyunt" />
                <h3>nyunt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, suscipit?</p>
              </Link>
              <Link className={styles.dropdownItem} href="/our_people/min-khaung-kyaw-swar">
                <img src="/004.jpg" alt="nyunt" />
                <h3>nyunt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, suscipit?</p>
              </Link>
              <Link className={styles.dropdownItem} href="/our_people/min-khaung-kyaw-swar">
                <img src="/004.jpg" alt="nyunt" />
                <h3>nyunt</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, suscipit?</p>
              </Link>
            </div>
          </div>
        </div>
        <Link href="/about">about</Link>
        
      </div>
      
      <div className={styles.weather}>
        <img src={`http://openweathermap.org/img/wn/${weatherIcon}.png`} alt="weather icon" />
        <p>
          Hello, {userPreferences?.name || "Guest"}! <br />
          {weather ? `${userPreferences?.location}: ${weatherTemp}°C` : "Loading weather..."}
        </p>
        <Link className={styles.contactButton} href="/">contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
