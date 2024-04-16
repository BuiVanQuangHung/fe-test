"use client";

import React, { useState } from "react";

interface SettingsPage {
  title: string;
  email: string;
  backgroundColor: string;
  activeDate: string;
}
const initialFormState = {
  title: "",
  email: "",
  backgroundColor: "#ccc",
  activeDate: "",
};

const SettingsPage: React.FC = () => {
  const [formState, setFormState] = useState<SettingsPage>(initialFormState);

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleChange =
    (name: keyof SettingsPage) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState((prev) => ({ ...prev, [name]: event.target.value }));
    };

  return (
    <div>
      <p className="text-blue-500 text-2xl font-bold">Settings</p>
      <form onSubmit={handleSave} className="m-5 flex flex-col gap-3">
        <div className="flex gap-3">
          <label>Title:</label>
          <input
            required
            type="text"
            name="title"
            className="border border-indigo-950 rounded px-2 py-1"
            value={formState.title}
            onChange={handleChange("title")}
          />
        </div>
        <div className="flex gap-3">
          <label>Email:</label>
          <input
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            name="email"
            className="border border-indigo-950 rounded px-2 py-1"
            value={formState.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="flex gap-3">
          <label>Background Color:</label>
          <input
            required
            type="color"
            value={formState.backgroundColor}
            onChange={handleChange("backgroundColor")}
          />
        </div>
        <div className="flex gap-3">
          <label>Active Date:</label>
          <input
            required
            type="date"
            name="activeDate"
            value={formState.activeDate}
            onChange={handleChange("activeDate")}
          />
        </div>
        <button
          className="bg-red-500 py-2 px-5 rounded text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
