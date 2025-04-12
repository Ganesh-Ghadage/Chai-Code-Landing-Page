import React, { useState } from "react";
import { cn } from "@/lib/utils";
import CohortCard from "../cohort-card";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
