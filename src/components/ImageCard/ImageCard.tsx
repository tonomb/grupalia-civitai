import React, { ReactElement, useState } from "react";
import MoreVertical from "../../ui/MoreVertical";
import ImageOptions from "../ImageOptions/ImageOptions";

interface ImageCardProps {
  imageData: ImageData;
}

interface ImageData {
  url: string;
  [key: string]: any;
}

export default function ImageCard({ imageData }: ImageCardProps) {
  return (
    <div data-testid="image-card" className="rounded-lg relative">
      <img
        src={imageData.url}
        alt=""
        className="rounded-lg border border-solid border-[#373a40]"
      />
      <ImageOptions />
    </div>
  );
}
