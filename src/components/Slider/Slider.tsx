'use client'
import React, { useState, useEffect } from "react";
import "./animation.css";

const Slider = () => {
  const carouselItems = [
    {
      type: "image",
      src: "https://wallpapercave.com/wp/wp4233026.jpg",
      alt: "Image 1",
      title: "Professional Safe Delivery",
    },
    {
      type: "image",
      src: "https://wallup.net/wp-content/uploads/2019/09/344761-boeing-747-airliner-aircraft-plane-airplane-boeing-747-transport-36-2.jpg",
      alt: "Image 2",
      title: "Package Delivery News",
    },
    {
      type: "video",
      src: "/videos/video-mainhome.mp4",
      title: "Relaible Service Trasport",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
      setShowTitle(false); // Hide title when transitioning to the next slide
    }, 10000); // Change slide every 10 seconds (longer duration)

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowTitle(true); // Show title after a delay
    }, 2000); // Show title after 2 seconds

    return () => clearTimeout(titleTimeout);
  }, [currentIndex]); // Run this effect whenever the currentIndex changes

  const renderItem = (item: any) => {
    if (item.type === "image") {
      return <img src={item.src} alt={item.alt} className="w-full h-full object-cover image-fade-in" />;
    } else if (item.type === "video") {
      return (
        <video className="w-full h-full object-cover image-fade-in" autoPlay loop muted>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  const renderTitle = (title: any) => {
    return (
      <div className="title-container">
        {title.split("").map((letter: any, index: any) => (
          <span
            key={index}
            style={{ animationDelay: `${0.1 * index}s` }} // Stagger the animation for each letter
            className="title-animation"
          >
            {letter}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {renderItem(carouselItems[currentIndex])}
      {showTitle && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            {renderTitle(carouselItems[currentIndex].title)}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Slider;
