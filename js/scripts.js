
AOS.init();

const alertPlaceholder = $('#liveAlertPlaceholder')
var timerCloseAlert;

// $('.product').css('opacity',0);
$('.render').css('opacity',0);

const projects = $('.project');

const projects2 = document.querySelectorAll('.project');

const projectsButtons = $('.project-button');

const projectsImages = $('.project-img');

let prevProject = projects.length - 1;

const disableProjects = (current) => {
    var zindex = 100;
    $('.project').each(function(i,obj){
        
        $(this).removeClass('project-active');
        if(i+1 != current){
            $(this).css('z-index',`${zindex}`);
        }
        
        if(current >= Math.round((projects.length/2))){
            zindex+=1;
        }else{
            zindex-=1;
        }
        

    })
    prevProject = current;
}

const positionProjects = () => {
    
    current = projects.length - 1;
    var right = -1;
    var zindex = 190;
    $('.project').each(function(i,obj){
        $(this).css({'right': `${right}%`,'z-index':`${zindex}`});
        $(this).on('mouseover', () => {
            current = i;
            console.log(current);
            disableProjects(current);
            $(this).addClass('project-active');
            $(this).css('z-index','1000');
        })
        $(this).on('mouseleave', () => {
            $(this).removeClass('project-active');
        })
        right+=6.8;
        zindex += 1;
    })
}


// PRODUCTS SECTION

const checkEmailSyntax = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const checkPhoneSyntax = (phone) => {
    var re = /^(0)?(414|416|424|412)[0-9]{7}$/;
    return re.test(String(phone).toLowerCase());
}

$('#btn-submit-form-product').on('click', () => {
    $("#product-form").submit();
})

$('#product-form').on('submit',function(e){
    const infoFullName = $('#formInfoName').val();
    console.log("🚀 ~ file: scripts.js:70 ~ $ ~ infoFullName", infoFullName)
    const infoPhoneNumber = $('#formInfoPhone').val();
    console.log("🚀 ~ file: scripts.js:72 ~ $ ~ infoPhoneNumber", infoPhoneNumber)
    const infoEmail = $('#formInfoEmail').val();
    console.log("🚀 ~ file: scripts.js:74 ~ $ ~ infoEmail", infoEmail)
    const infoProduct = $('#formInfoProduct').val();
    console.log("🚀 ~ file: scripts.js:76 ~ $ ~ infoProduct", infoProduct)
    const infoMessage = $("#formInfoMsg").val();
    console.log("🚀 ~ file: scripts.js:78 ~ $ ~ infoMessage", infoMessage)

    e.preventDefault();

    
    if(infoFullName.trim() != '' && infoPhoneNumber.trim() != '' && infoEmail.trim() != '' && infoProduct.trim() != '' && infoMessage.trim() != ''){
        if (!checkEmailSyntax(infoEmail) || !checkPhoneSyntax(infoPhoneNumber)) {
            let message;
        if (window.location.hash == "#es") {
            message = 'Por favor verifica los datos ingresados.';
        }else{
            message = 'Please check the data entered.'; 
        }
        alert(message,'fill','product');
        timer = setTimeout(() => {
            $('#liveAlertPlaceholderProduct').fadeOut(500, function(){
                $(this).empty().show();
            })
        },4000)
        return
        }
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/juanluislauretta@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                'Mensaje':infoMessage,
                'Nombre':infoFullName,
                'Número telefónico':infoPhoneNumber,
                'E-mail':infoEmail,
                'Producto':infoProduct
            },
            success: (data) => {
                console.log('success');
                $("#modalGetProduct").modal("hide");
            },
            error: (err) => console.log(err)
        });
    }else{
        console.log('full');
        let message;
        if (window.location.hash == "#es") {
            message = 'Por favor rellena todos los campos';
        }else{
            message = 'Please fill in all fields'
        }
        alert(message,'fill','product');
        // timer = setTimeout(() => {
        //     $('#liveAlertPlaceholderProduct').fadeOut(500, function(){
        //         $(this).empty().show();
        //     })
        // },4000)
    }
    
    
})






// CONTACT SECTION

const selected = $('.selected');
const optionsContainer = $('.options-container');
const projectType = $('#project-type');

const optionsList = $('.option');

selected.on('click', () => {
    $(optionsContainer).toggleClass('active');
})

$(optionsList).each((i,obj) => {
    $(obj).on('click',()=> {
        $(selected).text($(obj).text());
        $(projectType).val($(obj).text().trim());
        console.log($(projectType).val());
        $(selected).removeClass('select-placeholder');
        $(optionsContainer).removeClass('active');
    })

})



