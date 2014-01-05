// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error    = cli.red.bold,
    warn     = cli.yellow,
    info     = cli.grey,
    notice   = cli.cyan,
    success  = cli.green;

// Create Structure
var initStructure = function() {
    sh.echo(notice('! Initializing Structure...'));
    sh.mkdir('-p', ['./assets', './assets/images', './assets/css', './assets/js', './assets/js/vendor']);
};

// Copy Files
var initCopy = function() {
    sh.echo(notice('! Copying files...'));
    sh.cp('-rf', ['./template/*', './template/.*'], './');
};

// Clean
var initClean = function(){
    sh.echo(notice('! Removing old files...'));
    sh.rm('-rf', [
        '.git',
        './template',
        './node_modules',
        'README.md',
        'README_pt-br.md',
        'skeleton.js',
        'package.json',
        '.travis.yml'
    ]);
};

// Initialize Build
var initBuild = function(){

    sh.echo(notice('! Initialize Building process...'));

    initStructure();
    initCopy();
    initClean();

    sh.echo(success('✔ All Done!'));
};

initBuild();
