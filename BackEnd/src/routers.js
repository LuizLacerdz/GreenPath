const express = require('express');
const client = require('../config/db');
const clientController = require('../controller/controller');
const router = express.Router();

router.get('/', clientController.getRoot); //Rota raiz
// router.get('/api/read', clientController.listAllUsers); // Rota para listar todos os Usuários
// router.get('/api/read/:id', clientController.listByID); // Rota para listar um usuário por ID
// router.post('/api/create', clientController.createNewUsers);//ROTA para Criar novo usuário
// router.delete('/api/deletar/:id', clientController.deleteUser); //ROta para deletar usuário
// router.put('/api/atualizar/luiz/gustavo/:id', clientController.updateUser); //Rota para atualizar dados do usuário
//router.post('/api/registersenai' , clientController.registerSenai); //Cadastrar um novo usuário
//router.post('/api/validate' , clientController.login); //validar o login

// router.post('/api/cadastroprojeto', clientController.cadastroProjeto) 
// router.post('/api/validateprojeto' , clientController.loginProjeto) 
// router.post('/api/resetsenhaprojeto', clientController.resetPassworldProjeto) 
// router.post('/api/resetprojeto', clientController.getEmailResetProjeto) 
// router.post('/api/cadastrocartao', clientController.cadastroCartao)


// router.post('/api/login/aluno', clientController.login); // Login dos Alunos
// router.post('/api/registerimage', clientController.registerImageStudents); // Cadastrar os Alunos
// router.get('/api/students', clientController.getAllStudents)
// router.post('/api/reset', clientController.getEmailReset)
// router.post('/api/resetpassword', clientController.resetPassworld)

// router.post('/api/login/professor', clientController.loginProfessor); // Login dos Professores
// router.post('/api/aluno/cadastro', clientController.registerProfessor); // Cadastrar os Professores


// router.post('/api/validateprojeto' , clientController.loginProjetoSenai) //*validar login Projeto Senai
// router.post('/api/cadastroprojetosenai', clientController.registerProjetoSenai) //*Cadastrar novo usuario Projeto
// router.post('/api/resetsenhaprojeto', clientController.resetPassworldProjetoSenai) //*Resetar a senha projeto




//* Green_Path
router.post('/api/loginprojeto', clientController.loginProjeto) //* Login projeto
router.post('/api/cadastroprojetoGreen', clientController.registerProjetoUser) //* Cadastro projeto
module.exports = router;


