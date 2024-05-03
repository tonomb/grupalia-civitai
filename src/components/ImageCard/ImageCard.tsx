import React from "react";
import ImageOptions from "../ImageOptions/ImageOptions";
import EmojisBar, { EmojiBarStats } from "../EmojisBar/EmojisBar";

interface ImageCardProps {
  imageData: ImageData;
}

interface ImageData {
  url: string;
  stats: EmojiBarStats;
  [key: string]: any;
}

export default function ImageCard({ imageData }: ImageCardProps) {
  return (
    <div data-testid="image-card" className="rounded-lg relative mb-4">
      <img
        src={imageData.url}
        alt=""
        className="rounded-lg border border-solid border-[#373a40]"
      />
      <ImageOptions />
      <EmojisBar stats={imageData.stats} />
    </div>
  );
}
