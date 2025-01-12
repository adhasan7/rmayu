function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("show");
}

let currentIndex = 0; // Mulai dari gambar pertama
const slides = document.querySelectorAll("#carousel img"); // Ambil semua gambar
const totalSlides = slides.length;

// Tampilkan gambar pertama
slides[currentIndex].classList.add("active");

// Fungsi untuk menggerakkan slide
function moveSlide(direction) {
  slides[currentIndex].classList.remove("active"); // Sembunyikan gambar saat ini

  currentIndex += direction;

  // Loop kembali ke awal atau akhir
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Kembali ke gambar terakhir
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Kembali ke gambar pertama
  }

  slides[currentIndex].classList.add("active"); // Tampilkan gambar baru
}

// Perubahan slide otomatis setiap 3 detik
setInterval(() => {
  moveSlide(1); // Pindah ke slide berikutnya
}, 3000); // Ganti slide setiap 3 detik

//
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "main-nav") {
    x.className += " responsive"; // Menambahkan kelas 'responsive' jika kelas saat ini adalah 'main-nav'
  } else {
    x.className = "main-nav"; // Mengembalikan kelas ke 'main-nav' jika sudah dalam mode responsif
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // Menambahkan kelas 'responsive' jika kelas saat ini adalah 'topnav'
  } else {
    x.className = "topnav"; // Mengembalikan kelas ke 'topnav' jika sudah dalam mode responsif
  }
}

function toggleMenu() {
  var topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive"; // Tambahkan kelas responsive
  } else {
    topnav.className = "topnav"; // Kembalikan ke kelas awal
  }

  var submenu = document.querySelector(".submenu");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "main-nav") {
    x.className += " responsive"; // Menambahkan kelas 'responsive' jika kelas saat ini adalah 'main-nav'
  } else {
    x.className = "main-nav"; // Mengembalikan kelas ke 'main-nav' jika sudah dalam mode responsif
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive"; // Menambahkan kelas 'responsive' jika kelas saat ini adalah 'topnav'
  } else {
    x.className = "topnav"; // Mengembalikan kelas ke 'topnav' jika sudah dalam mode responsif
  }
}

function toggleMenu() {
  var topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive"; // Tambahkan kelas responsive
  } else {
    topnav.className = "topnav"; // Kembalikan ke kelas awal
  }

  var submenu = document.querySelector(".submenu");
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
  } else {
    submenu.style.display = "block";
  }
}
