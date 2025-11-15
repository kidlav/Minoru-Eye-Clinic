$(document).ready(function () {
  
  $(".accordion-header").click(function () {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").toggleClass("open");
  });
});

$(document).ready(function () {
    const firstHeader = $('.accordion-header').first();
    const firstContent = firstHeader.next('.accordion-content');

    firstHeader.addClass('active');
    firstContent.addClass('open');
});

// nav bar
$(function () {
    $("#header").load("header.html", function () {
        $(".burger").click(function () {
            $(".nav_bar ul").toggleClass("active");
        });
    });

    $("#footer").load("footer.html");

  });


$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
      $('nav').addClass('fixed');
  } else {
      $('nav').removeClass('fixed');
  }
});


// nav bar media

$(document).ready(function () {
    $(".burger").click(function () {
        $(".nav_bar ul").toggleClass("active");
    });
});

// фон скролтутоп кнопки
$(document).ready(function () {
    const $btn = $('#scrollTopBtn');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $btn.addClass('light');
            } else {
                $btn.removeClass('light');
            }
        });
    }, {
        threshold: .1,
    });

    // Наблюдаем за всеми секциями с .dark
    document.querySelectorAll('.dark').forEach(section => {
        observer.observe(section);
    });

    // Появление кнопки при скролле
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $btn.fadeIn();
        } else {
            $btn.fadeOut();
        }
    });

    // Скролл наверх
    $btn.click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});



// form

$(document).ready(function () {
    $("#contact-form").submit(function (e) {
      e.preventDefault();
  
      const formData = $(this).serialize();
  
      $.ajax({
        type: "POST",
        url: "contact-form.php",
        data: formData,
        success: function (response) {
          $("#form-message").text(response).css("color", "green");
          $("#contact-form")[0].reset();
        },
        error: function () {
          $("#form-message").text("Something went wrong.").css("color", "red");
        },
      });
    });
  });