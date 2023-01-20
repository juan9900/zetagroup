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
    const language = {
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
        section1Text1: 'We are a company with almost 10 years of experience, with a multidisciplinary team with extensive knowledge in design and construction, we have the ability to plan, create and execute spaces of comfort.',
        section1Text2: 'In Zeta group we work under an integral service, in which we assist our clients in the whole process, from the conceptualization of the design, the supply of materials to the final furniture of the project; in this way we offer the turnkey modality.',
        section2Project1Title: 'Office',
        section2Project1Content: 'ENG OFFICE Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project2Title: 'Living Room',
        section2Project2Content: 'ENG LIVING ROOM Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project3Title: 'Bathroom',
        section2Project3Content: 'ENG LIVING ROOM Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section2Project4Title: 'Kitchen',
        section2Project4Content: 'ENG KITCHEN Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

        section3Render1: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render2: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render3: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render4: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        section3Render5: 'ENG Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed modi reprehenderit magni architecto, consequuntur ducimus rem unde ad. Iure architecto officia iste est assumenda nobis incidunt rem quas? Voluptates, dignissimos. ',
        
        section4Product1Title: 'Superficial cylinder',
        section4Product1Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product2Title: 'Removable integrated',
        section4Product2Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product3Title: 'Recessed spotlight',
        section4Product3Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product4Title: 'Recessed light',
        section4Product4Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product5Title: 'Recessed square frame',
        section4Product5Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product6Title: 'Recessed square ring',
        section4Product6Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product7Title: 'Integrated removable V2',
        section4Product7Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product8Title: 'Integrated steerable cylinder',
        section4Product8Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product9Title: 'Recessed Light V2',
        section4Product9Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product10Title: 'Multi Spot for embedding',
        section4Product10Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product11Title: 'Mini Spot for outdoor use',
        section4Product11Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',

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
        section6Input5Option2: 'ENG LOREM 2',
        section6Input6Placeholder: 'ADDRESS',
        section6Submit: 'SEND',
        section6Success1: 'Message sent successfully.',
        section6Success2: "You'll soon receive an answer",

        footerDevelopedBy: 'Developed by '
      },
      es: {
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
        section1Text1: 'Somos una empresa que cuenta con casi 10 años de experiencia, con un equipo multidisciplinario de amplios conocimientos en diseño y construcción, tenemos la capacidad de planificar, crear y ejecutar espacios de confort.⁣',
        section1Text2: '⁣En Zeta group trabajamos bajo un servicio integral, en el cual asistimos a nuestros clientes en todo el proceso, desde la conceptualización del diseño, el suministro de los materiales hasta los mobiliarios finales del proyecto; de esta manera ofrecer la modalidad llave en mano.',
        section2Project1Title: 'Oficina',
        section2Project1Content: 'ESPA OFICINA Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',

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
        
        section4Product1Title: 'Cilíndro superficial',
        section4Product1Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product2Title: 'Integrada extraíble',
        section4Product2Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product3Title: 'Spot empotrado',
        section4Product3Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product4Title: 'Lámpara empotrada',
        section4Product4Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product5Title: 'Marco cuadrado empotrado',
        section4Product5Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product6Title: 'Aro cuadrado empotrado',
        section4Product6Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product7Title: 'Integrada extraíble V2',
        section4Product7Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product8Title: 'Cilíndro dirigible integrado',
        section4Product8Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product9Title: 'Lámpara Empotrada V2',
        section4Product9Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product10Title: 'Multispot para empotrar',
        section4Product10Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',
        section4Product11Title: 'Mini Spot para exterior',
        section4Product11Content:'ESP Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti pariatur alias molestias id ',



        section4MoreProducts: 'Más productos',

        section5Step1:'Reunión inicial con el cliente',
        section5Step2:'Intercambio de ideas',
        section5Step3:'Anteproyecto',
        section5Step4:'Presentación del proyecto',
        section5Step5:'Rectificación del proyecto',
        section5Step6:'Firma del contrato',
        section5Step7:'Ejecución del proyecto',

        section6Input1Placeholder: 'NOMBRE ',
        section6Input2Placeholder: 'APELLIDO',
        section6Input3Placeholder: 'NÚMERO TELEFÓNICO',
        section6Input4Placeholder: 'CORREO ELECTRÓNICO',
        section6Input5Placeholder: 'TIPO DE PROYECTO',
        section6Input5Option1:'ESP LOREM 1',
        section6Input5Option2: 'ESP LOREM 2',
        section6Input6Placeholder: 'DIRECCIÓN',
        section6Submit: 'ENVIAR',
        section6Success1: 'Mensaje enviado con éxito.',
        section6Success2: 'Pronto recibirás una respuesta.',

        footerDevelopedBy: 'Desarrollado por '


      }
      
    };
      
    // Check if a hash value exists in the URL
    if (window.location.hash) {
      
      // Set the content of the webpage
      // depending on the hash value
      if (window.location.hash == "#es") {
        $('.section1Title').text(language.es.section1Title);
        $('.section2Title').text(language.es.section2Title);
        $('.section3Title').text(language.es.section3Title);
        $('.section4Title').text(language.es.section4Title);
        $('.section5Title').text(language.es.section5Title);
        $('.section6Title').text(language.es.section6Title);
        $('.section7Title').text(language.es.section7Title);

        $('#welcome-span-1').text(language.es.welcomeSpan1);
        $('#welcome-span-2').text(language.es.welcomeSpan2);
        $('#welcome-span-3').text(language.es.welcomeSpan3);

        $('#about-text-1').text(language.es.section1Text1);
        $('#about-text-2').text(language.es.section1Text2);


        $('#btn-projects-1').text(language.es.section2Project4Title);
        $('#btn-projects-2').text(language.es.section2Project1Title);
        $('#btn-projects-3').text(language.es.section2Project2Title);
        $('#btn-projects-4').text(language.es.section2Project3Title);
        $('.project-1-title').text(language.es.section2Project1Title);
        $('.project-1-content').text(language.es.section2Project1Content);
        $('.project-2-title').text(language.es.section2Project2Title);
        $('.project-2-content').text(language.es.section2Project2Content);
        $('.project-3-title').text(language.es.section2Project3Title);
        $('.project-3-content').text(language.es.section2Project3Content);
        $('.project-4-title').text(language.es.section2Project4Title);
        $('.project-4-content').text(language.es.section2Project4Content);

        $('.render-1-content').text(language.es.section3Render1);
        $('.render-2-content').text(language.es.section3Render2);
        $('.render-3-content').text(language.es.section3Render3);
        $('.render-4-content').text(language.es.section3Render4);
        $('.render-5-content').text(language.es.section3Render5);

        $('.product-1-title').text(language.es.section4Product1Title);
        $('.product-1-content').text(language.es.section4Product1Content);

        $('.product-2-title').text(language.es.section4Product2Title);
        $('.product-2-content').text(language.es.section4Product2Content);

        $('.product-3-title').text(language.es.section4Product3Title);
        $('.product-3-content').text(language.es.section4Product3Content);

        $('.product-4-title').text(language.es.section4Product4Title);
        $('.product-4-content').text(language.es.section4Product4Content);

        $('.product-5-title').text(language.es.section4Product5Title);
        $('.product-5-content').text(language.es.section4Product5Content);

        $('.product-6-title').text(language.es.section4Product6Title);
        $('.product-6-content').text(language.es.section4Product6Content);

        $('.product-7-title').text(language.es.section4Product7Title);
        $('.product-7-content').text(language.es.section4Product7Content);

        $('.product-8-title').text(language.es.section4Product8Title);
        $('.product-8-content').text(language.es.section4Product8Content);

        $('.product-9-title').text(language.es.section4Product9Title);
        $('.product-9-content').text(language.es.section4Product9Content);

        $('.product-10-title').text(language.es.section4Product10Title);
        $('.product-10-content').text(language.es.section4Product10Content);

        $('.product-11-title').text(language.es.section4Product11Title);
        $('.product-11-content').text(language.es.section4Product11Content);

        $('#btn-more-products').text(language.es.section4MoreProducts);

        $('#step-1').text(language.es.section5Step1);
        $('#step-2').text(language.es.section5Step2);
        $('#step-3').text(language.es.section5Step3);
        $('#step-4').text(language.es.section5Step4);
        $('#step-5').text(language.es.section5Step5);
        $('#step-6').text(language.es.section5Step6);
        $('#step-7').text(language.es.section5Step7);

        $('#contact-input-1').attr('placeholder',language.es.section6Input1Placeholder);
        $('#contact-input-2').attr('placeholder',language.es.section6Input2Placeholder);
        $('#contact-input-3').attr('placeholder',language.es.section6Input3Placeholder);
        $('#contact-input-4').attr('placeholder',language.es.section6Input4Placeholder);
        $('#contact-input-5').text(language.es.section6Input5Placeholder);
        $('#contact-option-1').text(language.es.section6Input5Option1);
        $('#contact-option-2').text(language.es.section6Input5Option2);
        $('#contact-input-6').attr('placeholder',language.es.section6Input6Placeholder);
        $('#contact-submit-btn').val(language.es.section6Submit);
        $('#form-submitted-text-1').text(language.es.section6Success1);
        $('#form-submitted-text-2').text(language.es.section6Success2);

        $('#footer-developed-by').text(language.es.footerDevelopedBy);
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

        $('#about-text-1').text(language.eng.section1Text1);
        $('#about-text-2').text(language.eng.section1Text2);
        
        $('#btn-projects-1').text(language.eng.section2Project4Title);
        $('#btn-projects-2').text(language.eng.section2Project1Title);
        $('#btn-projects-3').text(language.eng.section2Project2Title);
        $('#btn-projects-4').text(language.eng.section2Project3Title);
        $('.project-1-title').text(language.eng.section2Project1Title);
        $('.project-1-content').text(language.eng.section2Project1Content);
        $('.project-2-title').text(language.eng.section2Project2Title);
        $('.project-2-content').text(language.eng.section2Project2Content);
        $('.project-3-title').text(language.eng.section2Project3Title);
        $('.project-3-content').text(language.eng.section2Project3Content);
        $('.project-4-title').text(language.eng.section2Project4Title);
        $('.project-4-content').text(language.eng.section2Project4Content);


        $('#btn-render-1').text(language.eng.section2Project4Title);
        $('#btn-render-2').text(language.eng.section2Project1Title);
        $('#btn-render-3').text(language.eng.section2Project2Title);
        $('#btn-render-4').text(language.eng.section2Project3Title);
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

        $('.product-4-title').text(language.eng.section4Product4Title);
        $('.product-4-content').text(language.eng.section4Product4Content);

        $('.product-5-title').text(language.eng.section4Product5Title);
        $('.product-5-content').text(language.eng.section4Product5Content);

        $('.product-6-title').text(language.eng.section4Product6Title);
        $('.product-6-content').text(language.eng.section4Product6Content);

        $('.product-7-title').text(language.eng.section4Product7Title);
        $('.product-7-content').text(language.eng.section4Product7Content);

        $('.product-8-title').text(language.eng.section4Product8Title);
        $('.product-8-content').text(language.eng.section4Product8Content);

        $('.product-9-title').text(language.eng.section4Product9Title);
        $('.product-9-content').text(language.eng.section4Product9Content);

        $('.product-10-title').text(language.eng.section4Product10Title);
        $('.product-10-content').text(language.eng.section4Product10Content);

        $('.product-11-title').text(language.eng.section4Product11Title);
        $('.product-11-content').text(language.eng.section4Product11Content);

        $('#btn-more-products').text(language.eng.section4MoreProducts);

        $('#step-1').text(language.eng.section5Step1);
        $('#step-2').text(language.eng.section5Step2);
        $('#step-3').text(language.eng.section5Step3);
        $('#step-4').text(language.eng.section5Step4);
        $('#step-5').text(language.eng.section5Step5);
        $('#step-6').text(language.eng.section5Step6);
        $('#step-7').text(language.eng.section5Step7);

        $('#contact-input-1').attr('placeholder',language.eng.section6Input1Placeholder);
        $('#contact-input-2').attr('placeholder',language.eng.section6Input2Placeholder);
        $('#contact-input-3').attr('placeholder',language.eng.section6Input3Placeholder);
        $('#contact-input-4').attr('placeholder',language.eng.section6Input4Placeholder);
        $('#contact-input-5').text(language.eng.section6Input5Placeholder);
        $('#contact-option-1').text(language.eng.section6Input5Option1);
        $('#contact-option-2').text(language.eng.section6Input5Option2);
        $('#contact-input-6').attr('placeholder',language.eng.section6Input6Placeholder);
        $('#contact-submit-btn').val(language.eng.section6Submit);
        $('#form-submitted-text-1').text(language.eng.section6Success1);
        $('#form-submitted-text-2').text(language.eng.section6Success2);



        $('#footer-developed-by').text(language.eng.footerDevelopedBy);
      }
    }

