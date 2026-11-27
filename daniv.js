// Titulo: Dani Villergas — menús renovados conservando desayunos
// Ajuste 23/11/2026: desayunos conservados exactamente por petición de Iván. Comidas, cenas y extras de DATABASE / NUTR_DATA, con nombre, imagen, preparación e ingredientes asociados a su fila.
// Objetivos: mismos aportes reales previos; pequeñas diferencias por raciones prácticas, ver baselineTotals. Los desayunos conservan sus raciones anteriores expresamente, sin aplicarles cambios nuevos.
// Cálculo: bases del plan anterior para alimentos existentes; CoFID 2021 y etiquetas de fabricante/FoodData Central para alimentos nuevos. CH disponibles en etiqueta estadounidense excluyen fibra. Valores aproximados según producto.
// Ajuste 27/11/2026: solo comida y cena de Lowcarb; plancha y guarniciones sencillas, sin cambiar desayunos, extras ni los demás días. Pesos de pavo y ternera COCINADOS.
// Ajuste adicional 27/11/2026: solo comida y cena de Lowcarb 2; pollo con patata y brócoli, ensalada de atún con huevo y Wasa conservado. Pollo y vegetales en crudo, conservas escurridas.
const foodDatabase = {
  "p0_m0": {
    "name": "Tostada de salmon ahumado y queso crema",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b512ae277ba07965ecc3bf.png",
    "calories": 555.5,
    "protein": 34,
    "carbs": 50.949999999999996,
    "fats": 23.9,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "100",
        "unit": "g",
        "calories": 259,
        "protein": 8.5,
        "carbs": 48.3,
        "fats": 3.3000000000000003,
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca"
      },
      {
        "name": "Salmón Ahumado",
        "quantity": "100",
        "unit": "g",
        "calories": 184,
        "protein": 22.8,
        "carbs": 0.5,
        "fats": 10.1,
        "baseCalories": 1.84,
        "baseProtein": 0.228,
        "baseCarbs": 0.005,
        "baseFats": 0.10099999999999999,
        "nutritionReference": "CoFID 2021 16-412 Salmon, smoked (cold-smoked)"
      },
      {
        "name": "Queso Crema",
        "quantity": "50",
        "unit": "g",
        "calories": 112.5,
        "protein": 2.7,
        "carbs": 2.15,
        "fats": 10.5,
        "baseCalories": 2.25,
        "baseProtein": 0.054000000000000006,
        "baseCarbs": 0.043,
        "baseFats": 0.21,
        "nutritionReference": "Estimación queso crema natural; confirmar etiqueta de la marca"
      }
    ],
    "preparation": "1. Tostar el pan. 2. Untar el queso crema. 3. Colocar el salmón ahumado encima. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "des_tostada_de_salmon_ahumado_y_queso_crema"
  },
  "p0_m1": {
    "name": "Yogur Proteico con Cereales de Avena",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7ef66df76fef1b58db3f2.png",
    "calories": 496.5,
    "protein": 27.05,
    "carbs": 81.2,
    "fats": 8.75,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "150",
        "unit": "g",
        "calories": 93,
        "protein": 15.75,
        "carbs": 6,
        "fats": 0.45,
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "nutritionReference": "Referencia protein_dairy del catálogo CRM; confirmar etiqueta de la marca"
      },
      {
        "name": "Cereales de Avena",
        "quantity": "100",
        "unit": "g",
        "calories": 381,
        "protein": 10.9,
        "carbs": 70.7,
        "fats": 8.1,
        "baseCalories": 3.81,
        "baseProtein": 0.109,
        "baseCarbs": 0.7070000000000001,
        "baseFats": 0.081,
        "nutritionReference": "CoFID 2021 11-788 Porridge oats, unfortified"
      },
      {
        "name": "Frutos Rojos",
        "quantity": "50",
        "unit": "g",
        "calories": 22.5,
        "protein": 0.4,
        "carbs": 4.5,
        "fats": 0.2,
        "baseCalories": 0.45,
        "baseProtein": 0.008,
        "baseCarbs": 0.09,
        "baseFats": 0.004,
        "nutritionReference": "Estimación mezcla de frutos rojos sin azúcar"
      }
    ],
    "preparation": "1. Verter el yogur en un bol. 2. Añadir los cereales de avena y los frutos rojos por encima. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "ext_yogur_proteico_con_cereales_de_avena"
  },
  "nov23_d0_m0": {
    "name": "Cuscús integral con pavo y calabaza",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/cuscus-pavo-calabaza.jpg",
    "preparation": "1. Cortar la calabaza en dados pequeños y ablandarla 4–5 minutos en microondas. 2. Hidratar el cuscús según el envase. 3. Saltear el pavo y el pimiento con el aceite; incorporar la calabaza y el cuscús.",
    "ingredients": [
      {
        "name": "Cuscús integral",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 11-901: Couscous, plain, raw; valores por 100 g",
        "baseCalories": 3.64,
        "calories": 546,
        "baseProtein": 0.12,
        "protein": 18,
        "baseCarbs": 0.792,
        "carbs": 118.80000000000001,
        "baseFats": 0.021,
        "fats": 3.1500000000000004
      },
      {
        "name": "Pechuga de pavo",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 18-349 Turkey, light meat, raw",
        "baseCalories": 1.05,
        "calories": 131.25,
        "baseProtein": 0.244,
        "protein": 30.5,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.008,
        "fats": 1
      },
      {
        "name": "Calabaza",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-326: Pumpkin, flesh only, raw; valores por 100 g",
        "baseCalories": 0.13,
        "calories": 19.5,
        "baseProtein": 0.006999999999999999,
        "protein": 1.0499999999999998,
        "baseCarbs": 0.022000000000000002,
        "carbs": 3.3000000000000003,
        "baseFats": 0.002,
        "fats": 0.3
      },
      {
        "name": "Pimiento rojo",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-524: Pepper, capsicum, red, raw; valores por 100 g",
        "baseCalories": 0.21,
        "calories": 21,
        "baseProtein": 0.008,
        "protein": 0.8,
        "baseCarbs": 0.043,
        "carbs": 4.3,
        "baseFats": 0.002,
        "fats": 0.2
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 89.9,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 9.990000000000002
      }
    ],
    "calories": 807.65,
    "protein": 50.349999999999994,
    "carbs": 126.4,
    "fats": 14.640000000000002,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 16
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d0_m1": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "preparation": "1. Cortar el salmón en dados de tamaño mediano. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos adecuados para wok (ej. juliana gruesa o dados). 2. Calentar un wok o sartén grande con un poco de aceite a fuego alto. Saltear el salmón unos 2-3 minutos hasta que esté dorado por fuera pero ligeramente crudo por dentro. Retirar y reservar. 3. Añadir las verduras más duras (cebolla, pimientos) al wok y saltear durante 3-4 minutos. Luego añadir el tomate y saltear 1-2 minutos más. 4. Incorporar el salmón de nuevo al wok. Añadir salsa de soja (baja en sodio preferiblemente) y un toque de jengibre rallado o ajo picado (opcional). Mezclar bien y cocinar por 1-2 minutos más hasta que el salmón esté cocido y todo bien caliente. Servir inmediatamente, opcionalmente sobre una base de arroz o noodles.",
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw",
        "baseCalories": 0.14,
        "calories": 14.000000000000002,
        "baseProtein": 0.005,
        "protein": 0.5,
        "baseCarbs": 0.03,
        "carbs": 3,
        "baseFats": 0.001,
        "fats": 0.1
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-524: Pepper, capsicum, red, raw; valores por 100 g",
        "baseCalories": 0.21,
        "calories": 21,
        "baseProtein": 0.008,
        "protein": 0.8,
        "baseCarbs": 0.043,
        "carbs": 4.3,
        "baseFats": 0.002,
        "fats": 0.2
      },
      {
        "name": "Pimiento Verde",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-318: Peppers, capsicum, green, raw; valores por 100 g",
        "baseCalories": 0.15,
        "calories": 15,
        "baseProtein": 0.008,
        "protein": 0.8,
        "baseCarbs": 0.026000000000000002,
        "carbs": 2.6,
        "baseFats": 0.003,
        "fats": 0.3
      },
      {
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-499 Onions, raw",
        "baseCalories": 0.35,
        "calories": 17.5,
        "baseProtein": 0.01,
        "protein": 0.5,
        "baseCarbs": 0.08,
        "carbs": 4,
        "baseFats": 0.001,
        "fats": 0.05
      },
      {
        "name": "Lomo de Salmón",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 16-356: Salmon, farmed, flesh only, raw; valores por 100 g",
        "baseCalories": 2.17,
        "calories": 271.25,
        "baseProtein": 0.204,
        "protein": 25.5,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.15,
        "fats": 18.75
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 89.9,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 9.990000000000002
      },
      {
        "name": "Salsa de Soja",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-721: Soy sauce, light and dark varieties; valores por 100 g",
        "baseCalories": 0.79,
        "calories": 7.9,
        "baseProtein": 0.03,
        "protein": 0.3,
        "baseCarbs": 0.179,
        "carbs": 1.79,
        "baseFats": 0,
        "fats": 0
      }
    ],
    "calories": 436.54999999999995,
    "protein": 28.400000000000002,
    "carbs": 15.690000000000001,
    "fats": 29.39,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 68
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d0_m2": {
    "name": "Patatas Gajo al Horno o Air Fryer",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd8b854a1885423545b10.png",
    "preparation": "1. Precalentar el horno a 200°C (390°F). 2. Lavar bien las patatas, cortarlas a trozos al gusto junto con la cebolla 3. Asar las patatas directamente sobre la rejilla del horno o en una bandeja durante 45-60 minutos (el tiempo dependerá del tamaño).  3. Servir todo junto en un bol and aliñar con aceite de oliva virgen extra, sal y otras especies al gusto.",
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "250",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-489 Potatoes, old, raw, flesh only",
        "baseCalories": 0.82,
        "calories": 205,
        "baseProtein": 0.019,
        "protein": 4.75,
        "baseCarbs": 0.196,
        "carbs": 49,
        "baseFats": 0.001,
        "fats": 0.25
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-499 Onions, raw",
        "baseCalories": 0.35,
        "calories": 26.25,
        "baseProtein": 0.01,
        "protein": 0.75,
        "baseCarbs": 0.08,
        "carbs": 6,
        "baseFats": 0.001,
        "fats": 0.075
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 89.9,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 9.990000000000002
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      }
    ],
    "calories": 321.15,
    "protein": 5.5,
    "carbs": 55,
    "fats": 10.315000000000001,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 102
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d0_m3": {
    "name": "Naranja con anacardos",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/naranja-anacardos.jpg",
    "preparation": "1. Pelar la naranja, separar los gajos y servir con los anacardos pesados.",
    "ingredients": [
      {
        "name": "Naranja",
        "quantity": "300",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-327: Oranges, flesh only; valores por 100 g",
        "baseCalories": 0.36,
        "calories": 108,
        "baseProtein": 0.008,
        "protein": 2.4,
        "baseCarbs": 0.08199999999999999,
        "carbs": 24.599999999999998,
        "baseFats": 0.002,
        "fats": 0.6
      },
      {
        "name": "Anacardos",
        "quantity": "20",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-811 Cashew nuts, kernel only, plain",
        "baseCalories": 5.73,
        "calories": 114.60000000000001,
        "baseProtein": 0.177,
        "protein": 3.54,
        "baseCarbs": 0.18100000000000002,
        "carbs": 3.6200000000000006,
        "baseFats": 0.48200000000000004,
        "fats": 9.64
      }
    ],
    "calories": 222.60000000000002,
    "protein": 5.9399999999999995,
    "carbs": 28.22,
    "fats": 10.24,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 22
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d0_m4": {
    "name": "Onza de Chocolate 85%",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b51011eba487f7273f1096.png",
    "preparation": "Consumir directamente.",
    "ingredients": [
      {
        "name": "Chocolate 85%",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "Lindt EXCELLENCE 85%, etiqueta oficial España: https://www.lindt.es/excellence-85-cacao-100g",
        "baseCalories": 5.84,
        "calories": 58.4,
        "baseProtein": 0.125,
        "protein": 1.25,
        "baseCarbs": 0.22,
        "carbs": 2.2,
        "baseFats": 0.46,
        "fats": 4.6000000000000005
      }
    ],
    "calories": 58.4,
    "protein": 1.25,
    "carbs": 2.2,
    "fats": 4.6000000000000005,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 158
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "p1_m0": {
    "name": "Tostada de Pan de Centeno con Revuelto de Huevos y Jamón York",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d09e04d6fb7f271b84cc9.png",
    "calories": 563.5,
    "protein": 32.55,
    "carbs": 73.25,
    "fats": 15.15,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "150",
        "unit": "g",
        "calories": 388.5,
        "protein": 12.750000000000002,
        "carbs": 72.45,
        "fats": 4.95,
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca"
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "ud (50 g comestibles)",
        "calories": 131,
        "protein": 12.6,
        "carbs": 0,
        "fats": 9,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
      },
      {
        "name": "Jamón York",
        "quantity": "40",
        "unit": "g",
        "calories": 44,
        "protein": 7.199999999999999,
        "carbs": 0.8,
        "fats": 1.2,
        "baseCalories": 1.1,
        "baseProtein": 0.18,
        "baseCarbs": 0.02,
        "baseFats": 0.03,
        "nutritionReference": "Estimación jamón cocido; confirmar etiqueta"
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Preparar un revuelto de huevos con taquitos de jamón york. 3. Servir el revuelto sobre la tostada. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "des_tostada_de_pan_de_centeno_con_revuelto_de_huevos_y_jamn_york"
  },
  "p1_m1": {
    "name": "Crema de Cacahuete",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ee03e1c8952ccb30699d34.png",
    "calories": 182.10000000000002,
    "protein": 6.84,
    "carbs": 3.93,
    "fats": 15.540000000000001,
    "ingredients": [
      {
        "name": "Crema de Cacahuete",
        "quantity": "30",
        "unit": "g",
        "calories": 182.10000000000002,
        "protein": 6.84,
        "carbs": 3.93,
        "fats": 15.540000000000001,
        "baseCalories": 6.07,
        "baseProtein": 0.228,
        "baseCarbs": 0.131,
        "baseFats": 0.518,
        "nutritionReference": "CoFID 2021 14-892 Peanut butter, smooth"
      }
    ],
    "preparation": "Untar sobre tostadas, añadir a batidos o consumir directamente. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "ext_crema_de_cacahuete"
  },
  "p1_m2": {
    "name": "Pan de Centeno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879305ee8df5478eb937c5e.png",
    "calories": 259,
    "protein": 8.5,
    "carbs": 48.3,
    "fats": 3.3000000000000003,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "100",
        "unit": "g",
        "calories": 259,
        "protein": 8.5,
        "carbs": 48.3,
        "fats": 3.3000000000000003,
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca"
      }
    ],
    "preparation": "Pesar los gramos de pan indicados y acompañar con la comida correspondiente; la cantidad no equivale necesariamente a una sola rebanada.",
    "originalBaseRecipeId": "ext_pan_de_centeno"
  },
  "nov23_d1_m0": {
    "name": "Arroz tres delicias",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68872f8e1fc4545c499532f0.png",
    "preparation": "1. Cocer el arroz y reservar. 2. Hacer una tortilla francesa con los huevos y cortarla en trocitos. 3. Saltear los guisantes y el maíz. 4. Cortar el jamón York en daditos. 5. Mezclar todos los ingredientes en una sartén o wok con un poco de salsa de soja (opcional) y saltear todo junto durante un par de minutos.",
    "ingredients": [
      {
        "name": "Arroz",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 11-857: Rice, white, basmati, raw; valores por 100 g",
        "baseCalories": 3.51,
        "calories": 526.5,
        "baseProtein": 0.081,
        "protein": 12.15,
        "baseCarbs": 0.8370000000000001,
        "carbs": 125.55000000000001,
        "baseFats": 0.005,
        "fats": 0.75
      },
      {
        "name": "Huevos",
        "quantity": "1",
        "unit": "ud",
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw",
        "baseCalories": 65.5,
        "calories": 65.5,
        "baseProtein": 6.3,
        "protein": 6.3,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 4.5,
        "fats": 4.5
      },
      {
        "name": "Guisantes",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-536: Peas, frozen, boiled in unsalted water; valores por 100 g",
        "baseCalories": 0.7,
        "calories": 87.5,
        "baseProtein": 0.055,
        "protein": 6.875,
        "baseCarbs": 0.11199999999999999,
        "carbs": 13.999999999999998,
        "baseFats": 0.006999999999999999,
        "fats": 0.8749999999999999
      },
      {
        "name": "Jamón York",
        "quantity": "60",
        "unit": "g",
        "nutritionReference": "Estimación jamón cocido; confirmar etiqueta",
        "baseCalories": 1.1,
        "calories": 66,
        "baseProtein": 0.18,
        "protein": 10.799999999999999,
        "baseCarbs": 0.02,
        "carbs": 1.2,
        "baseFats": 0.03,
        "fats": 1.7999999999999998
      },
      {
        "name": "Maíz",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-529: Sweetcorn kernels, canned in water, drained; valores por 100 g",
        "baseCalories": 0.78,
        "calories": 97.5,
        "baseProtein": 0.026000000000000002,
        "protein": 3.2500000000000004,
        "baseCarbs": 0.139,
        "carbs": 17.375,
        "baseFats": 0.017,
        "fats": 2.125
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 44.95,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 4.995000000000001
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      }
    ],
    "calories": 887.95,
    "protein": 39.375,
    "carbs": 158.125,
    "fats": 15.045000000000002,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 80
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d1_m1": {
    "name": "Pasta de lentejas con sofrito de ternera y cerdo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efc77653a2c50f9172c7c.png",
    "preparation": "1. Cocinar la pasta de lentejas según las instrucciones del paquete hasta que esté al dente. Escurrir y reservar. 2. Picar finamente la cebolla y la zanahoria. Rallar o picar el calabacín en dados pequeños. 3. En una sartén grande, calentar un poco de aceite de oliva y sofreír la cebolla y zanahoria hasta que estén blandas. 4. Añadir la carne picada mixta (ternera y cerdo) y cocinar a fuego medio-alto, deshaciendo los grumos con una cuchara, hasta que se dore. 5. Incorporar el calabacín y cocinar unos minutos más hasta que esté tierno. Añadir salsa de tomate (opcional, o tomate triturado natural) y sazonar al gusto con sal, pimienta, orégano o albahaca. Cocinar a fuego lento durante 10-15 minutos para que se integren los sabores. 6. Mezclar la pasta de lentejas escurrida con el sofrito. Servir caliente, opcionalmente con queso parmesano rallado.",
    "ingredients": [
      {
        "name": "Pasta de Lentejas",
        "quantity": "75",
        "unit": "g",
        "nutritionReference": "Barilla RED LENTIL PENNE, FDC 2598839, datos declarados por fabricante; CH disponibles = carbohidratos totales menos fibra (base europea): https://fdc.nal.usda.gov/food-details/2598839/nutrients",
        "baseCalories": 3.39,
        "calories": 254.25,
        "baseProtein": 0.25,
        "protein": 18.75,
        "baseCarbs": 0.5001000000000001,
        "carbs": 37.50750000000001,
        "baseFats": 0.0268,
        "fats": 2.0100000000000002
      },
      {
        "name": "Carne Picada Mixta (Ternera y Cerdo)",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 mezcla 50% 18-469 y 50% 18-606, peso crudo",
        "baseCalories": 1.945,
        "calories": 243.125,
        "baseProtein": 0.1945,
        "protein": 24.3125,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.1295,
        "fats": 16.1875
      },
      {
        "name": "Calabacín",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-627: Courgette, raw; valores por 100 g",
        "baseCalories": 0.16,
        "calories": 24,
        "baseProtein": 0.013000000000000001,
        "protein": 1.9500000000000002,
        "baseCarbs": 0.023,
        "carbs": 3.4499999999999997,
        "baseFats": 0.002,
        "fats": 0.3
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-499 Onions, raw",
        "baseCalories": 0.35,
        "calories": 26.25,
        "baseProtein": 0.01,
        "protein": 0.75,
        "baseCarbs": 0.08,
        "carbs": 6,
        "baseFats": 0.001,
        "fats": 0.075
      },
      {
        "name": "Zanahoria",
        "quantity": "75",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-496 Carrots, old, raw",
        "baseCalories": 0.34,
        "calories": 25.500000000000004,
        "baseProtein": 0.005,
        "protein": 0.375,
        "baseCarbs": 0.077,
        "carbs": 5.775,
        "baseFats": 0.004,
        "fats": 0.3
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 44.95,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 4.995000000000001
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "0.2",
        "unit": "g",
        "nutritionReference": "USDA SR Legacy FDC 170931, pimienta negra; CH disponibles sin fibra",
        "baseCalories": 2.51,
        "calories": 0.502,
        "baseProtein": 0.10400000000000001,
        "protein": 0.020800000000000003,
        "baseCarbs": 0.387,
        "carbs": 0.07740000000000001,
        "baseFats": 0.0326,
        "fats": 0.00652
      },
      {
        "name": "Albahaca",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-804: Basil, fresh; valores por 100 g",
        "baseCalories": 0.4,
        "calories": 0.4,
        "baseProtein": 0.031,
        "protein": 0.031,
        "baseCarbs": 0.051,
        "carbs": 0.051,
        "baseFats": 0.008,
        "fats": 0.008
      }
    ],
    "calories": 618.977,
    "protein": 46.1893,
    "carbs": 52.86090000000001,
    "fats": 23.88202,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 74
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados. Perfil de pasta 100% lenteja roja (Barilla); sin salsa de tomate ni parmesano opcionales."
  },
  "nov23_d1_m2": {
    "name": "Cereales de Trigo sin Azúcar",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7eff3a54d8879c640b271.png",
    "preparation": "1. Verter los cereales en un bol. 2. Añadir leche o bebida vegetal al gusto.",
    "ingredients": [
      {
        "name": "Cereales de Trigo",
        "quantity": "75",
        "unit": "g",
        "nutritionReference": "CoFID 2021 11-774: Breakfast cereal, wheat biscuits, Weetabix type, unfortified; valores por 100 g",
        "baseCalories": 3.32,
        "calories": 249,
        "baseProtein": 0.105,
        "protein": 7.875,
        "baseCarbs": 0.727,
        "carbs": 54.525,
        "baseFats": 0.019,
        "fats": 1.425
      },
      {
        "name": "Leche",
        "quantity": "300",
        "unit": "g",
        "nutritionReference": "CoFID 2021 12-313: Milk, semi-skimmed, pasteurised, average; valores por 100 g",
        "baseCalories": 0.46,
        "calories": 138,
        "baseProtein": 0.035,
        "protein": 10.500000000000002,
        "baseCarbs": 0.047,
        "carbs": 14.1,
        "baseFats": 0.017,
        "fats": 5.1000000000000005
      }
    ],
    "calories": 387,
    "protein": 18.375,
    "carbs": 68.625,
    "fats": 6.525,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 144
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "p2_m0": {
    "name": "Tostada de Centeno con Cottage y Pavo",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b669d75b89c7ceec966248.png",
    "calories": 507,
    "protein": 34.9,
    "carbs": 55.699999999999996,
    "fats": 16.1,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "100",
        "unit": "g",
        "calories": 259,
        "protein": 8.5,
        "carbs": 48.3,
        "fats": 3.3000000000000003,
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca"
      },
      {
        "name": "Queso Cottage",
        "quantity": "200",
        "unit": "g",
        "calories": 206,
        "protein": 18.8,
        "carbs": 6.2,
        "fats": 12,
        "baseCalories": 1.03,
        "baseProtein": 0.094,
        "baseCarbs": 0.031,
        "baseFats": 0.06,
        "nutritionReference": "CoFID 2021 12-539 Cheese, cottage, plain"
      },
      {
        "name": "Pavo",
        "quantity": "40",
        "unit": "g",
        "calories": 42,
        "protein": 7.6,
        "carbs": 1.2,
        "fats": 0.8,
        "baseCalories": 1.05,
        "baseProtein": 0.19,
        "baseCarbs": 0.03,
        "baseFats": 0.02,
        "nutritionReference": "Estimación fiambre de pavo; confirmar etiqueta"
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Untar el queso cottage. 3. Colocar las lonchas de pavo encima. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_cottage_y_pavo"
  },
  "nov23_d2_m3": {
    "name": "Hummus Casero con Palitos de Zanahoria",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/prueba-chatgpt/hummus-zanahoria.jpg",
    "preparation": "1. Cortar la zanahoria en bastones. 2. Servir junto al hummus para mojar.",
    "ingredients": [
      {
        "name": "Hummus",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-556: Houmous; valores por 100 g",
        "baseCalories": 3.07,
        "calories": 460.5,
        "baseProtein": 0.068,
        "protein": 10.200000000000001,
        "baseCarbs": 0.105,
        "carbs": 15.75,
        "baseFats": 0.267,
        "fats": 40.050000000000004
      },
      {
        "name": "Zanahoria",
        "quantity": "200",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-496 Carrots, old, raw",
        "baseCalories": 0.34,
        "calories": 68,
        "baseProtein": 0.005,
        "protein": 1,
        "baseCarbs": 0.077,
        "carbs": 15.4,
        "baseFats": 0.004,
        "fats": 0.8
      }
    ],
    "calories": 528.5,
    "protein": 11.200000000000001,
    "carbs": 31.15,
    "fats": 40.85,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 31
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d2_m4": {
    "name": "Frutas Silvestres / Rojas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f020655f9650aaa228fc9.png",
    "preparation": "1. Seleccionar las frutas silvestres o rojas deseadas. 2. Lavar suavemente las frutas bajo un chorro de agua fría. 3. Para fresas: retirar el pedúnculo verde. 4. Consumir directamente como snack o añadir a yogures.",
    "ingredients": [
      {
        "name": "Uvas",
        "quantity": "300",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-350: Grapes, average; valores por 100 g",
        "baseCalories": 0.65,
        "calories": 195,
        "baseProtein": 0.006999999999999999,
        "protein": 2.0999999999999996,
        "baseCarbs": 0.161,
        "carbs": 48.300000000000004,
        "baseFats": 0.002,
        "fats": 0.6
      }
    ],
    "calories": 195,
    "protein": 2.0999999999999996,
    "carbs": 48.300000000000004,
    "fats": 0.6,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 122
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados. Fruta elegida: uvas."
  },
  "p3_m0": {
    "name": "Tostada de Centeno con Huevo y Aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687a695da648331355d3b0b2.png",
    "calories": 757.15,
    "protein": 22.575000000000003,
    "carbs": 39.825,
    "fats": 56.265,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "75",
        "unit": "g",
        "calories": 194.25,
        "protein": 6.375000000000001,
        "carbs": 36.225,
        "fats": 2.475,
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca"
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "ud (50 g comestibles)",
        "calories": 131,
        "protein": 12.6,
        "carbs": 0,
        "fats": 9,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
      },
      {
        "name": "Aguacate",
        "quantity": "200",
        "unit": "g",
        "calories": 342,
        "protein": 3.6000000000000005,
        "carbs": 3.5999999999999996,
        "fats": 34.8,
        "baseCalories": 1.71,
        "baseProtein": 0.018000000000000002,
        "baseCarbs": 0.018,
        "baseFats": 0.174,
        "nutritionReference": "CoFID 2021 14-386 Avocado, Hass, flesh only"
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0,
        "carbs": 0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Cocinar los huevos al gusto (revueltos, pochados, a la plancha). 3. Machacar el aguacate sobre las tostadas y añadir aceite y especias. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_huevo_y_aguacate"
  },
  "nov23_d3_m2": {
    "name": "Yogur Griego Danone",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b519f7cab7f7a128c9b43c.png",
    "preparation": "Consumir directamente.",
    "ingredients": [
      {
        "name": "Yogur Griego Danone",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "Danone Griego Natural, etiqueta oficial 96 kcal/100 g: https://www.danone.es/producto/griego-natural-2/",
        "baseCalories": 0.96,
        "calories": 144,
        "baseProtein": 0.036,
        "protein": 5.3999999999999995,
        "baseCarbs": 0.046,
        "carbs": 6.8999999999999995,
        "baseFats": 0.07,
        "fats": 10.500000000000002
      }
    ],
    "calories": 144,
    "protein": 5.3999999999999995,
    "carbs": 6.8999999999999995,
    "fats": 10.500000000000002,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 161
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov23_d3_m3": {
    "name": "Fruta Densa (Plátano, Manzana, Pera)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "preparation": "1. Seleccionar la fruta densa de preferencia. 2. Para plátanos: pelar la piel y consumir directamente. 3. Para manzanas o peras: lavar bien la fruta. Se puede consumir con piel o pelada.",
    "ingredients": [
      {
        "name": "Pera",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-321: Pears, raw, flesh and skin; valores por 100 g",
        "baseCalories": 0.43,
        "calories": 43,
        "baseProtein": 0.003,
        "protein": 0.3,
        "baseCarbs": 0.109,
        "carbs": 10.9,
        "baseFats": 0.001,
        "fats": 0.1
      }
    ],
    "calories": 43,
    "protein": 0.3,
    "carbs": 10.9,
    "fats": 0.1,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 124
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados. Fruta elegida: pera."
  },
  "nov23_d3_m4": {
    "name": "Tostada de Pan Wasa",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7f0c3fa127234824855fb.png",
    "preparation": "1. Servir como base para otros ingredientes o como acompañamiento.",
    "ingredients": [
      {
        "name": "Pan Wasa",
        "quantity": "60",
        "unit": "g",
        "nutritionReference": "CoFID 2021 11-822: Crispbread, rye; valores por 100 g",
        "baseCalories": 2.84,
        "calories": 170.39999999999998,
        "baseProtein": 0.086,
        "protein": 5.159999999999999,
        "baseCarbs": 0.634,
        "carbs": 38.04,
        "baseFats": 0.013999999999999999,
        "fats": 0.8399999999999999
      }
    ],
    "calories": 170.39999999999998,
    "protein": 5.159999999999999,
    "carbs": 38.04,
    "fats": 0.8399999999999999,
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 145
    },
    "notes": "Cantidades pesadas en crudo salvo legumbres escurridas y guisantes cocidos. Las especias y el aceite indicados ya están contabilizados."
  },
  "nov27_lowcarb_0": {
    "name": "Pechuga de Pavo a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f003ef6c48dfc43a5bdb3.png",
    "preparation": "1. Si los filetes de pechuga de pavo son muy gruesos, se pueden abrir tipo libro o golpear ligeramente para que tengan un grosor más uniforme y se cocinen mejor. 2. Sazonar los filetes de pavo con sal, pimienta y tus especias favoritas. 3. Calentar una plancha o sartén antiadherente a fuego medio-alto con una gota de aceite de oliva. 4. Cocinar la pechuga de pavo durante unos 3-4 minutos por cada lado, o hasta que esté dorada por fuera y completamente cocida por dentro.",
    "ingredients": [
      {
        "name": "Pechuga de Pavo",
        "quantity": "200",
        "unit": "g (cocinados)",
        "nutritionReference": "CoFID 2021 18-356: Turkey, breast, fillet, grilled, meat only; por 100 g COCINADOS",
        "baseCalories": 1.55,
        "calories": 310,
        "baseProtein": 0.35,
        "protein": 70,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.017,
        "fats": 3.4000000000000004,
        "weightBasis": "cooked",
        "notes": "Pesar DESPUÉS de cocinar; el perfil nutricional corresponde al alimento cocinado."
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 89.9,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 9.990000000000002
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "0.2",
        "unit": "g",
        "nutritionReference": "USDA SR Legacy FDC 170931, pimienta negra; CH disponibles sin fibra",
        "baseCalories": 2.51,
        "calories": 0.502,
        "baseProtein": 0.10400000000000001,
        "protein": 0.020800000000000003,
        "baseCarbs": 0.387,
        "carbs": 0.07740000000000001,
        "baseFats": 0.0326,
        "fats": 0.00652
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 111
    },
    "notes": "Receta sencilla de DATABASE. Carne pesada COCINADA; verduras en crudo. El aceite y los condimentos indicados están incluidos en el cálculo. Puedes cocinar varias raciones juntas.",
    "calories": 400.402,
    "protein": 70.0208,
    "carbs": 0.07740000000000001,
    "fats": 13.396520000000002
  },
  "nov27_lowcarb_1": {
    "name": "Ensalada de Tomate, Ajo y Cebolla",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe199b8ed3c4d37cbd18.png",
    "preparation": "1. Lavar bien los tomates y cortarlos en rodajas, gajos o dados, según preferencia. 2. Pelar y picar la cebolla en juliana fina. Para suavizar su sabor, se puede dejar en remojo en agua fría con un poco de vinagre durante 10 minutos y luego escurrir. 3. Pelar y picar el ajo muy finamente, o machacarlo en un mortero. 4. En un bol o fuente, combinar el tomate, la cebolla y el ajo. 5. Aliñar generosamente con aceite de oliva virgen extra de buena calidad, un poco de vinagre (opcional, preferiblemente de Jerez o manzana) y sal. Mezclar bien y dejar reposar unos minutos antes de servir para que se integren los sabores.",
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "300",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-517: Tomatoes, standard, raw; por 100 g",
        "baseCalories": 0.14,
        "calories": 42.00000000000001,
        "baseProtein": 0.005,
        "protein": 1.5,
        "baseCarbs": 0.03,
        "carbs": 9,
        "baseFats": 0.001,
        "fats": 0.3
      },
      {
        "name": "Ajo",
        "quantity": "5",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-244: Garlic, raw; por 100 g",
        "baseCalories": 0.98,
        "calories": 4.9,
        "baseProtein": 0.079,
        "protein": 0.395,
        "baseCarbs": 0.163,
        "carbs": 0.8150000000000001,
        "baseFats": 0.006,
        "fats": 0.03
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-499: Onions, raw; por 100 g",
        "baseCalories": 0.35,
        "calories": 35,
        "baseProtein": 0.01,
        "protein": 1,
        "baseCarbs": 0.08,
        "carbs": 8,
        "baseFats": 0.001,
        "fats": 0.1
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 89.9,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 9.990000000000002
      },
      {
        "name": "Vinagre",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-339: Vinegar; valores por 100 g",
        "baseCalories": 0.22,
        "calories": 2.2,
        "baseProtein": 0.004,
        "protein": 0.04,
        "baseCarbs": 0.006,
        "carbs": 0.06,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 95
    },
    "notes": "Receta sencilla de DATABASE. Carne pesada COCINADA; verduras en crudo. El aceite y los condimentos indicados están incluidos en el cálculo. Puedes cocinar varias raciones juntas.",
    "calories": 174,
    "protein": 2.935,
    "carbs": 17.874999999999996,
    "fats": 10.420000000000002
  },
  "nov27_lowcarb_2": {
    "name": "Solomillo/Filete de Ternera a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe6c0ed5060d3743015a.png",
    "preparation": "1. Sacar el filete o solomillo de ternera del refrigerador unos 15-20 minutos antes de cocinar para que se temple. 2. Sazonar la carne con sal y pimienta negra recién molida justo antes de ponerla en la plancha. 3. Calentar una plancha o sartén de fondo grueso a fuego alto hasta que esté bien caliente. Añadir una gota de aceite de oliva y extenderlo. 4. Cocinar el filete al gusto. 5. Dejar reposar la carne un par de minutos antes de servir para que los jugos se redistribuyan.",
    "ingredients": [
      {
        "name": "Solomillo de Ternera",
        "quantity": "175",
        "unit": "g (cocinados)",
        "nutritionReference": "CoFID 2021 18-020: Beef, fillet steak, grilled, lean; por 100 g COCINADOS",
        "baseCalories": 1.88,
        "calories": 329,
        "baseProtein": 0.29100000000000004,
        "protein": 50.925000000000004,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.08,
        "fats": 14,
        "weightBasis": "cooked",
        "notes": "Pesar DESPUÉS de cocinar; el perfil nutricional corresponde al alimento cocinado."
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 44.95,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 4.995000000000001
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "0.2",
        "unit": "g",
        "nutritionReference": "USDA SR Legacy FDC 170931, pimienta negra; CH disponibles sin fibra",
        "baseCalories": 2.51,
        "calories": 0.502,
        "baseProtein": 0.10400000000000001,
        "protein": 0.020800000000000003,
        "baseCarbs": 0.387,
        "carbs": 0.07740000000000001,
        "baseFats": 0.0326,
        "fats": 0.00652
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 109
    },
    "notes": "Receta sencilla de DATABASE. Carne pesada COCINADA; verduras en crudo. El aceite y los condimentos indicados están incluidos en el cálculo. Puedes cocinar varias raciones juntas.",
    "calories": 374.452,
    "protein": 50.945800000000006,
    "carbs": 0.07740000000000001,
    "fats": 19.00152
  },
  "nov27_lowcarb_3": {
    "name": "Calabacín con Cebolla a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc8e9b8ed35d8e7cbb0e.png",
    "preparation": "1. Lavar el calabacín y cortarlo en rodajas de aproximadamente 0.5 a 1 cm de grosor. Pelar y cortar la cebolla en juliana o rodajas. 2. Calentar una plancha o sartén grande con un chorrito de aceite de oliva a fuego medio-alto. 3. Colocar las rodajas de calabacín y la cebolla sobre la plancha caliente. Cocinar durante 3-5 minutos por cada lado, o hasta que estén tiernos y presenten marcas doradas de la plancha. 4. Sazonar con sal, pimienta y opcionalmente un poco de ajo en polvo u orégano durante la cocción o al final.",
    "ingredients": [
      {
        "name": "Calabacín",
        "quantity": "200",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-627: Courgette, raw; por 100 g",
        "baseCalories": 0.16,
        "calories": 32,
        "baseProtein": 0.013000000000000001,
        "protein": 2.6,
        "baseCarbs": 0.023,
        "carbs": 4.6,
        "baseFats": 0.002,
        "fats": 0.4
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-499: Onions, raw; por 100 g",
        "baseCalories": 0.35,
        "calories": 35,
        "baseProtein": 0.01,
        "protein": 1,
        "baseCarbs": 0.08,
        "carbs": 8,
        "baseFats": 0.001,
        "fats": 0.1
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 44.95,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 4.995000000000001
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "0.2",
        "unit": "g",
        "nutritionReference": "USDA SR Legacy FDC 170931, pimienta negra; CH disponibles sin fibra",
        "baseCalories": 2.51,
        "calories": 0.502,
        "baseProtein": 0.10400000000000001,
        "protein": 0.020800000000000003,
        "baseCarbs": 0.387,
        "carbs": 0.07740000000000001,
        "baseFats": 0.0326,
        "fats": 0.00652
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 94
    },
    "notes": "Receta sencilla de DATABASE. Carne pesada COCINADA; verduras en crudo. El aceite y los condimentos indicados están incluidos en el cálculo. Puedes cocinar varias raciones juntas.",
    "calories": 112.452,
    "protein": 3.6208,
    "carbs": 12.6774,
    "fats": 5.501520000000001
  },
  "nov27_lowcarb2_0": {
    "name": "Patata con brócoli y pollo asado",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687de454838c601605b6e271.png",
    "preparation": "1. Cocer la patata y el brócoli al vapor o en agua hirviendo hasta que estén tiernos. 2. Cocinar la pechuga de pollo a la plancha o asada al horno, sazonada al gusto. 3. Servir la patata y el brócoli como base y colocar el pollo troceado por encima. Aliñar con aceite de oliva y especias si se desea.",
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "275",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-489: Potatoes, old, raw, flesh only; por 100 g",
        "baseCalories": 0.82,
        "calories": 225.5,
        "baseProtein": 0.019,
        "protein": 5.225,
        "baseCarbs": 0.196,
        "carbs": 53.9,
        "baseFats": 0.001,
        "fats": 0.275
      },
      {
        "name": "Brócoli",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-502: Broccoli, green, raw; por 100 g",
        "baseCalories": 0.34,
        "calories": 51.00000000000001,
        "baseProtein": 0.043,
        "protein": 6.449999999999999,
        "baseCarbs": 0.032,
        "carbs": 4.8,
        "baseFats": 0.006,
        "fats": 0.9
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "175",
        "unit": "g",
        "nutritionReference": "CoFID 2021 18-290: Chicken, light meat, raw; por 100 g",
        "baseCalories": 1.06,
        "calories": 185.5,
        "baseProtein": 0.24,
        "protein": 42,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.011000000000000001,
        "fats": 1.9250000000000003
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 89.9,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 9.990000000000002
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Pimienta",
        "quantity": "0.2",
        "unit": "g",
        "nutritionReference": "USDA SR Legacy FDC 170931, pimienta negra; CH disponibles sin fibra",
        "baseCalories": 2.51,
        "calories": 0.502,
        "baseProtein": 0.10400000000000001,
        "protein": 0.020800000000000003,
        "baseCarbs": 0.387,
        "carbs": 0.07740000000000001,
        "baseFats": 0.0326,
        "fats": 0.00652
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 77
    },
    "notes": "Pollo, patata y verduras frescas pesados EN CRUDO. Atún en aceite y espárragos de bote: peso ESCURRIDO. Huevo por unidades. Aceite total el indicado; incluye todos los ingredientes de DATABASE y los condimentos de la preparación.",
    "calories": 552.4019999999999,
    "protein": 53.6958,
    "carbs": 58.77739999999999,
    "fats": 13.096520000000003
  },
  "nov27_lowcarb2_1": {
    "name": "Ensalada de Tomate Espárragos Blancos con Atún",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/699b47f820c0359e700b32ca.png",
    "preparation": "1. Lavar y cortar los tomates en gajos. 2. Escurrir los espárragos blancos y el atún. 3. Picar la cebolla en juliana fina. 4. En una fuente, disponer los tomates, los espárragos y el atún. 5. Añadir la cebolla y aliñar con aceite de oliva, vinagre y sal al gusto.",
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-517: Tomatoes, standard, raw; por 100 g",
        "baseCalories": 0.14,
        "calories": 21.000000000000004,
        "baseProtein": 0.005,
        "protein": 0.75,
        "baseCarbs": 0.03,
        "carbs": 4.5,
        "baseFats": 0.001,
        "fats": 0.15
      },
      {
        "name": "Espárragos Blancos",
        "quantity": "200",
        "unit": "g",
        "nutritionReference": "Conservas DANI ficha técnica oficial espárragos blancos: 33 kcal, 2 P, 3 CH, 1 G por 100 g; https://www.dani.es/sites/default/files/2019-12/Esparragos%20blancos.pdf",
        "baseCalories": 0.33,
        "calories": 66,
        "baseProtein": 0.02,
        "protein": 4,
        "baseCarbs": 0.03,
        "carbs": 6,
        "baseFats": 0.01,
        "fats": 2
      },
      {
        "name": "Atún en Conserva",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 16-417: Tuna, canned in sunflower oil, drained; por 100 g",
        "baseCalories": 1.59,
        "calories": 238.5,
        "baseProtein": 0.254,
        "protein": 38.1,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.064,
        "fats": 9.6
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-499: Onions, raw; por 100 g",
        "baseCalories": 0.35,
        "calories": 26.25,
        "baseProtein": 0.01,
        "protein": 0.75,
        "baseCarbs": 0.08,
        "carbs": 6,
        "baseFats": 0.001,
        "fats": 0.075
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "calories": 44.95,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0.9990000000000001,
        "fats": 4.995000000000001
      },
      {
        "name": "Vinagre",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-339: Vinegar; valores por 100 g",
        "baseCalories": 0.22,
        "calories": 2.2,
        "baseProtein": 0.004,
        "protein": 0.04,
        "baseCarbs": 0.006,
        "carbs": 0.06,
        "baseFats": 0,
        "fats": 0
      },
      {
        "name": "Sal",
        "quantity": "1",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-367: Salt; valores por 100 g",
        "baseCalories": 0,
        "calories": 0,
        "baseProtein": 0,
        "protein": 0,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 0,
        "fats": 0
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 149
    },
    "notes": "Pollo, patata y verduras frescas pesados EN CRUDO. Atún en aceite y espárragos de bote: peso ESCURRIDO. Huevo por unidades. Aceite total el indicado; incluye todos los ingredientes de DATABASE y los condimentos de la preparación.",
    "calories": 398.9,
    "protein": 43.64,
    "carbs": 16.56,
    "fats": 16.82
  },
  "nov27_lowcarb2_2": {
    "name": "Huevo Duro Cocido",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68f27f5bfb2e440988a37788.png",
    "preparation": "Cocer the huevo en agua hirviendo durante 10-12 minutos. Pelar y servir.",
    "ingredients": [
      {
        "name": "Huevo Cocido",
        "quantity": "3",
        "unit": "unidad(es)",
        "nutritionReference": "CoFID 2021 12-940: Eggs, chicken, whole, boiled; por 100 g; una unidad = 55 g comestibles",
        "baseCalories": 78.64999999999999,
        "calories": 235.95,
        "baseProtein": 7.754999999999999,
        "protein": 23.264999999999997,
        "baseCarbs": 0,
        "carbs": 0,
        "baseFats": 5.28,
        "fats": 15.84
      }
    ],
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 117
    },
    "notes": "Pollo, patata y verduras frescas pesados EN CRUDO. Atún en aceite y espárragos de bote: peso ESCURRIDO. Huevo por unidades. Aceite total el indicado; incluye todos los ingredientes de DATABASE y los condimentos de la preparación.",
    "calories": 235.95,
    "protein": 23.264999999999997,
    "carbs": 0,
    "fats": 15.84
  }
};

