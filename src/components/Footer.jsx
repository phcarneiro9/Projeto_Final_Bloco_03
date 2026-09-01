function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="mt-auto w-full bg-primary-900 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-primary-100 md:flex-row">
        <p>© {ano} Farmácia Bem Estar. Todos os direitos reservados.</p>
        <p>Desenvolvido como projeto de estudo — Generation</p>
      </div>
    </footer>
  )
}

export default Footer
