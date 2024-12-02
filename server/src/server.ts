import mongoose from 'mongoose'
import app from './app'
import config from './app/config'
const port = config.port
const DATABASE_URL = config.DATABASE_URL ;

async function main() {
    await mongoose.connect(DATABASE_URL as string)
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
main()
