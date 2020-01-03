var http = require('http');

function alertMsg() {
        return `
        <!DOCTYPE html>
<html>
    <head>
        <title>Navigator 판별</title>
        <meta charset="utf-8">
        <script>
        if (navigator.userAgent.toLowerCase().indexOf('iphone') >=0
            || navigator.userAgent.toLowerCase().indexOf('ipad') >=0
            || navigator.userAgent.toLowerCase().indexOf('ipod') >=0
            || navigator.userAgent.toLowerCase().indexOf('android') >=0) {
            alert('모바일 웹 브라우저.');
        } else {
            alert('데스크톱 웹 브라우저.');
        }
        </script>
    </head>
    <body>
    <h3>경고메세지를 띄워줌</h3>
    <hr>
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



/* 
var input = prompt('글자를 입력해주세요','힌트')
            alert("${msg}");
            location.href = "${url}"; */