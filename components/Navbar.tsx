"use client";
import { Button } from "@ama-pt/agora-design-system";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [date, setDate] = useState("Carregando data...");

  useEffect(() => {
    const date = new Date();
    setDate(
      date.toLocaleDateString("pt-PT", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <div className="bg-primary-900">
      <nav className="container mx-auto">
        <div className=" flex items-center justify-between p-8">
          <span className="text-white">{date}</span>
          <div className="flex gap-16">
            <Button appearance="outline" variant="neutral" darkMode>
              Registar-se
            </Button>
            <Button darkMode variant="neutral">
              Iniciar Sessão
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
