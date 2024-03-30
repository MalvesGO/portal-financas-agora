"use client";
import { Button } from "@ama-pt/agora-design-system";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [date, setDate] = useState("Carregando data...");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setDate(date.toLocaleDateString('pt-PT', options));
    }, 1000);
    return () => clearInterval(interval);
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
