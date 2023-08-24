import React from 'react'

const FooterLogo = () => {
  return (
    <section
      data-testid="footer-logo"
      className="flex h-28 w-36 flex-col items-start justify-between"
    >
      <h1 className="text-5xl font-bold text-primary">jdg.</h1>
      <p className="flex flex-col text-xs text-secondary">
        Junte-se à revolução
        <span>da programação! 🚀</span>
      </p>
    </section>
  )
}

export default FooterLogo
