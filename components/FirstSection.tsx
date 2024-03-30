import { CardEmphasize } from "@ama-pt/agora-design-system";
import React from "react";

export default function FiirstSection() {
  return (
    <div className="my-32">
      <div className="grid xs:grid-cols-4 md:grid-cols-8 xl:grid-cols-12 gap-32">
        <div className="xs:col-span-4 md:col-span-8 xl:col-span-4">
          <CardEmphasize
            description="Está disponível a consulta das despesas e encargos para o IRS de 2023.
            Pode reclamar até 31 de março as:
            - despesas gerais e familiares e
            - despesas com direito à dedução do IVA pela exigência de fatura."
            mainButton={{
              children: "Aceder",
              hasIcon: true,
              trailingIcon: "agora-line-arrow-right-circle",
              trailingIconHover: "agora-line-arrow-right-circle",
            }}
            title="Deduções à coleta e Encargos da atividade"
            alignment={"left"}
          />
        </div>
        <div className="xs:col-span-4 md:col-span-8 xl:col-span-4">
          <CardEmphasize
            description="Obtenha, de forma rápida e segura, todos os esclarecimentos sobre as obrigações tributárias e aduaneiras."
            mainButton={{
              children: "Aceder",
              hasIcon: true,
              trailingIcon: "agora-line-arrow-right-circle",
              trailingIconHover: "agora-line-arrow-right-circle",
            }}
            title="Atendimento e-balcão"
            alignment={"left"}
          />
        </div>
        <div className="xs:col-span-4 md:col-span-8 xl:col-span-4">
          <CardEmphasize
            description="Comunique aqui até 31 de março ou no IRS Automático ou na modelo 3, a partir de 1 de abril."
            mainButton={{
              children: "Aceder",
              hasIcon: true,
              trailingIcon: "agora-line-arrow-right-circle",
              trailingIconHover: "agora-line-arrow-right-circle",
            }}
            title="Entidade a consignar IRS/IVA dedutível "
            alignment={"left"}
          />
        </div>
      </div>
    </div>
  );
}
