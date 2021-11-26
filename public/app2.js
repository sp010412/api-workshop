/* eslint-disable no-undef */
let show = document.querySelector('.display');
let btn = document.querySelector('.show');

var templateSource = document.querySelector('.userTemplate2');
var userTemplate2 = Handlebars.compile(templateSource.innerHTML);

btn.addEventListener('click', function () {
    var colors = document.querySelector('.byColor').value;
    var makes = document.querySelector('.byMake').value;

    if (colors && !makes) {
        axios.get(`https://api-tutor.herokuapp.com/v1/cars/color/${colors}`)
            .then(function (element) {
                show.innerHTML = userTemplate2({
                    all: element.data
                });
            });
    } else if (makes && !colors) {
        axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${makes}`)
            .then(function (element) {
                show.innerHTML = userTemplate2({
                    all: element.data
                });
            });
    } else if (colors && makes) {
        axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${makes}/color/${colors}`)
            .then(function (element) {
                show.innerHTML = userTemplate2({
                    all: element.data
                });
            });
    }
});
