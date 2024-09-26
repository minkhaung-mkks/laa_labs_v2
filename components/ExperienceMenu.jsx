import { useState, useEffect } from "react";
import styles from "@/styles/ExperienceMenu.module.css";
import Select from "react-select";
const citiesList= require("@/data/cities.json");
export default function ExperienceMenu({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Load cities (you can filter based on country if needed)   

    setCities(citiesList.map(city => ({ value: city.name, label: city.name })));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, location, backgroundMusic });
  };

  return (
    <div className={styles.experienceMenu}>
      <h1>Welcome to LAA Labs</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{borderRadius: "5px", border: "1px solid #f0f0f0", padding: "10px"}}
          />
        </div>
        <div>
          <label htmlFor="location">Where do you live?</label>
          <Select
            id="location"
            options={cities}
            onChange={(selected) => setLocation(selected?.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={backgroundMusic}
              onChange={(e) => setBackgroundMusic(e.target.checked)}
            />
            Would you like to experience the website with background music?
          </label>
        </div>
        <button type="submit">Start Experience</button>
      </form>
    </div>
  );
}
