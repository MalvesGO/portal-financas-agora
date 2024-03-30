"use client";
import Image from "next/image";
import Card from "@/components/Card";
import Firstsection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import { Feedback, InputSearch } from "@ama-pt/agora-design-system";

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
        <Image
          src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/logo_premio_salarial.png"
          alt=""
          width={420}
          height={100}
        />
      </div>
      <div className="px-16 py-16">
        <Feedback
          darkMode
          evaluate={{
            dislikeButtonTitle: "Não",
            dislikeButtonVariant: "danger",
            likeButtonTitle: "Sim",
            likeButtonVariant: "success",
            mainButton: {
              darkMode: true,
              hasIcon: true,
            },
          }}
          message="Agradecemos o seu contributo."
          subtitle="Avalie a experiência da página e deixe-nos um comentário."
          title="O conteúdo da página foi útil?"
        />
      </div>
      <SecondSection />
      <div className="px-16 py-16">
        <div className="flex justify-between gap-16">
          <div>
            <img src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_0ss_ver01-130x80.png" alt="" />
          </div>
          <div>
            <img src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_direitos-do-contribuinte_ver01-180x60.png" alt="" />
          </div>
          <div>
            <img src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_apps-at_ver01-120x75.png" alt="" />
          </div>
          <div>
            sociais
          </div>
          <div>
            <img src="https://www.portaldasfinancas.gov.pt/at/html/assets/images/AT56_contactos_ver01-200x60.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
