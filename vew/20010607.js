var http = require('http');
var url = require('url');
var fs = require('fs');

function templateHtml(list, navBar, title, desc) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>file Web</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">WEB 프로그래밍 기술</a></h1>
            <h3>${list}</h3>
            <hr>
            <h4>${navBar}</h4>
            <hr>
            <h2>${title}</h2>
            <p>${desc}</p>
        </body>
        </html>
    `;
} 
function templateList(filelist)
{
    var list = '<ul>\n';
                for (let file of filelist)
                {
                    //console.log(file);
                    let item = file.substring(0,file.length-4);
                    list +=`<li><a href = "/?title=${item}">${item}</a></li>\n`;
                }
                list += '</ul>';
                return list;
}
var contents = [
    {title:"HTML5", desc:"HTML5 is ...."},
    {title:"CSS3", desc:"CSS3 is ...."},
    {title:"Javascript", desc:"Javascript is ...."}
];
 
var app = http.createServer(function(req, res) {
    //console.log(req.url);
    var _url = req.url;
    var pathname = url.parse(_url, true).pathname;
    var queryData = url.parse(_url, true).query;
    //console.log(pathname);
    //console.log(queryData);

    if (pathname === '/') {
        if (queryData.title === undefined) {  // localhost:3000
            let navBar = `<a href="/">홈으로</a>&nbsp;&nbsp;
            <a href="/create">글쓰기</a>`;
            let title = "Welcome to WEB World";
            let desc = `웹 기술은 1990년대 초반에 Tim-Berners Lee에 의해 개발되어 빠르게 
                        전 세계로 확산되면서 인터넷 세상으로 모든 것을 바꾸어 놓았다.`;
            fs.readdir('./data', function(err, files){
                let list = templateList(files);    
                let html = templateHtml(list, navBar, title, desc);
                res.writeHead(200);
                res.end(html);
            });
            
        } else {        // localhost:3000/?title=xxx
            let title = queryData.title;
            let navBar = `<a href="/">홈으로</a>&nbsp;&nbsp;
            <a href="/updata">수정하기</a>&nbsp;&nbsp;
            <a href="/delete">삭제하기</a>`;
            fs.readdir('./data', function(err, files){
                let list = templateList(files);
                fs.readFile(`./data/${title}.txt`,'utf8',function(err, desc){
                let html = templateHtml(list, navBar, title, desc);
                res.writeHead(200);
                res.end(html);
                })
               
            });
            
        }
    } else if (pathname === '/favicon'){ 
    } else if (pathname === '/favicon.proc'){
    } else if (pathname === '/favicon.ico') {
        fs.readFile('nodejs.png', function(err, data) {
            res.statusCode = 200;
         res.setHeader('Content-type', 'image/png');      
         res.end(data);
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});
app.listen(3000);