import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

import React, { useEffect, useState } from "react";
import { Home, LogOut, Menu, X, MessagesSquare } from "lucide-react";
import styles from "./dashboard.module.css";
import HomeAdmin from "./home";
import parmaLogo from "../../../public/images/black-logo.webp";
import AdminQuestions from "./questions";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentHash, setCurrentHash] = useState(
    window.location.hash || "#inicio"
  );

  const menuItems = [
    { title: "Inicio", icon: <Home size={24} />, hash: "#inicio" },
    {
      title: "Preguntas",
      icon: <MessagesSquare size={24} />,
      hash: "#preguntas",
    },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (hash: string) => {
    window.location.hash = hash;
    setCurrentHash(hash);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sesión cerrada");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión", error);
      });
  };

  const renderContent = () => {
    switch (currentHash) {
      case "#inicio":
        return <HomeAdmin />;
      case "#preguntas":
        return <AdminQuestions />;
      default:
        return <HomeAdmin />;
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar para Desktop */}
      <div
        className={`${styles.sidebar} ${
          isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div
          className={styles.sidebarHeader}
          style={{
            justifyContent: isSidebarOpen ? "space-between" : "center",
          }}
        >
          {isSidebarOpen && (
            <img
              src={parmaLogo.src}
              height={38}
              style={{
                marginLeft: "-10px",
              }}
              onClick={() => (window.location.href = "/")}
              alt="logo de parma"
            />
          )}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className={styles.toggleButton}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={styles.menuContainer}>
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.hash)}
              style={{
                justifyContent: isSidebarOpen ? "flex-start" : "center",
              }}
              className={`${styles.menuItem} ${
                currentHash === item.hash ? styles.menuItemActive : ""
              }`}
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              {isSidebarOpen && (
                <span className={styles.menuText}>{item.title}</span>
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className={styles.logoutButton}
          style={{
            justifyContent: isSidebarOpen ? "flex-start" : "center",
          }}
        >
          <span className={styles.menuIcon}>
            <LogOut size={24} />
          </span>
          {isSidebarOpen && (
            <span className={styles.menuText}>Cerrar Sesión</span>
          )}
        </button>
      </div>

      {/* Bottom App Bar para Mobile */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomBarContent}>
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.hash)}
              className={`${styles.bottomBarItem} ${
                currentHash === item.hash ? styles.bottomBarItemActive : ""
              }`}
            >
              <span className={styles.bottomBarIcon}>{item.icon}</span>
              <span className={styles.bottomBarText}>{item.title}</span>
            </button>
          ))}
          <button onClick={handleLogout} className={styles.bottomBarItem}>
            <span className={styles.bottomBarIcon}>
              <LogOut size={24} />
            </span>
            <span className={styles.bottomBarText}>Cerrar Sesión</span>
          </button>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className={styles.mainContent}>{renderContent()}</div>
    </div>
  );
};

export default Dashboard;
