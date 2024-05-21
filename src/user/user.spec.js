const server = require("../server");
const request = require("supertest");

describe("ability to get users and hobbies and add", () => {
  it("[POST] /user", () => {
    return request(server)
      .post("/api/users")
      .send({ name: "TomBradly", hobby: "BaseBall" })
      .expect(201)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body.name).toEqual(expect.any(String));
        expect(res.body).toHaveProperty("hobby");
      });
  });
  it("[GET] /user", done => {
    return request(server)
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array);
        done();
      });
  });
});
