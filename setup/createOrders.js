require("dotenv").config();
require("../database");

const { Chance } = require("chance");
const Order = require("../database/models/order");
const User = require("../database/models/user");

(async function createOrders() {
  const chance = new Chance();
  const orderQuantityToCreate = 500_000;
  const orderLimitPerInsertMany = 20_000;
  const executionLoops = Math.ceil(
    orderQuantityToCreate / orderLimitPerInsertMany
  );

  const threeUsers = await User.find({}).limit(3);

  for (let x = 1; x <= executionLoops; x++) {
    const orders = [];
    for (let i = 0; i < orderLimitPerInsertMany; i++) {
      const userToUse = chance.pickone(threeUsers);
      orders.push({
        userId: userToUse._id,
        purchasedAt: chance.date({
          min: new Date("1996-01-01"),
          max: new Date("2022-01-01"),
        }),
        totalValueInCents: chance.integer({ min: 100, max: 1_000_000 }),
      });
    }

    console.time(`InsertMany ${x}`);
    console.log("Inserindo pedidos", `${x}/${executionLoops}`);

    await Order.insertMany(orders).catch(console.log);

    console.timeEnd(`InsertMany ${x}`);
    console.log("Feito", `${x}/${executionLoops}`);
    console.log();
  }
  process.exit();
})();
