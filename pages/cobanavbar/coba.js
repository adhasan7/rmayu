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

// function toggleMenu() {
//   var submenu = document.querySelector(".submenu");
//   if (submenu.style.display === "block") {
//     submenu.style.display = "none";
//   } else {
//     submenu.style.display = "block";
//   }
// }
// function toggleMenu() {
//   var menu = document.querySelector(".menu");
//   menu.classList.toggle("active"); // Menambahkan atau menghapus kelas 'active'
// }
