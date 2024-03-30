import { InputSearch, InputSearchBar } from "@ama-pt/agora-design-system";
import React from "react";

export default function Search() {
  return (
    <div className="px-16 py-16">      
      <InputSearchBar
        placeholder="Indique o que pretende... (Ex: Entregar IRS)"
        voiceActionAltText="Descreva por palavras o que pretende procurar..."
        className="mx-16"
      />
    </div>
  );
}
