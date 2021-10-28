import React from 'react';
import { Route, useRouteMatch, Link } from 'react-router-dom';

import DadosCliente from '../../pages/CadastrarCliente/DadosCliente';


const CadastrarClienteRoutes = () => {

    const { path, url } = useRouteMatch();

    return (
        <>
            <ul>
                <li>
                    <Link to={`${url}`}>Root</Link>

                </li>
                <li>
                    <Link to={`${url}/cliente`}>Cliente</Link>

                </li>
                <li>
                    <Link to={`${url}/endereco`}>Endereço</Link>

                </li>
                <li>
                    <Link to={`${url}/faturamento`}>Faturamento</Link>

                </li>

            </ul>
            <Route exact path={path} >
                <h1>Cadastrar-Cliente root</h1>

            </Route>
            <Route exact path={`${path}/cliente`} component={DadosCliente}/> 
            <Route path={`${path}/endereco`} >
                <h1>Endereço</h1>
            </Route>
            <Route path={`${path}/faturamento`}>
                <h1>Faturamento</h1>
            </Route>
        </>
    )
}

export default CadastrarClienteRoutes;