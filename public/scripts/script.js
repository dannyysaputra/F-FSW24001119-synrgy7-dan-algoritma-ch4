import Car from "./car.example.js";

document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.querySelector(".sidebar");
    var closeBtn = document.querySelector('.close-sidebar');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    var overlay = document.querySelector(".overlay");

    if (closeBtn && navbarCollapse) {
        navbarCollapse.addEventListener('show.bs.collapse', function() {
            sidebar.classList.remove('d-none');
            overlay.classList.remove('d-none');
        });
        

        navbarCollapse.addEventListener('hide.bs.collapse', function() {
            sidebar.classList.add('d-none');
        });

        closeBtn.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
            overlay.classList.add('d-none');
        });
    }
});

$('#datepicker').datepicker({ uiLibrary: 'bootstrap5', format: 'yyyy-mm-dd' });

// filter search mobil
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // ambil value pada form
    const typeDriver = document.getElementById('tipeDriver').value;
    const date = document.getElementById('datepicker').value;
    const time = document.getElementById('waktuAmbil').value;
    const passenger = document.getElementById('jumlahPenumpang').value;
    
    const userDateInput = new Date(`${date}T${time}`);
    const userTimestamp = userDateInput.getTime();

    const filteredCars = Car.list.filter(car => {
        const availableDate = new Date(car.availableAt).getTime();

        const filteredTypeDriver = typeDriver === "dengan-sopir" ? car.typeDriver === "dengan-sopir" : car.typeDriver === "tanpa-sopir";
        const filteredDate = availableDate > userTimestamp;
        const filteredPassenger = car.capacity >= passenger;
        const available = car.available === true;

        return filteredTypeDriver && filteredDate && filteredPassenger && available;
    });

    renderFilteredCars(filteredCars);
    console.log(filteredCars);
})

function renderFilteredCars(filteredCars) {
    const filterCarsContainer = document.querySelector('.result-search-car');
    filterCarsContainer.innerHTML = '';

    filteredCars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'col-4';
        carElement.innerHTML = car.render();
        filterCarsContainer.appendChild(carElement);
    });


}