const perfil = {
  nombre: "Cristian",
  apellido: "Almiron",
};

const region = {
  region: "Argentina",
};

const social = {
  twitter: "@Raptor19",
};

const resultado = Object.assign({}, perfil, region, social);

console.log(resultado);
