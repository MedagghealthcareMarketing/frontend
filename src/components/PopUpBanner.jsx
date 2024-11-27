import React, { useState, useEffect } from "react";
import Styles from "../components/PopUpBanner.module.css";
import { Footer } from "./Footer";

const PopUpBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false); // New state to track if banner has been shown

  useEffect(() => {
    const handleScroll = () => {
      if (!hasBeenShown) {
        // Set a delay of 3 seconds (3000 ms) before showing the banner
        setTimeout(() => {
          setIsVisible(true);
          setHasBeenShown(true); // Mark the banner as shown
        }, 3000); // Delay in milliseconds

        // Remove the scroll event listener after the banner is triggered
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBeenShown]); // Add hasBeenShown as a dependency

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className={Styles.blurBackground}>
          <div className={`${Styles.PopupFrame}`}>
            <div
              className={`container p-0 p-sm-5 p-md-5 p-lg-5 p-xl-5 p-xxl-5 rounded-4 ${Styles.popupBanner}`}
            >
              <div className={`${Styles.popupContent}`}>
                <button
                  className={`${Styles.closeButton}`}
                  onClick={handleClose}
                >
                  ✖
                </button>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpBanner;
