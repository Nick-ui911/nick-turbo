// here i do this to get prisma from database/index.js ---"npm install ../../packages/database"
const prisma = require('database');


async function createUser() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL);

  try {
    const newUser = await prisma.user.create({
      data: {
        name: "Nikhil singh",
        email: "nikhilsb@example.com"
      }
    });

    console.log("User created:", newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    console.log("DATABASE_URL:", process.env.DATABASE_URL);

  }
}

createUser();
