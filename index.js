const connect     = require('connect');
const serveStatic = require('serve-static');

connect().use(serveStatic("./app")).listen(4200, function(){
    console.log('Server running on 4200...');
});