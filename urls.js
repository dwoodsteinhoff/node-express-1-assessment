const fs = require('fs');
const process = require('process');
const axios = require('axios')

function cat (path){
    fs.readFile(path, 'utf8', (error, data) =>{
        if(error){
            console.log("Error:", error);
            process.exit(1)
        }
    console.log(data)
    })
}


function createFile(url){
    fs.open(`${url}`, 'w', function(err){
        if(err){
            console.error(`Error = ${err}`)
            process.exit(1);
        }
    })
}

async function webCat (URL){
    try{
        let newUrl = URL.replace("http://", "").replace("https://", "").replace("/api/console.html", "")
        let res = await axios.get(URL);
        // console.log(res.data)
        fs.writeFile(newUrl, res.data, 'utf8', function(err){
            if(err){
                console.error(`Error = ${err}`)
                process.exit(1);
            }
        });
    }
    catch (err){
        console.error(`Couldn't download ${URL}`)
    }
}

function createAndWriteToFile (path){
    fs.readFile(path, 'utf8', (error, data) =>{
        if(error){
            console.log("Error:", error);
            process.exit(1)
        }
        for(let url of data.split('\n')){
            let newUrl = url.replace("http://", "").replace("https://", "").replace("/api/console.html", "")
            createFile(newUrl)
            webCat(url)
            console.log(`Wrote to ${newUrl}`)
        }
    })
}

createAndWriteToFile(process.argv[2])
cat('postgresql.com')