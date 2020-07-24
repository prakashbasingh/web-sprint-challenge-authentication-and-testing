const supertest = require("supertest");

const server = require("./server.js");


describe("server", function () {
    it("testing testing:::: runs the tests", function () {
        expect(true).toBe(true);
    });

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
    })

})


describe("POST /api/auth/register", () => {
    it("checking 201 response on register", function () {
        return supertest(server)
            .post("/register")
            .send({
                "username": "nikola",
                "password": "tesla"
            })
            .then(res => {
                expect(res.status).toBe(201);
            });
    });

    // it("checking content type", function () {
    //     return supertest(server)
    //         .post("/register")
    //         .send({
    //             "username": "thirdUser",
    //             "password": "third"
    //         })
    //         .then(res => {
    //             expect(res.Content-Type).toMatch(/json/i)
    //         });
    // });
})


// describe("POST /api/auth/login", () => {
//     it("checking 201 response on login", function () {
//         return supertest(server)
//             .post("/api/auth/login")
//             .send({
//                 "username": "thirdUser",
//                 "password": "third"
//             })
//             .then(res => {
//                 expect(res.status).toBe(201);
//                 // expect(res.body.data.username).toEqual("thirdUser")
//             });
//     });

// })
 
