import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
import { faker } from "@faker-js/faker";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const obj = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate(), // This may include a time when it shouldn't...
      salary: faker.number.int({ min: 70000, max: 300000 }),
    };
    const movie = await createEmployee(obj);
  }
}
