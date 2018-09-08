const expect = require("expect");

let { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
	it("should generate the correct message object", () => {
		let from = "Jen";
		let text = "Some message";
		let message = generateMessage(from, text);

		expect(message.createdAt).toBeA("number");
		expect(message).toInclude({ from, text });
	});
});

describe("generateLocationMessage", () => {
	it("should generate correct location object", () => {
		let from = "Bob";
		let latitude = 33;
		let longitude = -96;
		let url = "https://www.google.com/maps?q=33,-96";
		let message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA("number");
		expect(message).toInclude({ from, url });
	});
});
