document.getElementById("btnXem").onclick = function () {
  //out put : tong : number
  var tongSoHang = 0;
  //progress:
  //b2: gia tri thay đổi
  var sum = 1;
  //b2: thiết lặp dk lặp
  while (tongSoHang < 10000) {
    //b3: khối lệnh xử lý

    tongSoHang = tongSoHang + sum;
    //b4: thay đổi giá trị lặp
    if (tongSoHang < 10000) {
      sum++;
    } else break;
  }

  document.getElementById("KetQua").innerHTML =
    "Số nguyên dương nhỏ nhất : " + sum;
};
// bài 2
document.getElementById("btnTinhTong").onclick = function () {
  //out ketqua: string
  var KetQua = "";
  KetQua = tinhTongLuyThua("soX", "soN"); // truyen id
  //in output ra mang hình

  document.getElementById("tongLa").innerHTML = KetQua;
};
function tinhTongLuyThua(X, N) {
  //input: soN,soX : number
  var soX = +document.getElementById(X).value;
  var soN = +document.getElementById(N).value;
  //output: number
  var tong = 0;

  var soLuyThua = 1;
  while (soLuyThua <= soN) {
    //progress:
    tong = tong + Math.pow(soX, soLuyThua);
    // tong = luyThua + Math.pow(soX, soLuyThua);
    soLuyThua++;
  }
  return tong;
}
//bài 3
document.getElementById("btnTinhKetQua").onclick = function () {
  // var nhapSo = +document.getElementById("nhapSo").value;
  var giaiThua = "";
  giaiThua = tinhGiaiThua("nhapSo");
  //in output ra mang hình

  document.getElementById("ketQua_3").innerHTML = giaiThua;
};
function tinhGiaiThua(so) {
  //input : nhapso: number
  var nhapSo = +document.getElementById(so).value;
  var KetQua = 1;
  var giaiThua = 1;
  while (giaiThua <= nhapSo) {
    //progress:
    KetQua = KetQua * giaiThua;
    giaiThua++;
  }
  return KetQua;
}
//bài 4
document.getElementById("btnTaoDiv").onclick = function () {
  var traVeKQ = "";
  traVeKQ = taoDiv();
  //in output ra mang hình
  document.getElementById("ketQua_4").innerHTML = traVeKQ;
};
function taoDiv() {
  var ketQuaDiv = "";
  var dem = 1;
  while (dem <= 10) {
    if (dem % 2 !== 0) {
      //progress:
      ketQuaDiv =
        ketQuaDiv +
        "<div style='background-color: blue'>Div lẻ " +
        dem +
        "</div>";
    } else {
      ketQuaDiv =
        ketQuaDiv +
        "<div style='background-color: red'>Div chẵn " +
        dem +
        "</div>";
    }
    dem++;
  }
  return ketQuaDiv;
}
