const nombres = document.getElementById("nombres");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const password = document.getElementById("password");
const numero_documento = document.getElementById("documento");
const fechaInput = document.getElementById('fecha');

const edadInput = document.getElementById('edadInput');
const edadDisplay = document.getElementById("edadDisplay")
const numero_telefono = document.getElementById("telefono");
const habilidades = document.getElementsByName("habilidad");
const TipoDocumento =document.getElementById("tipo_documento");
const generoSelect = document.getElementById("genero");
const formulario = document.getElementById('formulario');
const disable = document.getElementById('disable');
const enable = document.getElementById('enable');
const editarbutton =document.getElementById('editarbutton');
const enviar = document.getElementById("enviar");
const limpiarBtn = document.getElementById("limpiar");






let objResult = new Object();
let validate = false;
let textResult = "";

console.log(enviar);

class Validar {

    constructor(nombres, apellidos, email, password, numero_documento, numero_telefono, habilidades) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.numero_documento = numero_documento;
        this.numero_telefono = numero_telefono;
        this.fechaInput = fecha;
        this. edadInput = edadInput;
        this.habilidades = habilidades;
    }
    
    
    


    // Método para validar el nombre
    validarNombre() {
        const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
        console.log(this.nombres);

        const validacionNombre = regexName.exec(this.nombres.value);
        if (validacionNombre) {
            textResult = "nombre correcto";
            nombres.classList.remove('is-invalid');
            nombres.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            validate = true;

        } else {
            textResult = 'nombre invalido (debe contener minimo 3 letras';
            nombres.classList.remove('is-valid');
            nombres.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            validate = false;
        }
        console.log(JSON.stringify(objResult.textResult));
        return validate;
    }

    // Método para validar apellidos
    validarApellidos() {
        const regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
        console.log(this.apellidos);

        const validacionApellidos = regexApellido.exec(this.apellidos.value);
        if (validacionApellidos) {
            textResult = "apellido exitoso";
            apellidos.classList.remove('is-invalid');
            apellidos.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            validate = true;

        } else {
            textResult = 'Apellido invalido (por favor ingresa solo letras';
            apellidos.classList.remove('is-valid');
            apellidos.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            validate = false;
        }
        console.log(JSON.stringify(objResult.textResult));
        return validate;
    }

    // Método para validar email
    validarEmail() {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        console.log(this.email);

        const validacionEmail = regexEmail.exec(this.email.value);
        if (validacionEmail) {
            textResult = "Correo electronico valido";
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            validate = true;

        } else {
            textResult = 'correo invalido  ';
            email.classList.remove('is-valid');
            email.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            validate = false;
        }
        console.log(JSON.stringify(objResult.textResult));
        return validate;
    }

    // Método para validar contraseña
    validarPassword() {
        const regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[#\$]).{8,}/;
        console.log(this.password);

        const validacionPassword = regexPassword.exec(this.password.value);
        if (validacionPassword) {
            textResult = "contraseña correcta";
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            validate = true;

        } else {
            textResult = 'Contraseña incorrecta (debe incluir minimo 8 caracteres , una letra mayuscula y minuscula  y un caracter especial';
            password.classList.remove('is-valid');
            password.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            validate = false;
        }
        console.log(JSON.stringify(objResult.textResult));
        return validate;
    }

    

    // Método para validar número de documento
    validarNumeroDocumento() {
        const regexNumeroDocumento = /^(?:[\d]{1,3}\.?){2}[\d]{4}$/;
        console.log(this.numero_documento);

        const validacionNumeroDocumento = regexNumeroDocumento.exec(this.numero_documento.value);
        if (validacionNumeroDocumento) {
            textResult = "numero de documento valido";
            numero_documento.classList.remove('is-invalid');
            numero_documento.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            validate = true;

        } else {
            textResult = 'numro de documento invalido debe contener minimo 10 digitos ';
             numero_documento.classList.remove('is-valid');
            numero_documento.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            validate = false;
        }
        console.log(JSON.stringify(objResult.textResult));
        return validate;
    }


    // Método para validar número de teléfono
    validarNumeroTelefono() {
        const regexNumeroTelefono = /^\d{10}$/;
        console.log(this.numero_telefono);

        const validacionNumeroTelefono = regexNumeroTelefono.exec(this.numero_telefono.value);
        if (validacionNumeroTelefono) {
            textResult = "numero de telefono valido";
            numero_telefono.classList.remove('is-invalid');
            numero_telefono.classList.add('is-valid');
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            validate = true;

        } else {
            textResult = 'numro de telefono invalido debe contener minimo 10 digitos ';
             numero_telefono.classList.remove('is-valid');
            numero_telefono.classList.add('is-invalid');
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            validate = false;
        }
        console.log(JSON.stringify(objResult.textResult));
        return validate;
    }
    // metodo validar habilidades

    validarHabilidades() {
        let contador = 0;
        for (let i = 0; i < this.habilidades.length; i++) {
            if (this.habilidades[i].checked) {
                contador++;
            }
        }
    
        // Reiniciar el estado de clases
        habilidades.forEach(habilidad => {
            habilidad.classList.remove('is-valid', 'is-invalid');
        });
    
        if (contador === 0) {
            textResult = 'Debes seleccionar mínimo una habilidad';
            objResult.validate = false;
            objResult.textResult = "error: " + textResult;
            habilidades[0].classList.add('is-invalid'); 
        } else {
            textResult = 'Habilidades validadas exitosamente';
            objResult.validate = true;
            objResult.textResult = "Ok data: " + textResult;
            habilidades[0].classList.add('is-valid'); 
        }
    
        console.log(JSON.stringify(objResult.textResult));
        return objResult.validate; 
    }
}    





