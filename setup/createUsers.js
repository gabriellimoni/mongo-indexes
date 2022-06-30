require("dotenv").config();
require("../database");

const { Chance } = require("chance");
const User = require("../database/models/user");

(async function createUsers() {
  const chance = new Chance();
  const userQuantityToCreate = 1_000_000;
  const userLimitPerInsertMany = 20_000;
  const executionLoops = Math.ceil(
    userQuantityToCreate / userLimitPerInsertMany
  );
  for (let x = 1; x <= executionLoops; x++) {
    const users = [];
    for (let i = 0; i < userLimitPerInsertMany; i++) {
      users.push({
        name: chance.name(),
        email: chance.email(),
        password: chance.string({ length: 10 }),
      });
    }

    console.time(`InsertMany ${x}`);
    console.log("Inserindo usuários", `${x}/${executionLoops}`);

    await User.insertMany(users).catch(console.log);

    console.timeEnd(`InsertMany ${x}`);
    console.log("Feito", `${x}/${executionLoops}`);
    console.log();
  }
  process.exit();
})();
