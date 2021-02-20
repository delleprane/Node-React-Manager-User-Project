import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Imports Admins
import Dashboard from './pages/admin/dashboard';

import Usuarios from './pages/admin/usuarios';
import UsuariosEditar from './pages/admin/usuarios/usuarios.editar';
import UsuariosCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import Login from "./pages/admin/login";

import PrivateRoute from './services/wAuth';

//Import Client
import Home from './pages/client/home'

export default function Routes () {
   return(
      <BrowserRouter>
         <Switch>
            {/* Rota Cliente */}
            <Route path="/" exact component={Home} />

             {/* Rota Admin */}
             <Route path="/admin" exact component={Dashboard} />
             <Route path="/admin/login" exact component={Login} />

             <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
             <Route path="/admin/usuarios/cadastrar" exact component={UsuariosCadastrar} />
             <Route path="/admin/usuarios/editar/:idUsuario" exact component={UsuariosEditar} />
         </Switch>
      </BrowserRouter>
   )
}