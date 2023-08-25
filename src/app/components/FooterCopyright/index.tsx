const FooterCopyright = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <section
      data-testid="footer-copyright"
      className="mb-20 mt-8 flex items-center justify-center"
    >
      <h6 className="px-4 text-center text-xs text-secondary">
        © Juniors Developers Group {currentYear}. Todos os direitos reservados.
      </h6>
    </section>
  )
}

export default FooterCopyright
