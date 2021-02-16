var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.mcsrvstat.us/2/vegasmp.hydrostaticcog.org', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    if (data.online) {
        if (!data.players.list) {
            var playerList = 'No Players Online'
        } else {
            var playerList = data.players.list
        }
        document.getElementById("status-mc").innerHTML = 'Online';
        document.getElementById('status-mc').style.backgroundColor = "green";
        document.getElementById("status-mc").style.color = 'white';
        document.getElementById("status-gh").innerHTML = 'Online';
        document.getElementById('status-gh').style.backgroundColor = "green";
        document.getElementById("status-gh").style.color = 'white';

    }
    else {
        document.getElementById("status-mc").innerHTML = 'Offline'
        document.getElementById('status-mc').style.backgroundColor = "red";
        document.getElementById("status-mc").style.color = 'white';
        document.getElementById("status-gh").innerHTML = 'Offline'
        document.getElementById('status-gh').style.backgroundColor = "red";
        document.getElementById("status-gh").style.color = 'white';
    }
}

// Send request
request.send()