export const burguer = [
  {
    icon: "fas fa-hamburger",       
    food: "burguer",
    title: "Cuarto de libra",
    description: "Doble carne, doble cheddar, cebolla y pepinillos",
    price: 7,
    background: 'hamburguesa_1'
  },
  {
      icon: "fas fa-hamburger",       
      food: "burguer",
      title: "La agranda venas",
      description: "Carne, panceta, huevo, cebolla caramelizada",
      price: 8,
      background: 'hamburguesa_1'
  },
  {
      icon: "fas fa-hamburger",       
      food: "burguer",
      title: "Vegana",
      description: "Hamburguesa de lentejas, lechuga, tomate",
      price: 5,
      background: 'hamburguesa_1'
  }
];

export const pizza = [
  {
      icon: "fas fa-pizza-slice",
      food: "pizza",
      title: "Mixta",
      description: "Muzzarella, jamón, morrón, aceitunas",
      price: 5,
      background: 'pizza'
  },
  {
    icon: "fas fa-pizza-slice",
    food: "pizza",
    title: "Fugazzaceta",
    description: "Muzzarella, cebolla y parmesano",
    price: 5,
    background: 'pizza'
  },
  {
      icon: "fas fa-pizza-slice",
      food: "pizza",
      title: "Clásica",
      description: "Muzzarella y aceitunas",
      price: 3,
      background: 'pizza'
  }
];

export const coffee = [
  {
    icon: 'fas fa-coffee',
    food: 'coffee',
    title: 'Negro',
    description: 'Café grano molido',
    price: 1,
    background: 'cafe'
  },
  {
    icon: 'fas fa-coffee',
    food: 'coffee',
    title: 'Con leche',
    description: 'Café grano molido con leche texturizada',
    price: 1.5,
    background: 'cafe'
  },
  {
    icon: 'fas fa-coffee',
    food: 'coffee',
    title: 'Expresso',
    description: 'Expreso grano molido',
    price: 1,
    background: 'cafe'
  }
]

export const deserts = [
  {
    icon: 'fas fa-cheese',
    food: 'deserts',
    title: 'Cheesecake',
    description: '',
    price: 3,
    background: 'postres'
  },
  {
    icon: 'fas fa-cheese',
    food: 'deserts',
    title: 'Muffin',
    description: '',
    price: 1,
    background: 'postres'
  },
  {
    icon: 'fas fa-cheese',
    food: 'deserts',
    title: 'Lemon Pie',
    description: '',
    price: 4,
    background: 'postres'
  }
]

export const oriental = [
  {
    icon: 'fab fa-alipay',
    food: 'oriental',
    title: 'Ramen',
    description: 'Sopa de miso con fideos de arroz, cerdo y topins varios',
    price: 7,
    background:'oriental'
  },
  {
    icon: 'fab fa-alipay',
    food: 'oriental',
    title: 'Sushi',
    description: '20 piezas de sushi a gusto',
    price: 10,
    background:'oriental'
  },
  {
    icon: 'fab fa-alipay',
    food: 'oriental',
    title: 'La empanadita coreana esa',
    description: 'Empanada pálida con sabor a pescao 12 unidades',
    price: 7,
    background:'oriental'
  }
]

export const home = [
  ...burguer,
  ...pizza,
  ...coffee,
  ...deserts,
  ...oriental
]
