
$(document).on("change", "#flLogo", function (){
    const archivos = this.files;
    let reader;

    if (archivos && archivos[0]) { //Revisamos que el input tenga contenido
        reader = new FileReader(); //Leemos el contenido       
        reader.onload = function(e) { //Al cargar el contenido lo pasamos como atributo de la imagen de arriba
          $('#imgPrev').attr('src', e.target.result);
        }        
        reader.readAsDataURL(archivos[0]);
    }
});