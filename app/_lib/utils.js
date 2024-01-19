import { Sequelize } from "sequelize";

const connection = {};

const sequelize = new Sequelize(process.env.DB_LINK, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectModule: require('pg'),
  dialectOptions: {}, //removed ssl
});

export const connectToDb = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized successfully');
      } catch (error) {
        console.error('Error syncing database:', error);
      }

}