import React from "react";

interface ImageCardProps {
  imageData: ImageData;
}

interface ImageData {
  url: string;
  [key: string]: any;
}

export default function ImageCard({ imageData }: ImageCardProps) {
  return (
    <div data-testid="image-card" className="rounded-lg ">
      <img
        src={imageData.url}
        alt=""
        className="rounded-lg border border-solid border-[#373a40]"
      />
    </div>
  );
}
