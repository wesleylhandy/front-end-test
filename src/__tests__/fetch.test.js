const fetchMock = require("fetch-mock");

import { callApi } from "../Utils/fetch";
import testBody from "../../db.json";

describe("callApi", () => {
	it("can fetch", async () => {
		fetchMock.get("http://fake.com", testBody);

		const result = await callApi("http://fake.com");

		expect(JSON.stringify(result.notes)).toMatch(
			JSON.stringify(testBody.notes)
		);
	});
});
