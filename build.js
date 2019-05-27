var MSICreator = require('electron-wix-msi').MSICreator;

// Step 1: Instantiate the MSICreator
var msiCreator = new MSICreator({
  appDirectory: 'C:\\Users\\Mathieu\\Documents\\GitHub\\instagram-pc',
  description: 'Instagram for PC',
  exe: 'instagram-pc',
  name: 'Instagram PC',
  manufacturer: 'Mathieu Colmon',
  version: '1.0.0',
  outputDirectory: 'C:\\Users\\Mathieu\\Documents\\GitHub\\instagram-pc\\build\\win-msi'
});

// Step 2: Create a .wxs template file
msiCreator.create().then(function(value, error){
    msiCreator.compile();

});

// Step 3: Compile the template to a .msi file



// var electronInstaller = require('electron-winstaller');


// resultPromise = electronInstaller.createWindowsInstaller({
//     appDirectory: '/',
//     outputDirectory: '/build/win',
//     authors: 'Mathieu Colmon',
//     exe: 'instagram-pc.exe'
// });

// resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));