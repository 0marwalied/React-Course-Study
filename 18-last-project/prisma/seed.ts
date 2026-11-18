import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: Array.from({ length: 25 }).map(() => ({
  //     name: faker.internet.username(),
  //     email: faker.internet.email(),
  //     address: {
  //       street: faker.location.street(),
  //       city: faker.location.city(),
  //       country: faker.location.country(),
  //     },
  //   })),
  // });
  await prisma.todo.createMany({
    data: Array.from({ length: 25 }).map(() => ({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
    })),
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
