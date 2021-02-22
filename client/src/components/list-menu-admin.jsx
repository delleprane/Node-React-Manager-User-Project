import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import AddIcon from '@material-ui/icons/Add';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { getToken, logout } from '../services/auth';
import api from '../services/api';

export const mainListItems = (
   <div>
      <ListItem button component="a" href="/admin/usuarios">
         <ListItemIcon>
            <PeopleIcon />
         </ListItemIcon>
         <ListItemText primary="Usuários" />
      </ListItem>
      <ListItem button component="a" href="/admin/usuarios/cadastrar">
         <ListItemIcon>
            <AddIcon />
         </ListItemIcon>
         <ListItemText primary="Novo Usuário" />
      </ListItem>
   </div>
);

export const secondaryListItems = (
   <div>
      <ListItem button onClick={confirmSair}>
         <ListItemIcon>
            <ExitToAppIcon />
         </ListItemIcon>
         <ListItemText primary="Sair" />
      </ListItem>
   </div>
);

async function confirmSair() {
   if (window.confirm('Deseja realmente sair?')) {
      const response = await api.get('/api/usuarios/destroyToken', { headers: { token: getToken() } })
      if (response.status === 200) {
         logout();
         window.location.href = '/admin/login'
      } else {
         alert('Não foi possivel fazer o logout!');
      }
   }
}