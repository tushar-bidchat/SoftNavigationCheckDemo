var SoftNavigationCheck = (function() {

    var SoftNavigationCheck = {};

    SoftNavigationCheck.isSoftNavigationAvailable = function(success, error) {
        return cordova.exec(success, error, "SoftNavigationCheck", "isSoftNavigationAvailable", []);
    };

    return SoftNavigationCheck;
});

module.exports = new SoftNavigationCheck();