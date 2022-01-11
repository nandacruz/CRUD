<?php
    //Incluindo conexão
    include_once("conexao.php");

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $telefone = $_POST['tel'];
    $cpf = $_POST['cpf'];
    $senha = $_POST['senha'];


    //Variável para armazenar comandos sql

    $sql = "insert into usuarios(nome, email, telefone, cpf, senha) values ('$nome','$email','$telefone','$cpf','$senha')";
    $salvar = mysqli_query($conexao,$sql);

    //Fechando conexão
    mysqli_close($conexao);

?>