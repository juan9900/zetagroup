

// ABOUT US TEXT
const aboutText = $('#about-text');
var waypointAbout = new Waypoint({
    element: aboutText,
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      $(aboutText).addClass('animate__backInRight');
    },
    offset: 800
    
  })


// PROJECTS
const projectsSection = $('.section-projects');
let projectsAnimation = $('.project');
var waypointProjects = new Waypoint({
    element: projectsSection,
    handler: function(direction) {
      setTimeout(()=> {
        $(projectsAnimation[3]).css('opacity',1);
        $(projectsAnimation[3]).addClass('animate__fadeInRight');
        setTimeout(()=> {
            $(projectsAnimation[2]).css('opacity',1);
            $(projectsAnimation[2]).addClass('animate__fadeInRight');
            console.log(2);
            setTimeout(()=> {
                $(projectsAnimation[1]).css('opacity',1);
                $(projectsAnimation[1]).addClass('animate__fadeInRight');
                console.log(3);
                setTimeout(()=> {
                    $(projectsAnimation[0]).css('opacity',1);
                    $(projectsAnimation[0]).addClass('animate__fadeInRight');
                    console.log(4);
                  },150);
              },100);
          },50);
      },0);
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
    offset: 400
    
  })

// PRODUCTS
const productOne = $('#product-1');
var waypointProducts = new Waypoint({
    element: productOne,
    handler: function(direction) {
        console.log('scrolled to product one');
        $(productOne).css('opacity',1);
        $(productOne).addClass('animate__fadeInRight');
    },
    offset: 700
    
  })

  const productTwo = $('#product-2');

  var waypointProducts = new Waypoint({
    element: productTwo,
    handler: function(direction) {
        console.log('scrolled to product one');
        $(productTwo).css('opacity',1);
        $(productTwo).addClass('animate__fadeInLeft');
    },
    offset: 700
    
  })

  const productThree = $('#product-3');
var waypointProducts = new Waypoint({
    element: productThree,
    handler: function(direction) {
        console.log('scrolled to product Three');
        $(productThree).css('opacity',1);
        $(productThree).addClass('animate__fadeInRight');
    },
    offset: 700
    
  })

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