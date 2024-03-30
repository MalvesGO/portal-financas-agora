import { InputSearch } from "@ama-pt/agora-design-system";
import React from "react";

export default function Search() {
  return (
    <div className="px-16 py-16">
      <InputSearch
        placeholder="Indique o que pretende... (Ex: Entregar IRS)"
        className="mx-16"
      />
    </div>
  );
}
