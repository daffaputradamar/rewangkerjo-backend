import { connect } from "mongoose"

const connectionString = `mongodb+srv://wri:${
  process.env.PASSWORD
}@cluster0-enygr.mongodb.net/test?retryWrites=true`

connect(
  connectionString,
  {
    useNewUrlParser: true,
  },
).then(() => {
  console.log("Connected to mongodb")
})
