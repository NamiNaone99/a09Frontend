"use client";
import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Card({
  venueName,
  imgSrc,
  onRating,
}: {
  venueName: string;
  imgSrc: string;
  onRating?: Function;
}) {
  const [value, setValue] = useState<number | null>(0);

  return (
    <InteractiveCard>
      <div className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-52 w-full">
          <Image
            src={imgSrc}
            alt={`${venueName} image`}
            fill={true}
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>

        <div className="p-4 bg-white">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{venueName}</h3>

          {onRating && (
            <div className="flex items-center justify-center mt-2">
              <Rating
                name={venueName + " Rating"}
                id={venueName + " Rating"}
                data-testid={venueName + " Rating"}
                value={value}
                precision={0.5}
                size="large"
                onChange={(event, newValue) => {
                  event.stopPropagation();
                  setValue(newValue);
                  onRating(venueName, newValue);
                }}
                onClick={(e) => e.stopPropagation()}
                className="text-amber-500"
              />
            </div>
          )}
        </div>
      </div>
    </InteractiveCard>
  );
}