// Handle form submit
$('.contact-form').on('submit',(e)=>{
    const firstName = $('#contact-input-1').val();
    const lastName = $('#contact-input-2').val();
    const phoneNumber = $('#contact-input-3').val();
    const email = $('#contact-input-4').val();
    const projectType = $('#project-type').val();
    const address = $('#contact-input-6').val();

    e.preventDefault();

    if(firstName.trim() != '' && lastName.trim() != '' && phoneNumber.trim() != '' && email.trim() != '' && projectType.trim() != '' && address.trim() != ''){
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/juanluislauretta@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                firstName,
                lastName,
                phoneNumber,
                email,
                projectType,
                address
            },
            success: (data) => {
                console.log(data);
                $('#form-container').addClass('d-none');
                $('#form-success-container').removeClass('d-none');

            },
            error: (err) => console.log(err)
        });
    }else{
        let message;
        if (window.location.hash == "#es") {
            message = 'Por favor rellena todos los campos';
        }else{
            message = 'Please fill in all fields'
        }
        alert(message,'fill','contact');
        timer = setTimeout(() => {
            $('#liveAlertPlaceholder').fadeOut(500, function(){
                $(this).empty().show();
            })
        },4000)
    }
    
    
})

const alert = (message, type, form) => {
    let alertPlaceholder;
    if(form === 'product'){
        alertPlaceholder = $("#liveAlertPlaceholderProduct");
    }else{
        alertPlaceholder = $("#liveAlertPlaceholder");
    }

    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible mb-0" role="alert" id="alert">`,
        `   <div><p class="m-0">${message}</p></div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

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
    
    
    
    if($(alertPlaceholder).is(':empty')){
        alertPlaceholder.append(wrapper)
    }else{
        //If the event have been saved in less than 3 seconds, then the previous setTimeout will be deleted
        //so the new alert has its own 3 seconds.
        clearTimeout(timer);
        $(alertPlaceholder).empty();
        console.log('Emptied');
        alertPlaceholder.append(wrapper);
       
    }

}




// Handle navigation menu button press
$('.menu-btn').on('click',() => {
    console.log('🍔')
    $('.nav-container').toggleClass('nav-visible');
    $('.menu-btn').toggleClass('is-active');
    $('.nav-li').on('click',function(){
        $('.nav-container').removeClass('nav-visible');
        $('.menu-btn').removeClass('is-active');
    })
})


// Handle show hidden products button press
$('.show-products').on('click',function(){
    // if($(this).hasClass('show')){
    //     $(this).text('Mostrar más');
    // }else{
    //     $(this).text('Mostrar menos');
    // }
    $(this).toggleClass('show');
    $('.hidden-products').toggleClass('show');
    
})





$(document).ready(()=>{
    positionProjects();
    $('.project-office').hide();
    $('.project-living').hide();
    $('.project-bath').hide();
    const removeActiveProjects = () => {
        $('.project-button').removeClass('active');
        $('.project-section-indicator').removeClass('first second third fourth');
    }

    const removeActiveRenders = () => {
        $('.btn-render').removeClass('active');
    }

    // KITCHEN PROJECTS
    $('#btn-projects-1').on('click', function(){
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $('.project-section-indicator').addClass('first');
            $("#btn-projects-1").addClass("active");
            $('.project-kitchen').removeClass('animate__fadeIn animate__animated animate__slow')
            $('.project-living').hide();
            $('.project-bath').hide();
            $('.project-office').hide();
            $('.project-kitchen').show();
            $('.project-kitchen').addClass('animate__fadeIn animate__animated animate__slow')

        }
        
    })
    
    // OFFICE PROJECTS
    $('#btn-projects-2').on('click', function() {
        console.log('office section');
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $('.project-section-indicator').addClass('second');
            $("#btn-projects-2").addClass("active");
            $('.project-office').removeClass('animate__fadeIn animate__animated animate__slow')
            $('.project-bath').hide();
            $('.project-kitchen').hide();
            $('.project-living').hide();
            $('.project-office').show();
            $('.project-office').addClass('animate__fadeIn animate__animated animate__slow')
            
        }
        
    })
    // LIVING ROOM PROJECTS
    $('#btn-projects-3').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $('.project-section-indicator').addClass('third');
            $("#btn-projects-3").addClass("active");
            $('.project-living').removeClass('animate__fadeIn animate__animated animate__slow')
            $('.project-kitchen').hide();
            $('.project-bath').hide();
            $('.project-office').hide();
            $('.project-living').show();
            $('.project-living').addClass('animate__fadeIn animate__animated animate__slow')

        }
    })

    // BATHROOM PROJECTS
    $('#btn-projects-4').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $('.project-section-indicator').addClass('fourth');
            $("#btn-projects-4").addClass("active");
            $('.project-bath').removeClass('animate__fadeIn animate__animated animate__slow')
            $('.project-kitchen').hide();
            $('.project-office').hide();
            $(".project-living").hide();
            $('.project-bath').show();
            $('.project-bath').addClass('animate__fadeIn animate__animated animate__slow')

        }
    })

    $('#btn-render-1').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.circle-container').fadeOut();
            $('.section-indicator').removeClass('second third fourth')
            $('.section-indicator').addClass('first');
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
            });
            $('.color').fadeIn(); 
            $('.circle-container').fadeIn();

        }
    });

    $('#btn-render-2').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.circle-container').fadeOut();
            $('.section-indicator').removeClass('first third fourth')
            $('.section-indicator').addClass('second');
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
            });
            $('.color').fadeIn(); 
            $('.circle-container').fadeIn();

        }
    });

    $('#btn-render-3').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.circle-container').fadeOut();
            $('.section-indicator').removeClass('first second fourth')
            $(".section-indicator").addClass("third");
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
            });
            $('.color').fadeIn(); 
            $('.circle-container').fadeIn();
        }
    });

    $('#btn-render-4').on('click', function () {
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.circle-container').fadeOut();
            $('.section-indicator').removeClass('first second third')
            $(".section-indicator").addClass("fourth");
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render1.jpg`);
                })
            });
            $('.color').fadeIn(); 
            $('.circle-container').fadeIn();
        }
    })


    // Click in get button for each product
    $('.btn-get-product').each(function(index){
        $(this).on('click',function(){
            const carouselIndicators = $('.modal-indicators');
            const myCarouselElement = $('#carousel-more-product');
            const carouselProductsImages = $('.more-product-inner');

            // Get the product name as it is
            const productName = $(this).closest('.product-info').find('h3').text();
            const imageName = $(this).attr('data-product');
            // Separate the product name words by - to use it in images src
            const product = imageName.replace(new RegExp(' ','g'),'-');
            
            //Set the carousel back to position 0 when reopening the modal
            const carousel = new bootstrap.Carousel(myCarouselElement).to(0);
            $(carouselIndicators).empty();
            const imagesQty = parseInt($(this).attr('data-bs-images'));

            // Take the value of data-bs-images in each product, the value must be an integer
            // this will create X number of buttons for each image of the product (data-bs-images)
            for(let i = 0; i< imagesQty; i++){
                const newButton = `<button class="${i===0 ? 'active' : '' }" aria-current="${i===0?true:false}" type="button" data-bs-target="#carousel-more-product" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`;
                
                $(carouselIndicators).append(newButton);

            }

            //Generate images
            $(carouselProductsImages).empty();
            for(let i = 0; i<imagesQty; i++){
                $(carouselProductsImages).append(`
                <div class="carousel-item ${i === 0 ? 'active' : ''}">
                    <img src="/assets/img/products/${product}-0${i+1}.png" class="d-block more-product-img" alt="...">
                </div>`)
            }
            // $('.more-product-img').each(function(index, element){
            //     // Image's name must match the data-bs-product attribute
            //     // ex: data-bs-product: Cilindro superficial / image name: cilindro-superficial-01
            //     $(this).attr('src',`/assets/img/products/${product}-0${index+1}.png`);
            // })
            $('#formInfoProduct').val( productName);
            
        })
    })

    function checkName(e){
        var c = this.selectionStart,
            r = /[^a-z ]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    } 

    function checkPhone(e){
        var c = this.selectionStart,
        r = /[^+0-9 -]/gi,
        v = $(this).val();
    if(r.test(v)) {
        $(this).val(v.replace(r, ''));
        c--;
    }
    this.setSelectionRange(c, c);
    console.log(e.which);
    }

    function checkEmail(e){
        var c = this.selectionStart,
            r = /[^a-z0-9.@_]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    }

    $('#contact-input-1').on('input',checkName);

    $('#contact-input-2').on('input',checkName);

    $('#contact-input-3').on('input',checkPhone);

    $('#contact-input-4').on('input',checkEmail);


    // CONTACT MODAL FOR PRODUCTS
    $('#formInfoName').on('input', checkName);


    $('#formInfoPhone').on('input', checkPhone);

    $('#formInfoEmail').on('input', checkEmail);
    
})
