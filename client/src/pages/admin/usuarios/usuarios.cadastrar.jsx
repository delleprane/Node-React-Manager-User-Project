import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import MenuAdmin from '../../../components/menu-admin'

import api from '../../../services/api'

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
      padding: 15,
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
   },
   fixedHeight: {
      height: 240,
   },
}));

export default function UsuarioCadastrar() {
   const classes = useStyles();

   const [nome, setNome] = useState('');
   const [sobrenome, setSobrenome] = useState('');
   const [cpf, setCpf] = useState('');
   const [telefone, setTelefone] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');

   async function handleSubmit() {
      const data = { nome_usuario: nome, sobrenome_usuario: sobrenome, cpf_usuario: cpf, telefone_usuario: telefone, email_usuario: email, senha_usuario: senha }

      if (nome !== '' && sobrenome !== '' && cpf !== '' && telefone !== '' && email !== '' && senha !== '') {
         const response = await api.post('/api/usuarios', data)
         if (response.status === 200) {
            window.location.href = '/admin/usuarios'
         } else {
            alert('Erro ao cadastrar o usuário!')
         }

      } else {
         alert('Por favor, preencha todos os campos!')
      }


   }

   return (
      <div className={classes.root}>
         <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
               <Grid container spacing={3}>
                  <Grid item xs={12}>
                     <Paper className={classes.paper}>
                        <h2>Formulário de Cadastro</h2>
                        <Grid container spacing={3}>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 id="nome"
                                 name="nome"
                                 label="Nome"
                                 fullWidth
                                 autoComplete="nome"
                                 value={nome}
                                 onChange={e => setNome(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 id="sobrenome"
                                 name="sobrenome"
                                 label="Sobrenome"
                                 fullWidth
                                 autoComplete="sobrenome"
                                 value={sobrenome}
                                 onChange={e => setSobrenome(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 id="cpf"
                                 name="cpf"
                                 label="Cpf"
                                 fullWidth
                                 autoComplete="cpf"
                                 value={cpf}
                                 onChange={e => setCpf(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 id="telefone"
                                 name="telefone"
                                 label="Telefone"
                                 fullWidth
                                 autoComplete="telefone"
                                 value={telefone}
                                 onChange={e => setTelefone(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 id="email"
                                 name="email"
                                 label="E-mail"
                                 fullWidth
                                 autoComplete="email"
                                 value={email}
                                 onChange={e => setEmail(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={6}>
                              <TextField
                                 required
                                 type="password"
                                 id="senha"
                                 name="senha"
                                 label="Senha"
                                 fullWidth
                                 autoComplete="senha"
                                 value={senha}
                                 onChange={e => setSenha(e.target.value)}
                              />
                           </Grid>
                           <Grid item xs={12} sm={12}>
                              <Button variant="contained" onClick={handleSubmit} color="primary">
                                 Salvar
                              </Button>
                           </Grid>
                        </Grid>
                     </Paper>
                  </Grid >
               </Grid>
            </Container>
         </main>
      </div>
   );
}