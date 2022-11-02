

const { MongoClient, ObjectID} = require("mongodb")
const dotenv = require("dotenv");
dotenv.config();
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'apnaShow'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error,client) => {
    if (error) {
        return console.log('Unable toconnect to database!')
    }
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        _id: id,
        fname: 'Kamlesh',
        lname: 'N',
        email: '18harshgandhi@gmail.com',
        password: '1'
    }, (error,result) => {
            if (error) {
              return console.log('Unable to insert user')
            }  
            console.log(result.ops)
    })
})