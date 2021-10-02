import { useState, useRef, createContext } from "react";
import Link from "next/link";
import ordersData from "../data/ordersData/ordersData";
import usersData from "../data/usersData/usersData";

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [section, setSection] = useState("dashboard");
  const sidebarRef = useRef(null);
  const newBookRef = useRef(null);
  const [newBookInfo, setNewBookInfo] = useState({
    bookName: "",
    authorName: "",
    bookImg: "",
    bookCategory: "",
    bookPrice: "",
  });

  const showSidebar = () => {
    sidebarRef.current.classList.toggle("-translate-x-full");
  };

  const newBookInfoHandler = (e) => {
    e.preventDefault();

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/books/addNewBook`, {
      method: "POST",
      body: JSON.stringify({ ...newBookInfo }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        newBookRef.current.innerText = data.message;
        setTimeout(() => {
          newBookRef.current.innerText = "";
        }, 2000);
      })
      .catch((err) => console.error(err));

    //   Reset the input fields
    setNewBookInfo({
      bookName: "",
      authorName: "",
      bookImg: "",
      bookCategory: "",
      bookPrice: "",
    });
  };

  const value = {
    section,
    setSection,
    sidebarRef,
    newBookRef,
    newBookInfo,
    setNewBookInfo,
    showSidebar,
    newBookInfoHandler,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardProvider };
