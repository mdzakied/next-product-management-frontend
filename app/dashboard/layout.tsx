"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "@/redux/userSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Avatar, Dropdown, Navbar, Sidebar } from "flowbite-react";

import {
  HiMail,
  HiMenu,
  HiOutlineUserCircle,
  HiOutlineUsers,
  HiX,
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiUser,
} from "react-icons/hi";

import { logoutService } from "../../services/authService";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get user data from Redux
  const user = useSelector((state: UserState) => state.user);

  // State
  const [isVisible, setIsVisible] = useState(false);

  // Router
  const router = useRouter();

  // Toggle visibility
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev); // Toggle the visibility
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      // Call logout service
      await logoutService();

      // Redirect to dashboard
      router.push("/");
    } catch (err: any) {
      console.log(err);
    }
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
            label={<Avatar rounded size={"sm"} alt="User settings" />}
          >
            {/* Dropdown Profile */}
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">
                User Profile
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <div className="flex items-center">
                <HiUser className="mr-2 text-lg" />
                <span className="mt-1">{user.name}</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="flex items-center">
                <HiMail className="mr-2 text-lg" />
                <span className="">{user.email}</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="flex items-center">
                <HiOutlineUsers className="mr-2 text-lg" />
                <span className="">{user.gender}</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="flex items-center">
                <HiOutlineUserCircle className="mr-2 text-lg" />
                <span className="">{user.role}</span>
              </div>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
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
            className={`w-full border-gray-400 md:w-auto md:border-r ${
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
                  <Sidebar.Item href="/dashboard/user" icon={HiUser}>
                    Users
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/dashboard/product"
                    icon={HiInbox}
                    label="0"
                  >
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item onClick={handleLogout} icon={HiArrowSmRight}>
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
