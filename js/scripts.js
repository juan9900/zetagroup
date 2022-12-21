
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
        if(i != current){
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
    var right = 20;
    var zindex = 190;
    $('.project').each(function(i,obj){
        $(this).css({'right': `${right}%`,'z-index':`${zindex}`});
        $(this).on('mouseover', () => {
            current = i;
            disableProjects(current);
            $(this).addClass('project-active');
            $(this).css('z-index','1000');
        })
        $(this).on('mouseleave', () => {
            $(this).removeClass('project-active');
        })
        right-=6.8;
        zindex += 1;
    })
}






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
    console.log("🚀 ~ file: scripts.js:106 ~ $ ~ firstName", firstName)
    const lastName = $('#contact-input-2').val();
    console.log("🚀 ~ file: scripts.js:108 ~ $ ~ lastName", lastName)
    const phoneNumber = $('#contact-input-3').val();
    console.log("🚀 ~ file: scripts.js:110 ~ $ ~ phoneNumber", phoneNumber)
    const email = $('#contact-input-4').val();
    console.log("🚀 ~ file: scripts.js:112 ~ $ ~ email", email)
    const projectType = $('#project-type').val();
    console.log("🚀 ~ file: scripts.js:114 ~ $ ~ projectType", projectType)
    const address = $('#contact-input-6').val();
    console.log("🚀 ~ file: scripts.js:116 ~ $ ~ address", address)

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
        alert(message,'fill');
        timer = setTimeout(() => {
            $('#liveAlertPlaceholder').fadeOut(500, function(){
                $(this).empty().show();
            })
        },4000)
    }
    
    
})

const alert = (message, type) => {


    
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
    
    
    
    if($('#liveAlertPlaceholder').is(':empty')){
        alertPlaceholder.append(wrapper)
    }else{
        //If the event have been saved in less than 3 seconds, then the previous setTimeout will be deleted
        //so the new alert has its own 3 seconds.
        clearTimeout(timer);
        $('#liveAlertPlaceholder').empty();
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
    
})





$(document).ready(()=>{
    positionProjects();
    $('.project-office').hide();
    $('.project-living').hide();
    $('.project-bath').hide();
    const removeActiveProjects = () => {
        $('.project-button').each(function () {
            $(this).removeClass('active');
        })
    }

    const removeActiveRenders = () => {
        $('.btn-render').removeClass('active');
    }

    // KITCHEN PROJECTS
    $('#btn-projects-1').on('click', function(){
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $("#btn-projects-1").addClass("active");
            $('.project-kitchen').removeClass('animate__fadeIn animate__animated')
            $('.project-living').hide();
            $('.project-bath').hide();
            $('.project-office').hide();
            $('.project-kitchen').show();
            $('.project-kitchen').addClass('animate__fadeIn animate__animated')

        }
        
    })
    
    // OFFICE PROJECTS
    $('#btn-projects-2').on('click', function() {
        console.log('office section');
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $("#btn-projects-2").addClass("active");
            $('.project-office').removeClass('animate__fadeIn animate__animated')
            $('.project-bath').hide();
            $('.project-kitchen').hide();
            $('.project-living').hide();
            $('.project-office').show();
            $('.project-office').addClass('animate__fadeIn animate__animated')
            
        }
        
    })
    // LIVING ROOM PROJECTS
    $('#btn-projects-3').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $("#btn-projects-3").addClass("active");
            $('.project-living').removeClass('animate__fadeIn animate__animated')
            $('.project-kitchen').hide();
            $('.project-bath').hide();
            $('.project-office').hide();
            $('.project-living').show();
            $('.project-living').addClass('animate__fadeIn animate__animated')

        }
    })

    // BATHROOM PROJECTS
    $('#btn-projects-4').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveProjects();
            $("#btn-projects-4").addClass("active");
            $('.project-bath').removeClass('animate__fadeIn animate__animated')
            $('.project-kitchen').hide();
            $('.project-office').hide();
            $(".project-living").hide();
            $('.project-bath').show();
            $('.project-bath').addClass('animate__fadeIn animate__animated')

        }
    })

    $('#btn-render-1').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.section-indicator').removeClass('second third fourth')
            $('.section-indicator').addClass('first');
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render3.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render3.jpg`);
                })
            });
            $('.color').fadeIn(); 
        }
    });

    $('#btn-render-2').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.section-indicator').removeClass('first third fourth')
            $('.section-indicator').addClass('second');
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render5.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render5.jpg`);
                })
            });
            $('.color').fadeIn(); 

        }
    });

    $('#btn-render-3').on('click', function (){
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
            $('.section-indicator').removeClass('first second fourth')
            $(".section-indicator").addClass("third");
            $('.color').fadeOut(function(){
                $('.color').each(function(index){
                    $(this).attr('src',`/assets/img/render4.jpg`);
                })
                $('.gray').each(function(index){
                    $(this).attr('src',`/assets/img/render4.jpg`);
                })
            });
            $('.color').fadeIn(); 
        }
    });

    $('#btn-render-4').on('click', function () {
        if(!$(this).hasClass('active')){
            removeActiveRenders();
            $(this).addClass('active');
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
        }
    })



    $('#contact-input-1').on('input',function(e){
        var c = this.selectionStart,
            r = /[^a-z ]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    })

    $('#contact-input-2').on('input',function(e){
        var c = this.selectionStart,
            r = /[^a-z ]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    })

    $('#contact-input-3').on('input',function(e){
      
        var c = this.selectionStart,
            r = /[^+0-9 -]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    })

    $('#contact-input-4').on('input',function(e){
        // var x = e.which || e.keycode;
        // if(x >= 48 && x <= 57 || x === 107 || x === 8 || x === 16 || x === 61 || x === 32 || x === 173 ){
        //     console.log($('#contact-input-3').val());
        //     if($('#contact-input-3').val().includes('+') && (x=== 107 || x === 61)){
        //         return false;
        //     }
        //     return true;
        // }else{
        //     return false;
        // }
        var c = this.selectionStart,
            r = /[^a-z0-9.@_]/gi,
            v = $(this).val();
        if(r.test(v)) {
            $(this).val(v.replace(r, ''));
            c--;
        }
        this.setSelectionRange(c, c);
        console.log(e.which);
    })
})
