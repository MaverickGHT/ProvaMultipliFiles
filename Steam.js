const steamLibrary = require ('./steamLibrary');

let Steam = class {
    steamLibrary = "";
    constructor (steamLibrary) {
        this.steamLibrary= steamLibrary;
    }
}
module.exports = Steam;