import { CardHighlightNewsletter, InputEmailBar } from '@ama-pt/agora-design-system'
import React from 'react'

export default function NewsLetter() {
  return (
    <div className="px-16 py-16">
        <CardHighlightNewsletter
          image={{
            src: "https://www.portaldasfinancas.gov.pt/at/images/header_secondary/Landing_Banner_03.jpg",
          }}
          subtitle={
            <span className="text-m-regular">
              Semanalmente enviamos as novidades da AT para o seu email.
            </span>
          }
          title={
            <span className="text-2xl-bold">
              Quer receber as nossas novidades?
            </span>
          }
        >
          <InputEmailBar
            darkMode
            hasLabel
            label="Qual é o seu email?"
            placeholder="Insira o seu email para subscrição..."
          />
        </CardHighlightNewsletter>
      </div>
  )
}
