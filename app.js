const http = require('http');
  
function generatePassword(inputString) {
    var length = 12,
        charset = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    password+=inputString
    return password;
}
  
const server = http.createServer((req, res) => {
        res.end(`
        <!doctype html>
        <html>
        <body>
            <h1> ${generatePassword(500)} </h1>
            <h1> ${generatePassword(100)} </h1>
            <h1> ${generatePassword(50)} </h1>
            <h1> ${generatePassword(10)} </h1>
            <form action="/">
                <button>Generate New Password</button>
            </form>
        </body>
        </html>
      `);
});
  
server.listen(3000, () => {
    console.log("lishing on http://localhost:3000");
});