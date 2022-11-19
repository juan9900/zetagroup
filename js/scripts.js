//Projects showcase
const projects = $('.project');
console.log(projects);

const projects2 = document.querySelectorAll('.project');



let prevProject = projects.length - 1;
const disableProjects = (current) => {
    console.log(current);
    var zindex = 999;
    var prevI = 999;
    $('.project').each(function(i,obj){
        console.log('index',i);
        console.log('prevI',prevI);
        $(this).removeClass('project-active');
        $(this).css('z-index',`${zindex}`);
        if(prevProject > i){
            zindex+=1;
        }else{
            zindex-=1;
        }
        prevProject = current;
    })
}

const positionProjects = () => {
    current = projects.length - 1;
    console.log(`current is ${current}`);
    var right = 30;
    var zindex = 990;
    $('.project').each(function(i,obj){
        console.log(this);
        
        $(this).css({'right': `${right}%`,'z-index':`${zindex}`});
        $(this).on('click', () => {
            current = i;
            disableProjects(current);
            $(this).addClass('project-active');
            $(this).css('z-index','99999');
        })
        right-=10;
        zindex += 1;
    })
}


positionProjects();