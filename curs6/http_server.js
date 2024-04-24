//cand dorim sa importam un modul in aplicatia noastra
//folosim require('nume_modul');
const http = require('http'); //includem modulul http
const port = 3001; //setam un port pentru server (Recomandate: diferit de 80, 443, 8080)
const host = 'localhost'
//Start server
//req - cererile catre server : requests
//res - raspunsurile serverului:responses
let server = http.createServer(function(req, res) {
    res.writeHead(
        200,//setam eader: status cod si tip continut
        {
            "Content-Type":"text/html",
            "Access-Constrol-Allow-Origin":"*"

        }
    );
    res.write("Hello World!"); //Response content
    res.end(); //End response
});
server.listen(port, host,() =>{

})

    
