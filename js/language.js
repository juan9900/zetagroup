// Create a function to change the hash 
// value of the page and reload it
if(location.hash === ""){
    location.hash = '#es';
    location.reload();
}

if(location.hash === '#eng'){
    $('#btn-es').removeClass('active');
    $('#btn-en').addClass('active');
}else{
    $('#btn-es').addClass('active');
    $('#btn-en').removeClass('active');
}

$(document).ready(()=>{
    
    $('#btn-es').on('click',function(){
        $(this).toggleClass('active');
        $('#btn-en').toggleClass('active');
        changeLanguage('es')
    })

    $('#btn-en').on('click',function(){
        $(this).toggleClass('active');
        $('#btn-es').toggleClass('active');
        changeLanguage('eng');
    })
})


function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
      
    // Define the language reload anchors
    var language = {
      eng: {
        welcome:
          "Welcome to the GeeksforGeeks " +
          "Portal! You can choose any " +
          "language using the buttons above!",
        section1Title: 'About us',
        section2Title: 'Projects',
        section3Title: 'Renders',
        section4Title: 'Products',
        section5Title: 'Steps',
        section6Title: 'Quotation',
        section7Title: 'Contact',
        welcomeSpan1: "Architecture",
        welcomeSpan2: "Design",
        welcomeSpan3: 'Construction',
        section1Text: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        section2Project1Title: 'Office',
        section2Project1Content: 'ENG OFFICE Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project2Title: 'Living Room',
        section2Project2Content: 'ENG LIVING ROOM Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project3Title: 'Living Room',
        section2Project3Content: 'ENG LIVING ROOM Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project4Title: 'Kitchen',
        section2Project4Content: 'ENG KITCHEN Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section3Render1: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render2: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render3: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render4: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render5: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        
        section4Product1Title: 'Lamp',
        section4Product1Content:'ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product2Title: 'Lamp',
        section4Product2Content:'ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product3Title: 'Lamp',
        section4Product3Content:'ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product4Title: 'Lamp',
        section4Product4Content:'ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product5Title: 'Lamp',
        section4Product5Content:'ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product6Title: 'Lamp',
        section4Product6Content:'ENG Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4MoreProducts: 'More products',

        section5Step1:'Initial meeting with the client',
        section5Step2:'Brainstorming',
        section5Step3:'Draft',
        section5Step4:'Project presentation',
        section5Step5:'Project rectification',
        section5Step6:'Contract signing',
        section5Step7:'Project execution',

        section6Input1Placeholder: 'FIRST NAME',
        section6Input2Placeholder: 'LAST NAME',
        section6Input3Placeholder: 'PHONE NUMBER',
        section6Input4Placeholder: 'E-MAIL',
        section6Input5Placeholder: 'PROJECT TYPE',
        section6Input5Option1:'ENG LOREM 1',
        section6Input5Option1: 'ENG LOREM 2',
        section6Input6Placeholder: 'ADDRESS',
        section6Submit: 'SEND',
      },
      es: {
        welcome:
          "¡Bienvenido al portal GeeksforGeeks! " +
          "¡Puedes elegir cualquier idioma usando " +
          "los botones de arriba!",
        section1Title: 'Sobre nosotros',
        section2Title: 'Proyectos',
        section3Title: 'Renders',
        section4Title: 'Productos',
        section5Title: 'Pasos',
        section6Title: 'Cotización',
        section7Title: 'Contacto',
        welcomeSpan1: "Arquitectura",
        welcomeSpan2: "Diseño",
        welcomeSpan3: 'Construcción',
        section1Text: 'ESPA Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        section2Project1Title: 'Oficina',
        section2Project1Content: 'ESPA Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project2Title: 'Sala',
        section2Project2Content: 'ESPA SALA Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project3Title: 'Sala',
        section2Project3Content: 'ESPA SALA Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project4Title: 'Cocina',
        section2Project4Content: 'ESPA COCINA Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section3Render1: 'ESP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos.  ',
        section3Render2: 'ESP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos.  ',
        section3Render3: 'ESP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos.  ',
        section3Render4: 'ESP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos.  ',
        section3Render5: 'ESP Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos.  ',
        
        section4Product1Title: 'Lámpara',
        section4Product1Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product2Title: 'Lámpara',
        section4Product2Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product3Title: 'Lámpara',
        section4Product3Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product4Title: 'Lámpara',
        section4Product4Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product5Title: 'Lámpara',
        section4Product5Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product6Title: 'Lámpara',
        section4Product6Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4MoreProducts: 'Más productos',

        section5Step1:'Reunión inicial con el cliente',
        section5Step2:'Intercambio de ideas',
        section5Step3:'Anteproyecto',
        section5Step4:'Presentación del proyecto',
        section5Step5:'Rectificación del proyecto',
        section5Step6:'Firma del contrato',
        section5Step7:'Ejecución del proyecto',

        section6Input1Placeholder: 'Nombre',
        section6Input2Placeholder: 'Apellido',
        section6Input3Placeholder: 'Número Telefónico',
        section6Input4Placeholder: 'Correo Electrónico',
        section6Input5Placeholder: 'Tipo de proyecto',
        section6Input5Option1:'ESP LOREM 1',
        section6Input5Option1: 'ESP LOREM 2',
        section6Input6Placeholder: 'Dirección',
        section6Submit: 'Enviar',



      }
      
    };
      
    // Check if a hash value exists in the URL
    if (window.location.hash) {
      
      // Set the content of the webpage
      // depending on the hash value
      if (window.location.hash == "#es") {
      } else if (window.location.hash == "#eng") {
        $('.section1Title').text(language.eng.section1Title);
        $('.section2Title').text(language.eng.section2Title);
        $('.section3Title').text(language.eng.section3Title);
        $('.section4Title').text(language.eng.section4Title);
        $('.section5Title').text(language.eng.section5Title);
        $('.section6Title').text(language.eng.section6Title);
        $('.section7Title').text(language.eng.section7Title);

        $('#welcome-span-1').text(language.eng.welcomeSpan1);
        $('#welcome-span-2').text(language.eng.welcomeSpan2);
        $('#welcome-span-3').text(language.eng.welcomeSpan3);

        $('#about-text').text(language.eng.section1Text);

        $('.project-1-title').text(language.eng.section2Project1Title);
        $('.project-1-content').text(language.eng.section2Project1Content);
        $('.project-2-title').text(language.eng.section2Project2Title);
        $('.project-2-content').text(language.eng.section2Project2Content);
        $('.project-3-title').text(language.eng.section2Project3Title);
        $('.project-3-content').text(language.eng.section2Project3Content);
        $('.project-4-title').text(language.eng.section2Project4Title);
        $('.project-4-content').text(language.eng.section2Project4Content);

        $('.render-1-content').text(language.eng.section3Render1);
        $('.render-2-content').text(language.eng.section3Render2);
        $('.render-3-content').text(language.eng.section3Render3);
        $('.render-4-content').text(language.eng.section3Render4);
        $('.render-5-content').text(language.eng.section3Render5);

        $('.product-1-title').text(language.eng.section4Product1Title);
        $('.product-1-content').text(language.eng.section4Product1Content);

        $('.product-2-title').text(language.eng.section4Product2Title);
        $('.product-2-content').text(language.eng.section4Product2Content);

        $('.product-3-title').text(language.eng.section4Product3Title);
        $('.product-3-content').text(language.eng.section4Product3Content);

        $('.2roduct-4-title').text(language.eng.section4Product4Title);
        $('.product-4-content').text(language.eng.section4Product4Content);

        $('.product-5-title').text(language.eng.section4Product5Title);
        $('.product-5-content').text(language.eng.section4Product5Content);

        $('.product-6-title').text(language.eng.section4Product6Title);
        $('.product-6-content').text(language.eng.section4Product6Content);

        $('#btn-more-products').text(language.eng.section4MoreProducts);

        $('#step-1').text(language.eng.section5Step1);
        $('#step-2').text(language.eng.section5Step2);
        $('#step-3').text(language.eng.section5Step3);
        $('#step-4').text(language.eng.section5Step4);
        $('#step-5').text(language.eng.section5Step5);
        $('#step-6').text(language.eng.section5Step6);
        $('#step-7').text(language.eng.section5Step7);

        $('#contact-input-1').attr('placeholder',language.eng.section6Input1Placeholder);

      }
    }