"use client";
import Image from "next/image";
import Card from "@/components/Card";
import Firstsection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import { InputSearch } from "@ama-pt/agora-design-system";

export default function Home() {
  return (
    <div>
      <div className="px-16 py-16 flex justify-center">
        <Image
          src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/logo-at.png"
          width={250}
          height={100}
          alt="logo"
        />
      </div>
      <div className="px-16 py-16">
      <InputSearch 
        placeholder="Indique o que pretende... (Ex: Entregar IRS)"
        className="mx-16"
      />
      </div>
      <Card />
      <Firstsection />
      <div className="flex justify-center">
        <img
          src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/logo_premio_salarial.png"
          alt=""
          width={455}
        />
      </div>
      <SecondSection />
    </div>
  );
}
