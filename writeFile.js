const fs = require("node:fs");

fs.writeFile("biodata.txt", "Hello, perkenalkan saya Ardhiansyah. Saat ini saya kelas XI TJKT 2, Alamat rumah saya di Jl. Bawang 5 RT002/009, Usia saya saat ini 16 tahun.", function (error) {
  if (error) {
    console.error("Terjadi Error", error);
  } else {
    console.log("File bisa dibuat");
  }
});
