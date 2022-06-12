const fs = require('fs');
const nameVariableFolder = process.argv.slice(2)[0];
const folderName = `./src/screen/${nameVariableFolder}`;
const baseScreenFolder = './src/lib/base_screen';

function listAllFile() {
  fs.readdir(baseScreenFolder, (err, files) => {
    if (err) {
      console.log('ERROR list all name of file in folder: ', err);
    }
    createFolder(nameVariableFolder);
    files.forEach(file => {
      console.log(file);

      const data = fs.readFileSync(`./src/lib/base_screen/${file}`, 'utf8');

      console.log('Data la: ', data);
      copyFileToFolder(file, data);
    });
  });
}

function createFolder() {
  try {
    // check folder is exits. If not create folder
    try {
      if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
        console.log('CREATE FOLDER OK');
      }
    } catch (err) {
      console.error(err);
    }
  } catch (err) {
    console.error(err);
  }
}

function copyFileToFolder(fileName, data) {
  fs.writeFile(`./src/screen/${nameVariableFolder}/${fileName}`, data, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log('WRITE SUCCESSFULLY');
  });
}

if (nameVariableFolder) {
  listAllFile();
} else {
  console.error('\x1b[33m%s\x1b[0m', 'Name of screen is not validate');
}
