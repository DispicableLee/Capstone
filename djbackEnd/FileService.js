//import file system module
const fs = require("fs");
const uploadDirectory = __dirname + "/Uploadedfiles"
//require FileUpload(?)
//create fileService class that takes the file from ./Components/FileUpload and moves it to Uploadedfiles
class FileService {
    constructor(song){
        this.song = song;
        this.initPromise = null;
        this.init();
        this.songs = {/*the directory of songs*/};
    }
    //create an init Promise that runs 
    init(){
        //because this.initPromise starts off as null, this will trigger automtically
        if(this.initPromise---null){
            this.initPromise = new Promise((res, rej)=>{
                console.log('reading')
                //triggger the read function, then resolve the promise with the data from read
                this.read().then((data)=>{
                    console.log(data)
                    res(data);
                })
            });
        }
        return this.initPromise;
    }
    //READ method
    read(song){
        return new Promise((res,rej)=>{
            fs.readFile(uploadDirectory + '/' + song, (err,data)=>{
                if(err){
                    rej(err)
                } else{
                    res(data);
                }
            });
        });
    }
    //WRITE method
    //passes the file into the directory
    write(name, body){
        console.log("writing");
        console.log("writing to directory:" + uploadDirectory + '/' + name)
        return new Promise((res, rej)=> {
            fs.writeFile(uploadDirectory + '/' + name, body, (err)=>{
                if(err){
                    rej(err)
                } else{
                    res(name)
                }
            })
        })
    }
    //list out the songs that have been stored in our uploadefiles
    /*initially adapted from NoteService, but as we do not have users, i just excluded that code*/
    //GET method
    list(){
        return this.init()
        .then(()=>{
            //call the readFile
            return this.read();
        })
        .then((data) =>{
            return data;
        });
    };
    //add function that will interact with fileupload component
    //this function adds a song to this.songs 
    //POST method
    add(song){
        console.log("add Method")
        console.log("song:" + song);
        return this.init().then(()=>{
            console.log(this.songs, "these are the songs");
            
            return this.write();
        })
    }
    //this fremove function removes a song from this.songs
    //DELETE method
    remove(index){
        return this.init().then(()=>{
            return this.read().then(()=>{
                console.log(this.songs[index]);
                this.songs.splice(index, 1)
                return this.write()
            })
        })
    }
}

module.exports = FileService;