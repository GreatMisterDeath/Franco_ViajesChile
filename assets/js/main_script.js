function send_data()
{
    $("#id_div_contact").removeClass("bg-info");
    $("#id_div_contact").addClass("bg-success");

    $("#id_form").hide(); // Escondemos bloque para inscribirse

    $("#id_thanks_text_1").text("Gracias por inscribirse");
    $("#id_thanks_text_2").text("Desde ahora recibira nuestras actualizaciones en su correo");

    $("#id_div_thanks").show(); // Mostramos el bloque con el mensaje de inscripcion exitosa
}
