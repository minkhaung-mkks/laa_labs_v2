"use client";
import { useState, useEffect } from "react";
import ExperienceMenu from "@/components/ExperienceMenu";
import HomePage from "@/components/Home";
import useUserStore from "@/stores/userStore";

export default function Home() {
  const { userPreferences, setUserPreferences } = useUserStore();

  const handleExperienceSubmit = (preferences) => {
    setUserPreferences(preferences);
  };


  if (userPreferences === null) {
    return <ExperienceMenu onSubmit={handleExperienceSubmit} />;
  } else {
    return <HomePage userPreferences={userPreferences} />;
  }
}