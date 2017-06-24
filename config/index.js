var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' +
        configValues.uname +
        ':' +
        configValues.pwd +
        '@ds041432.mlab.com:41432/todo-frotzed'
    }
}