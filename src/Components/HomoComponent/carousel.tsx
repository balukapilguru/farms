"use client";
import Image from "next/image";
import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

// Data with corrected title
export const data = [
  {
    cover: "/assets/Gallery/01.jpg",
    title: "Interstellar",
  },
  {
    cover: "/assets/Gallery/02.jpg",
    title: "Inception",
  },
  {
    cover: "/assets/Gallery/03.jpg",
    title: "Blade Runner 2049",
  },
  {
    cover: "/assets/Gallery/04.jpg",
    title: "Iron Man 3",
  },
  {
    cover: "/assets/Gallery/05.jpg",
    title: "Venom",
  },
  {
    cover: "/assets/Gallery/06.jpg",
    title: "Steins Gate",
  },
  {
    cover: "/assets/Gallery/07.jpg",
    title: "One Punch Man",
  },
  {
    cover: "/assets/Gallery/08.jpg",
    title: "A Silent Voice",
  },
];
type CardProps = {
    data: { cover: string, title: string }[],
    dataIndex: number
  };

// Card component definition

// ResponsiveCarousel component definition
export default function ResponsiveCarousel() {
  const ref = React.useRef();
  return (
    <div style={{ width: "100%", position: "relative" }} className="mt-10" id="projects">
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 5;
          if (parentWidth <= 1024) currentVisibleSlide = 5;

          if (parentWidth <= 768) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />
    </div>
  );
}

export const Card = React.memo(function CardComponent(props: CardProps) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
    style={{
      width: "100%",
      height: 400,
      userSelect: "none",
    }}
    className="my-slide-component mt-10"
  >
    <Image
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        borderRadius: 45,
      }}
      draggable={false}
      src={cover}
      alt="cover"
      fill
      className=" border-2 border-white"
    />
  </div>
  );
});
