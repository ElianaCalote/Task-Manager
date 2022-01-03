const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://Eliana:password@nodeexpressprojects.v3dmv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'

mongoose
.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(()=>console.log('CONNECTED TO DB..'))
.catch((err)=>console.log(err))