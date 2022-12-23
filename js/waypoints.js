let width = screen.width;
const project1 = $('.project-1');
const project2 = $('.project-2');
const project3 = $('.project-3');
const project4 = $('.project-4');
const project5 = $('.project-5');



function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = $(window)
	var viewport_top = $window.scrollTop()
  // console.log('--------------------')
	// console.log("🚀 ~ file: waypoints.js:13 ~ isOnScreen ~ viewport_top", viewport_top)
	var viewport_height = window.outerHeight;
	var viewport_bottom = viewport_top + viewport_height
	// console.log("🚀 ~ file: waypoints.js:17 ~ isOnScreen ~ viewport_bottom", viewport_bottom)
	var $elem = $(elem)
	var top = $elem.offset().top
	// console.log("🚀 ~ file: waypoints.js:19 ~ isOnScreen ~ top", top)
	var height = $elem.height()
	var bottom = top + height
  // console.log("🚀 ~ file: waypoints.js:22 ~ isOnScreen ~ bottom", bottom)

  let topMayor, bottomMenor;
  if(top>viewport_top){
     topMayor = '✅'
  }else{
     topMayor = '❌';
  }

  if(bottom<viewport_bottom){
     bottomMenor = '✅'
  }else{
     bottomMenor = '❌';
  }
  // console.log('TopMayor: ',topMayor);
  // console.log('BottomMenor: ' , bottomMenor);
  // console.log('--------------------')
  

	return (top >= viewport_top && top < viewport_bottom) 
  &&
	(bottom > viewport_top && bottom <= viewport_bottom) 
	// (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

$(document).ready(()=>{


  const onScroll = (elem) => {
    $('.nav-container').removeClass('nav-visible');
    $('.menu-btn').removeClass('is-active');
    if( isOnScreen( $( '.project-1' ) ) ) { /* Pass element id/class you want to check */
    
      $(project1).addClass('colored');
 		}else{
      $(project1).removeClass('colored')
    }

    if( isOnScreen( $( '.project-2' ) ) ) { /* Pass element id/class you want to check */
    
      $(project2).addClass('colored');
 		}else{
      $(project2).removeClass('colored')
    }

    if( isOnScreen( $( '.project-3' ) ) ) { /* Pass element id/class you want to check */
    
      $(project3).addClass('colored');
 		}else{
      $(project3).removeClass('colored')
    }

    if( isOnScreen( $( '.project-4' ) ) ) { /* Pass element id/class you want to check */
    
      $(project4).addClass('colored');
 		}else{
      $(project4).removeClass('colored')
    }

    if( isOnScreen( $( '.project-4' ) ) ) { /* Pass element id/class you want to check */
    
      $(project5).addClass('colored');
 		}else{
      $(project5).removeClass('colored')
    }
  }
  $(window).on('resize scroll', onScroll);
  $(window).on('touchmove', onScroll); // for mobile
})

// ABOUT US TEXT
const aboutSection = $('#section-about');
const aboutText = $('#about-text');
var waypointAbout = new Waypoint({
    element: aboutSection,
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      // $(aboutText).addClass('animate__backInRight');
      width < 780 ? $(aboutText).addClass('animate__fadeInUp animate__animated') : $(aboutText).addClass('animate__fadeInLeft animate__animated');


    },
    offset: width < 780 ? '58%' : '50%'
    
  })


// PROJECTS
const projectsSection = $('.section-projects');
let projectsAnimation = $('.project');
var waypointProjects = new Waypoint({
    element: projectsSection,
    handler: function(direction) {
      if(width > 1024){
        setTimeout(()=> {
          $(projectsAnimation[4]).css('opacity',1);
          $(projectsAnimation[4]).addClass('animate__fadeInRight');
          setTimeout(()=> {
            $(projectsAnimation[3]).css('opacity',1);
            $(projectsAnimation[3]).addClass('animate__fadeInRight');
            setTimeout(()=> {
                $(projectsAnimation[2]).css('opacity',1);
                $(projectsAnimation[2]).addClass('animate__fadeInRight');
                setTimeout(()=> {
                    $(projectsAnimation[1]).css('opacity',1);
                    $(projectsAnimation[1]).addClass('animate__fadeInRight');
                    setTimeout(()=> {
                        $(projectsAnimation[0]).css('opacity',1);
                        $(projectsAnimation[0]).addClass('animate__fadeInRight');
                      },150);
                  },100);
              },50);
          },0);
        },0);
      }else{
        $('.projects-container').addClass('animate__animated animate__fadeInRight');
        $(project1).css('opacity',1);
        $(project2).css('opacity',1);
        $(project3).css('opacity',1);
        $(project4).css('opacity',1);
        $(project5).css('opacity',1);
      }
      
      console.log('scrolled to projects');
    //   $('.project').addClass('animate__backInRight');
    },
    offset: 800
  })


// RENDERS
const rendersSection = $('.section-renders');
const renderList = $('.render');
var waypointRenders = new Waypoint({
    element: rendersSection,
    handler: function(direction) {
        console.log('scrolled to renders');
      $(renderList).each(function(i,obj){
        $(this).css('opacity',1);
        $(this).addClass('animate__zoomIn');
      })
    },
    offset: 700
    
  })

// PRODUCTS
const productOne = $('#product-1');
const productTwo = $('#product-2');
const productThree = $('#product-3');
const productsSection = $('.section-products');
var waypointProducts = new Waypoint({
  element: productsSection,
  handler: function(direction){
    console.log('scrolled to products');
    $(productOne).css('opacity',1);
    $(productOne).addClass('animate__fadeInRight');

    $(productTwo).css('opacity',1);
    $(productTwo).addClass('animate__fadeInLeft');

    $(productThree).css('opacity',1);
    $(productThree).addClass('animate__fadeInRight');

    $('.product').css('opacity',1);
  },
  offset: 600
})
// var waypointProducts = new Waypoint({
//     element: productOne,
//     handler: function(direction) {
//         console.log('scrolled to product one');
//         
//     },
//     offset: 700
    
//   })


//   var waypointProducts = new Waypoint({
//     element: productTwo,
//     handler: function(direction) {
//         console.log('scrolled to product one');
//         
//     },
//     offset: 700
    
//   })

// var waypointProducts = new Waypoint({
//     element: productThree,
//     handler: function(direction) {
//         console.log('scrolled to product Three');
//         
//     },
//     offset: 700
    
//   })

// const productsSection = $('.section-products');
// const productsList = $('.product');
// const productOne = productsList;
// var waypointProduct2 = new Waypoint({
//     element: productOne,
//     handler: function(direction) {
//         console.log('scrolled to products');
//             $(productsList[0]).show();
//             $(productsList[0]).addClass('animate__fadeInRight');
//             console.log(4);
//     },
//     offset: 200
    
//   })

//   var waypointProduct3 = new Waypoint({
//     element: productsList[1],
//     handler: function(direction) {
//         console.log('scrolled to products');
//             $(productsList[1]).show();
//             $(productsList[1]).addClass('animate__fadeInLeft');
//             console.log(4);
//     },
//     offset: 200
    
//   })

//   var waypointProduct3 = new Waypoint({
//     element: productsList[2],
//     handler: function(direction) {
//         console.log('scrolled to products');
//             $(productsList[2]).show();
//             $(productsList[2]).addClass('animate__fadeInRight');
//             console.log(4);
//     },
//     offset: 200
    
//   })