// Método para validar fecha
fechaInput.addEventListener('change', function() {
    const fechaNacimiento = new Date(this.value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    // Actualiza el valor de edad
    edadInput.value = edad;
    edadDisplay.textContent = edad;

    let objResult = {
        edad: edad,
        documentoBloqueado: false,
        textResult: ""
    };

    // Validación de edad y bloqueo del tipo de documento
    if (edad < 17) {
        alert("Edad inválida (debe ser mayor de edad)");

        // Bloquear la opción "Tarjeta de Identidad"
        for (let i = 0; i < TipoDocumento.options.length; i++) {
            if (TipoDocumento.options[i].value === "Tarjeta de identidad") {
                TipoDocumento.options[i].disabled = true;
                objResult.documentoBloqueado = true; 
            }
        }

        objResult.textResult = "Edad inválida, documento bloqueado.";
    } else {
        // Habilitar las opciones si la edad es mayor o igual a 17
        for (let i = 0; i < TipoDocumento.options.length; i++) {
            TipoDocumento.options[i].disabled = false;
        }

        objResult.textResult = "Edad válida, documento habilitado.";
    }

   
    console.log(JSON.stringify(objResult.textResult));

    return objResult;
});

// Inicializar el valor de edad al cargar
fechaInput.dispatchEvent(new Event('change'));








// Método para validar el género
function validarGenero() {
    let objResult = {};

    // Verifica si se ha seleccionado un género diferente de la opción predeterminada
    if (generoSelect.value <= 0) {
        objResult.validate = false;
        objResult.textResult = "Por favor, selecciona un género válido.";
        generoSelect.classList.remove('is-valid');
        generoSelect.classList.add('is-invalid');
    } else {
        objResult.validate = true;
        objResult.textResult = "Género seleccionado correctamente.";
        generoSelect.classList.remove('is-invalid');
        generoSelect.classList.add('is-valid');
    }

    console.log(JSON.stringify(objResult)); 
    return objResult.validate; 
}


// Agregar un evento change al campo de género
generoSelect.addEventListener('change', validarGenero);





enviar.addEventListener("click", (e) => {
    e.preventDefault();  // Prevenir el envío automático del formulario

    const validador = new Validar(nombres, apellidos, email, password, numero_documento, numero_telefono, habilidades);
    
    let estado =false;
  

    disable.addEventListener('click', () => {
        if (estado) {
            validador.formEnable(); // Habilita los campos
            disable.textContent = 'Deshabilitar'; // Cambia el texto del botón a "Deshabilitar"
        } else {
            validador.formDisable(); // Deshabilita los campos
            disable.textContent = 'Habilitar'; // Cambia el texto del botón a "Habilitar"
        }
        estado = !estado; // Alterna el estado
    });

    // Realizar todas las validaciones una por una
    const nombreValido = validador.validarNombre();
    const apellidosValidos = validador.validarApellidos();
    const emailValido = validador.validarEmail();
    const passwordValido = validador.validarPassword();
    const documentoValido = validador.validarNumeroDocumento();
    const telefonoValido = validador.validarNumeroTelefono();
    const habilidadesValidas = validador.validarHabilidades();
    
    

   

    // Si alguna de las validaciones falla, mostrar una alerta y no enviar el formulario
    if (!nombreValido || !apellidosValidos || !emailValido || !passwordValido || !documentoValido || !telefonoValido || !habilidadesValidas || !habilidadesValidas) {
        console.log("Por favor, asegúrate de que todos los campos estén correctamente diligenciados.");
        return;  // Detener el envío del formulario
    }

    // Si todas las validaciones son correctas, se puede proceder con el envío del formulario
    alert("Formulario enviado correctamente");
    document.getElementById('formulario').submit();  // Enviar el formulario

    limpiar.apellidosValidos('click', () => {
        // wind
    })





    // Método para limpiar el formulario
function limpiarFormulario() {
    formulario.reset(); // Resetea todos los campos del formulario

    // Opcional: Eliminar clases de validación si las has usado
    const inputs = formulario.querySelectorAll('.is-valid, .is-invalid');
    inputs.forEach(input => {
        input.classList.remove('is-valid', 'is-invalid');
    });

    // Opcional: Puedes mostrar un mensaje de éxito
    console.log("Formulario limpiado correctamente.");
}


// Agregar el evento click al botón de limpiar
limpiarBtn.addEventListener('click', limpiarFormulario);
});


 function formDisable() {
    // Selecciona todos los inputs y selects dentro del formulario
    const inputs = document.querySelectorAll('#formulario input');
    const selects = document.querySelectorAll('#formulario select');
    
    // Deshabilitar todos los inputs
    inputs.forEach(input => {
        input.disabled = true;
    });
    
    // Deshabilitar todos los selects
    selects.forEach(select => {
        select.disabled = true;
    });
}

        // Evento de clic en el botón para llamar al método formDisable
        document.getElementById('disable').addEventListener('click', function(event) {
            event.preventDefault();  // Evita el comportamiento predeterminado del botón (si es necesario)
            formDisable();
        });

    
 function formEnable() {
    
    // Selecciona todos los inputs y selects dentro del formulario
    const inputs = document.querySelectorAll('#formulario input');
    const selects = document.querySelectorAll('#formulario select');
    
    // Deshabilitar todos los inputs
    inputs.forEach(input => {
        input.disabled = false;
    });
    
    // Deshabilitar todos los selects
    selects.forEach(select => {
        select.disabled = false;

    });
}
   



function formDisableEdit() {
    const inputs = document.querySelectorAll('#formulario input[type="text"], #formulario input[type="email"], #formulario input[type="password"], #formulario input[type="date"], #formulario input[type="range"]');
    
    // Deshabilitar todos los inputs seleccionados
    inputs.forEach(input => {
        input.disabled = true;
    });
    
}


// Función para alternar el estado de los inputs (habilitar/deshabilitar)
function toggleEdit() {
    const inputs = document.querySelectorAll('#formulario input[type="text"], #formulario input[type="email"], #formulario input[type="password"], #formulario input[type="date"], #formulario input[type="range"]');
    
    inputs.forEach(input => {
        input.disabled = !input.disabled; // Alterna entre habilitar y deshabilitar
    });
   
    // Cambia el texto del botón dependiendo del estado
    const editButton = document.getElementById('editarbutton');
    if (editButton.textContent === "Editar") {
        editButton.textContent = "Editar"; // Si estaba en "Editar", cambiar a "Guardar cambios"
    } else {
        editButton.textContent = "Editar"; // Si estaba en "Guardar cambios", cambiar a "Editar"
    }
}

// Evento para alternar entre habilitar y deshabilitar campos al hacer clic en el botón "Editar"
document.getElementById('editarbutton').addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe
    toggleEdit();
});

document.getElementById('enable').addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe
    formEnable();


});
