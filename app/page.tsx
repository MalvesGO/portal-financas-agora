"use client";
import Image from "next/image";
import Card from "@/components/Card";
import Firstsection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import Contacto from "@/components/Contacto";
import NewsLetter from "@/components/NewsLetter";
import FeedbackApp from "@/components/FeedbackApp";
import Search from "@/components/Search";

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
      <Search />
      <Card />
      <Firstsection />
      <div className="flex justify-center">
        <Image
          src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/logo_premio_salarial.png"
          alt=""
          width={420}
          height={100}
        />
      </div>
      <NewsLetter />
      <FeedbackApp />
      <SecondSection />
    </div>
  );
}
