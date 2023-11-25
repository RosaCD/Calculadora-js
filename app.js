const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(btn => {
    btn.addEventListener("click", () =>{
        const botonPulsado = btn.textContent;
        if (btn.id === "C") {
            pantalla.textContent = "0";
            return;
        };

        if (btn.id === "Del") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice (0,-1);
                // saca una sección de un string y devuelve uno nuevo
            };
            return;
        };
        if (btn.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); 
            //eval = evalúa la expresión y regresa el valor
            } catch  {
                pantalla.textContent = "Error"
            }
            
            return;
        };

        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = botonPulsado;
        } else {
            pantalla.textContent += botonPulsado;
        }
        
    });
});