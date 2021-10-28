import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavMenu = () => {
  return (
    <nav id="main-nav">
      <header className="logo">
        <img src="Logotipo.svg" alt="GreenCRM" />
      </header>

      <main className="nav-content">
        <ul>
          <li>
            <NavLink activeClassName="active" exact to="/">Dashboard</NavLink>
          </li>
        </ul>
        <ul>
          <small>CRM</small>
          <li>
            <NavLink activeClassName="active" to="/cadastrar-cliente">Cadastrar cliente</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/listar-clientes">Listar clientes</NavLink>
          </li>
        </ul>
        <ul>
          <small>PEDIDOS</small>
          <li>
            <NavLink activeClassName="active" to="/order">Criar orçamento</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/list-orders">Acompanhar orçamentos</NavLink>
          </li>
        </ul>
      </main>

    </nav>
  );
}

export default NavMenu;