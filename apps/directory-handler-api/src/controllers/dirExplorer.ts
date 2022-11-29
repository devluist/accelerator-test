
import { readdir, stat } from 'fs';
import { resolve } from 'path';


export const dirExplorer = async (req, res, next) => {
    const { dirPath } = req.body;

    readdir(dirPath, (err, files) => {
        if (err) {
            res.status(500).send(err);
        }

        let pendingFiles = files.length;
        // if the folder is empty
        if(!pendingFiles) {
            res.send('[]');
        }

        res.write('{"data":[');

        files.forEach( file => {
            file = resolve(dirPath + file);

            stat(file, (err, fileData) => {
                if (err) {
                    //return done(err)
                }
                // Here we handle the case of subfolders
                if(fileData && fileData.isDirectory()){
                    /* readFolderFiles(file, (err, res) => {
                        results = results.concat(res);
                    }) */
                }
                else {
                    res.write(JSON.stringify({
                        file,
                        ...fileData
                    }));

                    // if no more files pending to be read, return the list of processed files
                    if (!--pendingFiles){            
                        res.write(']}');
                        res.end();
                    }
                }
            })
        });
    });
}
