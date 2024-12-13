"use client";
import React from "react";

export default function ClientWrapperFooter() {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <form action="POST">
      <input type="email" id="footerEmail" placeholder="Correo electrónico" />
      <button
        disabled={isLoading}
        style={{
          opacity: isLoading ? 0.5 : 1,
          color: "white",
        }}
        type="submit"
        onClick={async (event) => {
          setLoading(true);
          event.preventDefault();
          try {
            const email = (
              document.querySelector("#footerEmail") as HTMLInputElement
            ).value;
            const response = await fetch("/api/subscribe", {
              body: JSON.stringify({
                email: email,
                origin: "Parma",
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            });

            const data = await response.json();
            if (response.status === 201) {
              alert(data.message);
            } else {
              alert(data.error);
            }
            setLoading(false);
          } catch (error) {
            setLoading(false);
          }
        }}
      >
        Suscríbete
      </button>
    </form>
  );
}
