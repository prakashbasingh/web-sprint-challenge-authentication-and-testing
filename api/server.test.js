const supertest = require("supertest");

const server = require("./server.js");
const dbConfig = require("../database/dbConfig.js");



describe("server", function () {
    it("testing testing:::: runs the test good!!!!", function () {
        expect(true).toBe(true);
    });
})

describe("GET /", function () {
    it("should respond with 200 OK", function () {
        return supertest(server)
            .get("/")
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    it("should respond with JSON", function () {
        return supertest(server)
            .get("/")
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
    });

    it("getting all jokes", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({username: "nikola", password: "tesla" })
            .post("/api/auth/login")
            .send({username: "nikola", password: "tesla" })
            .get("/api/jokes")
            .set("authorization", body.token)
            .then(res => {
                expect(res.body).toHaveLength(20);
            });
    });
})

 


describe("POST /api/auth/register", function() {
    beforeEach(async () => {
        await dbConfig("users").truncate()
    })
    it("checking 201 response on register", function() {
        return supertest(server)
            .post("api/auth/register")
            .send({username: "nikola", password: "tesla" })
            .then(res => {
                expect(res.status).toBe(201)
            })
            .catch(error => {
                error
            })

           
    });

    it("checking data type", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
    });

    it("checking name", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.body.data.username).toEqual("nikola")
            });
    });

    it("Should fail this test with ", function () {
        return supertest(server)
            .post("/api/auth/register")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.body.data.username).toBe("nikolaTesla")
            });
    })
})




describe("POST /api/auth/login", () => {
    it("checking 201 response on login", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.status).toBe(200);
            });
    });

    it("checking token", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.body.token).toBeDefined();
            });
    });

    it("checking data type", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
    });

    
    it("checking data type", function () {
        return supertest(server)
            .post("/api/auth/login")
            .send({
                "username": "nikolatesls",
                "password": "tesla"
            })
            .then(res => {
                expect(res.status).toBe(401);
            });
    });

})
 
