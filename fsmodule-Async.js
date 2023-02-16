const { error } = require('console')
const {readFile, writefile } =require('fs')

 readFile('./content/first.txt','utf8',(error,result) =>{
    if(error) {
        console.log(error);
        return
    }
    console.log(result)
 })

