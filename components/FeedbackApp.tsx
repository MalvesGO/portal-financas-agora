import { Feedback } from "@ama-pt/agora-design-system";
import React from "react";

export default function FeedbackApp() {
  return (
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
  );
}
