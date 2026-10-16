import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>🛒 Urban Store</h1>
      <nav>
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <NavLink to="/contato">Contato</NavLink>
      </nav>
    </header>
  );
}