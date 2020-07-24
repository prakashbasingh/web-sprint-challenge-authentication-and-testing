const db = require("../database/dbConfig.js")



module.exports = {
    isValid,
    add,
    find,
    findBy,
    findById,
}   

function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string" )
}

async function add(user){
    try {
        const [id] = await db("users").insert(user, "id")

        return findById(id)

    } catch (error) {
        throw error
    }
}

function find(){
    return db("users")
}

function findBy (filter) {
    return db("users")
        .where(filter)
        .orderBy("id")
}

function findById(id){
    return db("users")
        .where({ id })
        .first()
}