console.log("Hello there!")

if (process.send) {
    process.send({ event:'online', url:'http://localhost:1212/' });
}