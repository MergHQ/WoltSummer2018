export default class Customer {
  first_name: String;
  id: String;
  last_name: String;
  location: {
    lat: Number;
    lon: Number;
  }

  constructor(obj) {
    Object.assign(this, obj);
  }
}