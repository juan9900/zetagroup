AOS.init();

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

const optionsList = $('.option');

selected.on('click', () => {
    $(optionsContainer).toggleClass('active');
})

$(optionsList).each((i,obj) => {
    $(obj).on('click',()=> {
        $(selected).text($(obj).text());
        $(selected).removeClass('select-placeholder');
        $(optionsContainer).removeClass('active');
    })

})


$(document).ready(()=>{
    positionProjects();
})


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