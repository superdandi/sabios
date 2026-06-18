export interface Pizza {
  id: number;
  name: string;
  ingredients: string;
  description: string;
  price: string;
}

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Pepperoni Clásica",
    ingredients: "Salsa de tomate casera, mozzarella, pepperoni crocante",
    description:
      "Salsa de tomate casera, mozzarella fundida y generosas rodajas de pepperoni ligeramente crocantes. Una favorita infalible, para quienes saben lo que quieren.",
    price: "$6.500",
  },
  {
    id: 2,
    name: "Margarita Tradicional",
    ingredients: "Salsa de tomate suave, mozzarella fresca, albahaca",
    description:
      "Una base de salsa de tomate suave, mozzarella fresca y hojas de albahaca recién cortadas. Sencilla, elegante y profundamente sabrosa. El alma de la pizza.",
    price: "$6.500",
  },
  {
    id: 3,
    name: "Hawaiana Dulce y Salada",
    ingredients: "Jamón ahumado, piña, mozzarella",
    description:
      "Jamón ahumado, trozos jugosos de piña, salsa de tomate y mozzarella. La combinación que no admite puntos medios, pero que a muchos les roba el corazón.",
    price: "$7.000",
  },
  {
    id: 4,
    name: "Cuatro Quesos Cremosa",
    ingredients: "Mozzarella, parmesano, provolone, gorgonzola",
    description:
      "Una sinfonía de quesos: mozzarella, parmesano, provolone y gorgonzola sobre masa artesanal. Intensa, suave y completamente adictiva.",
    price: "$8.000",
  },
  {
    id: 5,
    name: "Vegetariana Fresca",
    ingredients: "Pimientos tricolores, champiñones, cebolla morada, aceitunas",
    description:
      "Pimientos tricolores, champiñones, cebolla morada, aceitunas negras y un toque de orégano sobre mozzarella y salsa de tomate. Color, frescura y mucho sabor.",
    price: "$7.000",
  },
  {
    id: 6,
    name: "Barbacoa de Pollo",
    ingredients: "Pollo marinado, cebolla morada, salsa barbacoa",
    description:
      "Tiras de pollo marinado, cebolla morada y salsa barbacoa sobre queso mozzarella fundido. Dulce, ahumada y con un final que sorprende.",
    price: "$7.500",
  },
  {
    id: 7,
    name: "Carnívora Suprema",
    ingredients: "Pepperoni, salchicha italiana, jamón, tocino",
    description:
      "Una mezcla poderosa de pepperoni, salchicha italiana, jamón y tocino sobre nuestra base clásica. Para los que no escatiman en proteínas.",
    price: "$8.500",
  },
  {
    id: 8,
    name: "Champiñones y Cebolla Caramelizada",
    ingredients: "Champiñones salteados, cebolla caramelizada, ajo",
    description:
      "Champiñones salteados y cebolla lentamente caramelizada con un toque de ajo, sobre una base cremosa de queso y salsa suave. Sutil y elegante.",
    price: "$7.000",
  },
  {
    id: 9,
    name: "Pollo Picante con Jalapeños",
    ingredients: "Pollo especiado, jalapeños, mozzarella",
    description:
      "Pollo especiado, jalapeños en rodajas, salsa de tomate y mozzarella. Picor justo, sabor intenso. Para los que disfrutan una buena patada de fuego.",
    price: "$7.500",
  },
  {
    id: 10,
    name: "Especial de la Casa",
    ingredients: "Ingredientes de temporada",
    description:
      "Creación exclusiva de SABIO: ingredientes de temporada y toques secretos que cambian mes a mes. Pregunta por la combinación del momento.",
    price: "Variable",
  },
];
