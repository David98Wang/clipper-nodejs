require('dotenv').config()
const mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',
  url: 'mongodb://root:NqE1JckRnByi@ec2-52-32-88-154.us-west-2.compute.amazonaws.com/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

var settings = {
  port: process.env.PORT,
}

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
  console.log('client connected', client.id);
})

server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
})

server.on('ready', setup);
function setup() {
  console.log('Mosca server is up and running');
}