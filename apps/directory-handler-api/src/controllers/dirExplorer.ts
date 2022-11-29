
import { fstat, readdir, stat, statSync } from 'fs';
import { resolve } from 'path';


export const dirExplorer = (req, res, next) => {
    const { dirPath } = req.body;

    readFolderFiles(dirPath, (err, list) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send(list)
        }
    });
}


function readFolderFiles(folder, done) {
    let results = [];

    readdir(folder, (err, files) => {
        if (err) {
            return done(err);
        }

        let pendingFiles = files.length;
        // if the folder is empty
        if(!pendingFiles) {
            return done(null, results);
        }

        files.forEach( file => {
            file = resolve(folder + file);

            stat(file, (err, fileData) => {
                if (err) {
                    return done(err)
                }
                // Here we handle the case of subfolders
                if(fileData && fileData.isDirectory()){
                    readFolderFiles(file, (err, res) => {
                        results = results.concat(res);
                    })
                }
                else {
                    results.push({
                        file,
                        ...fileData
                    });

                    // if no more files pending to be read, return the list of processed files
                    if (!--pendingFiles){
                        done(null, results)
                    }
                }
            })
        });
    });
}