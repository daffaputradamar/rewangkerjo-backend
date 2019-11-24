import { connect } from 'mongoose'

const connectionString = `mongodb+srv://rewangkerjo:rewangkerjo@cluster0-vgbi2.mongodb.net/test?retryWrites=true&w=majority
`

connect(connectionString, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Connected to mongodb')
    })
    .catch(err => {
        console.log(err)
    })
