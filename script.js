$(document).ready(function(){
    // Xử lý sự kiện scroll cho Navbar và Nút cuộn lên
    $(window).scroll(function(){
        // Sticky Navbar
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Hiện/Ẩn nút Scroll Up
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Sự kiện click nút Scroll Up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    // Toggle Menu cho Mobile
    $('.menu-btn-icon').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn-icon i').toggleClass("active");
    });

    // Đóng menu khi chọn item
    $('.navbar .menu li a').click(function(){
         $('.navbar .menu').removeClass("active");
    });

    // Hiệu ứng gõ chữ (Typing Animation)
    var typed = new Typed(".typing", {
        strings: ["Sinh viên", "Automation Engineer", "Người đam mê kỹ thuật", "PLC Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Khởi tạo AOS Animation
    AOS.init({
        duration: 1000, // Thời gian chạy hiệu ứng (ms)
        easing: 'ease-in-out', // Kiểu chuyển động
        once: true, // Chỉ chạy 1 lần khi cuộn xuống
        mirror: false 
    });
});