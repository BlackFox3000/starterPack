function displayMenu() {

    console.log(arguments[0] instanceof Array);
    let menu = '<div class="menu"> ' +
        '<ul> ' + '<li><a href="eval_layout_menu.html">Accueil</a></li>';

    if (arguments[0] instanceof Array) {
        for (let i = 0; i < arguments[0].length; i++) {
            menu += '<li><a href="Pages/' + arguments[0][i] + '.html">' + arguments[0][i] + '</a></li>';
        }
    } else {
        for (let i = 0; i < arguments.length; i++) {
            menu += '<li><a href="Pages/' + arguments[i] + '.html">' + arguments[i] + '</a></li>';
        }
    }
    menu += '</ul> </div>';

    document.write(menu)

}

function displayImage() {
    console.log(document.title);
    let title = document.title.charAt(0).toUpperCase() + document.title.substr(1).toLowerCase();
    let image =
        '<div class="content">' +
        '<div class="inner" >' +
        '<img class="image" src="../img/' + document.title + '.jpg">' +
        '</div>' +
        '<div class="titre">' +
        title +
        '</div>' +
        '</div>';
    document.write(image);
}