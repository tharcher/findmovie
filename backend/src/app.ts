import express, { Application } from "express";

class App {
app: Application;

    constructor(){
        this.app = express();
    }
    listen() {
        this.app.listen(3333, () => console.log("Server is running on port 3333"));
    }
}

export default App;