// Titulo: Plan de alimentación de Fran Mohedano — 3 opciones
// Alergias: Sin restricciones médicas registradas
const foodDatabase = {
  "o1_des": {
    "name": "Desayuno: Tortilla, avena y frutos rojos",
    "calories": 521,
    "protein": 38,
    "carbs": 43,
    "fats": 21,
    "ingredients": [
      {
        "name": "Huevos",
        "quantity": "3",
        "unit": "unidad(es)",
        "calories": 234,
        "protein": 19.5,
        "carbs": 1.7,
        "fats": 16.5
      },
      {
        "name": "Claras de huevo",
        "quantity": "100",
        "unit": "g",
        "calories": 52,
        "protein": 11,
        "carbs": 0.7,
        "fats": 0
      },
      {
        "name": "Copos de avena",
        "quantity": "50",
        "unit": "g",
        "calories": 185,
        "protein": 6.5,
        "carbs": 30.6,
        "fats": 3.5
      },
      {
        "name": "Frutos rojos",
        "quantity": "100",
        "unit": "g",
        "calories": 50,
        "protein": 1,
        "carbs": 10,
        "fats": 0.5
      }
    ],
    "preparation": "Preparar la tortilla con los huevos y las claras. Cocer la avena y servir con los frutos rojos."
  },
  "o1_com": {
    "name": "Comida: Pollo con arroz y verduras",
    "calories": 623,
    "protein": 54,
    "carbs": 49,
    "fats": 19,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 248,
        "protein": 46.5,
        "carbs": 0,
        "fats": 5.4
      },
      {
        "name": "Arroz cocido",
        "quantity": "140",
        "unit": "g",
        "calories": 182,
        "protein": 3.8,
        "carbs": 39.2,
        "fats": 0.4
      },
      {
        "name": "Verduras variadas",
        "quantity": "150",
        "unit": "g",
        "calories": 60,
        "protein": 3,
        "carbs": 10,
        "fats": 0.5
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "15",
        "unit": "g",
        "calories": 133,
        "protein": 0,
        "carbs": 0,
        "fats": 15
      }
    ],
    "preparation": "Cocinar el pollo a la plancha, acompañar con arroz y verduras, y añadir el aceite al servir."
  },
  "o1_cen": {
    "name": "Cena: Salmón con patata y verduras",
    "calories": 596,
    "protein": 44,
    "carbs": 41,
    "fats": 27,
    "ingredients": [
      {
        "name": "Salmón",
        "quantity": "170",
        "unit": "g",
        "calories": 354,
        "protein": 37,
        "carbs": 0,
        "fats": 22
      },
      {
        "name": "Patata cocida o asada",
        "quantity": "180",
        "unit": "g",
        "calories": 138,
        "protein": 3.6,
        "carbs": 30.6,
        "fats": 0.2
      },
      {
        "name": "Verduras variadas",
        "quantity": "150",
        "unit": "g",
        "calories": 60,
        "protein": 3,
        "carbs": 10,
        "fats": 0.5
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44,
        "protein": 0,
        "carbs": 0,
        "fats": 5
      }
    ],
    "preparation": "Cocinar el salmón a la plancha u horno y servir con la patata y las verduras."
  },
  "o1_sna": {
    "name": "Snack: Yogur alto en proteína con almendras",
    "calories": 237,
    "protein": 23,
    "carbs": 11,
    "fats": 8,
    "ingredients": [
      {
        "name": "Yogur alto en proteína natural",
        "quantity": "200",
        "unit": "g",
        "calories": 150,
        "protein": 20,
        "carbs": 8,
        "fats": 0.5
      },
      {
        "name": "Almendras",
        "quantity": "15",
        "unit": "g",
        "calories": 87,
        "protein": 3,
        "carbs": 3,
        "fats": 7.5
      }
    ],
    "preparation": "Mezclar y consumir frío."
  },
  "o2_des": {
    "name": "Desayuno: Tortilla con aguacate y manzana",
    "calories": 492,
    "protein": 33,
    "carbs": 30,
    "fats": 29,
    "ingredients": [
      {
        "name": "Huevos",
        "quantity": "3",
        "unit": "unidad(es)",
        "calories": 234,
        "protein": 19.5,
        "carbs": 1.7,
        "fats": 16.5
      },
      {
        "name": "Claras de huevo",
        "quantity": "100",
        "unit": "g",
        "calories": 52,
        "protein": 11,
        "carbs": 0.7,
        "fats": 0
      },
      {
        "name": "Aguacate",
        "quantity": "80",
        "unit": "g",
        "calories": 128,
        "protein": 1.6,
        "carbs": 6.8,
        "fats": 12
      },
      {
        "name": "Manzana",
        "quantity": "150",
        "unit": "g",
        "calories": 78,
        "protein": 0.5,
        "carbs": 21,
        "fats": 0.2
      }
    ],
    "preparation": "Preparar la tortilla y acompañar con aguacate y manzana."
  },
  "o2_com": {
    "name": "Comida: Pavo con quinoa y verduras",
    "calories": 657,
    "protein": 49,
    "carbs": 46,
    "fats": 33,
    "ingredients": [
      {
        "name": "Pechuga de pavo",
        "quantity": "130",
        "unit": "g",
        "calories": 176,
        "protein": 39,
        "carbs": 0,
        "fats": 2.6
      },
      {
        "name": "Quinoa cocida",
        "quantity": "150",
        "unit": "g",
        "calories": 180,
        "protein": 6,
        "carbs": 32,
        "fats": 3
      },
      {
        "name": "Verduras variadas",
        "quantity": "200",
        "unit": "g",
        "calories": 80,
        "protein": 4,
        "carbs": 14,
        "fats": 1
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "25",
        "unit": "g",
        "calories": 221,
        "protein": 0,
        "carbs": 0,
        "fats": 25
      }
    ],
    "preparation": "Cocinar el pavo y las verduras, servir con la quinoa y añadir el aceite."
  },
  "o2_cen": {
    "name": "Cena: Ternera magra con patata y verduras",
    "calories": 601,
    "protein": 38,
    "carbs": 47,
    "fats": 31,
    "ingredients": [
      {
        "name": "Ternera magra",
        "quantity": "120",
        "unit": "g",
        "calories": 240,
        "protein": 31,
        "carbs": 0,
        "fats": 12
      },
      {
        "name": "Patata cocida o asada",
        "quantity": "220",
        "unit": "g",
        "calories": 169,
        "protein": 4.4,
        "carbs": 37.4,
        "fats": 0.2
      },
      {
        "name": "Verduras variadas",
        "quantity": "150",
        "unit": "g",
        "calories": 60,
        "protein": 3,
        "carbs": 10,
        "fats": 0.5
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "15",
        "unit": "g",
        "calories": 132,
        "protein": 0,
        "carbs": 0,
        "fats": 15
      }
    ],
    "preparation": "Cocinar la ternera al punto deseado y acompañar con patata y verduras."
  },
  "o2_sna": {
    "name": "Snack: Batido whey de proteína",
    "calories": 250,
    "protein": 29,
    "carbs": 8,
    "fats": 13,
    "ingredients": [
      {
        "name": "Proteína whey",
        "quantity": "30",
        "unit": "g",
        "calories": 120,
        "protein": 24,
        "carbs": 3,
        "fats": 2
      },
      {
        "name": "Bebida de almendra sin azúcar",
        "quantity": "250",
        "unit": "ml",
        "calories": 40,
        "protein": 1,
        "carbs": 2,
        "fats": 3
      },
      {
        "name": "Crema de cacahuete",
        "quantity": "15",
        "unit": "g",
        "calories": 90,
        "protein": 4,
        "carbs": 3,
        "fats": 7.5
      }
    ],
    "preparation": "Triturar todos los ingredientes con hielo hasta obtener un batido homogéneo."
  },
  "o3_des": {
    "name": "Desayuno: Yogur, avena, frutos rojos y nueces",
    "calories": 476,
    "protein": 38,
    "carbs": 48,
    "fats": 13,
    "ingredients": [
      {
        "name": "Yogur griego alto en proteína",
        "quantity": "300",
        "unit": "g",
        "calories": 180,
        "protein": 30,
        "carbs": 12,
        "fats": 0
      },
      {
        "name": "Copos de avena",
        "quantity": "40",
        "unit": "g",
        "calories": 148,
        "protein": 5.2,
        "carbs": 24,
        "fats": 2.8
      },
      {
        "name": "Frutos rojos",
        "quantity": "100",
        "unit": "g",
        "calories": 50,
        "protein": 1,
        "carbs": 10,
        "fats": 0.5
      },
      {
        "name": "Nueces",
        "quantity": "15",
        "unit": "g",
        "calories": 98,
        "protein": 2,
        "carbs": 2,
        "fats": 10
      }
    ],
    "preparation": "Mezclar todos los ingredientes en un bol."
  },
  "o3_com": {
    "name": "Comida: Bacalao con garbanzos y verduras",
    "calories": 669,
    "protein": 50,
    "carbs": 46,
    "fats": 33,
    "ingredients": [
      {
        "name": "Bacalao",
        "quantity": "170",
        "unit": "g",
        "calories": 153,
        "protein": 35.7,
        "carbs": 0,
        "fats": 1.7
      },
      {
        "name": "Garbanzos cocidos",
        "quantity": "120",
        "unit": "g",
        "calories": 197,
        "protein": 10.5,
        "carbs": 32,
        "fats": 3
      },
      {
        "name": "Verduras variadas",
        "quantity": "200",
        "unit": "g",
        "calories": 80,
        "protein": 4,
        "carbs": 14,
        "fats": 1
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "27",
        "unit": "g",
        "calories": 239,
        "protein": 0,
        "carbs": 0,
        "fats": 27
      }
    ],
    "preparation": "Cocinar el bacalao y servir con los garbanzos y las verduras salteadas."
  },
  "o3_cen": {
    "name": "Cena: Pollo con arroz y verduras",
    "calories": 613,
    "protein": 43,
    "carbs": 46,
    "fats": 27,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": "120",
        "unit": "g",
        "calories": 198,
        "protein": 37.2,
        "carbs": 0,
        "fats": 4.3
      },
      {
        "name": "Arroz cocido",
        "quantity": "130",
        "unit": "g",
        "calories": 169,
        "protein": 3.5,
        "carbs": 36.4,
        "fats": 0.4
      },
      {
        "name": "Verduras variadas",
        "quantity": "150",
        "unit": "g",
        "calories": 60,
        "protein": 3,
        "carbs": 10,
        "fats": 0.5
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "21",
        "unit": "g",
        "calories": 186,
        "protein": 0,
        "carbs": 0,
        "fats": 21
      }
    ],
    "preparation": "Cocinar el pollo a la plancha y servir con arroz y verduras."
  },
  "o3_sna": {
    "name": "Snack: Queso fresco batido con nueces",
    "calories": 212,
    "protein": 20,
    "carbs": 8,
    "fats": 11,
    "ingredients": [
      {
        "name": "Queso fresco batido",
        "quantity": "150",
        "unit": "g",
        "calories": 147,
        "protein": 18,
        "carbs": 6,
        "fats": 4.5
      },
      {
        "name": "Nueces",
        "quantity": "10",
        "unit": "g",
        "calories": 65,
        "protein": 1.5,
        "carbs": 1.5,
        "fats": 6.5
      }
    ],
    "preparation": "Mezclar y consumir frío."
  },
  "custom_1788761555058": {
    "name": "Bol proteico de skyr, frutos rojos y avena",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/sin-cocina/bol-skyr-frutos-rojos-avena.jpg",
    "calories": 534,
    "protein": 57,
    "carbs": 68,
    "fats": 4,
    "ingredients": [
      {
        "name": "Skyr natural 0%",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Proteína whey",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Frutos rojos lavados",
        "quantity": "100",
        "unit": "g",
        "calories": 50,
        "protein": 1,
        "carbs": 12,
        "fats": 0.5,
        "baseCalories": 0.5,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "berries"
      },
      {
        "name": "Copos de avena",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.4,
        "carbs": 52.5,
        "fats": 1.4,
        "baseCalories": 3.7,
        "baseProtein": 0.1,
        "baseCarbs": 0.8,
        "baseFats": 0,
        "category": "grain_carb_dry"
      }
    ],
    "preparation": "Poner el skyr en un bol, mezclar la proteína y añadir la avena y los frutos rojos. Se prepara en 3 minutos, sin fuego, cocina ni electrodomésticos."
  },
  "custom_1788761621801": {
    "name": "Ensalada verde de pollo, lentejas y salsa de yogur",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/sin-cocina/ensalada-verde-pollo-lentejas.jpg",
    "calories": 839,
    "protein": 94,
    "carbs": 70,
    "fats": 17,
    "ingredients": [
      {
        "name": "Tiras de pechuga de pollo asada listas para comer",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.3,
        "baseCarbs": 0,
        "baseFats": 0,
        "category": "lean_protein"
      },
      {
        "name": "Mezcla de hojas verdes lavadas",
        "quantity": "100",
        "unit": "g",
        "calories": 100,
        "protein": 5,
        "carbs": 10,
        "fats": 4,
        "baseCalories": 1,
        "baseProtein": 0.1,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_other"
      },
      {
        "name": "Lentejas cocidas de bote",
        "quantity": "150",
        "unit": "g",
        "calories": 195,
        "protein": 12,
        "carbs": 33,
        "fats": 0.8,
        "baseCalories": 1.3,
        "baseProtein": 0.1,
        "baseCarbs": 0.2,
        "baseFats": 0,
        "category": "legume_carb_cooked"
      },
      {
        "name": "Pepino",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Tomates cherry",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Skyr natural 0%",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Mostaza",
        "quantity": "100",
        "unit": "g",
        "calories": 100,
        "protein": 5,
        "carbs": 10,
        "fats": 4,
        "baseCalories": 1,
        "baseProtein": 0.1,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_other"
      }
    ],
    "preparation": "Escurrir las lentejas y ponerlas sobre las hojas verdes con el pollo, el pepino y los tomates. Mezclar skyr y mostaza para el aliño. Todo se compra cocinado o listo para consumir; montaje en 5 minutos y sin calor."
  },
  "custom_1788761642275": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "calories": 510,
    "protein": 45,
    "carbs": 30,
    "fats": 22,
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Pimiento Verde",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Cebolla",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Lomo de Salmón",
        "quantity": "150",
        "unit": "g",
        "calories": 330,
        "protein": 33,
        "carbs": 0,
        "fats": 21,
        "baseCalories": 2.2,
        "baseProtein": 0.2,
        "baseCarbs": 0,
        "baseFats": 0.1,
        "category": "fatty_protein"
      }
    ],
    "preparation": "1. Cortar el salmón en dados de tamaño mediano. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos adecuados para wok (ej. juliana gruesa o dados). 2. Calentar un wok o sartén grande con un poco de aceite a fuego alto. Saltear el salmón unos 2-3 minutos hasta que esté dorado por fuera pero ligeramente crudo por dentro. Retirar y reservar. 3. Añadir las verduras más duras (cebolla, pimientos) al wok y saltear durante 3-4 minutos. Luego añadir el tomate y saltear 1-2 minutos más. 4. Incorporar el salmón de nuevo al wok. Añadir salsa de soja (baja en sodio preferiblemente) y un toque de jengibre rallado o ajo picado (opcional). Mezclar bien y cocinar por 1-2 minutos más hasta que el salmón esté cocido y todo bien caliente. Servir inmediatamente, opcionalmente sobre una base de arroz o noodles."
  },
  "custom_1788761658924": {
    "name": "Manzana Asada con Canela y Nueces",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/prueba-chatgpt/manzana-asada-canela-nueces.jpg",
    "calories": 225,
    "protein": 4,
    "carbs": 27,
    "fats": 12,
    "ingredients": [
      {
        "name": "Manzana",
        "quantity": "1",
        "unit": "ud",
        "calories": 90,
        "protein": 0.8,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 90,
        "baseProtein": 0.8,
        "baseCarbs": 22.5,
        "baseFats": 0.3,
        "category": "default_fruit"
      },
      {
        "name": "Nueces",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.2,
        "baseFats": 0.4,
        "category": "solid_fat"
      }
    ],
    "preparation": "1. Cortar la manzana y espolvorear canela. 2. Hornear hasta que quede tierna. 3. Añadir las nueces al servir."
  },
  "custom_1788761688365": {
    "name": "Pudding de chía alto en proteína",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d043e9b0c67b6db9b08b8.png",
    "calories": 349,
    "protein": 32,
    "carbs": 16,
    "fats": 17,
    "ingredients": [
      {
        "name": "Semillas de Chía",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.2,
        "baseFats": 0.4,
        "category": "solid_fat"
      },
      {
        "name": "Leche",
        "quantity": "100",
        "unit": "g",
        "calories": 100,
        "protein": 5,
        "carbs": 10,
        "fats": 4,
        "baseCalories": 1,
        "baseProtein": 0.1,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_other"
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      }
    ],
    "preparation": "1. Mezclar las semillas de chía, la leche (o bebida vegetal) y la proteína en polvo en un recipiente. 2. Remover bien y dejar reposar en la nevara durante al menos 4 horas o toda la noche. 3. Servir frío, opcionalmente con fruta o frutos secos."
  },
  "custom_1788761709740": {
    "name": "Quinoa con ternera y verduras",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/quinoa-ternera-verduras.jpg",
    "calories": 764,
    "protein": 47,
    "carbs": 68,
    "fats": 33,
    "ingredients": [
      {
        "name": "Quinoa",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.4,
        "carbs": 52.5,
        "fats": 1.4,
        "baseCalories": 3.7,
        "baseProtein": 0.1,
        "baseCarbs": 0.8,
        "baseFats": 0,
        "category": "grain_carb_dry"
      },
      {
        "name": "Ternera magra",
        "quantity": "150",
        "unit": "g",
        "calories": 330,
        "protein": 33,
        "carbs": 0,
        "fats": 21,
        "baseCalories": 2.2,
        "baseProtein": 0.2,
        "baseCarbs": 0,
        "baseFats": 0.1,
        "category": "fatty_protein"
      },
      {
        "name": "Pimiento rojo",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Calabacín",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.8,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1,
        "category": "oil_fat"
      }
    ],
    "preparation": "1. Lavar y cocer la quinoa según el envase. 2. Saltear el pimiento y el calabacín con el aceite medido, añadir la ternera en tiras y cocinar; mezclar con la quinoa."
  },
  "custom_1788761725354": {
    "name": "Pollo al limón con espárragos y espinacas",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/pollo-limon-esparragos.jpg",
    "calories": 563,
    "protein": 51,
    "carbs": 40,
    "fats": 21,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.3,
        "baseCarbs": 0,
        "baseFats": 0,
        "category": "lean_protein"
      },
      {
        "name": "Espárragos verdes",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Espinacas",
        "quantity": "1",
        "unit": "ud",
        "calories": 90,
        "protein": 0.8,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 90,
        "baseProtein": 0.8,
        "baseCarbs": 22.5,
        "baseFats": 0.3,
        "category": "default_fruit"
      },
      {
        "name": "Zumo de limón",
        "quantity": "100",
        "unit": "g",
        "calories": 100,
        "protein": 5,
        "carbs": 10,
        "fats": 4,
        "baseCalories": 1,
        "baseProtein": 0.1,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_other"
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.8,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1,
        "category": "oil_fat"
      }
    ],
    "preparation": "1. Cocinar el pollo a la plancha con parte del aceite. 2. Saltear los espárragos y las espinacas con el resto. 3. Añadir el zumo de limón al pollo y servir."
  },
  "custom_1788761728649": {
    "name": "Vaso exprés de queso batido, whey, plátano y avena",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/sin-cocina/vaso-queso-batido-platano-avena.jpg",
    "calories": 574,
    "protein": 57,
    "carbs": 78,
    "fats": 4,
    "ingredients": [
      {
        "name": "Queso fresco batido 0%",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Proteína whey",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Plátano",
        "quantity": "1",
        "unit": "ud",
        "calories": 90,
        "protein": 0.8,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 90,
        "baseProtein": 0.8,
        "baseCarbs": 22.5,
        "baseFats": 0.3,
        "category": "default_fruit"
      },
      {
        "name": "Copos de avena",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.4,
        "carbs": 52.5,
        "fats": 1.4,
        "baseCalories": 3.7,
        "baseProtein": 0.1,
        "baseCarbs": 0.8,
        "baseFats": 0,
        "category": "grain_carb_dry"
      }
    ],
    "preparation": "Mezclar el queso batido con la whey y terminar con el plátano en rodajas y la avena. Se monta en 3 minutos y no necesita cocina."
  },
  "custom_1788761745835": {
    "name": "Smoothie bowl de skyr, mango y avena",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/smoothie-skyr-mango-avena.jpg",
    "calories": 595,
    "protein": 36,
    "carbs": 81,
    "fats": 15,
    "ingredients": [
      {
        "name": "Skyr natural",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Mango",
        "quantity": "1",
        "unit": "ud",
        "calories": 90,
        "protein": 0.8,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 90,
        "baseProtein": 0.8,
        "baseCarbs": 22.5,
        "baseFats": 0.3,
        "category": "default_fruit"
      },
      {
        "name": "Copos de avena",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.4,
        "carbs": 52.5,
        "fats": 1.4,
        "baseCalories": 3.7,
        "baseProtein": 0.1,
        "baseCarbs": 0.8,
        "baseFats": 0,
        "category": "grain_carb_dry"
      },
      {
        "name": "Crema de cacahuete 100%",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.2,
        "baseFats": 0.4,
        "category": "solid_fat"
      }
    ],
    "preparation": "1. Triturar el skyr con el mango y la avena; añadir un poco de agua si hace falta. 2. Servir en un bol y colocar la crema de cacahuete por encima."
  },
  "custom_1788761749991": {
    "name": "Cuscús integral con pavo y calabaza",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/cuscus-pavo-calabaza.jpg",
    "calories": 674,
    "protein": 56,
    "carbs": 68,
    "fats": 18,
    "ingredients": [
      {
        "name": "Cuscús integral",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.4,
        "carbs": 52.5,
        "fats": 1.4,
        "baseCalories": 3.7,
        "baseProtein": 0.1,
        "baseCarbs": 0.8,
        "baseFats": 0,
        "category": "grain_carb_dry"
      },
      {
        "name": "Pechuga de pavo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.3,
        "baseCarbs": 0,
        "baseFats": 0,
        "category": "lean_protein"
      },
      {
        "name": "Calabaza",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Pimiento rojo",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.8,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1,
        "category": "oil_fat"
      }
    ],
    "preparation": "1. Cortar la calabaza en dados pequeños y ablandarla 4–5 minutos en microondas. 2. Hidratar el cuscús según el envase. 3. Saltear el pavo y el pimiento con el aceite; incorporar la calabaza y el cuscús."
  },
  "custom_1788761754069": {
    "name": "Berenjenas Rellenas de Pavo al Horno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cdf6e7de6638e2767e27.png",
    "calories": 480,
    "protein": 59,
    "carbs": 23,
    "fats": 14,
    "ingredients": [
      {
        "name": "Berenjena",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Carne Picada de Pavo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.3,
        "baseCarbs": 0,
        "baseFats": 0,
        "category": "lean_protein"
      },
      {
        "name": "Cebolla",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Tomate Frito",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "default_veg"
      },
      {
        "name": "Queso Havarti Light",
        "quantity": "30",
        "unit": "g",
        "calories": 105,
        "protein": 7.5,
        "carbs": 0.6,
        "fats": 7.5,
        "baseCalories": 3.5,
        "baseProtein": 0.3,
        "baseCarbs": 0,
        "baseFats": 0.3,
        "category": "cheese"
      }
    ],
    "preparation": "1. Asar las berenjenas partidas por la mitad. Vaciar la carne. 2. Sofreír cebolla y carne de pavo. Añadir la carne de berenjena picada y tomate. 3. Rellenar las pieles, cubrir con queso y gratinar."
  },
  "custom_1788761757802": {
    "name": "Uvas con skyr y nueces",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/uvas-skyr-nueces.jpg",
    "calories": 299,
    "protein": 28,
    "carbs": 18,
    "fats": 14,
    "ingredients": [
      {
        "name": "Uvas",
        "quantity": "100",
        "unit": "g",
        "calories": 50,
        "protein": 1,
        "carbs": 12,
        "fats": 0.5,
        "baseCalories": 0.5,
        "baseProtein": 0,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "berries"
      },
      {
        "name": "Skyr natural",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.1,
        "baseFats": 0,
        "category": "whey_protein"
      },
      {
        "name": "Nueces",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.2,
        "baseFats": 0.4,
        "category": "solid_fat"
      }
    ],
    "preparation": "1. Lavar las uvas y servirlas con el skyr y las nueces picadas."
  }
};
const dailyMenus = [
  {
    "name": "Opciones uno",
    "targetMacros": {
      "calories": 1977,
      "protein": 159,
      "carbs": 144,
      "fats": 75
    },
    "baselineTotals": {
      "calories": 1977,
      "protein": 159,
      "carbs": 144,
      "fats": 75
    },
    "desayuno": [
      "custom_1788761555058"
    ],
    "comida": [
      "custom_1788761621801"
    ],
    "cena": [
      "custom_1788761642275"
    ],
    "extra": [
      "custom_1788761658924"
    ]
  },
  {
    "name": "Opciones dos",
    "targetMacros": {
      "calories": 2000,
      "protein": 149,
      "carbs": 131,
      "fats": 106
    },
    "baselineTotals": {
      "calories": 2000,
      "protein": 149,
      "carbs": 131,
      "fats": 106
    },
    "desayuno": [
      "custom_1788761688365"
    ],
    "comida": [
      "custom_1788761709740"
    ],
    "cena": [
      "custom_1788761725354"
    ],
    "extra": [
      "custom_1788761728649"
    ]
  },
  {
    "name": "Opciones tres",
    "targetMacros": {
      "calories": 1970,
      "protein": 151,
      "carbs": 148,
      "fats": 84
    },
    "baselineTotals": {
      "calories": 1970,
      "protein": 151,
      "carbs": 148,
      "fats": 84
    },
    "desayuno": [
      "custom_1788761745835"
    ],
    "comida": [
      "custom_1788761749991"
    ],
    "cena": [
      "custom_1788761754069"
    ],
    "extra": [
      "custom_1788761757802"
    ]
  }
];
