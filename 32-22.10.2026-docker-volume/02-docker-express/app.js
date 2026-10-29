let express = require('express');
let app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(5001, () => {
    console.log('Server is running on port 3000');
});

//1/. build express app listen to port 3000 and send 'Hello World' to the client
//2 . build docker image from the express app
//3. run the docker container from the image on port 3000
//4. test the application by sending a request to the container
//5. stop the container
//6. run on port 4000 



//docker build -t tasks-api .
//docker run -d -p 4000:3000  tasks-api