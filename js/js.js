document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("cto_frm");
  
    var validarNombre = function (e) {
      if (formulario.nombrecompleto.value.length < 10) {
        alert("Por favor, escribe tu nombre y apellido.");
        document.getElementById("nombre").focus();
        return false;
      }
      return true;
    };

    var validarContacto = function (e) {
        var contacto = document.getElementById("codigo").value;
        if (isNaN(contacto)) {
          alert("Por favor, escribe solo números.");
          document.getElementById("codigo").focus();
          return false;
        }
        return true;
      };

      var validarCorreo = function (e) {
        var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        var correo = document.getElementById("email").value;
        if (!expresion.test(correo)) {
          alert("Por favor, escribe un email válido.");
          document.getElementById("correo").focus();
          return false;
        }
        return true;
      };

      var validarMensaje = function () {
        if (formulario.comentario.value.length == 0) {
          alert("Por favor, escribe algun comentario.");
          document.getElementById("comentario").focus();
          return false;
        }
        return true;
      };

      var validar = function () {
        return (
          validarContacto() &&
          validarNombre() &&
          validarCorreo() &&
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