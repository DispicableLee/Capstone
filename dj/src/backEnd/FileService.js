//import file system module
const fs = require("fs");
//create fileService class that takes the file from ./Components/FileUpload and moves it to Uploadedfiles
class FileService {
    constructor(file){
        this.file = {/* the file from ./FileUpload*/}
        this.initPromise = null;
        this.init();
    }
}
