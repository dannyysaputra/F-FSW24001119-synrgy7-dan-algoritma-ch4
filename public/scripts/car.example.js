import Component from "./component.js";

export default class Car extends Component {
  static list = [];

  static init() {
    const carsString = localStorage.getItem('CARS');
    if (carsString) {
        this.list = JSON.parse(carsString).map((carData) => new this(carData));
    }
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
    typeDriver,
  }) {
    super();
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
    this.typeDriver = typeDriver;
  }

  render() {
    return `
      <div class="card">
        <img src="${this.image}" alt="">
        <div class="card-body">
          <p>${this.manufacture}/${this.model}</p>
          <p>${this.rentPerDay} /hari</p>
          <p>${this.description}</p>
          <p>${this.capacity}</p>
          <p>${this.transmission}</p>
          <p>tahun: ${this.year}</p>
          <button type="button" class="btn btn-colour-1">Pilih Mobil</button>
        </div>
      </div>
    `;
  }
}

Car.init();