document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("cto_frm");
  
    var validarNombre = function (e) {
      if (formulario.nombrecompleto.value.length < 2) {
        alert("Por favor, escribe tu nombre y apellido.");
        document.getElementById("nombre").focus();
        return false;
      }
      return true;
    };

    var validarEdad = function () {
        if (formulario.edad.value.length == 0) {
          alert("Por favor, ingrese edad.");
          document.getElementById("edad").focus();
          return false;
        }
        return true;
    };

    var validarFnac = function () {
        if (formulario.fn.value.length == 0) {
          alert("Por favor, ingrese una fecha de nacimiento.");
          document.getElementById("fn").focus();
          return false;
        }
        return true;
    };

    var validarContacto = function (e) {
        var cont = parseInt(document.getElementById("contacto").value);
        if (isNaN(cont)) {
          alert("Por favor, colocar un numero telefónico válido.");
          document.getElementById("contacto").focus();
          return false;
        }
        return true;
      };

      var validarCorreo = function (e) {
        var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        var correo = document.getElementById("correo").value;
        if (!expresion.test(correo)) {
          alert("Por favor, escribe un email válido.");
          document.getElementById("correo").focus();
          return false;
        }
        return true;
      };

      var validarOpcion = function () {
        if (formulario.opcion.value.length == 0) {
          alert("Por favor, escribe alguna opcion.");
          document.getElementById("opcion").focus();
          return false;
        }
        return true;
      };

      var validarMensaje = function () {
        let str = document.getElementById("comentario");
        if (str.value.trim() == 0) {
          alert("Por favor, escribe algun comentario.");
          document.getElementById("comentario").focus();
          return false;
        }
        return true;
      };

      var validar = function () {
        return (
            validarNombre() &&
            validarEdad() &&
            validarFnac() &&
            validarContacto() &&
            validarCorreo() &&
            validarOpcion() &&
            validarMensaje()
        );
      };

      formulario.addEventListener("submit", handleSubmit);
      async function handleSubmit(event) {
        event.preventDefault();
        if (validar()) {
          const form = new FormData(this);
          const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
              Accept: "application/json",
            },
          });
          if (response.ok) {
            this.reset();
            alert(
              "Gracias por contactarte con nosotros. En breve nos estaremos comunicando."
            );
          }
        }
      }
    });