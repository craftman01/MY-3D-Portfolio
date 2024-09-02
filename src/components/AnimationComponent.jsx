import { useState, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Hero from "./Hero";
import { styles } from '../style';
import Navbar from "./Navbar";

const LoadingCount = ({ onComplete }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount === 100) {
            clearInterval(interval);
            return 100;
          }
          return prevCount + 5;
        });
      }, 50); // Adjust the interval for faster or slower counting
  
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (count === 100) {
          onComplete();
        }
      }, [count, onComplete]);
    
  
    return (
      <div className={`h-screen flex items-center justify-center ]`}>
        <h5 className={`${styles.countingText} text-white text-sm `}>{count}%</h5>
      </div>
    );
  };

const AnimationComponent = () => {
    const [loading, setLoading] = useState(true);
  const comp = useRef(null);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useLayoutEffect(() => {
    if (!loading) {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.fromTo("#intro-slider1", 
        {
          clipPath: "circle(0% at 0% 0%)", // Start with a small circle at the center
        }, 
        {
          clipPath: "circle(150% at 0% 0%)", // Expand the circle to cover the screen
          duration: 0.5,
          delay: 0.3,
          ease: "power4.out",
        }
      )
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        delay: 0.2,
        stagger: 0.3,
      })
      t1.fromTo("#intro-slider", 
        {
          clipPath: "circle(0% at 0% 0%)", // Start with a small circle at the center
        }, 
        {
          clipPath: "circle(150% at 0% 0%)", // Expand the circle to cover the screen
          duration: 1.5,
          delay: 0.3,
          ease: "power4.out",
        }
      )
        
        // .to(["#title-1", "#title-2", "#title-3"], {
        //   opacity: 0,
        //   y: "-=30",
        //   delay: 0.2,
        //   stagger: 0.3,
        // })
        .to("#intro-slider", {
            clipPath: "circle(0% at 110% 110%)", // Shrink the circle back down
            duration: 0.8,
            delay: 0.2,
            ease: "power4.in",
          })
          .to("#intro-slider1", {
            clipPath: "circle(0% at 110% 110%)", // Shrink the circle back down
            duration: 0.8,
            delay: 0 ,
            ease: "power4.in",
          })
        .to("#hero-container", { // Ensure to animate the Hero component
            opacity: 3,
            duration: 1.5,
            delay: 0.5, // Adjust the delay as needed
        });
    }, comp);

    return () => ctx.revert();
}
  }, [loading]);

  if (loading) {
    return <LoadingCount onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative" ref={comp}>
        
        <div
        id="intro-slider1"
        className={`h-screen ${styles.paddingX} bg-[#f7f7f8] absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight`}
      >
      <div
        id="intro-slider"
        className={`h-screen ${styles.paddingX} bg-[#915eff] absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight`}
      >
        <h1 className={`${styles.loadingText} text-white`}/*"text-9xl text-black font-popins"*/ id="title-1">
          React Developer
        </h1>
        <h1 className={`${styles.loadingText} text-white`}/*"text-9xl text-black font-popins"*/ id="title-2">
          Designer
        </h1>
        <h1 className={`${styles.loadingText} text-white`}/*"text-9xl text-black font-popins"*/ id="title-3">
          Artist
        </h1>
      </div>
      </div>
      <div id="hero-container"  className="bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-0">
        <Navbar />
      <Hero />
      </div>
    </div>
  );
};

export default AnimationComponent;
