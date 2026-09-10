export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t-[3px] border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-3 sm:gap-6 sm:px-6 sm:py-10 lg:px-10">
        <div>
          <div className="font-display text-lg font-extrabold sm:text-xl">DIEFER.ES</div>
          <p className="mt-2 text-xs text-text/50">© {year} Diefer Rodríguez. Todos los derechos reservados.</p>
          <div className="mt-3 flex gap-3 text-xs text-text/60">
            <a href="#" className="hover:text-text">Privacidad</a>
            <a href="#" className="hover:text-text">Cookies</a>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-text/50">CONTACTO</div>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li><a href="https://wa.me/34692048741" className="hover:underline">+34 692 04 87 41</a></li>
            <li><a href="mailto:tba@diefer.es" className="hover:underline">tba@diefer.es</a></li>
            <li>Vallirana · Barcelona</li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-text/50">FOLLOW</div>
          <div className="mt-3 flex gap-3 text-sm">
            <a href="https://www.linkedin.com/in/diefer-raúl-rodriguez-amaya-2b0359286" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://www.instagram.com/dieferrrrr.sh" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          </div>
          <p className="mt-4 text-xs text-text/40">Hecho a mano con React + Vite</p>
        </div>
      </div>
    </footer>
  )
}
