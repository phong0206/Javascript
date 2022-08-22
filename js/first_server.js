const http = require('http'); // gán 1 biến cho http 
// require () : import 1 module vào tệp đang xử lý 

// dòng dưới giúp ta khởi tạo 1 server, hàm gồm 2 tham số request và response 
const server = http.createServer((req, res) => {
	console.log(req.url)
	res.end('Welcome to the server of Phong')
	// res là đối tượng mà server sẽ trả về cho trình duyệt
	// req : là đối tượng mà nó nó nhận được từ client
})
server.listen(3000); // 3000 (port): thuộc 1 -> 65535 : là mọt gateway kết nối giữa các ứng dụng trên server 
