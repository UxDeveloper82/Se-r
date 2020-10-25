var ports = [
    {
        "id": "1",
        "name": "Friends-Website",
        "type": "angular",
        "detail": "Asp.net core Application",
        "language": "C#",
        "link": "http://uxdeve82-001-site2.itempurl.com/",
        "image": "Friendsite"
    },
    {
        "id": "2",
        "name": "Parts-Inventory",
        "type": "core",
        "detail": "Asp.net Framework Application",
        "language": "C#",
        "link": "http://uxdeve82-001-site5.itempurl.com/",
        "image": "Inventory"
    },
    {
        "id": "3",
        "name": "Appliance Web",
        "type": "core",
        "detail": "Asp.net Framework Application",
        "language": "C#",
        "link": "http://orlandoappliancerepair.tech/",
        "image": "orrepair"
    },
    {
        "id": "4",
        "name": "BudgetApp",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Javascript",
        "link": "https://uxdeveloper82.github.io/budgetjs/index.html",
        "image": "budget"
    },
    {
        "id": "5",
        "name": "Ecommerce-Design",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Javascript",
        "link": "https://uxdeveloper82.github.io/myEcommerce/",
        "image": "ecommerce"
    },
    {
        "id": "6",
        "name": "GithubFinder-Desing",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Javascript",
        "link": "https://uxdeveloper82.github.io/gitFinder-index.html/",
        "image": "githubfinder"
    },
    {
        "id": "7",
        "name": "Fix-top",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/fix-top/",
        "image": "websites"
    },
    {
        "id": "8",
        "name": "Photography-light",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/photography-index.html/",
        "image": "photography"
    },
    {
        "id": "9",
        "name": "Numerouno Air",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/numerouno-index.html/",
        "image": "gitfit"
    },
    {
        "id": "10",
        "name": "Split-fown",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/split-index.html/",
        "image": "slider"
    },
    {
        "id": "11",
        "name": "Grid-sign",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/Grid-index.html/",
        "image": "grid"
    },
    {
        "id": "12",
        "name": "Novi-Heaven",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/novi-index.html/",
        "image": "ui"
    },
    {
        "id": "13",
        "name": "Mobil-Male",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/Acme-w3-index.html/",
        "image": "mobil"
    },
    {
        "id": "14",
        "name": "Dom-Manipulating",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/DomManipulating/",
        "image": "jsmanipulating"
    },
    {
        "id": "15",
        "name": "Dom-Manipulating1",
        "type": "templates",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/Netflix-clone-index.html",
        "image": "netflixjs"
    },
    {
        "id": "16",
        "name": "Animatejs",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Html-css",
        "link": "https://uxdeveloper82.github.io/image_hide/",
        "image": "image_hide"
    },
    {
        "id": "17",
        "name": "Data-table-js",
        "type": "data",
        "detail": "Javascript App",
        "language": "Html-css-js",
        "link": "https://uxdeveloper82.github.io/interactive_table/",
        "image": "interactive_table"
    },
    {
        "id": "18",
        "name": "Fetch-data-js",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Html-css-js",
        "link": "https://uxdeveloper82.github.io/FetchApi/",
        "image": "fetch"
    },
    {
        "id": "19",
        "name": "Crud-js",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Html-css-js",
        "link": "https://uxdeveloper82.github.io/CrudJs/index.html",
        "image": "jscrud"
    },
    {
        "id": "20",
        "name": "Axios-js",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Html-css-js",
        "link": "https://uxdeveloper82.github.io/Axios/",
        "image": "axios"
    },
    {
        "id": "21",
        "name": "Slide-js",
        "type": "javascript",
        "detail": "Javascript App",
        "language": "Html-css-js",
        "link": "https://uxdeveloper82.github.io/sliderjs/",
        "image": "slidejs"
    }


];

/*const card = document.getElementById("card");
for (var i = 0; i < ports.length; i++) {
    var port = ports[i];
    card.innerHTML += `
                   <div class="col-lg-4 item ${port.type}">
                            <div class="card">

                                <div class="card-head">
                                    <img src="images/port/${port.image}.png" alt="" class="img-fluid card-img">
                                    <div class="card-overlay"><h2>${port.name}</h2></div>
                                    <div class="card-hover">
                                        <h2>Language: ${port.language}</h2>
                                        <p>Details: ${port.detail}</p>
                                    </div>
                                </div>

                                <div class="card-body text-center">
                                    <h4 class="title">${port.name}</h4>
                                    <a href="${port.link}" class="btn btn-lg card-btn">Goto Page</a>
                                </div>
                            </div>
                    </div>
           `
}*/

(function () {
    'use strict';

    var $projects = $('.projects');
    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function (e) {
        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');
        $projects.isotope({ filter: filter });

    });

    $('.card').mouseenter(function () {
        $(this).find('.card-overlay').css({ 'top': '-100%' });
        $(this).find('.card-hover').css({ 'top': '0' });
    }).mouseleave(function () {
        $(this).find('.card-overlay').css({ 'top': '0' });
        $(this).find('.card-hover').css({ 'top': '100%' });
    });



})(jQuery);






