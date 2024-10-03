"use client";
import { Dashboard } from "@/components/home/Dashboard";
import { Header } from "@/components/home/Header";
import { useState } from "react";
import { Records } from "./records/Records";

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [isDashboard, setIsDashboard] = useState(true);

  const toggleOpen = () => setOpen((prev) => !prev);

  const switchView = (view) => {
    setIsDashboard(view === "dashboard");
  };

  return (
    <div className="w-full relative flex flex-col items-center bg-[#F3F4F6]">
      <Header
        handleOpen={toggleOpen}
        buttonBoard={() => switchView("dashboard")}
        buttonRecords={() => switchView("records")}
      />

      {isDashboard ? (
        <Dashboard />
      ) : (
        <Records open={open} handleOpen={toggleOpen} handleClose={toggleOpen} />
      )}
    </div>
  );
};
