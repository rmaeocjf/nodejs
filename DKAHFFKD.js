var http = require('http');

function alertMsg() {
        return `
        <!DOCTYPE html>
<html>
    <head>
        <title>Navigator 판별</title>
        <meta charset="utf-8">
        <script>
        window.onload = function(){
        document.querySelactor('h1').style.backgroundColor = 'red';
        document.querySelactor('h2').style.Color = 'red';
        }
        </script>
    </head>
    <body>
    <h1>Process -1</h1>
    <h2>Process -1</h2>
    </body>    
</html> `;
}
var app =http.createServer(function(request,response)
{
    console.log(request.url);
    response.writeHead(200);
    let alert = alertMsg();
    response.end(alert);
});
app.listen(3000);


/* if (navigator.userAgent.toLowerCase().indexOf('iphone') >=0
            || navigator.userAgent.toLowerCase().indexOf('ipad') >=0
            || navigator.userAgent.toLowerCase().indexOf('ipod') >=0
            || navigator.userAgent.toLowerCase().indexOf('android') >=0) {
            alert('모바일 웹 브라우저.');
        } else {
            alert('데스크톱 웹 브라우저.');
        } */