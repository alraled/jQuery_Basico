function ocultardivs() {

    $("div").html("Empieza el mareo");
    $("div").hide(2000);
}

function mostrardivs() {
    $("divs").show(3000, ocultardivs);
}

$(document).ready(function() {
    alert("He cargado");
    $("#uno").click(ocultardivs);
    $("button[type=button]").click(
        function() {
            e.preventDefault();
            $("div").show();
        }
    );
});

//EL ATRIBUTO VAL SE USA PARA LOS INPUT//
// EL ATRIBUTO TEXT NO SE USA PARA LOS INPUT//
// EL ATRIBUTO HTML ESCRIBE TEXTO PLANO UNICAMENTE //