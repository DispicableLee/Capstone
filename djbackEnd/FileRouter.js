const express = require("express");
class FileRouter{
    constructor(fileService){
        this.fileService = fileService;
    }
    //initalize the router to bind the methods
    router(){
        let router = express.Router();
        //bind the get method to call in the server
        router.get("/", this.get.bind(this));
        //bid the post method, so we can add a song
        router.post("/", this.post.bind(this));
        //bind the delete method, so we can remove songs
        router.delete("/", this.delete.bind(this));
        return router;
    }
    //this method gets the homepage
    get(req,res){
        return this.fileService
        .list()
        .then((songs)=>{
            console.log(songs);
        })
    }
    //this post method adds a song
    post(req, res){
        console.log("FileRouter: POST method");
        console.log("Song: " + req.body.songs)
        return this.fileService
        //call the add method from fileservice
        .add(req.body.songs)
        .then
    }
    //this method deletes a song
    delete(req, res){
        return this.fileService
        .remove(index)
        .then(()=>{this.fileService.list()})
        .catch(err)
    }
}

module.exports = FileRouter;