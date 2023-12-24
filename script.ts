import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	try {
		// const users = await prisma.user.createMany({
		// 	data: [
		// 		{
		// 			name: "arun Kumar",
		// 			email: "arun@jk8hj3.com",
		// 			address: "123 near New York",
		// 			createdAt: new Date(),
		// 			updatedAt: new Date(),

		// 		},
		// 		{
		// 			name: "arun Kumar",
		// 			email: "arun@8kkhjh83.com",
		// 			address: "123 near New York",
		// 			createdAt: new Date(),
		// 			updatedAt: new Date(),
		// 		},
		// 	],
		// });
		// console.log(users);
		// const user = await prisma.user.findMany({
		// 	where: {},
		// 	// select: {
		// 	// 	name: true,
		// 	// 	email: true,
		// 	// 	address: true,
		// 	// 	id: true,
		// 	// },

		// 	skip: 1,
		// 	take: 3,
		// 	orderBy: {
		// 		name: "asc",
		// 	},
		// });

		// const user = await prisma.user.findMany({
		// 	where: {
		// 		name: {},
		// 		email: { contains: ".in" },
		// 	},
		// 	distinct: ["name"],
		// });
		// console.log(user);

		const user = await prisma.user.update({
			data: {
				name: "Arun P",
				role:"ADMIN"
			},
			where: {
				email: "arun@123.in",
			},
		
		});
		console.log(user)
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
