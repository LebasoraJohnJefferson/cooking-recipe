import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [overlayStatus, setOverlayStatus] = useState(false);

  const changeOverlayStatus = () => {
    if (overlayStatus) {
      setOverlayStatus(false);
      return;
    }

    setOverlayStatus(true);
  };

  return (
    <header className="bg-white drop-shadow fixed w-full z-40">
      <div className="py-3 md:py-4 px-3 flex justify-between items-center max-w-[1200px] mx-auto">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <Image src="/chef.svg" height={30} width={30} alt="chef icon" />
            Cooking Recipe
          </div>
        </Link>

        <div
          className={`fixed p-4 top-0 z-10 h-screen bg-white w-full left-0 md:hidden ${
            overlayStatus ? "fixed" : "hidden"
          }`}
        >
          <div className="flex justify-between">
            <div className=""></div>
            <div
              className="bg-slate-50 p-2 rounded-lg md:hidden cursor-pointer"
              onClick={changeOverlayStatus}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>

          <div className="pt-[100px] items-center h-full">
            <ul className="grid gap-4 place-items-center">
              <li className="font-semibold text-slate-900 text-2xl hover:bg-slate-50 rounded-lg cursor-pointer w-fit py-2 px-4">
                <Link href="/">Home</Link>
              </li>
              <li className="font-semibold text-slate-900 text-2xl hover:bg-slate-50 rounded-lg cursor-pointer w-fit py-2 px-4">
                <a href="https://www.themealdb.com/api.php">API</a>
              </li>
              <li className="font-semibold text-slate-900 text-2xl hover:bg-slate-50 rounded-lg cursor-pointer w-fit py-2 px-4">
                <Link href="/aboutUs">About Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="bg-slate-50 p-2 rounded-lg md:hidden cursor-pointer"
          onClick={changeOverlayStatus}
        >
          {!overlayStatus ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          )}
        </div>

        <ul className="hidden md:flex gap-3">
          <li className="py-2 px-3 hover:bg-slate-50 rounded-lg cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-3 hover:bg-slate-50 rounded-lg cursor-pointer">
            <a href="https://www.themealdb.com/api.php">API</a>
          </li>
          <li className="py-2 px-3 hover:bg-slate-50 rounded-lg cursor-pointer">
            <Link href="/aboutUs">About Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
