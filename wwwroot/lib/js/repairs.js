var repairs = [
    {
        "id": 1,
        "type": "Bootstrap 3.7",
        "price": "Call for price",
        "address": "Check Inventory",
        "description": "Powered by Bootstrap most latest version 3.7",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "1"
    },
    {
        "id": 2,
        "type": "JQuery 3+",
        "price": "$32.00",
        "address": "Check Inventory",
        "description": "Template is fully customized according to latest Jquery.",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "2"
    },
    {
        "id": 3,
        "type": "SEO Friendly",
        "price": "$44.00",
        "address": "Check Inventory",
        "description": "We have coded this template with Best SEO practices",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "3"
    },
    {
        "id": 4,
        "type": "100% Responsive",
        "price": "$102.00",
        "address": "Check Inventory",
        "description": "Fully responsive layout using default Bootstrap grid layout.",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "4"
    },
    {
        "id": 5,
        "type": "High Performance",
        "price": "$98.00",
        "address": "Check Inventory",
        "description": "Users' experience in terms of your site Based On GTMetrix",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "5"
    },
    {
        "id": 6,
        "type": "Fully Customizable",
        "price": "$155.00",
        "address": "Check Inventory",
        "description": "Control easily the size by using default Bootstrap grid layout.",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "6"
    },
    {
        "id": 7,
        "type": "Easy To Use",
        "price": "$322.00",
        "address": "Check Inventory",
        "description": "Fully documention and premium support 24/7.",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "7"
    },
    {
        "id": 8,
        "type": "Unlimited Options",
        "price": "$129.00",
        "address": "Check Inventory",
        "description": "A large range of options and more are coming with your feedbacks.",
        "days": "Mon-Fri",
        "area": "orlando",
        "image": "8"
    }

];
let card = document.getElementById("card");
for (var i = 0; i < repairs.length; i++) {
    var repair = repairs[i];
    card.innerHTML += `
                               <div class="col-md-3 col-sm-6 col-xs-12">
                                             <div class="core-features">
                                                    <div class="circle">
                                                        <img class="img-fluid" src="images/features/${repair.image}.png" alt="crib thumbnail">
                                                    </div>
                                                    <div style="height:230px" class="mb-3">
                                                        <h3>${repair.type}</h3>
                                                        <p>${repair.description}</p>
                                                        <hr>
                                                        <button id="more" class="btn btn-sm btn-primary more"> Details </button>
                                                        <p style="display:none;">${repair.description}</p>
                                                    </div>
                                              </div>
                                          </div>


                    `
};
var more = document.getElementsByClassName("more")
for (var i = 0; i < more.length; i++) {
    more[i].onclick = function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    }
}


