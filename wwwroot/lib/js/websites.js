var websites = [
    {
        "id": 1,
        "name": "Codecademy",
        "link": "https://www.codecademy.com/",
        "image": "codecademy"
    },
    {
        "id": 2,
        "name": "Code Avengers",
        "link": "https://www.codeavengers.com/",
        "image": "codeavengers"
    },
    {
        "id": 3,
        "name": "Khan Academy",
        "link": "https://www.khanacademy.org/",
        "image": "khanacademy"
    },
    {
        "id": 4,
        "name": "Treehouse",
        "link": "https://teamtreehouse.com/",
        "image": "treehouse"
    },
    {
        "id": 5,
        "name": "Udacity",
        "link": "https://www.udacity.com/",
        "image": "udacity"
    },
    {
        "id": 6,
        "name": "Pluralsight",
        "link": "https://www.pluralsight.com/",
        "image": "pluralsight"
    },
    {
        "id": 7,
        "name": "Udemy",
        "link": "https://www.udemy.com/",
        "image": "udemy"
    },
    {
        "id": 8,
        "name": "Pluralsight",
        "link": "https://www.pluralsight.com/",
        "image": "pluralsight"
    },
    {
        "id": 9,
        "name": "W3Schools",
        "link": "https://www.w3schools.com/",
        "image": "w3schools"
    },
    {
        "id": 10,
        "name": "Codewars",
        "link": "https://www.codecademy.com/",
        "image": "codewars"
    }

];
let links = document.getElementById("links");
for (var i = 0; i < websites.length; i++) {
    var website = websites[i];
    links.innerHTML += `
                     <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="/images/websites/${website.image}.png" class="img-thumbnail" alt="Brand-1" />
                                    </div>
                                    <div class="flip-card-back">
                                        <h5>${website.name}</h5>
                                        <a class="btn btn-info" href="${website.link}">Go to page</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                       `;

}
