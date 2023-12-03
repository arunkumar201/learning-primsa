import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	try {
		// const newUser = await prisma.user.create({
		// 	data: {
		// 		email: "Arun@gmail.in",
		// 		name: "arun",
		// 		address: "arun kumar",
		// 	},
		// });
		const allUsers = await prisma.user.findMany();
		console.log(allUsers);
	} catch (error) {
		console.log("Error while Connecting to db", error);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
