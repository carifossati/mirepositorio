
document.addEventListener("DOMContentLoaded", function(e){
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    var id_token = googleUser.getAuthResponse().id_token;
    console.log ("ID Token: " + id_token);
  }

    function verificar(){
        let user = document.getElementById("user");
        let pass = document.getElementById("pass");
        let msj = document.getElementById ("msj");
        let usuario = {};
       
        if ( user.value.trim() ==='' || pass.value.trim()==='' ){

            user.classList.add("notValid"); 
            msj.innerHTML="Dato requerido";
            msj.classList.add("notValid");            
        }
        else{
            
            location.href="index.html";

            usuario.nombre = user.value;
            usuario.estado = "Conectado";

            localStorage.setItem('usuario',JSON.stringify(usuario)); //guardo mi variable de objeto en local storage
            sessionStorage.setItem('usuario',JSON.stringify(usuario));
        }
    }
