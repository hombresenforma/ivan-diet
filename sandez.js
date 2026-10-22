// Titulo: Plan de alimentación de Santi — 4 opciones
// Alergias: Sin restricciones médicas registradas
// Dos extras diarios, ambos incluidos en los totales. Pesos de arroz, pasta, avena y quinoa en crudo; legumbres cocidas y conservas escurridas.
// Recetas: DATABASE/NUTR_DATA. Perfiles de ingredientes: catálogo nutricional del CRM; yogur griego Danone natural según ficha del fabricante.
const foodDatabase = {
  "o1_des": {
    "name": "Tostada de Centeno con Cottage y Pavo",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b669d75b89c7ceec966248.png",
    "calories": 372,
    "protein": 39.1,
    "carbs": 30,
    "fats": 9.3,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "50",
        "unit": "g",
        "category": "bread_carb",
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.03,
        "calories": 135,
        "protein": 4.5,
        "carbs": 25,
        "fats": 1.5
      },
      {
        "name": "Queso Cottage",
        "quantity": "125",
        "unit": "g",
        "category": "light_cheese",
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04,
        "calories": 125,
        "protein": 15,
        "carbs": 5,
        "fats": 5
      },
      {
        "name": "Pavo",
        "quantity": "70",
        "unit": "g",
        "category": "lean_protein",
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "calories": 112,
        "protein": 19.6,
        "carbs": 0,
        "fats": 2.8
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Untar el queso cottage. 3. Colocar las lonchas de pavo encima."
  },
  "o1_com": {
    "name": "Arroz tres delicias",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68872f8e1fc4545c499532f0.png",
    "calories": 580.25,
    "protein": 31.3,
    "carbs": 65.9,
    "fats": 21.7,
    "ingredients": [
      {
        "name": "Arroz",
        "quantity": "75",
        "unit": "g",
        "category": "grain_carb_dry",
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "calories": 273.75,
        "protein": 9,
        "carbs": 56.25,
        "fats": 1.5
      },
      {
        "name": "Huevo (en tortilla)",
        "quantity": "1",
        "unit": "unidad(es)",
        "category": "egg",
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5,
        "gramsPerUnit": 50,
        "calories": 77.5,
        "protein": 6.5,
        "carbs": 0.55,
        "fats": 5.5
      },
      {
        "name": "Guisantes",
        "quantity": "100",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2
      },
      {
        "name": "Jamón York",
        "quantity": "80",
        "unit": "g",
        "category": "processed_protein",
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18,
        "calories": 184,
        "protein": 12.8,
        "carbs": 1.6,
        "fats": 14.4
      },
      {
        "name": "Maíz",
        "quantity": "50",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1
      }
    ],
    "preparation": "1. Cocer el arroz y reservar. 2. Hacer una tortilla francesa con los huevos y cortarla en trocitos. 3. Saltear los guisantes y el maíz. 4. Cortar el jamón York en daditos. 5. Mezclar todos los ingredientes en una sartén o wok con un poco de salsa de soja (opcional) y saltear todo junto durante un par de minutos."
  },
  "o1_cen": {
    "name": "Merluza a la Plancha",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b66b6dad027629d2f1e944.png",
    "calories": 284.2,
    "protein": 42,
    "carbs": 0,
    "fats": 11,
    "ingredients": [
      {
        "name": "Filete de Merluza",
        "quantity": "150",
        "unit": "g",
        "category": "lean_protein",
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "category": "oil_fat",
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1,
        "calories": 44.2,
        "protein": 0,
        "carbs": 0,
        "fats": 5
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      }
    ],
    "preparation": "1. Sazonar los filetes o rodajas de merluza con sal, pimienta y opcionalmente un poco de ajo en polvo o perejil picado. 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con un chorrito de aceite de oliva virgen extra. 3. Cuando el aceite esté caliente, colocar la merluza en la plancha. Cocinar durante unos 3-5 minutos por cada lado, dependiendo del grosor del pescado, hasta que esté opaca, bien cocida por dentro y se desmenuce fácilmente con un tenedor. 4. Servir inmediatamente, opcionalmente con un chorrito de zumo de limón fresco por encima."
  },
  "o1_cen2": {
    "name": "Judía verde con patata y Zanahoria",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cf5c1ddc9c1507857434b.png",
    "calories": 209.2,
    "protein": 7,
    "carbs": 32.5,
    "fats": 5.6,
    "ingredients": [
      {
        "name": "Judía Verde",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Patata",
        "quantity": "100",
        "unit": "g",
        "calories": 90,
        "protein": 2,
        "carbs": 20,
        "fats": 0.1,
        "baseCalories": 0.9,
        "baseProtein": 0.02,
        "baseCarbs": 0.2,
        "baseFats": 0.001
      },
      {
        "name": "Zanahoria",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "protein": 0,
        "carbs": 0,
        "fats": 5,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Lavar y cortar las judías verdes, pelar y cortar las patatas y zanahorias. 2. Cocer todas las verduras en agua con sal hasta que estén tiernas. 3. Escurrir y servir. Aliñar con aceite de oliva virgen extra."
  },
  "o2_des": {
    "name": "Porridge de Avena y Frutos Rojos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afdf19b8ed348797cbcd8.png",
    "calories": 461.75,
    "protein": 20.2,
    "carbs": 82.65,
    "fats": 6.8,
    "ingredients": [
      {
        "name": "Copos de Avena",
        "quantity": "75",
        "unit": "g",
        "category": "grain_carb_dry",
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "calories": 273.75,
        "protein": 9,
        "carbs": 56.25,
        "fats": 1.5
      },
      {
        "name": "Leche",
        "quantity": "300",
        "unit": "g",
        "category": "milk",
        "baseCalories": 0.46,
        "baseProtein": 0.034,
        "baseCarbs": 0.048,
        "baseFats": 0.016,
        "calories": 138,
        "protein": 10.2,
        "carbs": 14.4,
        "fats": 4.8
      },
      {
        "name": "Arándanos",
        "quantity": "100",
        "unit": "g",
        "category": "berries",
        "baseCalories": 0.5,
        "baseProtein": 0.01,
        "baseCarbs": 0.12,
        "baseFats": 0.005,
        "calories": 50,
        "protein": 1,
        "carbs": 12,
        "fats": 0.5
      }
    ],
    "preparation": "1. En un cazo, cocinar los copos de avena con la leche o bebida vegetal a fuego medio, removiendo constantemente hasta que espese y la avena esté cocida (unos 5-7 minutos). 2. Servir caliente en un bol con los frutos rojos por encima. Opcional: añadir canela o edulcorante al gusto."
  },
  "o2_com": {
    "name": "Ensalada de Pasta con Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc47b91eb349463d47dd.png",
    "calories": 863.4,
    "protein": 74,
    "carbs": 90,
    "fats": 20.6,
    "ingredients": [
      {
        "name": "Pasta Integral",
        "quantity": "100",
        "unit": "g",
        "category": "grain_carb_dry",
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "calories": 365,
        "protein": 12,
        "carbs": 75,
        "fats": 2
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "200",
        "unit": "g",
        "category": "lean_protein",
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "calories": 320,
        "protein": 56,
        "carbs": 0,
        "fats": 8
      },
      {
        "name": "Canónigos",
        "quantity": "50",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1
      },
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "50",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1
      },
      {
        "name": "Pimiento Verde",
        "quantity": "50",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1
      },
      {
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "category": "oil_fat",
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1,
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10
      },
      {
        "name": "Vinagre",
        "quantity": "10",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      }
    ],
    "preparation": "1. Cocer la pasta según las instrucciones del paquete. Escurrir, pasar por agua fría para detener la cocción y dejar enfriar. 2. Cocinar la pechuga de pollo (a la plancha, hervida o asada) y desmenuzarla o cortarla en dados. 3. Lavar los canónigos. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos pequeños. 4. En un bol grande, combinar la pasta fría, el pollo, los canónigos y las verduras picadas. 5. Aliñar con aceite de oliva virgen extra, vinagre o tu salsa para ensaladas favorita (ej. yogur, mostaza y miel). Salpimentar al gusto."
  },
  "o2_cen": {
    "name": "Bacalao con Pisto de Verduras",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69fee682bc1f77cc3522d18f.png",
    "calories": 285,
    "protein": 45,
    "carbs": 7.5,
    "fats": 6.3,
    "ingredients": [
      {
        "name": "Bacalao Desalado",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04
      },
      {
        "name": "Pisto de Verduras",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      }
    ],
    "preparation": "1. Cocinar el bacalao a la plancha. 2. Servir sobre una base de pisto de verduras caliente."
  },
  "o3_des": {
    "name": "Fajita con Revuelto de Jamón Dulce",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b51120eba48737da3f22f1.png",
    "calories": 378,
    "protein": 24.6,
    "carbs": 22.1,
    "fats": 21.2,
    "ingredients": [
      {
        "name": "Pan de Fajita",
        "quantity": "1",
        "unit": "unidad(es)",
        "gramsPerUnit": 50,
        "calories": 108,
        "protein": 3.6,
        "carbs": 20,
        "fats": 1.2,
        "baseCalories": 108,
        "baseProtein": 3.6,
        "baseCarbs": 20,
        "baseFats": 1.2
      },
      {
        "name": "Jamón Dulce",
        "quantity": "50",
        "unit": "g",
        "calories": 115,
        "protein": 8,
        "carbs": 1,
        "fats": 9,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "unidad(es)",
        "gramsPerUnit": 50,
        "calories": 155,
        "protein": 13,
        "carbs": 1.1,
        "fats": 11,
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5
      }
    ],
    "preparation": "1. Preparar un revuelto con los huevos y el jamón dulce. 2. Rellenar la fajita caliente."
  },
  "o3_com": {
    "name": "Quinoa con ternera y verduras",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/quinoa-ternera-verduras.jpg",
    "calories": 563.2,
    "protein": 36,
    "carbs": 42,
    "fats": 20.9,
    "ingredients": [
      {
        "name": "Quinoa",
        "quantity": "50",
        "unit": "g",
        "calories": 184,
        "protein": 7,
        "carbs": 32,
        "fats": 3,
        "baseCalories": 3.68,
        "baseProtein": 0.14,
        "baseCarbs": 0.64,
        "baseFats": 0.06
      },
      {
        "name": "Ternera magra",
        "quantity": "125",
        "unit": "g",
        "calories": 275,
        "protein": 25,
        "carbs": 0,
        "fats": 12.5,
        "baseCalories": 2.2,
        "baseProtein": 0.2,
        "baseCarbs": 0,
        "baseFats": 0.1
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Calabacín",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "protein": 0,
        "carbs": 0,
        "fats": 5,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Lavar y cocer la quinoa según el envase. 2. Saltear el pimiento y el calabacín con el aceite medido, añadir la ternera en tiras y cocinar; mezclar con la quinoa."
  },
  "o3_cen": {
    "name": "Ensalada de Tomate Espárragos Blancos con Atún",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/699b47f820c0359e700b32ca.png",
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "150",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3
      },
      {
        "name": "Espárragos Blancos",
        "quantity": "150",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 45,
        "protein": 3,
        "carbs": 7.5,
        "fats": 0.3
      },
      {
        "name": "Atún en Conserva",
        "quantity": "200",
        "unit": "g",
        "category": "lean_protein",
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "calories": 320,
        "protein": 56,
        "carbs": 0,
        "fats": 8
      },
      {
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
        "category": "default_veg",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "category": "oil_fat",
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1,
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10
      },
      {
        "name": "Vinagre",
        "quantity": "10",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      }
    ],
    "preparation": "1. Lavar y cortar los tomates en gajos. 2. Escurrir los espárragos blancos y el atún. 3. Picar la cebolla en juliana fina. 4. En una fuente, disponer los tomates, los espárragos y el atún. 5. Añadir la cebolla y aliñar con aceite de oliva, vinagre y sal al gusto.",
    "calories": 513.4,
    "protein": 63,
    "carbs": 17.5,
    "fats": 18.7
  },
  "o4_des": {
    "name": "Pudding de chía alto en proteína",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d043e9b0c67b6db9b08b8.png",
    "ingredients": [
      {
        "name": "Semillas de Chía",
        "quantity": "20",
        "unit": "g",
        "category": "solid_fat",
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "calories": 90,
        "protein": 2,
        "carbs": 3,
        "fats": 8
      },
      {
        "name": "Leche",
        "quantity": "200",
        "unit": "g",
        "category": "milk",
        "baseCalories": 0.46,
        "baseProtein": 0.034,
        "baseCarbs": 0.048,
        "baseFats": 0.016,
        "calories": 92,
        "protein": 6.8,
        "carbs": 9.6,
        "fats": 3.2
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "25",
        "unit": "g",
        "category": "whey_protein",
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "calories": 95,
        "protein": 20,
        "carbs": 1.25,
        "fats": 1
      }
    ],
    "preparation": "1. Mezclar las semillas de chía, la leche (o bebida vegetal) y la proteína en polvo en un recipiente. 2. Remover bien y dejar reposar en la nevara durante al menos 4 horas o toda la noche. 3. Servir frío, opcionalmente con fruta o frutos secos.",
    "calories": 277,
    "protein": 28.8,
    "carbs": 13.85,
    "fats": 12.2
  },
  "o4_com": {
    "name": "Estofado de Lentejas con Verduras y Costilla",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cf648c174dc51742182c.png",
    "calories": 507.5,
    "protein": 44.25,
    "carbs": 29.5,
    "fats": 22.07,
    "ingredients": [
      {
        "name": "Lentejas Cocidas",
        "quantity": "75",
        "unit": "g",
        "calories": 97.5,
        "protein": 6,
        "carbs": 16.5,
        "fats": 0.375,
        "baseCalories": 1.3,
        "baseProtein": 0.08,
        "baseCarbs": 0.22,
        "baseFats": 0.005
      },
      {
        "name": "Costilla de Cerdo",
        "quantity": "150",
        "unit": "g",
        "calories": 330,
        "protein": 33,
        "carbs": 0,
        "fats": 21,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
      },
      {
        "name": "Zanahoria",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Ajo",
        "quantity": "5",
        "unit": "g",
        "calories": 5,
        "protein": 0.25,
        "carbs": 0.5,
        "fats": 0.2,
        "baseCalories": 1,
        "baseProtein": 0.05,
        "baseCarbs": 0.1,
        "baseFats": 0.04
      },
      {
        "name": "Laurel",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      },
      {
        "name": "Pimentón",
        "quantity": "1",
        "unit": "g",
        "category": "free_food",
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0
      }
    ],
    "preparation": "1. Sofreír la costilla troceada hasta dorar. 2. Añadir las verduras picadas y pochar. 3. Añadir las lentejas (si son de bote, lavadas; si son secas, remojadas) y cubrir con agua/caldo. 4. Cocer hasta que todo esté tierno. Sazonar con laurel y pimentón."
  },
  "o4_cen": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "calories": 586.2,
    "protein": 50.2,
    "carbs": 15.8,
    "fats": 34.4,
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "50",
        "unit": "g",
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Verde",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Lomo de Salmón",
        "quantity": "200",
        "unit": "g",
        "calories": 440,
        "protein": 44,
        "carbs": 0,
        "fats": 28,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "protein": 0,
        "carbs": 0,
        "fats": 5,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      },
      {
        "name": "Salsa de Soja",
        "quantity": "10",
        "unit": "g",
        "category": "sauce_condiment",
        "baseCalories": 1.2,
        "baseProtein": 0.02,
        "baseCarbs": 0.08,
        "baseFats": 0.08,
        "calories": 12,
        "protein": 0.2,
        "carbs": 0.8,
        "fats": 0.8
      }
    ],
    "preparation": "1. Cortar el salmón en dados de tamaño mediano. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos adecuados para wok (ej. juliana gruesa o dados). 2. Calentar un wok o sartén grande con un poco de aceite a fuego alto. Saltear el salmón unos 2-3 minutos hasta que esté dorado por fuera pero ligeramente crudo por dentro. Retirar y reservar. 3. Añadir las verduras más duras (cebolla, pimientos) al wok y saltear durante 3-4 minutos. Luego añadir el tomate y saltear 1-2 minutos más. 4. Incorporar el salmón de nuevo al wok. Añadir salsa de soja (baja en sodio preferiblemente) y un toque de jengibre rallado o ajo picado (opcional). Mezclar bien y cocinar por 1-2 minutos más hasta que el salmón esté cocido y todo bien caliente. Servir inmediatamente, opcionalmente sobre una base de arroz o noodles."
  },
  "sn1_yog": {
    "name": "Bol crujiente de yogur proteico, whey y manzana",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/sin-cocina/bol-yogur-proteico-manzana.jpg",
    "ingredients": [
      {
        "name": "Yogur proteico natural",
        "quantity": "175",
        "unit": "g",
        "category": "protein_dairy",
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "calories": 108.5,
        "protein": 18.375,
        "carbs": 7,
        "fats": 0.525
      },
      {
        "name": "Proteína whey",
        "quantity": "15",
        "unit": "g",
        "category": "whey_protein",
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "calories": 57,
        "protein": 12,
        "carbs": 0.75,
        "fats": 0.6
      },
      {
        "name": "Cereales integrales altos en proteína listos para comer",
        "quantity": "50",
        "unit": "g",
        "category": "grain_carb_dry",
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "calories": 182.5,
        "protein": 6,
        "carbs": 37.5,
        "fats": 1
      },
      {
        "name": "Manzana",
        "quantity": "0.5",
        "unit": "unidad(es)",
        "category": "default_fruit",
        "baseCalories": 90,
        "baseProtein": 0.75,
        "baseCarbs": 22.5,
        "baseFats": 0.3,
        "gramsPerUnit": 150,
        "calories": 45,
        "protein": 0.375,
        "carbs": 11.25,
        "fats": 0.15
      }
    ],
    "preparation": "Mezclar el yogur con la whey y añadir los cereales y la manzana en dados. Se prepara en 3 minutos, sin cocinar.",
    "calories": 393,
    "protein": 36.75,
    "carbs": 56.5,
    "fats": 2.27
  },
  "sn1_fruit": {
    "name": "Fruta Cítrica (Mandarina, Kiwi, Naranja...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png",
    "ingredients": [
      {
        "name": "Mandarina",
        "quantity": "1",
        "unit": "unidad(es)",
        "category": "default_fruit",
        "baseCalories": 48,
        "baseProtein": 0.4,
        "baseCarbs": 12,
        "baseFats": 0.16,
        "gramsPerUnit": 80,
        "calories": 48,
        "protein": 0.4,
        "carbs": 12,
        "fats": 0.16
      }
    ],
    "preparation": "1. Seleccionar la fruta cítrica de preferencia. 2. Lavar bien la fruta bajo el grifo. 3. Para mandarinas y naranjas: pelar la piel con las manos. 4. Para kiwis: cortar por la mitad y comer la pulpa con una cucharita.",
    "calories": 48,
    "protein": 0.4,
    "carbs": 12,
    "fats": 0.16
  },
  "sn2_yog": {
    "name": "Yogur Griego Desnatado con Proteína en Polvo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
        "quantity": "175",
        "unit": "g",
        "category": "protein_dairy",
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "calories": 108.5,
        "protein": 18.375,
        "carbs": 7,
        "fats": 0.525
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "15",
        "unit": "g",
        "category": "whey_protein",
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "calories": 57,
        "protein": 12,
        "carbs": 0.75,
        "fats": 0.6
      }
    ],
    "preparation": "1. Mezclar el yogur griego con la proteína en polvo en un bol hasta que esté bien integrado y sin grumos.",
    "calories": 165.5,
    "protein": 30.38,
    "carbs": 7.75,
    "fats": 1.13
  },
  "sn2_nuts": {
    "name": "Frutos Secos (Mezcla)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68525c0b1d27cfeb580a55f7.png",
    "ingredients": [
      {
        "name": "Anacardos",
        "quantity": "5",
        "unit": "g",
        "category": "solid_fat",
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "calories": 22.5,
        "protein": 0.5,
        "carbs": 0.75,
        "fats": 2
      },
      {
        "name": "Almendras",
        "quantity": "10",
        "unit": "g",
        "category": "solid_fat",
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4
      },
      {
        "name": "Nueces",
        "quantity": "5",
        "unit": "g",
        "category": "solid_fat",
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "calories": 22.5,
        "protein": 0.5,
        "carbs": 0.75,
        "fats": 2
      },
      {
        "name": "Pistachos",
        "quantity": "5",
        "unit": "g",
        "category": "solid_fat",
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "calories": 22.5,
        "protein": 0.5,
        "carbs": 0.75,
        "fats": 2
      }
    ],
    "preparation": "Consumir directamente como un snack energético y nutritivo.",
    "calories": 112.5,
    "protein": 2.5,
    "carbs": 3.75,
    "fats": 10
  },
  "sn3_yog": {
    "name": "Yogur Protéico (Sabores, Natural...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png",
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "150",
        "unit": "g",
        "category": "protein_dairy",
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "calories": 93,
        "protein": 15.75,
        "carbs": 6,
        "fats": 0.45
      }
    ],
    "preparation": "1. Seleccionar el yogur proteico de preferencia. 2. Abrir el envase. 3. Consumir directamente con una cuchara.",
    "calories": 93,
    "protein": 15.75,
    "carbs": 6,
    "fats": 0.45
  },
  "sn3_fruit": {
    "name": "Frutas Silvestres / Rojas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f020655f9650aaa228fc9.png",
    "ingredients": [
      {
        "name": "Fresas",
        "quantity": "100",
        "unit": "g",
        "category": "berries",
        "baseCalories": 0.5,
        "baseProtein": 0.01,
        "baseCarbs": 0.12,
        "baseFats": 0.005,
        "calories": 50,
        "protein": 1,
        "carbs": 12,
        "fats": 0.5
      }
    ],
    "preparation": "1. Seleccionar las frutas silvestres o rojas deseadas. 2. Lavar suavemente las frutas bajo un chorro de agua fría. 3. Para fresas: retirar el pedúnculo verde. 4. Consumir directamente como snack o añadir a yogures.",
    "calories": 50,
    "protein": 1,
    "carbs": 12,
    "fats": 0.5
  },
  "sn4_yog": {
    "name": "Yogur Griego Danone",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b519f7cab7f7a128c9b43c.png",
    "ingredients": [
      {
        "name": "Yogur Griego Danone",
        "quantity": "150",
        "unit": "g",
        "category": "yogurt",
        "baseCalories": 0.94,
        "baseProtein": 0.034,
        "baseCarbs": 0.044,
        "baseFats": 0.07,
        "nutritionSource": "https://foodservice.danone.es/product/danone-griego-bulk-natural/",
        "calories": 141,
        "protein": 5.1,
        "carbs": 6.6,
        "fats": 10.5
      }
    ],
    "preparation": "Consumir directamente.",
    "calories": 141,
    "protein": 5.1,
    "carbs": 6.6,
    "fats": 10.5
  },
  "sn4_fruit": {
    "name": "Fruta Densa (Plátano, Manzana, Pera)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "ingredients": [
      {
        "name": "Pera",
        "quantity": "1",
        "unit": "unidad(es)",
        "category": "default_fruit",
        "baseCalories": 90,
        "baseProtein": 0.75,
        "baseCarbs": 22.5,
        "baseFats": 0.3,
        "gramsPerUnit": 150,
        "calories": 90,
        "protein": 0.75,
        "carbs": 22.5,
        "fats": 0.3
      }
    ],
    "preparation": "1. Seleccionar la fruta densa de preferencia. 2. Para plátanos: pelar la piel y consumir directamente. 3. Para manzanas o peras: lavar bien la fruta. Se puede consumir con piel o pelada.",
    "calories": 90,
    "protein": 0.75,
    "carbs": 22.5,
    "fats": 0.3
  }
};

