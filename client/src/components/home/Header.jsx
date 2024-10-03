"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

export const Header = ({ buttonBoard, buttonRecords, handleOpen }) => {
  const [dash, setDash] = useState(true);
  const buttonDash = () => {
    setDash(true);
  };
  const buttonRecord = () => {
    setDash(false);
  };
  if (dash) {
    buttonBoard();
  } else {
    buttonRecords();
  }
  const logOutHandle = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="w-screen bg-white h-[72px] flex justify-center">
      <div className="w-[1200px] flex items-center justify-between ">
        <div className="flex gap-6">
          <img
            className="w-[27px] h-[27px]"
            src="/header/image.png
          "
            alt=""
          />
          <div
            onClick={() => {
              buttonDash();
            }}
            className={`cursor-pointer ${
              dash ? "font-semibold" : "font-normal"
            }`}
          >
            Dashboard
          </div>
          <div
            onClick={() => {
              buttonRecord();
            }}
            className={`cursor-pointer ${
              !dash ? "font-semibold" : "font-normal"
            }`}
          >
            Records
          </div>
        </div>
        <div className="flex gap-6 font- items-center">
          <div className="w-[99px] h-[32px]">
            <Button
              onClick={() => {
                handleOpen(), buttonRecord();
              }}
              text={"+ Record"}
            />
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="header/rere.png"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li
                onClick={() => {
                  logOutHandle();
                }}
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
