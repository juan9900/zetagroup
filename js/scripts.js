//Projects showcase
const projects = $('.project');
console.log(projects);

const projects2 = document.querySelectorAll('.project');



let prevProject = projects.length - 1;
const disableProjects = (current) => {
    console.log('current',current,'----------------------------------');
    var zindex = 9999;
    console.log('prevProject',prevProject);
    $('.project').each(function(i,obj){
        console.log('index',i);
        
        console.log('currentIndex',zindex);
        $(this).removeClass('project-active');
        if(i != current){
            $(this).css('z-index',`${zindex}`);
        }
        console.log('length',Math.round(projects.length/2))
        
        if(current >= Math.round((projects.length/2))){
            console.log('mayor');
            zindex+=1;
        }else{
            zindex-=1;
        }
        

    })
    prevProject = current;
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