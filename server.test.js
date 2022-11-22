const request = require("supertest")
const app = require("./routes/User")
const mongoose = require("mongoose")



describe("test the root path", () => {
    test("it should test the post method", () => {
        const response =  request(app).post("http://localhost:8000/user/add").send({
            "Name": "obaid",
            "Eamil": "adfcec",
            "Age": 12 ,
            "Contact": 12333
        })
        expect(response.statusCode).toBe(200)        
    })
})


describe("Test the delete path", () => {
  test("It should test the Delete method", () => {
      const response = request(app).delete("http://localhost:8000/user/:id").send({
        
        })
        expect(response.statusCode).toBe(200);
    })
})

