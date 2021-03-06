import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CadastroClientes from './pages/CadastroClientes';
import ListarClientes from './pages/ListarClientes';
import AdicionarProdutos from './pages/AdicionarProdutos';
import ListarProdutos from './pages/ListarProdutos';
import CadastroContas from './pages/CadastrarContas';
import UpdateClientes from './pages/UpdateClientes';
import ListarContas from './pages/ListarContas';
import Orcamento from './pages/Orcamento';
import ConsultaOrcamento from './pages/ConsultaOrcamento';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/cadastro-clientes" component={CadastroClientes} />
                <Route path="/listar-clientes" component={ListarClientes} />
                <Route path="/adicionar-produtos" component={AdicionarProdutos} />
                <Route path="/listar-produtos" component={ListarProdutos} />
                <Route path="/cadastrar-contas" component={CadastroContas} />
                <Route path="/update-cliente" component={UpdateClientes} />
                <Route path="/listar-contas" component={ListarContas} />
                <Route path="/gerar-orcamento" component={Orcamento} />
                <Route path="/consulta-orcamento" component={ConsultaOrcamento} />
            </Switch>
        </BrowserRouter>
    );
}