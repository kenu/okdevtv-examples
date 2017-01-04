const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
// const sequelize = new Sequelize('devdb', 'devuser', 'devpass', {
//   host: 'localhost', dialect: 'postgres' });

class User extends Model {}
User.init(
  { username: DataTypes.STRING, birthday: DataTypes.DATE,},
  { sequelize, modelName: "user" }
);

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: "janedoe", birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();
