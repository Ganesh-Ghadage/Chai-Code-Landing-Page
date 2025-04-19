import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useMobileView } from "@/hooks/useMobileView";

export const LaptopContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  
  const isMobile = useMobileView()

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.85] : [0.9, 0.6];
  };

  const divTranslateDimensions = () => {
    return isMobile ? [-70, 0] : [-70, 80];
  };

  const divScaleDimensions = () => {
    return isMobile ? [1.3, 1.24] : [1.3, 1.05];
  };

  const rotate = useTransform(scrollYProgress, [1, 0.5, 0], [-100, -50, 0]);
  const scale = useTransform(scrollYProgress, [0.5, 0.5], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateDiv = useTransform(scrollYProgress, [1, 0], divTranslateDimensions());
  const scaleDiv = useTransform(scrollYProgress, [1, 0], divScaleDimensions());
  const translateY = useTransform(scrollYProgress, [1, 0.5, 0], [-280, -150, 20]);

  return (
    <motion.div
      className="h-full flex mt-10 items-center justify-center relative"
      ref={containerRef}
      
    >
      <motion.div
        className="w-full relative"
        style={{
          perspective: "1000px",
          translateY: translateY,
        }}
        animate={{
          animation: "ease-in-out",
        }}
        transition = {{
          ease: [0, 1],
        }}
      >
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        <motion.div 
          style={{
            translateY: translateDiv,
            scale: scaleDiv
          }} 
          className="max-w-5xl relative -top-5 lg:-top-52 mx-auto w-[75%] lg:w-[65%] rounded-4xl h-3 md:h-4 border-2 border-[#6C6C6C] bg-[#222222]"
          >
        </motion.div>
      </motion.div>
    </motion.div>
  );
};


export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="relative transform-3d mx-auto h-[15rem] md:h-[20rem] lg:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className=" flex items-center justify-center h-full w-full backface-hidden overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4 ">
        {children}
      </div>
      <div className="absolute top-0 flex items-center justify-center h-full w-full backface-hidden rotate-x-180 overflow-hidden rounded-2xl md:rounded-2xl md:p-4 ">
        <img src="./src/assets/chai-white.png" className="rotate-x-180 w-60 mx-auto"/>
      </div>
    </motion.div>
  );
};
