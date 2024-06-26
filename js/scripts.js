AOS.init();

const alertPlaceholder = $("#liveAlertPlaceholder");
var timerCloseAlert;

// $('.product').css('opacity',0);
$(".render").css("opacity", 0);

const projects = $(".project");

const projects2 = document.querySelectorAll(".project");

const projectsButtons = $(".project-button");

const projectsImages = $(".project-img");

let prevProject = projects.length - 1;

const disableProjects = (current) => {
  var zindex = 100;
  $(".project").each(function (i, obj) {
    $(this).removeClass("project-active");
    if (i + 1 != current) {
      $(this).css("z-index", `${zindex}`);
    }

    if (current >= Math.round(projects.length / 2)) {
      zindex += 1;
    } else {
      zindex -= 1;
    }
  });
  prevProject = current;
};

const positionProjects = () => {
  current = projects.length - 1;
  var right = -1;
  var zindex = 190;
  $(".project").each(function (i, obj) {
    $(this).css({ right: `${right}%`, "z-index": `${zindex}` });
    $(this).on("mouseover", () => {
      current = i;
      console.log(current);
      disableProjects(current);
      $(this).addClass("project-active");
      $(this).css("z-index", "1000");
    });
    $(this).on("mouseleave", () => {
      $(this).removeClass("project-active");
    });
    right += 6.8;
    zindex += 1;
  });
};

// PRODUCTS SECTION

const checkEmailSyntax = (email) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const checkPhoneSyntax = (phone) => {
  var re = /^(0)?(414|416|424|412)[0-9]{7}$/;
  return re.test(String(phone).toLowerCase());
};

$("#btn-submit-form-product").on("click", () => {
  $("#product-form").submit();
});

// CONTACT SECTION

const selected = $(".selected");
const optionsContainer = $(".options-container");
const projectType = $("#project-type");

const optionsList = $(".option");

selected.on("click", () => {
  $(optionsContainer).toggleClass("active");
});

$(optionsList).each((i, obj) => {
  $(obj).on("click", () => {
    $(selected).text($(obj).text());
    $(projectType).val($(obj).text().trim());
    console.log($(projectType).val());
    $(selected).removeClass("select-placeholder");
    $(optionsContainer).removeClass("active");
  });
});

// Handle form submit
$(".contact-form").on("submit", (e) => {
  const firstName = $("#contact-input-1").val();
  const lastName = $("#contact-input-2").val();
  const phoneNumber = $("#contact-input-3").val();
  const email = $("#contact-input-4").val();
  const address = $("#contact-input-6").val();
  console.log("sending form");

  e.preventDefault();

  if (
    firstName.trim() != "" &&
    lastName.trim() != "" &&
    phoneNumber.trim() != "" &&
    email.trim() != "" &&
    address.trim() != ""
  ) {
    $.ajax({
      method: "POST",
      url: "https://formsubmit.co/ajax/juanluislauretta@gmail.com",
      dataType: "json",
      accepts: "application/json",
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
      },
      success: (data) => {
        console.log(data);
        $("#form-container").addClass("d-none");
        $("#form-success-container").removeClass("d-none");
      },
      error: (err) => console.log(err),
    });
  } else {
    let message;
    if (window.location.hash == "#es") {
      message = "Por favor rellena todos los campos";
    } else {
      message = "Please fill in all fields";
    }
    alert(message, "fill", "contact");
    timer = setTimeout(() => {
      $("#liveAlertPlaceholder").fadeOut(500, function () {
        $(this).empty().show();
      });
    }, 4000);
  }
});

const alert = (message, type, form) => {
  let alertPlaceholder;
  if (form === "product") {
    alertPlaceholder = $("#liveAlertPlaceholderProduct");
  } else {
    alertPlaceholder = $("#liveAlertPlaceholder");
  }

  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible mb-0" role="alert" id="alert">`,
    `   <div><p class="m-0">${message}</p></div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  // const wrapper =
  // `<div class="alert alert-${type} alert-dismissible mb-0" role="alert" id="alert">
  //     <div>${icon}
  //         <div>
  //             ${message.forEach(msg => {
  //                 return message
  //             })}
  //         </div>
  //     </div>
  //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  // </div>`

  if ($(alertPlaceholder).is(":empty")) {
    alertPlaceholder.append(wrapper);
  } else {
    //If the event have been saved in less than 3 seconds, then the previous setTimeout will be deleted
    //so the new alert has its own 3 seconds.
    clearTimeout(timer);
    $(alertPlaceholder).empty();
    console.log("Emptied");
    alertPlaceholder.append(wrapper);
  }
};

// Handle navigation menu button press
$(".menu-btn").on("click", () => {
  console.log("🍔");
  $(".nav-container").toggleClass("nav-visible");
  $(".menu-btn").toggleClass("is-active");
  $(".nav-li").on("click", function () {
    $(".nav-container").removeClass("nav-visible");
    $(".menu-btn").removeClass("is-active");
  });
});

