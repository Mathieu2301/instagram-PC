var electronInstaller = require('electron-winstaller');


resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './build/instagram-pc-win32-x64',
    outputDirectory: './build',
    authors: 'Mathieu Colmon',
    exe: 'instagram-pc.exe'
});

resultPromise.then(() => console.log("Built !"), (e) => console.log(`Error: ${e.message}`));