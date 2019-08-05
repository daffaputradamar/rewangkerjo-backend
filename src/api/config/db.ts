import { connect } from "mongoose"

const connectionString = `mongodb+srv://${process.env.DB_USER}:${
  process.env.DB_PASS
}@cluster0-enygr.mongodb.net/test?retryWrites=true`

connect(
  connectionString,
  {
    useNewUrlParser: true,
  },
)
  .then(() => {
    console.log("Connected to mongodb")
  })
  .catch((err) => {
    console.log(err)
  })
