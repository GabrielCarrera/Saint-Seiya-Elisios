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


insert into usuario values (null, 'Gabriel', 'bandtec','gabriel.carrera@hotmail.com' ,'1996-01-30', 'Áquario');

insert into usuario values (null, 'Leonardo Freire', 'bandtec', 'leo.freire@hotmail.com', '1998-03-15', 'Áries'),
(null, 'José Lucas Queiroz', 'bandtec', 'jose.queiroz@hotmail.com ','2002-06-22', 'Câncer' );