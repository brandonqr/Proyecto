var url="php/login.php";
$( function() {
  var dialog, form,valid=true;
      usuario = $( "#loginUsuario" ),
      contrasena = $( "#loginContrasena" ),
      allFields = $( [] ).add( usuario ).add( contrasena ),
      tips = $( ".validateTips" );

      function loginUser() {
        var valid = true;
        allFields.removeClass( "ui-state-error" );
        //ajax y comprar si el usuario existe
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            if(this.responseText!="")
            {
              valid=false;
              dialog.dialog( "close" );
              $("#loginUser")[0].style.display="none";
              $("#textoOBoton").html(usuario.val());
              $("#textoOBoton").addClass("logeado")
              $(".pPrecio").removeClass("ocultarPrecio");
            }
         }
       };
       xhttp.open("GET", url+"?usuario="+usuario.val()+"&contrasena="+contrasena.val(), true);
       xhttp.send();
        console.log("a");
       console.log(document.cookie);
return valid;
}

dialog = $( "#dialog-form" ).dialog({
  autoOpen: false,
  modal: true,
  buttons: {
    "Login": loginUser,
    Cancel: function() {
      dialog.dialog( "close" );
      form[ 0 ].reset();
      allFields.removeClass( "ui-state-error" )
    }
  }
});

form = dialog.find( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  loginUser();
});

$( "#loginUser" ).button().on( "click", function() {
  dialog.dialog( "open" );
});
} );