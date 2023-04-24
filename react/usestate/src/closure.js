function getName() {
  let name = 'GeoJung';
  return function () {
    name = 'GeoJung Im';
    return name;
  };
}

const fullName = getName();
console.log(fullName());
