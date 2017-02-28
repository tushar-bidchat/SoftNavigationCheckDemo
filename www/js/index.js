var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {

        document.getElementById("buttonCheckSoftBar").addEventListener("click", function () {
            cordova.plugins.SoftNavigationCheck.isSoftNavigationAvailable(
                 function() {
                     console.log("Soft Navigation Bar Present");
                 }, 
                 function(){
                    console.log("Soft Navigation Bar Absent");
                 });
        });
    }
};

app.initialize();