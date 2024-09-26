"use client";
import { useState, useEffect } from "react";
import ExperienceMenu from "@/components/ExperienceMenu";
import HomePage from "@/components/Home";

export default function Home() {
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
    const storedPreferences = localStorage.getItem('userPreferences');
    if (storedPreferences) {
      setUserPreferences(JSON.parse(storedPreferences));
      console.log(userPreferences);
    }
  }, []);

  const handleExperienceSubmit = (preferences) => {
    setUserPreferences(preferences);
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  };
  // return <HomePage userPreferences={userPreferences} />;
  if (userPreferences === null) {
    return <ExperienceMenu onSubmit={handleExperienceSubmit} />;
  }
  else{
    return <HomePage userPreferences={userPreferences} />;
  }
  

}