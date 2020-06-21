create database SaintSeiya_Elisios;

use SaintSeiya_Elisios;

create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar (80),
senha_usuario varchar(15),
email_usuario varchar(80),
dt_nascimento date,
signo varchar(50)
);

drop database SaintSeiya_Elisios;


select*from usuario;