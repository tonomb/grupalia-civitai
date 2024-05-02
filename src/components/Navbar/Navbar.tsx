import React from "react";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <div data-testid="navbar" className="p-4 flex flex-row gap-2 align-center">
      <Logo />
      <div className="border border-solid border-[#51CF66] text-[#51CF66] rounded py-1 px-2 flex flex-row">
        <p>For Grupalia </p>
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
          className="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>
  );
}
