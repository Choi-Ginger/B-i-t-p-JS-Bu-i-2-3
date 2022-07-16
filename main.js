// Bài tập 1

document.getElementById("tongTienLam").onclick = function () {
  // Input
  var ngayLuong = document.getElementById("salaryDay").value * 1;
  var soNgayLam = document.getElementById("dayWorkings").value * 1;
  var tongLuong;
  // Process
  tongLuong = ngayLuong * soNgayLam;

  // Output
  var result = "Tổng lương là: " + tongLuong;
  document.getElementById("thongBaoTienLam").innerHTML = result;
};

// Bài tập 2

document.getElementById("tinhGiaTriTrungBinh").onclick = function () {
  // Input
  var num1 = document.getElementById("soThu1").value * 1;
  var num2 = document.getElementById("soThu2").value * 1;
  var num3 = document.getElementById("soThu3").value * 1;
  var num4 = document.getElementById("soThu4").value * 1;
  var num5 = document.getElementById("soThu5").value * 1;
  var total;

  // Process
  total = (num1 + num2 + num3 + num4 + num5) / 5;

  // Output
  var result = "Giá trị trung bình: " + total;
  document.getElementById("thongBaoGiaTri").innerHTML = result;
};

// Bài tập 3

document.getElementById("doiTien").onclick = function () {
  // Input
  var tienUSD = 23500;
  var usdChange = document.getElementById("usdChange").value * 1;
  var quyDoi;

  // Process
  quyDoi = tienUSD * usdChange;

  // Output
  var result = "Số tiền đổi được: " + quyDoi;
  document.getElementById("thongBaoTienDoi").innerHTML = result;
};

// Bài tập 4

document.getElementById("tinhDienTichChuVi").onclick = function () {
  // Input
  var canhDaiHCN = document.getElementById("chieuDai").value * 1;
  var chieuRongHCN = document.getElementById("chieuRong").value * 1;
  var dienTich;
  var chuVi;

  // Process
  dienTich = canhDaiHCN * chieuRongHCN;
  chuVi = (canhDaiHCN + chieuRongHCN) * 2;

  // Output
  var result = "Diện tích: " + dienTich + "-" + "Chu vi: " + chuVi;
  document.getElementById("thongBaoDienTichChuVi").innerHTML = result;
};

// Bài tập 5

document.getElementById("tongKySo").onclick = function () {
  // Input
  var num6 = document.getElementById("conSo").value * 1;
  var soDonVi;
  var soHangChuc;
  var tongKySo;

  // Process
  soDonVi = num6 % 10;
  soHangChuc = Math.floor(num6 / 10);
  tongKySo = soDonVi + soHangChuc;

  // Output
  var result = "Tổng 2 ký số: " + tongKySo;
  document.getElementById("thongBaoTongKySo").innerHTML = result;
};
