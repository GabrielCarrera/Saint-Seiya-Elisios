'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'id_usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'nome_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'email_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha_usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		dt_nasc: {
			field: 'dt_nascimento',
			type: DataTypes.STRING,
			allowNull: false
		},
		SignoCadastro: {
			field: 'signo',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
