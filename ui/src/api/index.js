var API = {
    convertUnixtime: function(text){
        return fetch('http://localhost:8080/unixtime/' + text)
            .then(function(response) {
                return response.text();
            })
            .then(function(txt) {
                return txt
            })        
    }
}

module.exports = API