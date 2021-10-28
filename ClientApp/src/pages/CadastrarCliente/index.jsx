import React from 'react';
import CadastrarClienteRoutes from '../../routes/CadastrarClienteRoutes';
import Card from '../../components/Card';

const CadastrarCliente = () => {

    return (
        <Card>
            <h1>Cadastro de clientes</h1>
            <CadastrarClienteRoutes />
        </Card>
    )
}

export default CadastrarCliente;