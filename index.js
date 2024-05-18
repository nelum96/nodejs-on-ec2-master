var http = require('http');

// Create a server object
http.createServer(function (req, res) {
  console.log('Received a request'); // Log a message when a request is received
  res.write('A Monk in Cloud'); // Write a response to the client
  res.end(); // End the response
  console.log('Response sent'); // Log a message after sending the response
}).listen(80, function() {
  console.log('Server is listening on port 80'); // Log a message when the server starts listening
});
