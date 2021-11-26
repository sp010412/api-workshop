var carColors = document.querySelector(".colors");
var allCars = document.querySelector(".cars");
var carMakes = document.querySelector(".brands");

var templateSource = document.querySelector(".userTemplate");
var userTemplate = Handlebars.compile(templateSource.innerHTML);



axios.get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (element) {
        carColors.innerHTML = userTemplate({
            colors: element.data
        });
    });

    axios.get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (element) {
        carMakes.innerHTML = userTemplate({
            colors: element.data
        });
    });

    axios.get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (element) {
        allCars.innerHTML = userTemplate({
            cars: element.data
        });
    });