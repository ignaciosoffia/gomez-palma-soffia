var trabajos = [{
    figure: "https://media0.giphy.com/media/l44Qqz6gO6JiVV3pu/giphy.gif?cid=790b7611a9491907ffaabba334e639600fb5bfbe90b48284&rid=giphy.gif",
    alt: "Descripción de la imagen",
    title: "Hello World",
    about: " ",
    url: "https://www.google.com"
}, {
    figure: "https://media.giphy.com/media/J4h6nhHC3baVVeGAuG/giphy.gif",
    alt: "Descripción de la imagen",
    title: "Jonas broer",
    about: " "
}, {
    figure: "https://media.giphy.com/media/5hkDOy3Gn9w3Ydm8ra/giphy.gif",
    alt: "Descripción de la imagen",
    title: "Retro camera m4n",
    about: " "
}, {
    figure: "https://media2.giphy.com/media/QMozgDyV3CutNj2cVs/giphy.gif?cid=790b76117b7575471b04436b6319059022bf738760e6b95e&rid=giphy.gif",
    alt: "Descripción de la imagen",
    title: "Just a cool GIF",
    about: " "
}, {
    figure: "https://media0.giphy.com/media/7zuidDBSI60wPYU2S1/giphy.gif?cid=790b7611d13b66af681e139e964087caa153d6c51d38a3fd&rid=giphy.gif",
    alt: "Descripción de la imagen",
    title: "Approved",
    about: " "
}, {
    figure: "https://media3.giphy.com/media/fCBUdPijqgA2Q/giphy.gif?cid=790b76113146c63319d1cccda573c5cf581eb37d2a2d9c49&rid=giphy.gif",
    alt: "Descripción de la imagen",
    title: "Mc Time",
    about: " "
}, {
    figure: "https://media.giphy.com/media/UQIASPdRVXUjeOP6XK/giphy.gif",
    alt: "Descripción de la imagen",
    title: "Who's popular now? Paul.",
    about: " "
    
}, {
    figure: "https://media.giphy.com/media/UQIASPdRVXUjeOP6XK/giphy.gif",
    alt: "Descripción de la imagen",
    title: "Who's popular now? Paul.",
    about: " "
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href="' + trabajos[i].url + '">Ver más<a/><p/>'
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + '</div>')
});
