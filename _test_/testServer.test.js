const app = require("../src/server/index");
const supertest = require("supertest");
const request = supertest(app);

describe("check post", () => {
  it("post data", async (done) => {
    const response = await request.post("/api");
    expect(response.status).toBe(200);
    done();
  });
});
