import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/Logo-IFRS-cores-sem-fundo-Vertical.png'
import './MenuLayout.css'

export default function MenuLayout() {
  return (
    <div className="menu-layout">
      <header className="menu-header">
        <img src={logo} alt="Logo IFRS" className="menu-header-logo" />
        <h1 className="menu-header-title">Cardápio IFRS</h1>
      </header>
      <nav className="menu-nav">
        <NavLink to="/" end>Próxima Refeição</NavLink>
        <NavLink to="/cardapio/dia">Diário</NavLink>
        <NavLink to="/cardapio/semana">Semanal</NavLink>
      </nav>
      <main className="menu-content">
        <Outlet />
      </main>
    </div>
  )
}
