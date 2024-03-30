import { CardArticle, CardEmphasize } from "@ama-pt/agora-design-system";
import React from "react";

export default function FiirstSection() {
  return (
    <div className="my-32">
      <div className="grid xs:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-32">
        <div className="xs:col-span-4 md:col-span-8 xl:col-span-4">
          <CardArticle
            headingLevel="h2"
            mainAnchor={{
              children: "Aceder",
              hasIcon: true,
              trailingIcon: "agora-line-arrow-right-circle",
              trailingIconHover: "agora-line-arrow-right-circle",
              variant: "primary",
              href: "#",
              target: "_blank",
            }}
            pillLabel="IRS"
            pillVariant="primary"
            title="Deduções à coleta e Encargos da atividade"
          >
            Está disponível a consulta das despesas e encargos para o IRS de
            2023. Pode reclamar até 31 de março as: - despesas gerais e
            familiares e - despesas com direito à dedução do IVA pela exigência
            de fatura.
          </CardArticle>
        </div>
        <div className="xs:col-span-4 md:col-span-8 xl:col-span-4">
          <CardArticle
            headingLevel="h2"
            mainAnchor={{
              children: "Aceder",
              hasIcon: true,
              trailingIcon: "agora-line-arrow-right-circle",
              trailingIconHover: "agora-line-arrow-right-circle",
              variant: "primary",
              href: "#",
              target: "_blank",
            }}
            pillLabel="APOIO"
            pillVariant="primary"
            title="Atendimento e-balcão"
          >
            Obtenha, de forma rápida e segura, todos os esclarecimentos sobre as
            obrigações tributárias e aduaneiras.
          </CardArticle>
        </div>
        <div className="xs:col-span-4 md:col-span-8 xl:col-span-4">
          <CardArticle
            headingLevel="h2"
            mainAnchor={{
              children: "Aceder",
              hasIcon: true,
              trailingIcon: "agora-line-arrow-right-circle",
              trailingIconHover: "agora-line-arrow-right-circle",
              variant: "primary",
              href: "#",
              target: "_blank",
            }}
            pillLabel="IRS"
            pillVariant="primary"
            title="Entidade a consignar IRS/IVA dedutível"
          >
            Comunique aqui até 31 de março ou no IRS Automático ou na modelo 3,
            a partir de 1 de abril.
          </CardArticle>
        </div>
      </div>
    </div>
  );
}
