import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import CohortCard from "../cohort-card";
import { motion, useAnimate, useInView, stagger } from "motion/react";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-[0.5px] scale-[0.98]"
      )}
    >
      <div className="">
        <CohortCard card={card} />
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  youTubeEndedLink: string,
  title: string,
  description: string,
  startDate: string,
  duration: string,
  originalPrice: number,
  discountedPrice: number,
  discount: number,
  link: string
}

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "div", 
        {
          scale: 1,
          opacity: 1,
          y: 0
        },
        {
          duration: 0.5,
          delay: stagger(0.05 , {startDelay: 0.3}),
          ease: "easeInOut"
        }
      )
    }
  }, [isInView])

  return (
    <div 
      ref={scope}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full"
    >
      {cards.map((card, index) => (
        <motion.div
          style={{
            scale: 0.8,
            opacity: 0,
            y: 10
          }}
          className="inline-block w-fit md:w-full mx-auto"
          key={`cohort-card-${card.title}`}
        >
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </motion.div>
      ))}
    </div>
  );
}
