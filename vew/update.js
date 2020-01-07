module.exports.update = function(){
   
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
            <h2>글 수정하기</h2>
            <form action="/update_proc" method="post">
            <input type="hidden" name="oldTitle" value="${title}">
            <p><input type="text" size= "20" name="title" value="${title}"></p>
            <p><textarea name="desc" rows="10" cols"60">${desc}</textarea></p>
            <p><input type="submit" value= "수정"></p>
            </form>
        </body>
        </html>
    `;
}