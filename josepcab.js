// Titulo: Plan de Alimentación
const foodDatabase = {
  "p0_m0": {
    "name": "Sandwich Vegetal de Jamón York",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd5829b0c67f95e9a8e7e.png",
    "calories": 437, "protein": 24.4, "carbs": 39.5, "fats": 20.1,
    "ingredients": [
      { "name": "Pan de Centeno", "quantity": "2", "unit": "rebanada(s)", "calories": 162, "protein": 5.4, "carbs": 30, "fats": 1.8 }
    ],
    "preparation": "1. Prepara un bocadillo con un par de rebanadas de Pan de Centeno. 2. Añade el Pavo o Jamón York y opcionalmente tomate y lechuga."
  }
};
const dailyMenus = [
  { "name": "Opciones 1", "targetMacros": { "calories": 2000, "protein": 150, "carbs": 200 }, "desayuno": ["p0_m0"], "comida": [], "cena": [], "extra": [] }
];