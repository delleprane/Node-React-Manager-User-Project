import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
   <div>
      <ListItem button component="a" href="/admin">
         <ListItemIcon>
            <DashboardIcon />
         </ListItemIcon>
         <ListItemText primary="Dashboard"/>
      </ListItem>
      <ListItem button component="a" href="/admin/usuarios">
         <ListItemIcon>
            <PeopleIcon />
         </ListItemIcon>
         <ListItemText primary="Usuários" />
      </ListItem>
   </div>
);

export const secondaryListItems = (
   <div>
      <ListSubheader inset>Opções</ListSubheader>
      <ListItem button>
         <ListItemIcon>
            <ExitToAppIcon />
         </ListItemIcon>
         <ListItemText primary="Sair" />
      </ListItem>
   </div>
);