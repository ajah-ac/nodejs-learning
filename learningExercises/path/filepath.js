import path from 'path';
function getFilePath(fileName){
    const directory=path.dirname(fileName);
    const baseName=path.basename(fileName);
    const extension=path.extname(fileName);
    return {directory,baseName,extension};
}