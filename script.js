document.addEventListener("DOMContentLoaded", () => {
  // Data untuk semua titik di peta
  const mapPoints = [
    {
      id: "point-ex", x: 30, y: 23, name: "Pusat Pentas Seni", description: "Lokasi di adakanya kegiatan pentas seni, maupun penampilan dari tamu undangan.", imageUrl: "https://pariwisatakukar.wordpress.com/wp-content/uploads/2024/09/sam_5212.jpg", socialMedia: [{ platform: "Situs Web", url: "https://www.instagram.com/visitingkutaikartanegara/",},], phoneNumber: "085252451549", menuUrl: "", eventUrl: "https://www.instagram.com/p/DL_iIAIykSL/", iconUrl: "img/icons/stg.png", shape: "circle",
    },
    {
      id: "point1", x: 35, y: 30, name: "JASUKE AYS", description: "Sebuah kafe nyaman yang terletak di antara pepohonan kuno, menyajikan minuman ajaib. Sempurna untuk sore yang tenang.", imageUrl: "https://lh3.googleusercontent.com/IFEurODw36inrzj_U6v0Da3mYPcQBJ3z2izQJ4VuTwDw89REKZ1ySk4H0U00_7Pc=w600", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/jasuke_ays/", },], phoneNumber: "081345066284", menuUrl: "https://www.instagram.com/jasuke_ays/p/DBf7S4ZT-XH/", iconUrl: "img/icons/01.png",
    },
    {
      id: "point2", x: 40, y: 30, name: "Swara Coffee", description: "Swara Coffee.", imageUrl: "https://lh3.googleusercontent.com/oLvQwxItHkamG-V6fOkPskh6OC367Hi9u-Yr62vb1lQoNUhwvTH2VY-SOJirjg=w0", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/swara.trg", },], phoneNumber: "089689367234", menuUrl: "https://www.instagram.com/p/Cr4nTbAPIys", iconUrl: "img/icons/02.png",
    },
    {
      id: "point3", x: 45, y: 30, name: "Selalu Teh", description: "Selalu Teh.", imageUrl: "https://lh3.googleusercontent.com/KFRK-NjyyWYfWiRr7krx-iV-ikcLSwtc-6DLpa7YpJzpmlxFgPPVOlFXa5wMc_Y=w0", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/selaluteh.id", },], phoneNumber: "081347200987", menuUrl: "https://www.instagram.com/stories/highlights/18065307350479292", iconUrl: "img/icons/03.png",
    },
    {
      id: "point4", x: 50, y: 30, name: "Sushi Box Dan Dimsum Box", description: "Sushi Box Dan Dimsum Box", imageUrl: "https://lh3.googleusercontent.com/suq288sYaj_o2p960A2dxBIigmQ2HgTh0gk7TvQXOkEkggWQkQ0wRqRlbqvbMA=w0", socialMedia: [{ platform: "", url: "" }], phoneNumber: "081346499938", menuUrl: "", iconUrl: "https://placehold.co/32x32/FFFF00/000000?text=Sushi Dimsum Box",
    },
    {
      id: "point5", x: 55, y: 30, name: "PENTOL KUAH VIRZHA", description: "PENTOL KUAH VIRZHA", imageUrl: "https://lh3.googleusercontent.com/Zqy4Pmb2i9qvj2kToaBy-zv4kMLCifyuFeISTFxEnazvyBWaWwyHienNJ8VvSeg=w0", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/era_salviana90/", },], phoneNumber: "08971284414", menuUrl: "https://www.instagram.com/p/DKpCJ1kh5tq/", iconUrl: "img/icons/05.png",
    },
    {
      id: "point6", x: 60, y: 30, name: "Permata Tersembunyi", description: "Tempat misterius dan jarang ditemukan, menawarkan ketenangan yang unik.", imageUrl: "https://placehold.co/400x180/78909c/ffffff?text=Permata+Tersembunyi", socialMedia: [], phoneNumber: "N/A", menuUrl: "", iconUrl: "https://placehold.co/32x32/800080/FFFFFF?text=P6",
    },
    {
      id: "point8", x: 65, y: 30, name: "Galeri Seni Sungai", description: "Galeri yang menampilkan seni lokal yang terinspirasi oleh sungai. Tempat yang sempurna untuk menemukan permata tersembunyi.", imageUrl: "https://placehold.co/400x180/a1887f/ffffff?text=Galeri+Seni", socialMedia: [{ platform: "Instagram", url: "https://instagram.com/riverartgallery", },], phoneNumber: "+1-555-0107", menuUrl: "", iconUrl: "https://placehold.co/32x32/795548/FFFFFF?text=P7",
    },
    {
      id: "point9", x: 35, y: 22, name: "Pisang Gapit Suryani", description: "Taman yang luas dPisang Gapit Suryani.", imageUrl: "https://lh3.googleusercontent.com/s5JElu7ho6YBoOFP0Vk1ejD08B0zqSDb9PCrT0IXoEbimegzwO1kxIe_6tr4yRU=w600", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/pisanggapitsuryani", },], phoneNumber: "", menuUrl: "https://www.instagram.com/p/C_EgQk3Tj0K", iconUrl: "img/icons/09.png",
    },
    {
      id: "point10", x: 40, y: 22, name: "Churros'So", description: "Churros'So", imageUrl: "https://lh3.googleusercontent.com/2dgXiW4315lrvKy8l6fIlCx114w4gZjPFkz5E6KKCy8vqe_eiTkmHVfn7c7vrBo=w0", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/churros_so/", },], phoneNumber: "082154960505", menuUrl: "https://www.instagram.com/p/DI1b4n2SVQv/", iconUrl: "img/icons/10.png",
    },
    {
      id: "point11", x: 45, y: 22, name: "Kedai Gemoy", description: "Kedai Gemoy", imageUrl: "https://lh3.googleusercontent.com/c7pLRPehZIla9mKbFHEOKVSrt9l2H9CijN5YK6mEO-PYxtDifh45MMyi9SVy-g=w0", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/kedai_gemoyku", },], phoneNumber: "081251626762", menuUrl: "https://www.instagram.com/kedai_gemoyku", iconUrl: "img/icons/11.png",
    },
    {
      id: "point12", x: 50, y: 22, name: "Tahu Bakso Berkat Sholawat", description: "", imageUrl: "https://lh3.googleusercontent.com/pUBc7H2P_oUwEF_py_2ZB99XxFkoIPQRSC72hH8x-U_9vadqf_BX0TPIpHquOXl0=w0", socialMedia: [{ platform: "Instagram", url: "https://www.instagram.com/tahu_bakso_berkat_sholawat", },], phoneNumber: "085754268978", menuUrl: "https://www.instagram.com/p/CoTtp2KvfE8", iconUrl: "img/icons/12.png",
    },
    {
      id: "point13", x: 55, y: 22, name: "Cumi Bakar Halintar", description: "Cumi bakar halintar", imageUrl: "https://lh3.googleusercontent.com/pKId34Zwgysu32kOjKjyqG5zcjMW3gLjChlZcoMeqfzgyDYY94r9Pacyr0fKjA=w0", socialMedia: [{ platform: "Situs Web", url: "", },], phoneNumber: "085393193789", menuUrl: "", iconUrl: "https://placehold.co/32x32/F4511E/FFFFFF?text=Cumi Bakar Halilintar",
    },
    {
      id: "point14", x: 60, y: 22, name: "Taman Petualangan", description: "Taman hiburan dengan wahana mendebarkan dan aktivitas untuk segala usia.", imageUrl: "https://placehold.co/400x180/ff7043/ffffff?text=Taman+Petualangan", socialMedia: [{ platform: "Situs Web", url: "https://example.com/adventurepark", },], phoneNumber: "+1-555-0111", menuUrl: "", iconUrl: "https://placehold.co/32x32/F4511E/FFFFFF?text=P14",
    },
    {
      id: "point15", x: 65, y: 22, name: "Taman Petualangan", description: "Taman hiburan dengan wahana mendebarkan dan aktivitas untuk segala usia.", imageUrl: "https://placehold.co/400x180/ff7043/ffffff?text=Taman+Petualangan", socialMedia: [{ platform: "Situs Web", url: "https://example.com/adventurepark", },], phoneNumber: "+1-555-0111", menuUrl: "", iconUrl: "https://placehold.co/32x32/F4511E/FFFFFF?text=P15",
    },
  ];

  // Referensi ke elemen-elemen DOM
  const mapImage = document.getElementById("mapImage");
  const mapContainer = document.getElementById("mapContainer");
  const mapPointsContainer = document.getElementById("mapPointsContainer");
  const detailCard = document.getElementById("detailCard");
  const detailCardOverlay = document.getElementById("detailCardOverlay");
  const detailImage = document.getElementById("detailImage");
  const detailTitle = document.getElementById("detailTitle");
  const detailDescription = document.getElementById("detailDescription");
  const detailSocialLinks = document.getElementById("detailSocialLinks");
  const detailPhoneNumber = document.getElementById("detailPhoneNumber");
  const closeDetailCardButton = document.getElementById("closeDetailCard");
  const actionButtonElement = document.getElementById("actionButton");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const messageBox = document.getElementById("messageBox");
  const searchBar = document.getElementById("searchBar");
  const searchIconToggle = document.getElementById("searchIconToggle");
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const clearSearchButton = document.getElementById("clearSearchButton");

  let currentPointData = null;

  // Inisialisasi peta
  function initializeMapPoints(pointsToRender = mapPoints) {
    mapPointsContainer.innerHTML = ""; // Bersihkan titik yang ada
    pointsToRender.forEach((point) => {
      const pointElement = document.createElement("div");
      pointElement.classList.add("map-point");
      if (point.shape === "circle") {
        pointElement.classList.add("circle");
      }
      pointElement.style.left = `${point.x}%`;
      pointElement.style.top = `${point.y}%`;

      const iconImage = document.createElement("img");
      iconImage.src = point.iconUrl;
      iconImage.alt = `Ikon ${point.name}`;
      pointElement.appendChild(iconImage);

      pointElement.addEventListener("click", (e) => {
        e.stopPropagation();
        showDetailCard(point);
      });
      mapPointsContainer.appendChild(pointElement);
    });
  }

  // Tampilkan kartu detail
  function showDetailCard(pointData) {
    currentPointData = pointData;
    detailImage.src = pointData.imageUrl || "https://placehold.co/400x180/cccccc/333333?text=Tidak+Ada+Gambar";
    detailImage.alt = `Gambar ${pointData.name}`;
    detailTitle.textContent = pointData.name;
    detailDescription.textContent = pointData.description;

    detailSocialLinks.innerHTML = "";
    if (pointData.socialMedia && pointData.socialMedia.length > 0 && pointData.socialMedia[0].platform) {
      pointData.socialMedia.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.platform;
        anchor.target = "_blank";
        anchor.classList.add("social-link");
        detailSocialLinks.appendChild(anchor);
      });
    } else {
      detailSocialLinks.textContent = "Tidak ada tautan media sosial.";
    }

    detailPhoneNumber.textContent = `Telepon: ${pointData.phoneNumber || "N/A"}`;

    const hasMenu = pointData.menuUrl && pointData.menuUrl.trim() !== "";
    const hasEvent = pointData.eventUrl && pointData.eventUrl.trim() !== "";
    
    if (pointData.id === "point-ex" && hasEvent) {
        actionButtonElement.disabled = false;
        actionButtonElement.innerHTML = '<i class="fas fa-calendar-alt"></i> Lihat Event';
        actionButtonElement.onclick = () => window.open(pointData.eventUrl, "_blank");
    } else if (hasMenu) {
        actionButtonElement.disabled = false;
        actionButtonElement.innerHTML = '<i class="fas fa-utensils"></i> Lihat Menu';
        actionButtonElement.onclick = () => window.open(pointData.menuUrl, "_blank");
    } else {
        actionButtonElement.disabled = true;
        actionButtonElement.innerHTML = '<i class="fas fa-info-circle"></i> Tidak Ada Info';
        actionButtonElement.onclick = null;
    }

    detailCard.classList.add("active");
    detailCardOverlay.classList.add("active");
  }

  // Tutup kartu detail
  function closeDetailCard() {
    detailCard.classList.remove("active");
    detailCardOverlay.classList.remove("active");
  }

  // Tampilkan pesan notifikasi
  function showMessage(message, duration = 3000) {
    messageBox.textContent = message;
    messageBox.classList.add("active");
    setTimeout(() => {
      messageBox.classList.remove("active");
    }, duration);
  }

  // Fungsi Pencarian
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (!searchTerm) {
      initializeMapPoints(mapPoints);
      collapseSearchBar();
      return;
    }
    const filteredPoints = mapPoints.filter((point) =>
      point.name.toLowerCase().includes(searchTerm)
    );
    initializeMapPoints(filteredPoints);
    showMessage(`Ditemukan ${filteredPoints.length} lokasi.`);
  }

  function clearSearch() {
    searchInput.value = "";
    initializeMapPoints(mapPoints);
    collapseSearchBar();
  }

  function expandSearchBar() {
    searchBar.classList.add("expanded");
    searchIconToggle.classList.add("hidden");
    searchInput.classList.remove("hidden");
    searchButton.classList.remove("hidden");
    clearSearchButton.classList.remove("hidden");
    searchInput.focus();
  }

  function collapseSearchBar() {
    if (searchInput.value.trim() === "") {
      searchBar.classList.remove("expanded");
      searchIconToggle.classList.remove("hidden");
      searchInput.classList.add("hidden");
      searchButton.classList.add("hidden");
      clearSearchButton.classList.add("hidden");
    }
  }

  // Event Listeners
  closeDetailCardButton.addEventListener("click", closeDetailCard);
  detailCardOverlay.addEventListener("click", closeDetailCard);
  searchIconToggle.addEventListener("click", expandSearchBar);
  searchButton.addEventListener("click", performSearch);
  clearSearchButton.addEventListener("click", clearSearch);
  searchInput.addEventListener("keypress", (e) => e.key === "Enter" && performSearch());
  searchInput.addEventListener("blur", collapseSearchBar);

  // Inisialisasi awal saat gambar dimuat
  if (mapImage.complete) {
    initializeMapPoints();
  } else {
    mapImage.onload = () => initializeMapPoints();
  }
  
  window.addEventListener("resize", () => initializeMapPoints());
});