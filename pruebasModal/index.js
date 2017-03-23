var url="../php/login.php";
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
            if(this.responseText!="")
            {
              valid=false;
              dialog.dialog( "close" );
              $("#loginUser")[0].style.display="none";
              $("#textoOBoton").html(usuario.val());
            }
         }
       };
       xhttp.open("GET", url+"?usuario="+usuario.val()+"&contrasena="+contrasena.val(), true);
       xhttp.send();
return valid;
}

dialog = $( "#dialog-form" ).dialog({
  autoOpen: false,
  height: 120,
  width: 400,
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