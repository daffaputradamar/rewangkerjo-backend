import { connect } from 'mongoose'

const connectionString = `mongodb://localhost:27017/rewangid`

connect(connectionString, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Connected to mongodb')
    })
    .catch(err => {
        console.log(err)
    })
