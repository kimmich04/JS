import express from "express";

let configViewEngine = (app) => {
    // arrow function

    // Images from server just can be collected in this folder
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); // ejs is similar to jsp of java and blade of php, which allow us to use logic syntax in html's files (if, else, for, ...)
    app.set("views", "./src/views"); // must code client file is this folder 
}

// to use this function in other files
module.exports = configViewEngine;
