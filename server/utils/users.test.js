const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [
			{
				id: "1",
				name: "serena",
				room: "node",
			},
			{
				id: "2",
				name: "jessica",
				room: "node",
			},
			{
				id: "3",
				name: "belle",
				room: "react",
			},
		];
	});

	it("should add new user", () => {
		let users = new Users();
		let user = {
			id: "123",
			name: "reiner",
			room: "test",
		};
		users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);
	});

	it("should remove a user", () => {
		var userId = "3";
		var user = users.removeUser(userId);

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it("should not remove user", () => {
		var userId = "99";
		var user = users.removeUser(userId);

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it("should find user", () => {
		var userId = "2";
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it("should not find user", () => {
		var userId = "99";
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

	it("should return names for node course", () => {
		var userList = users.getUserList("node");

		expect(userList).toEqual(["serena", "jessica"]);
	});

	it("should return names for react course", () => {
		var userList = users.getUserList("react");

		expect(userList).toEqual(["belle"]);
	});
});