const dailyMenus = [
  {
    "name": "Día 1",
    "targetMacros": {
      "calories": 2900.1,
      "protein": 152.6,
      "carbs": 358.6,
      "fats": 102.1
    },
    "baselineTotals": {
      "calories": 2898.35,
      "protein": 152.48999999999998,
      "carbs": 359.66,
      "fats": 101.835
    },
    "desayuno": [
      "p0_m0",
      "p0_m1"
    ],
    "comida": [
      "nov23_d0_m0"
    ],
    "cena": [
      "nov23_d0_m1",
      "nov23_d0_m2"
    ],
    "extra": [
      "nov23_d0_m3",
      "nov23_d0_m4"
    ]
  },
  {
    "name": "Día 2",
    "targetMacros": {
      "calories": 2900,
      "protein": 152.6,
      "carbs": 406.8,
      "fats": 79.9
    },
    "baselineTotals": {
      "calories": 2898.527,
      "protein": 151.8293,
      "carbs": 405.09090000000003,
      "fats": 79.44202000000001
    },
    "desayuno": [
      "p1_m0",
      "p1_m1",
      "p1_m2"
    ],
    "comida": [
      "nov23_d1_m0"
    ],
    "cena": [
      "nov23_d1_m1"
    ],
    "extra": [
      "nov23_d1_m2"
    ]
  },
  {
    "name": "Lowcarb",
    "targetMacros": {
      "calories": 2301.9,
      "protein": 170.3,
      "carbs": 177.9,
      "fats": 100.4
    },
    "baselineTotals": {
      "calories": 2291.806,
      "protein": 175.7224,
      "carbs": 165.8572,
      "fats": 105.86956
    },
    "desayuno": [
      "p2_m0"
    ],
    "comida": [
      "nov27_lowcarb_0",
      "nov27_lowcarb_1"
    ],
    "cena": [
      "nov27_lowcarb_2",
      "nov27_lowcarb_3"
    ],
    "extra": [
      "nov23_d2_m3",
      "nov23_d2_m4"
    ]
  },
  {
    "name": "Lowcarb 2",
    "targetMacros": {
      "calories": 2300,
      "protein": 154.1,
      "carbs": 171.5,
      "fats": 113.9
    },
    "baselineTotals": {
      "calories": 2301.8019999999997,
      "protein": 154.03580000000002,
      "carbs": 171.0024,
      "fats": 113.46152000000001
    },
    "desayuno": [
      "p3_m0"
    ],
    "comida": [
      "nov27_lowcarb2_0"
    ],
    "cena": [
      "nov27_lowcarb2_1",
      "nov27_lowcarb2_2",
      "nov23_d3_m4"
    ],
    "extra": [
      "nov23_d3_m2",
      "nov23_d3_m3"
    ]
  }
];
