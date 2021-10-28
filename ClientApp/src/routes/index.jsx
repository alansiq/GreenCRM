import React from 'react';
import { Route } from 'react-router-dom';
import {
            Home,
            ListarClientes,
            CadastrarCliente
        } from '../pages';


const Routes = () => {

    return (
        <>
            <Route exact path="/" component={Home} />
            <Route path="/cadastrar-cliente" component={CadastrarCliente} />
            <Route path="/listar-clientes" component={ListarClientes} />
        </>
    )
}

export default Routes; 
