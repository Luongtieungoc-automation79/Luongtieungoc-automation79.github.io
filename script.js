$(document).ready(function () {
  // --- Đa ngôn ngữ / Multi-language Support ---
  const translations = {
    vi: {
      nav_home: "Trang chủ",
      nav_about: "Giới thiệu",
      nav_skills: "Kỹ năng",
      nav_exp: "Kinh nghiệm",
      nav_contact: "Liên hệ",

      home_hello: "Xin chào, tôi tên là",
      home_name: "Lương Tiểu Ngọc",
      home_role_prefix: "Và tôi là",
      home_desc:
        "Sinh viên ngành Kỹ thuật Điều khiển & Tự động hóa. Đam mê thiết kế hệ thống, lập trình PLC và giải pháp công nghiệp thông minh.",
      home_hire_btn: "Tuyển dụng tôi ngay",
      home_cv_btn: "Tải CV",

      about_title: "Về bản thân",
      about_intro_name: "Tôi là Lương Tiểu Ngọc",
      about_desc:
        "Hiện là sinh viên năm 4 tại Đại học Nông Lâm TPHCM. Tôi có kinh nghiệm thực chiến trong việc đấu nối tủ điện, thiết kế trên phần mềm Autocad, thiết kế mạch PCB và làm việc với các hệ thống điều khiển tự động. <br /><br /> Tôi luôn khao khát cơ hội vận dụng kiến thức chuyên môn vào các dự án thực tiễn, đặc biệt là trong lĩnh vực Tự động hóa và IoT. Tôi mong muốn làm việc tại khu vực Thành Phố Hồ Chí Minh, các vùng phụ cận hoặc tại Khánh Hòa.",
      about_school_label: "Trường:",
      about_school_name: "Đại học Nông Lâm TP.HCM",
      about_location_label: "Nơi ở:",
      about_location_val: "Khánh Hòa, Việt Nam",

      skills_title: "Kỹ năng chuyên môn",
      skill_1_title: "Lập trình Điều khiển",
      skill_1_desc:
        "PLC, Arduino, PIC16, Raspberry Pi. Tư duy logic và thuật toán điều khiển.",
      skill_2_title: "Thiết kế Kỹ thuật",
      skill_2_desc:
        "AutoCAD, Thiết kế mạch in (PCB), Đọc hiểu bản vẽ kỹ thuật bố trí tàu.",
      skill_3_title: "Thi công & Lắp đặt",
      skill_3_desc:
        "Đấu nối tủ điện công nghiệp, lắp ráp máy tự động, xử lý sự cố.",
      skill_4_title: "Kỹ năng mềm",
      skill_4_desc:
        "Làm việc nhóm, Giải quyết vấn đề, Đọc tài liệu Tiếng Anh chuyên ngành.",

      exp_title: "Hành trình kinh nghiệm",
      exp_1_role: "Thực tập sinh Thiết kế Tàu",
      exp_1_desc_1: "Thiết kế bản vẽ sản xuất, hỗ trợ bộ phận vỏ tàu.",
      exp_1_desc_2: "Học tập quy chuẩn và phần mềm chuyên dụng của công ty.",
      exp_2_role: "Thực tập sinh Kỹ thuật",
      exp_2_desc_1:
        "Đấu nối tủ điện, tháo lắp máy tự động (làm nệm, đếm phôi).",
      exp_2_desc_2: "Nghiên cứu ứng dụng Raspberry Pi.",
      exp_3_org: "Đại học Nông Lâm TPHCM",
      exp_3_role: "Sinh viên Kỹ thuật Điều khiển & Tự động hóa",
      exp_3_desc_1: "Đạt Học bổng học tập (Loại Giỏi) HK2 2022-2023.",
      exp_3_desc_2: "Tham gia các dự án nghiên cứu khoa học cấp khoa.",

      contact_title: "Liên hệ",
      contact_connect: "Kết nối với tôi",
      contact_desc:
        "Nếu bạn đang tìm kiếm một kỹ sư trẻ đầy nhiệt huyết cho các dự án tự động hóa, đừng ngần ngại liên hệ.",
      contact_name_label: "Tên",
      contact_addr_label: "Địa chỉ",
      contact_phone_label: "Điện thoại",
      contact_qr: "Quét mã Zalo để trao đổi nhanh",
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_skills: "Skills",
      nav_exp: "Experience",
      nav_contact: "Contact",

      home_hello: "Hello, my name is",
      home_name: "Luong Tieu Ngoc",
      home_role_prefix: "And I'm a",
      home_desc:
        "Student of Control Engineering & Automation. Passionate about system design, PLC programming, and smart industrial solutions.",
      home_hire_btn: "Hire Me Now",
      home_cv_btn: "Download CV",

      about_title: "About Me",
      about_intro_name: "I'm Luong Tieu Ngoc",
      about_desc:
        "Currently a 4th-year student at Nong Lam University, HCMC. I have hands-on experience in electrical cabinet wiring, Autocad design, PCB design, and working with automatic control systems. <br /><br /> I am always eager to apply my professional knowledge to practical projects, especially in Automation and IoT. I'm looking for opportunities in Ho Chi Minh City, surrounding areas, or Khanh Hoa.",
      about_school_label: "University:",
      about_school_name: "Nong Lam University HCMC",
      about_location_label: "Location:",
      about_location_val: "Khanh Hoa, Vietnam",

      skills_title: "Professional Skills",
      skill_1_title: "Control Programming",
      skill_1_desc:
        "PLC, Arduino, PIC16, Raspberry Pi. Logical thinking and control algorithms.",
      skill_2_title: "Technical Design",
      skill_2_desc:
        "AutoCAD, PCB Design, Reading technical layout drawings.",
      skill_3_title: "Construction & Installation",
      skill_3_desc:
        "Industrial cabinet wiring, automatic machine assembly, troubleshooting.",
      skill_4_title: "Soft Skills",
      skill_4_desc:
        "Teamwork, Problem-solving, Reading specialized English documents.",

      exp_title: "Experience Journey",
      exp_1_role: "Ship Design Intern",
      exp_1_desc_1: "Designed production drawings, supported the hull department.",
      exp_1_desc_2: "Learned company standards and specialized software.",
      exp_2_role: "Technical Intern",
      exp_2_desc_1:
        "Wired electrical cabinets, assembled/disassembled automatic machines.",
      exp_2_desc_2: "Researched Raspberry Pi applications.",
      exp_3_org: "Nong Lam University HCMC",
      exp_3_role: "Student of Control Engineering & Automation",
      exp_3_desc_1: "Achieved Academic Scholarship (Excellent) Semester 2 2022-2023.",
      exp_3_desc_2: "Participated in faculty-level scientific research projects.",

      contact_title: "Contact",
      contact_connect: "Get in Touch",
      contact_desc:
        "If you are looking for a passionate young engineer for automation projects, do not hesitate to contact me.",
      contact_name_label: "Name",
      contact_addr_label: "Address",
      contact_phone_label: "Phone",
      contact_qr: "Scan Zalo QR to chat",
    },
  };

  // Xác định ngôn ngữ hiện tại
  let currentLang = localStorage.getItem("lang") || "vi";

  // Hàm cập nhật nội dung
  function updateContent(lang) {
    // Cập nhật các text element có data-lang
    $("[data-lang]").each(function () {
      const key = $(this).attr("data-lang");
      if (translations[lang] && translations[lang][key]) {
        $(this).html(translations[lang][key]);
      }
    });

    // Cập nhật nút chuyển đổi
    if (lang === "vi") {
      $("#current-lang-flag").attr("src", "https://flagcdn.com/w40/vn.png");
      $("#current-lang-text").text("VN");
    } else {
      $("#current-lang-flag").attr("src", "https://flagcdn.com/w40/gb.png");
      $("#current-lang-text").text("EN");
    }
  }

  // Chạy lần đầu
  updateContent(currentLang);

  // Sự kiện click nút đổi ngôn ngữ
  $("#lang-switch").click(function () {
    currentLang = currentLang === "vi" ? "en" : "vi";
    localStorage.setItem("lang", currentLang);
    // Reload để cập nhật Typed.js và nội dung sạch sẽ
    location.reload();
  });

  // Xử lý sự kiện scroll cho Navbar và Nút cuộn lên
  $(window).scroll(function () {
    // Sticky Navbar
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Hiện/Ẩn nút Scroll Up
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Sự kiện click nút Scroll Up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    $("html").css("scrollBehavior", "auto");
  });

  // Toggle Menu cho Mobile
  $(".menu-btn-icon").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn-icon i").toggleClass("active");
  });

  // Đóng menu khi chọn item
  $(".navbar .menu li a").click(function () {
    $(".navbar .menu").removeClass("active");
  });

  // Hiệu ứng gõ chữ (Typing Animation) - Dựa vào ngôn ngữ
  const typedStrings = {
    vi: ["Sinh viên", "Automation Engineer", "Người đam mê kỹ thuật"],
    en: ["Student", "Automation Engineer", "Tech Enthusiast"],
  };

  var typed = new Typed(".typing", {
    strings: typedStrings[currentLang],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Khởi tạo AOS Animation
  AOS.init({
    duration: 1000, // Thời gian chạy hiệu ứng (ms)
    easing: "ease-in-out", // Kiểu chuyển động
    once: true, // Chỉ chạy 1 lần khi cuộn xuống
    mirror: false,
  });
});
