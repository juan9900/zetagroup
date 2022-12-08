AOS.init();
const alertPlaceholder = $('#liveAlertPlaceholder')
var timerCloseAlert;

// $('.product').css('opacity',0);
$('.render').css('opacity',0);

const projects = $('.project');

const projects2 = document.querySelectorAll('.project');



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
    var right = 30;
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
        right-=10;
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
                $('.contact-form').addClass('d-none');
                $('#form-submited-text').removeClass('d-none');
            },
            error: (err) => console.log(err)
        });
    }else{
        alert('Por favor rellena todos los campos','fill');
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
