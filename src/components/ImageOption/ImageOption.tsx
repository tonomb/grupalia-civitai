import React from "react";

export default function ImageOption({ imageOption }: any) {
  return (
    <div className="hover:bg-slate-800 p-1 flex flex-row text-white gap-2">
      {imageOption.icon && <img src={imageOption.icon} />}
      <p>{imageOption.action}</p>
    </div>
  );
}
