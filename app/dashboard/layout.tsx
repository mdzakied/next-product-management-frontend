"use client";

import { DarkThemeToggle } from "flowbite-react";

import { Avatar, Dropdown, Navbar } from "flowbite-react";

import { Sidebar } from "flowbite-react";

import { HiMenu, HiOutlineInbox, HiX } from "react-icons/hi";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

import Image from "next/image";

import { useState } from "react";

import { ReactNode } from "react";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // State
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle the visibility
  };

  return (
    <div className=" dark:bg-gray-800">
      {/* Navbar */}
      <Navbar fluid>
        <Navbar.Brand>
          <Image
            src="/box.png"
            width={40}
            height={40}
            alt="Flowbite React Logo"
          />
          <span className="ml-1 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Prodigy
          </span>
        </Navbar.Brand>
        {/* Profile */}
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                size={"sm"}
                rounded
              />
            }
          >
            {/* Dropdown Profile */}
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>

          {/* Hamburger or Close Icon Button for Sidebar */}
          <button
            onClick={toggleVisibility}
            className="ml-2 rounded p-2 text-2xl hover:bg-gray-200 focus:outline-none dark:hover:bg-gray-700 md:hidden"
          >
            {isVisible ? (
              <HiX className="text-black dark:text-white" />
            ) : (
              <HiMenu className="text-black dark:text-white" />
            )}
          </button>
        </div>
      </Navbar>

      {/* Main */}
      <div className="flex">
        <main className="flex h-screen w-screen border-t border-gray-400">
          {/* Sidebar */}
          <div
            className={`w-full border-r border-gray-400 md:w-auto ${
              isVisible ? "block md:block" : "hidden md:block"
            }`}
          >
            <Sidebar aria-label="Default sidebar" className="w-full">
              <Sidebar.Items className="border-b border-gray-400 pb-2 md:border-none">
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    href="#"
                    icon={HiChartPie}
                    className="pointer-events-none opacity-50"
                  >
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="#"
                    icon={HiUser}
                    className="pointer-events-none opacity-50"
                  >
                    Users
                  </Sidebar.Item>
                  <Sidebar.Item href="/product" icon={HiInbox} label="102">
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                    Logout
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>

          {/* Layout for children */}
          <div
            className={`flex w-full items-start justify-center p-4 ${
              !isVisible ? "block md:block" : "hidden md:block"
            }`}
          >
            {/* Children */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
