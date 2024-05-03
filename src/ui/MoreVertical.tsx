import React, { ReactElement } from "react";

export default function MoreVertical({
  moreOptionsVisible,
  setMoreOptionsVisible,
}: any) {
  //TODO: Fix turning all other options off
  function moreClickHandler() {
    setMoreOptionsVisible(!moreOptionsVisible);
  }

  return (
    <div
      className="text-white hover:cursor-pointer z-50"
      onClick={moreClickHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-more-vertical"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
      </svg>
    </div>
  );
}
