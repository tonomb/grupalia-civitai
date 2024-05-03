import React from "react";

export default function ImageOption({ imageOption }: any) {
  return (
    <div className="hover:bg-slate-800 p-1 flex flex-row text-grey-200 gap-2">
      {imageOption.icon && <img src={imageOption.icon} />}
      <p className="text-sm text-gray-200">{imageOption.action}</p>
    </div>
  );
}
