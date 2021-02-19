import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu-admin'
import api from '../../../services/api';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
   },
   toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: 36,
   },
   menuButtonHidden: {
      display: 'none',
   },
   title: {
      flexGrow: 1,
   },
   drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing(9),
      },
   },
   appBarSpacer: theme.mixins.toolbar,
   content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
   },
   container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
   },
   paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
   },
   fixedHeight: {
      height: 240,
   },
}));


export default function UsuariosListagem() {
   const classes = useStyles();

   const [usuarios, setUsuarios] = useState([])

   useEffect(() => {
      async function loadUsuarios() {
         const response = await api.get('/api/usuarios');
         setUsuarios(response.data)
      }
      loadUsuarios();
   }, [])

   async function handleDelete(id) {
      if (window.confirm('Deseja realmente excluir este usuário?')){
         var result = await api.delete('/api/usuarios/'+id)
         if (result.status === 200){
            window.location.href = '/admin/usuarios'
         } else {
            alert('Ocorreu um erro. Por favor tente novamente!');
         }
      } 
   }

   return (
      <div className={classes.root}>
         <CssBaseline />

         <MenuAdmin title={'USUÁRIOS'} />

         <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
               <Grid container spacing={3}>
                  <Grid item xs={12}>
                     <Paper className={classes.paper}>
                        <h2>Listagem de Usuários</h2>
                        <Grid container spacing={3}>
                           <Grid item xs={12} sm={12}>
                              <TableContainer component={Paper}>
                                 <Table className={classes.table} size="small" aria-label="a dense table">
                                    <TableHead>
                                       <TableRow>
                                          <TableCell>Nome</TableCell>
                                          <TableCell align="left">Sobrenome</TableCell>
                                          <TableCell align="left">CPF</TableCell>
                                          <TableCell align="left">Telefone</TableCell>
                                          <TableCell align="left">E-mail</TableCell>
                                          <TableCell align="right">Opções</TableCell>
                                       </TableRow>
                                    </TableHead>
                                    <TableBody>
                                       {usuarios.map((row) => (
                                          <TableRow key={row._id}>
                                             <TableCell component="th" scope="row">
                                                {row.nome_usuario}
                                             </TableCell>
                                             <TableCell align="left">{row.sobrenome_usuario}</TableCell>
                                             <TableCell align="left">{row.cpf_usuario}</TableCell>
                                             <TableCell align="left">{row.telefone_usuario}</TableCell>
                                             <TableCell align="left">{row.email_usuario}</TableCell>
                                             <TableCell align="right">
                                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                                   <Button color="primary" href={'/admin/usuarios/editar/'+row._id}>Atualizar</Button>
                                                   <Button color="secondary" onClick={() => handleDelete(row._id)}>Excluir</Button>
                                                </ButtonGroup>
                                             </TableCell>
                                          </TableRow>
                                       ))}
                                    </TableBody>
                                 </Table>
                              </TableContainer>
                           </Grid>
                        </Grid>
                     </Paper>
                  </Grid>
               </Grid>
            </Container>
         </main>
      </div>
   );
}