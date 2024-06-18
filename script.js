const input = document.querySelector(".container > input");
const nama = document.getElementById("nama");
const khodam = document.getElementById("khodam");

const listKhodam = [
  "Kucing Gembul",
  "Kura-Kura Jalan",
  "Ayam Joget",
  "Kuda Terbang",
  "Gajah Ngantuk",
  "Anjing Meloncat",
  "Ikan Bersepatu",
  "Sapi Menari",
  "Bebek Kocak",
  "Naga Melayang",
  "Kucing Pusing",
  "Harimau Gendut",
  "Tikus Raksasa",
  "Kelinci Galau",
  "Elang Tertawa",
  "Domba Nyasar",
  "Babi Joget",
  "Ular Menyanyi",
  "Buaya Berdasi",
  "Burung Nyantai",
  "Komputer Ketawa",
  "Televisi Ajaib",
  "Lampu Ngambek",
  "Kursi Melayang",
  "Meja Berjalan",
  "Gelas Ketawa",
  "Bantal Terbang",
  "Kasur Menari",
  "Kulkas Bingung",
  "Piring Joget",
  "Lemari Gembira",
  "Kipas Terbang",
  "Jendela Tertawa",
  "Pintu Menyanyi",
  "Tas Meloncat",
  "Sepatu Berbicara",
  "Payung Menari",
  "Radio Tersenyum",
  "Telepon Gembira",
  "Kamera Lucu",
  "Buku Menari",
  "Pensil Tertawa",
  "Roti Melompat",
  "Kue Berjalan",
  "Nasi Goreng",
  "Sate Lucu",
  "Bakso Terbang",
  "Pizza Menyanyi",
  "Biskuit Joget",
  "Permen Gembira",
  "Es Krim Nyanyi",
  "Keripik Menari",
  "Donat Berbicara",
  "Cokelat Terbang",
  "Susu Nyanyi",
  "Kopi Menari",
  "Teh Joget",
  "Gula Ketawa",
  "Keju Meloncat",
  "Daging Menyanyi",
  "Telur Lucu",
  "Ikan Goreng",
  "Udang Berjalan",
  "Kepiting Joget",
  "Cumi Ketawa",
  "Ayam Bakar",
  "Daging Sapi",
  "Mie Terbang",
  "Sayur Menyanyi",
  "Buah Ketawa",
  "Pisang Joget",
  "Apel Meloncat",
  "Jeruk Menari",
  "Mangga Terbang",
  "Anggur Nyanyi",
  "Melon Berjalan",
  "Semangka Joget",
  "Stroberi Menyanyi",
  "Nanas Ketawa",
  "Perekat Menari",
  "Susu Lucu",
  "Sendok Terbang",
  "Garpu Joget",
  "Pisau Berbicara",
  "Wajan Ketawa",
  "Teflon Menari",
  "Panci Joget",
  "Kompor Menyanyi",
  "Oven Gembira",
  "Microwave Lucu",
  "Toaster Terbang",
  "Blender Menari",
  "Juicer Joget",
  "Talenan Berbicara",
  "Ember Ketawa",
  "Gayung Menyanyi",
  "Sikat Gigi Joget",
  "Pasta Gigi Terbang",
  "Sabun Lucu",
  "Shampo Nyanyi",
  "Handuk Menari",
  "Kamar Mandi Joget",
  "Lemari Es Ketawa",
  "Vas Bunga Meloncat",
  "Lilin Nyanyi",
  "Kardus Menari",
  "Sapu Terbang",
  "Serbet Berbicara",
  "Lap Ketawa",
  "Botol Minum Nyanyi",
  "Toples Lucu",
  "Mangkok Joget",
  "Piring Terbang",
  "Gelas Nyanyi",
  "Teko Menari",
  "Sendok Lucu",
  "Garpu Menyanyi",
  "Pisau Ketawa",
  "Wajan Menari",
  "Teflon Terbang",
  "Panci Joget",
  "Kompor Nyanyi",
  "Oven Menari",
  "Microwave Ketawa",
  "Toaster Lucu",
  "Blender Menyanyi",
  "Juicer Joget",
  "Talenan Ketawa",
  "Ember Menari",
  "Gayung Joget",
  "Sikat Gigi Terbang",
  "Pasta Gigi Nyanyi",
  "Sabun Lucu",
  "Shampo Menyanyi",
  "Handuk Joget",
  "Kamar Mandi Terbang",
  "Lemari Es Menari",
  "Vas Bunga Ketawa",
  "Lilin Joget",
  "Kardus Nyanyi",
  "Sapu Menari",
  "Serbet Terbang",
  "Lap Lucu",
  "Botol Minum Menyanyi",
  "Toples Joget",
  "Mangkok Ketawa",
  "Piring Nyanyi",
  "Gelas Lucu",
  "Teko Menari",
  "Sendok Joget",
  "Garpu Nyanyi",
  "Pisau Menyanyi",
  "Wajan Ketawa",
  "Teflon Joget",
  "Panci Nyanyi",
  "Kompor Lucu",
  "Oven Menari",
  "Microwave Terbang",
  "Toaster Menyanyi",
  "Blender Joget",
  "Juicer Ketawa",
  "Talenan Menyanyi",
  "Ember Joget",
  "Gayung Nyanyi",
  "Sikat Gigi Menari",
  "Pasta Gigi Joget",
  "Sabun Menyanyi",
  "Shampo Ketawa",
  "Handuk Menyanyi",
  "Kamar Mandi Joget",
  "Lemari Es Terbang",
  "Vas Bunga Menari",
  "Lilin Menyanyi",
  "Kardus Joget",
  "Sapu Nyanyi",
  "Serbet Menari",
  "Lap Terbang",
  "Botol Minum Menari",
  "Toples Menyanyi",
  "Mangkok Joget",
  "Piring Menyanyi",
  "Gelas Ketawa",
  "Teko Joget",
  "Sendok Nyanyi",
  "Garpu Menari",
  "Pisau Terbang",
  "Wajan Menyanyi",
  "Teflon Joget",
  "Panci Nyanyi",
  "Kompor Menari",
  "Oven Terbang",
  "Microwave Menyanyi",
  "Toaster Joget",
  "Blender Menari",
  "Juicer Terbang",
  "Talenan Menyanyi",
  "Ember Joget",
  "Gayung Menari",
  "Sikat Gigi Nyanyi",
  "Pasta Gigi Joget",
  "Sabun Terbang",
  "Shampo Menyanyi",
  "Handuk Joget",
  "Kamar Mandi Nyanyi",
  "Lemari Es Menari",
  "Vas Bunga Terbang",
  "Lilin Joget",
  "Kardus Nyanyi",
  "Sapu Menari",
  "Serbet Joget",
  "Lap Menyanyi",
  "Botol Minum Terbang",
  "Toples Menari",
  "Mangkok Nyanyi",
  "Piring Joget",
  "Gelas Menyanyi",
  "Teko Ketawa",
  "Sendok Joget",
  "Garpu Nyanyi",
  "Pisau Menari",
  "Wajan Terbang",
  "Teflon Menyanyi",
  "Panci Joget",
  "Kompor Menyanyi",
  "Oven Ketawa",
  "Microwave Joget",
  "Toaster Nyanyi",
  "Blender Menari",
  "Juicer Terbang",
  "Talenan Nyanyi",
  "Ember Menari",
  "Gayung Joget",
  "Sikat Gigi Nyanyi",
  "Pasta Gigi Terbang",
  "Sabun Menyanyi",
  "Shampo Joget",
  "Handuk Menari",
  "Kamar Mandi Nyanyi",
  "Lemari Es Joget",
  "Vas Bunga Nyanyi",
  "Lilin Terbang",
  "Kardus Menari",
  "Sapu Joget",
  "Serbet Nyanyi",
  "Lap Menari",
  "Botol Minum Joget",
  "Toples Nyanyi",
  "Mangkok Menyanyi",
  "Piring Terbang",
  "Gelas Joget",
  "Teko Nyanyi",
  "Sendok Menari",
  "Garpu Joget",
  "Pisau Nyanyi",
  "Wajan Menari",
  "Teflon Joget",
  "Panci Menyanyi",
  "Kompor Terbang",
  "Oven Joget",
  "Microwave Menari",
  "Toaster Nyanyi",
  "Blender Joget",
];

function randomPickKhodam() {
  const listLength = listKhodam.length;
  const randomIndex = Math.floor(Math.random() * listLength - 1);
  return listKhodam[randomIndex];
}

function handleClick() {
  nama.textContent = "Nama: " + input.value;
  khodam.textContent = "Jenis Khodam: " + randomPickKhodam();
  input.value = "";
}
