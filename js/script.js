document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
       

        // <-- Aquí puedes elegir cualquier elemento del DOM para Exportar a PDF  -->
        //const $elementoParaConvertir = document.body; 
        
        //  <-- Descomentar la linea siguiente y probar exportar solamente la tabla -->
         const $elementoParaConvertir = document.querySelector('#confirmar');
        
        
        
        html2pdf()
            .set({
                margin: 1,
                filename: 'registro.pdf',
                image: {
                    type: 'png',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    format: "a3", //formato de hoja
                    orientation: 'portrait' // landscape o portrait (disposicion vertical u orizontal)
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
    });
});