// Handle show hidden products button press
$(".show-products").on("click", function () {
  // if($(this).hasClass('show')){
  //     $(this).text('Mostrar más');
  // }else{
  //     $(this).text('Mostrar menos');
  // }
  $(this).toggleClass("show");
  $(".hidden-products").toggleClass("show");
});

$(document).ready(() => {
  const currentYear = new Date().getFullYear();
  $("#year").text(currentYear);
  console.log(currentYear);
  positionProjects();
  $(".project-office").hide();
  $(".project-living").hide();
  $(".project-bath").hide();
  $(".project-closet").hide();
  const removeActiveProjects = () => {
    $(".project-button").removeClass("active");
    $(".project-section-indicator").removeClass(
      "first second third fourth fifth"
    );
  };

  const removeActiveRenders = () => {
    $(".btn-render").removeClass("active");
  };

  // KITCHEN PROJECTS
  $("#btn-projects-1").on("click", function () {
    if (!$(this).hasClass("active")) {
      removeActiveProjects();
      $(".project-section-indicator").addClass("first");
      $("#btn-projects-1").addClass("active");
      $(".project-kitchen").removeClass(
        "animate__fadeIn animate__animated animate__slow"
      );
      $(".project-living").hide();
      $(".project-bath").hide();
      $(".project-office").hide();
      $(".project-closet").hide();
      $(".project-kitchen").show();
      $(".project-kitchen").addClass(
        "animate__fadeIn animate__animated animate__slow"
      );
    }
  });

  // OFFICE PROJECTS
  $("#btn-projects-2").on("click", function () {
    console.log("office section");
    if (!$(this).hasClass("active")) {
      removeActiveProjects();
      $(".project-section-indicator").addClass("second");
      $("#btn-projects-2").addClass("active");
      $(".project-office").removeClass(
        "animate__fadeIn animate__animated animate__slow"
      );
      $(".project-bath").hide();
      $(".project-kitchen").hide();
      $(".project-living").hide();
      $(".project-closet").hide();
      $(".project-office").show();
      $(".project-office").addClass(
        "animate__fadeIn animate__animated animate__slow"
      );
    }
  });
  // LIVING ROOM PROJECTS
  $("#btn-projects-3").on("click", function () {
    if (!$(this).hasClass("active")) {
      removeActiveProjects();
      $(".project-section-indicator").addClass("third");
      $("#btn-projects-3").addClass("active");
      $(".project-living").removeClass(
        "animate__fadeIn animate__animated animate__slow"
      );
      $(".project-kitchen").hide();
      $(".project-bath").hide();
      $(".project-office").hide();
      $(".project-closet").hide();
      $(".project-living").show();
      $(".project-living").addClass(
        "animate__fadeIn animate__animated animate__slow"
      );
    }
  });

  // BATHROOM PROJECTS
  $("#btn-projects-4").on("click", function () {
    if (!$(this).hasClass("active")) {
      removeActiveProjects();
      $(".project-section-indicator").addClass("fourth");
      $("#btn-projects-4").addClass("active");
      $(".project-bath").removeClass(
        "animate__fadeIn animate__animated animate__slow"
      );
      $(".project-kitchen").hide();
      $(".project-office").hide();
      $(".project-living").hide();
      $(".project-bath").hide();
      $(".project-closet").show();
      $(".project-closet").addClass(
        "animate__fadeIn animate__animated animate__slow"
      );
    }
  });

  $("#btn-projects-5").on("click", function () {
    if (!$(this).hasClass("active")) {
      removeActiveProjects();
      $(".project-section-indicator").addClass("fifth");
      $("#btn-projects-5").addClass("active");
      $(".project-bath").removeClass(
        "animate__fadeIn animate__animated animate__slow"
      );
      $(".project-kitchen").hide();
      $(".project-office").hide();
      $(".project-living").hide();
      $(".project-closet").hide();
      $(".project-bath").show();
      $(".project-bath").addClass(
        "animate__fadeIn animate__animated animate__slow"
      );
    }
  });

  // Click in get button for each product

  function checkName(e) {
    var c = this.selectionStart,
      r = /[^a-z ]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
    console.log(e.which);
  }

  function checkPhone(e) {
    var c = this.selectionStart,
      r = /[^+0-9 -]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
    console.log(e.which);
  }

  function checkEmail(e) {
    var c = this.selectionStart,
      r = /[^a-z0-9.@_]/gi,
      v = $(this).val();
    if (r.test(v)) {
      $(this).val(v.replace(r, ""));
      c--;
    }
    this.setSelectionRange(c, c);
    console.log(e.which);
  }

  $("#contact-input-1").on("input", checkName);

  $("#contact-input-2").on("input", checkName);

  $("#contact-input-3").on("input", checkPhone);

  $("#contact-input-4").on("input", checkEmail);

  // CONTACT MODAL FOR PRODUCTS
  $("#formInfoName").on("input", checkName);

  $("#formInfoPhone").on("input", checkPhone);

  $("#formInfoEmail").on("input", checkEmail);
});
