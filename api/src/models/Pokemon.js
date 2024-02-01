const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hp: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attack: {
      type: DataTypes.STRING,
      allowNull: false
    },
    defense: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specialAttack: {
      type: DataTypes.STRING,
    },
    specialDefense: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    }
  }, {timestamps: false});
};
