$(document).ready(function () {
  /* =============================
     SCROLL & NAVBAR
  ============================== */
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  /* =============================
     MOBILE MENU
  ============================== */
  $(".menu-btn-icon").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn-icon i").toggleClass("active");
  });

  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").removeClass("active");
  });

  /* =============================
     LANGUAGE DATA
  ============================== */
  const translations = {
    vi: {
      typing: ["Sinh viên", "Automation Engineer", "Người đam mê kỹ thuật"],
    },
    en: {
      typing: ["Student", "Automation Engineer", "Tech Enthusiast"],
    },
  };

  /* =============================
     TYPED.JS INIT
  ============================== */
  let typed;
  function initTyped(lang) {
    if (typed) typed.destroy();

    typed = new Typed(".typing", {
      strings: translations[lang].typing,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  /* =============================
     TRANSLATE PAGE
  ============================== */
  function translatePage(lang) {
    // text thường
    $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (window.i18n && window.i18n[lang][key]) {
        $(this).html(window.i18n[lang][key]);
      }
    });

    // text nền mờ (title-bg)
    $("[data-i18n-bg]").each(function () {
      const key = $(this).data("i18n-bg");
      if (window.i18n && window.i18n[lang][key]) {
        $(this).text(window.i18n[lang][key]);
      }
    });

    // active button
    $(".lang-btn").removeClass("active");
    $(`.lang-btn[data-lang="${lang}"]`).addClass("active");

    localStorage.setItem("lang", lang);

    initTyped(lang);
  }

  /* =============================
     LANGUAGE BUTTON CLICK
  ============================== */
  $(".lang-btn").click(function () {
    const lang = $(this).data("lang");
    translatePage(lang);
  });

  /* =============================
     LOAD LANGUAGE ON START
  ============================== */
  const savedLang = localStorage.getItem("lang") || "vi";
  translatePage(savedLang);

  /* =============================
     AOS INIT
  ============================== */
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

/* =============================
   GLOBAL I18N TEXT
============================== */
window.i18n = {
  vi: {
    "menu.home": "Trang chủ",
    "menu.about": "Giới thiệu",
    "menu.skills": "Kỹ năng",
    "menu.experience": "Kinh nghiệm",
    "menu.contact": "Liên hệ",

    "home.hello": "Xin chào, tôi tên là",
    "home.and": "Và tôi là",
    "home.desc":
      "Sinh viên ngành Kỹ thuật Điều khiển & Tự động hóa. Đam mê thiết kế hệ thống, lập trình PLC và giải pháp công nghiệp thông minh.",
    "home.hire": "Tuyển dụng tôi ngay",
    "home.cv": "Tải CV",

    "about.title": "Về bản thân",
    "about.bg": "About",
    "about.im": "Tôi là",
    "about.desc":
      "Hiện là sinh viên năm 4 tại Đại học Nông Lâm TPHCM. Tôi có kinh nghiệm thực chiến trong việc đấu nối tủ điện, thiết kế trên phần mềm Autocad, thiết kế mạch PCB và làm việc với các hệ thống điều khiển tự động. Tôi luôn khao khát cơ hội vận dụng kiến thức chuyên môn vào các dự án thực tiễn, đặc biệt là trong lĩnh vực Tự động hóa và IoT. Tôi mong muốn làm việc tại khu vực Thành Phố Hồ Chí Minh, các vùng phụ cận hoặc tại Khánh Hòa.",
    "about.school": "Trường",
    "about.locationLabel": "Nơi ở",
    "about.location": "Khánh Hòa, Việt Nam",

    "skills.title": "Kỹ năng chuyên môn",
    "skills.bg": "Skills",
    "skills.control": "Lập trình Điều khiển",
    "skills.controlDesc":
      "PLC, Arduino, PIC16, Raspberry Pi. Tư duy logic và thuật toán điều khiển.",
    "skills.design": "Thiết kế Kỹ thuật",
    "skills.designDesc": "AutoCAD, thiết kế PCB, đọc hiểu bản vẽ kỹ thuật.",
    "skills.install": "Thi công & Lắp đặt",
    "skills.installDesc": "Đấu nối tủ điện công nghiệp, lắp ráp máy tự động.",
    "skills.soft": "Kỹ năng mềm",
    "skills.softDesc":
      "Làm việc nhóm, giải quyết vấn đề, đọc tài liệu tiếng Anh.",

    "exp.title": "Hành trình kinh nghiệm",
    "exp.bg": "Experience",

    "exp.hd.title": "HD Hyundai Việt Nam (HVS)",
    "exp.hd.role": "Thực tập sinh Thiết kế Tàu",
    "exp.hd.li1": "Thiết kế bản vẽ sản xuất, hỗ trợ bộ phận vỏ tàu.",
    "exp.hd.li2": "Học tập quy chuẩn và phần mềm chuyên dụng của công ty.",

    "exp.pas.title": "PAS Việt Nam Automation",
    "exp.pas.role": "Thực tập sinh Kỹ thuật",
    "exp.pas.li1": "Đấu nối tủ điện, tháo lắp máy tự động (làm nệm, đếm phôi).",
    "exp.pas.li2": "Nghiên cứu ứng dụng Raspberry Pi.",

    "exp.uni.title": "Đại học Nông Lâm TPHCM",
    "exp.uni.role": "Sinh viên Kỹ thuật Điều khiển & Tự động hóa",
    "exp.uni.li1": "Đạt Học bổng học tập (Loại Giỏi) HK2 2022-2023.",
    "exp.uni.li2": "Tham gia các dự án nghiên cứu khoa học cấp khoa.",

    "contact.title": "Liên hệ",
    "contact.bg": "Contact",
    "contact.connect": "Kết nối với tôi",
    "contact.desc":
      "Nếu bạn đang tìm kiếm một kỹ sư trẻ đầy nhiệt huyết cho các dự án tự động hóa, đừng ngần ngại liên hệ.",
    "contact.nameLabel": "Tên",
    "contact.addressLabel": "Địa chỉ",
    "contact.address": "Ninh Hòa, Khánh Hòa",
    "contact.phoneLabel": "Điện thoại",
    "contact.qr": "Quét mã Zalo để trao đổi nhanh",

    "footer.text":
      'Created by <a href="#">Lương Tiểu Ngọc</a> | 2025 All rights reserved.',
  },

  en: {
    "menu.home": "Home",
    "menu.about": "About",
    "menu.skills": "Skills",
    "menu.experience": "Experience",
    "menu.contact": "Contact",

    "home.hello": "Hello, my name is",
    "home.and": "And I am",
    "home.desc":
      "A Control & Automation Engineering student passionate about industrial systems, PLC programming, and smart automation solutions.",
    "home.hire": "Hire Me",
    "home.cv": "Download CV",

    "about.title": "About Me",
    "about.bg": "About",
    "about.im": "I am",
    "about.desc":
      "I am currently a 4th-year student at Ho Chi Minh City University of Agriculture and Forestry. I have practical experience in electrical panel wiring, design using AutoCAD software, PCB design, and working with automated control systems. I am always eager to apply my professional knowledge to practical projects, especially in the fields of Automation and IoT. I wish to work in Ho Chi Minh City, surrounding areas, or Khanh Hoa.",
    "about.school": "University",
    "about.locationLabel": "Location",
    "about.location": "Khanh Hoa, Vietnam",

    "skills.title": "Professional Skills",
    "skills.bg": "Skills",
    "skills.control": "Control Programming",
    "skills.controlDesc":
      "PLC, Arduino, PIC16, Raspberry Pi with strong logical thinking.",
    "skills.design": "Technical Design",
    "skills.designDesc":
      "AutoCAD, PCB design, technical drawing interpretation.",
    "skills.install": "Installation & Assembly",
    "skills.installDesc": "Industrial control panels, automatic machines.",
    "skills.soft": "Soft Skills",
    "skills.softDesc": "Teamwork, problem-solving, technical English reading.",

    "exp.title": "Experience Journey",
    "exp.bg": "Experience",

    "exp.hd.title": "HD Hyundai Vietnam (HVS)",
    "exp.hd.role": "Ship Design Intern",
    "exp.hd.li1":
      "Designed production drawings and supported the hull department.",
    "exp.hd.li2": "Learned company standards and specialized design software.",

    "exp.pas.title": "PAS Vietnam Automation",
    "exp.pas.role": "Technical Intern",
    "exp.pas.li1":
      "Wired electrical control panels and assembled automatic machines.",
    "exp.pas.li2":
      "Researched and applied Raspberry Pi in automation projects.",

    "exp.uni.title": "Nong Lam University – HCMC",
    "exp.uni.role": "Control & Automation Engineering Student",
    "exp.uni.li1":
      "Awarded Academic Scholarship (Excellent) – Semester 2, 2022–2023.",
    "exp.uni.li2":
      "Participated in faculty-level scientific research projects.",

    "contact.title": "Contact",
    "contact.bg": "Contact",

    "contact.connect": "Get in touch",
    "contact.desc":
      "If you are looking for a passionate young engineer for automation projects, feel free to contact me.",
    "contact.nameLabel": "Name",
    "contact.addressLabel": "Address",
    "contact.address": "Ninh Hoa, Khanh Hoa, Vietnam",
    "contact.phoneLabel": "Phone",
    "contact.qr": "Scan Zalo QR code for quick contact",

    "footer.text":
      'Created by <a href="#">Luong Tieu Ngoc</a> | 2025 All rights reserved.',
  },
};