const dailyMenus = [
  {
    "name": "Opciones 1",
    "targetMacros": {
      "calories": 1888,
      "protein": 157,
      "carbs": 197,
      "fats": 50
    },
    "baselineTotals": {
      "calories": 1886.65,
      "protein": 156.55,
      "carbs": 196.9,
      "fats": 50.03
    },
    "desayuno": [
      "o1_des"
    ],
    "comida": [
      "o1_com"
    ],
    "cena": [
      "o1_cen",
      "o1_cen2"
    ],
    "extra": [
      "sn1_yog",
      "sn1_fruit"
    ]
  },
  {
    "name": "Opciones 2",
    "targetMacros": {
      "calories": 1889,
      "protein": 172,
      "carbs": 192,
      "fats": 45
    },
    "baselineTotals": {
      "calories": 1888.15,
      "protein": 172.07,
      "carbs": 191.65,
      "fats": 44.82
    },
    "desayuno": [
      "o2_des"
    ],
    "comida": [
      "o2_com"
    ],
    "cena": [
      "o2_cen"
    ],
    "extra": [
      "sn2_yog",
      "sn2_nuts"
    ]
  },
  {
    "name": "Libre 1",
    "targetMacros": {
      "calories": 1600,
      "protein": 140,
      "carbs": 100,
      "fats": 62
    },
    "baselineTotals": {
      "calories": 1597.6,
      "protein": 140.35,
      "carbs": 99.6,
      "fats": 61.75
    },
    "desayuno": [
      "o3_des"
    ],
    "comida": [
      "o3_com"
    ],
    "cena": [
      "o3_cen"
    ],
    "extra": [
      "sn3_yog",
      "sn3_fruit"
    ]
  },
  {
    "name": "Libre 2",
    "targetMacros": {
      "calories": 1600,
      "protein": 129,
      "carbs": 88,
      "fats": 79
    },
    "baselineTotals": {
      "calories": 1601.7,
      "protein": 129.1,
      "carbs": 88.25,
      "fats": 79.48
    },
    "desayuno": [
      "o4_des"
    ],
    "comida": [
      "o4_com"
    ],
    "cena": [
      "o4_cen"
    ],
    "extra": [
      "sn4_yog",
      "sn4_fruit"
    ]
  }
];
