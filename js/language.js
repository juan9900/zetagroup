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

        section3Render1: 'ESPA RENDER 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        section3Render2: 'ESPA RENDER 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        section3Render3: 'ESPA RENDER 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        section3Render4: 'ESPA RENDER 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        section3Render5: 'ESPA RENDER 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laccusantium doloremque laudan ',
        
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
        section6Input5Placeholder: '',
        section6Input6Placeholder: 'Dirección',
        section6Submit: 'Enviar',

        

      },
      hin: {
        welcome:
          "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
          "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " +
          "भाषा को चुन सकते हैं!",
      },
    };
      
    // Check if a hash value exists in the URL
    if (window.location.hash) {
      
      // Set the content of the webpage
      // depending on the hash value
      if (window.location.hash == "#es") {
        siteContent.textContent = language.es.welcome;
      } else if (window.location.hash == "#eng") {
        siteContent.textContent = language.eng.welcome;
      }
    }