// Titulo: Javi Fariñas Fariñas — plan de alimentación
// Ajuste 23/11/2026: desayunos de días 1 y 3 pasan de tres a dos huevos; compensación para conservar aproximadamente 1700 kcal. Misma selección de platos y frutas, con datos completos de DATABASE. Días 2 y 4 conservados.
// Perfiles: CoFID 2021 para alimentos indicados; bases del plan vigente para productos específicos sin etiqueta disponible. Valores aproximados, confirmar marcas.
const foodDatabase = {
  "p0_m0": {
    "name": "Tostada de Centeno con Huevo y Queso Cottage",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5cf9b8ed31c657c80e8.png",
    "calories": 389,
    "protein": 34.2,
    "carbs": 26,
    "fats": 16.2,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "1",
        "unit": "rebanada",
        "calories": 108,
        "protein": 3.6,
        "carbs": 20,
        "fats": 1.2,
        "baseCalories": 108,
        "baseProtein": 3.6,
        "baseCarbs": 20,
        "baseFats": 1.2,
        "gramsPerUnit": 40,
        "category": "bread_carb",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Huevo",
        "quantity": "2",
        "unit": "ud",
        "calories": 131,
        "protein": 12.6,
        "carbs": 0,
        "fats": 9,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0,
        "baseFats": 4.5,
        "gramsPerUnit": 50,
        "category": "egg",
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw; unidad 50 g comestibles"
      },
      {
        "name": "Queso Cottage",
        "quantity": "150",
        "unit": "g",
        "calories": 150,
        "protein": 18,
        "carbs": 6,
        "fats": 6,
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04,
        "category": "light_cheese",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Cocinar los huevos al gusto (revueltos, pochados, a la plancha). 3. Untar el queso cottage sobre las tostadas. 4. Añadir el aguacate laminado (si se usa en la receta ajustada) y los huevos encima.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 36
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p0_m1": {
    "name": "Ensalada de Pasta con Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc47b91eb349463d47dd.png",
    "calories": 688.95,
    "protein": 52.7,
    "carbs": 91.19999999999999,
    "fats": 13.395,
    "ingredients": [
      {
        "name": "Pasta Integral",
        "quantity": "100",
        "unit": "g",
        "calories": 329,
        "protein": 12.6,
        "carbs": 68.3,
        "fats": 2.5,
        "baseCalories": 3.29,
        "baseProtein": 0.126,
        "baseCarbs": 0.6829999999999999,
        "baseFats": 0.025,
        "category": "grain_carb_dry",
        "nutritionReference": "CoFID 2021 11-718 Pasta, wholewheat, spaghetti, dried, raw"
      },
      {
        "name": "Canónigos",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "calories": 14.000000000000002,
        "protein": 0.5,
        "carbs": 3,
        "fats": 0.1,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "100",
        "unit": "g",
        "calories": 21,
        "protein": 0.8,
        "carbs": 4.3,
        "fats": 0.2,
        "baseCalories": 0.21,
        "baseProtein": 0.008,
        "baseCarbs": 0.043,
        "baseFats": 0.002,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-524 Pepper, capsicum, red, raw"
      },
      {
        "name": "Pimiento Verde",
        "quantity": "100",
        "unit": "g",
        "calories": 15,
        "protein": 0.8,
        "carbs": 2.6,
        "fats": 0.3,
        "baseCalories": 0.15,
        "baseProtein": 0.008,
        "baseCarbs": 0.026000000000000002,
        "baseFats": 0.003,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-318 Peppers, capsicum, green, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 35,
        "protein": 1,
        "carbs": 8,
        "fats": 0.1,
        "baseCalories": 0.35000000000000003,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "125",
        "unit": "g",
        "calories": 200,
        "protein": 35,
        "carbs": 0,
        "fats": 5,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 8.99,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0.999,
        "nutritionReference": "Base AOVE del plan verificado: 899 kcal/100 g",
        "calories": 44.95,
        "protein": 0,
        "carbs": 0,
        "fats": 4.995
      }
    ],
    "preparation": "1. Cocer la pasta según las instrucciones del paquete. Escurrir, pasar por agua fría para detener la cocción y dejar enfriar. 2. Cocinar la pechuga de pollo (a la plancha, hervida o asada) y desmenuzarla o cortarla en dados. 3. Lavar los canónigos. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos pequeños. 4. En un bol grande, combinar la pasta fría, el pollo, los canónigos y las verduras picadas. 5. Aliñar con aceite de oliva virgen extra, vinagre o tu salsa para ensaladas favorita (ej. yogur, mostaza y miel). Salpimentar al gusto.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 66
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p0_m2": {
    "name": "Falso Risotto de Coliflor con Pollo y Setas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cee78c174d4e6d420b9d.png",
    "calories": 316.95,
    "protein": 39.5,
    "carbs": 12.7,
    "fats": 10.695,
    "ingredients": [
      {
        "name": "Coliflor",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2.5,
        "carbs": 4.4,
        "fats": 0.4,
        "baseCalories": 0.3,
        "baseProtein": 0.025,
        "baseCarbs": 0.044000000000000004,
        "baseFats": 0.004,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-512 Cauliflower, raw"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "125",
        "unit": "g",
        "calories": 200,
        "protein": 35,
        "carbs": 0,
        "fats": 5,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Champiñones",
        "quantity": "100",
        "unit": "g",
        "calories": 7.000000000000001,
        "protein": 1,
        "carbs": 0.3,
        "fats": 0.2,
        "baseCalories": 0.07,
        "baseProtein": 0.01,
        "baseCarbs": 0.003,
        "baseFats": 0.002,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-505 Mushrooms, white, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 35,
        "protein": 1,
        "carbs": 8,
        "fats": 0.1,
        "baseCalories": 0.35000000000000003,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 8.99,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0.999,
        "nutritionReference": "Base AOVE del plan verificado: 899 kcal/100 g",
        "calories": 44.95,
        "protein": 0,
        "carbs": 0,
        "fats": 4.995
      }
    ],
    "preparation": "1. Rallar la coliflor hasta que parezca arroz. 2. Saltear pollo y champiñones con cebolla. 3. Añadir la coliflor y saltear 5 min (no debe ablandarse demasiado). 4. Sazonar al gusto.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 87
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p0_m3": {
    "name": "Yogurt Protéico con Frutos Rojos y Secos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afea2b91eb35e413d4ab6.png",
    "calories": 303.75,
    "protein": 25.325,
    "carbs": 21.9,
    "fats": 13.3,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "175",
        "unit": "g",
        "calories": 108.5,
        "protein": 18.375,
        "carbs": 7,
        "fats": 0.525,
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "category": "protein_dairy",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Frutos Rojos",
        "quantity": "100",
        "unit": "g",
        "calories": 50,
        "protein": 1,
        "carbs": 12,
        "fats": 0.5,
        "baseCalories": 0.5,
        "baseProtein": 0.01,
        "baseCarbs": 0.12,
        "baseFats": 0.005,
        "category": "berries",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Frutos Secos",
        "quantity": "25",
        "unit": "g",
        "calories": 145.25,
        "protein": 5.95,
        "carbs": 2.9,
        "fats": 12.275,
        "baseCalories": 5.8100000000000005,
        "baseProtein": 0.23800000000000002,
        "baseCarbs": 0.11599999999999999,
        "baseFats": 0.49100000000000005,
        "category": "solid_fat",
        "nutritionReference": "CoFID 2021 14-880 Nuts, mixed"
      }
    ],
    "preparation": "1. En un bol, verter el yogur proteico. 2. Añadir los frutos rojos frescos o descongelados. 3. Espolvorear con los frutos secos troceados por encima. Servir inmediatamente.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 45
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p1_m0": {
    "name": "Tostada de Centeno con Queso Cottage y Cherries",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68792fea2035ba213493e87e.png",
    "calories": 188,
    "protein": 11.6,
    "carbs": 27,
    "fats": 3.4,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "1",
        "unit": "rebanada",
        "calories": 108,
        "protein": 3.6,
        "carbs": 20,
        "fats": 1.2,
        "baseCalories": 108,
        "baseProtein": 3.6,
        "baseCarbs": 20,
        "baseFats": 1.2,
        "gramsPerUnit": 40,
        "category": "bread_carb"
      },
      {
        "name": "Tomates Cherry",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg"
      },
      {
        "name": "Queso Cottage",
        "quantity": "50",
        "unit": "g",
        "calories": 50,
        "protein": 6,
        "carbs": 2,
        "fats": 2,
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04,
        "category": "light_cheese"
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Untar el queso cottage sobre las tostadas y añadir los cherries por encima con especias."
  },
  "p1_m1": {
    "name": "Fajitas de Pollo y Verduras",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcef0ed50608b742ff33.png",
    "calories": 388,
    "protein": 39.6,
    "carbs": 40,
    "fats": 6,
    "ingredients": [
      {
        "name": "Pan de Fajita",
        "quantity": "1",
        "unit": "rebanada",
        "calories": 108,
        "protein": 3.6,
        "carbs": 20,
        "fats": 1.2,
        "baseCalories": 108,
        "baseProtein": 3.6,
        "baseCarbs": 20,
        "baseFats": 1.2,
        "gramsPerUnit": 40,
        "category": "bread_carb"
      },
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg"
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
        "baseFats": 0.002,
        "category": "default_veg"
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
        "baseFats": 0.002,
        "category": "default_veg"
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "100",
        "unit": "g",
        "calories": 160,
        "protein": 28,
        "carbs": 0,
        "fats": 4,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein"
      }
    ],
    "preparation": "1. Cortar la pechuga de pollo en tiras finas. Cortar el pimiento rojo, pimiento Verde y cebolla en juliana. Picar el tomate en dados pequeños. 2. Calentar un poco de aceite en una sartén grande. Saltear el pollo hasta que esté dorado y cocido. Retirar y reservar. 3. En la misma sartén, añadir un poco más de aceite si es necesario y saltear las verduras (pimientos y cebolla) hasta que estén tiernas pero crujientes. 4. Volver a añadir el pollo a la sartén con las verduras. Sazonar con especias para fajitas (opcional) o sal y pimienta. Mezclar bien. 5. Calentar las tortillas de fajita según las instrucciones del paquete. 6. Rellenar las tortillas con la mezcla de pollo y verduras, y añadir el tomate fresco picado por encima. Opcional: servir con guacamole, crema agria o salsa."
  },
  "p1_m2": {
    "name": "Poke de Arroz con Atún, Queso Feta, Tomate and Aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cf7d29b0c67d84e9af509.png",
    "calories": 845,
    "protein": 83,
    "carbs": 46.2,
    "fats": 32.7,
    "ingredients": [
      {
        "name": "Arroz",
        "quantity": "50",
        "unit": "g",
        "calories": 182.5,
        "protein": 6,
        "carbs": 37.5,
        "fats": 1,
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "category": "grain_carb_dry"
      },
      {
        "name": "Atún en Conserva",
        "quantity": "200",
        "unit": "g",
        "calories": 320,
        "protein": 56,
        "carbs": 0,
        "fats": 8,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein"
      },
      {
        "name": "Queso Feta",
        "quantity": "70",
        "unit": "g",
        "calories": 245,
        "protein": 17.5,
        "carbs": 1.4,
        "fats": 17.5,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25,
        "category": "cheese"
      },
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg"
      },
      {
        "name": "Aguacate",
        "quantity": "15",
        "unit": "g",
        "calories": 67.5,
        "protein": 1.5,
        "carbs": 2.3,
        "fats": 6,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "category": "solid_fat"
      }
    ],
    "preparation": "1. Cocer el arroz y dejar enfriar. 2. Cortar el tomate, aguacate y queso feta en dados. 3. En un bol, colocar una base de arroz. 4. Añadir el atún, tomate, aguacate y queso feta. 5. Aliñar al gusto con salsa de soja y aceite de sésamo."
  },
  "p1_m3": {
    "name": "Yogur Proteico con Cereales de Avena",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7ef66df76fef1b58db3f2.png",
    "calories": 269.5,
    "protein": 17,
    "carbs": 47.5,
    "fats": 1.6,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "100",
        "unit": "g",
        "calories": 62,
        "protein": 10.5,
        "carbs": 4,
        "fats": 0.3,
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "category": "protein_dairy"
      },
      {
        "name": "Cereales de Avena",
        "quantity": "50",
        "unit": "g",
        "calories": 182.5,
        "protein": 6,
        "carbs": 37.5,
        "fats": 1,
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "category": "grain_carb_dry"
      },
      {
        "name": "Frutos Rojos",
        "quantity": "50",
        "unit": "g",
        "calories": 25,
        "protein": 0.5,
        "carbs": 6,
        "fats": 0.3,
        "baseCalories": 0.5,
        "baseProtein": 0.01,
        "baseCarbs": 0.12,
        "baseFats": 0.005,
        "category": "berries"
      }
    ],
    "preparation": "1. Verter el yogur en un bol. 2. Añadir los cereales de avena y los frutos rojos por encima."
  },
  "p2_m0": {
    "name": "Tostada de Centeno con Huevo y Aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687a695da648331355d3b0b2.png",
    "calories": 335.25,
    "protein": 16.74,
    "carbs": 20.54,
    "fats": 20.415,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "1",
        "unit": "rebanada",
        "calories": 108,
        "protein": 3.6,
        "carbs": 20,
        "fats": 1.2,
        "baseCalories": 108,
        "baseProtein": 3.6,
        "baseCarbs": 20,
        "baseFats": 1.2,
        "gramsPerUnit": 40,
        "category": "bread_carb",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "ud",
        "calories": 131,
        "protein": 12.6,
        "carbs": 0,
        "fats": 9,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0,
        "baseFats": 4.5,
        "gramsPerUnit": 50,
        "category": "egg",
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw; unidad 50 g comestibles"
      },
      {
        "name": "Aguacate",
        "quantity": "30",
        "unit": "g",
        "calories": 51.3,
        "protein": 0.54,
        "carbs": 0.5399999999999999,
        "fats": 5.22,
        "baseCalories": 1.71,
        "baseProtein": 0.018000000000000002,
        "baseCarbs": 0.018,
        "baseFats": 0.174,
        "category": "solid_fat",
        "nutritionReference": "CoFID 2021 14-386 Avocado, Hass, flesh only"
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 8.99,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0.999,
        "nutritionReference": "Base AOVE del plan verificado: 899 kcal/100 g",
        "calories": 44.95,
        "protein": 0,
        "carbs": 0,
        "fats": 4.995
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Cocinar los huevos al gusto (revueltos, pochados, a la plancha). 3. Machacar el aguacate sobre las tostadas y añadir aceite y especias.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 38
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p2_m1": {
    "name": "Patata con brócoli y pollo asado",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687de454838c601605b6e271.png",
    "calories": 578.45,
    "protein": 55.825,
    "carbs": 60.3,
    "fats": 12.469999999999999,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "275",
        "unit": "g",
        "calories": 225.50000000000003,
        "protein": 5.225,
        "carbs": 53.9,
        "fats": 0.275,
        "baseCalories": 0.8200000000000001,
        "baseProtein": 0.019,
        "baseCarbs": 0.196,
        "baseFats": 0.001,
        "category": "tuber_carb",
        "nutritionReference": "CoFID 2021 13-489 Potatoes, old, raw, flesh only"
      },
      {
        "name": "Brócoli",
        "quantity": "200",
        "unit": "g",
        "calories": 68,
        "protein": 8.6,
        "carbs": 6.4,
        "fats": 1.2,
        "baseCalories": 0.34,
        "baseProtein": 0.043,
        "baseCarbs": 0.032,
        "baseFats": 0.006,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-502 Broccoli, green, raw"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42.00000000000001,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 8.99,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0.999,
        "nutritionReference": "Base AOVE del plan verificado: 899 kcal/100 g",
        "calories": 44.95,
        "protein": 0,
        "carbs": 0,
        "fats": 4.995
      }
    ],
    "preparation": "1. Cocer la patata y el brócoli al vapor o en agua hirviendo hasta que estén tiernos. 2. Cocinar la pechuga de pollo a la plancha o asada al horno, sazonada al gusto. 3. Servir la patata y el brócoli como base y colocar el pollo troceado por encima. Aliñar con aceite de oliva y especias si se desea.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 77
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p2_m2": {
    "name": "Berenjenas Rellenas de Pavo al Horno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cdf6e7de6638e2767e27.png",
    "calories": 479.95,
    "protein": 61.800000000000004,
    "carbs": 17.9,
    "fats": 15.995000000000001,
    "ingredients": [
      {
        "name": "Berenjena",
        "quantity": "200",
        "unit": "g",
        "calories": 30,
        "protein": 1.8000000000000003,
        "carbs": 4.4,
        "fats": 0.8,
        "baseCalories": 0.15,
        "baseProtein": 0.009000000000000001,
        "baseCarbs": 0.022000000000000002,
        "baseFats": 0.004,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-161 Aubergine, raw"
      },
      {
        "name": "Carne Picada de Pavo",
        "quantity": "175",
        "unit": "g",
        "calories": 280,
        "protein": 49.00000000000001,
        "carbs": 0,
        "fats": 7,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 35,
        "protein": 1,
        "carbs": 8,
        "fats": 0.1,
        "baseCalories": 0.35000000000000003,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "category": "default_veg",
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Tomate Frito",
        "quantity": "50",
        "unit": "g",
        "calories": 15,
        "protein": 1,
        "carbs": 2.5,
        "fats": 0.1,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Queso Havarti Light",
        "quantity": "75",
        "unit": "g",
        "calories": 75,
        "protein": 9,
        "carbs": 3,
        "fats": 3,
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04,
        "category": "light_cheese",
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 8.99,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0.999,
        "nutritionReference": "Base AOVE del plan verificado: 899 kcal/100 g",
        "calories": 44.95,
        "protein": 0,
        "carbs": 0,
        "fats": 4.995
      }
    ],
    "preparation": "1. Asar las berenjenas partidas por la mitad. Vaciar la carne. 2. Sofreír cebolla y carne de pavo. Añadir la carne de berenjena picada y tomate. 3. Rellenar las pieles, cubrir con queso y gratinar.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 86
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p2_m3": {
    "name": "Cereales de Trigo sin Azúcar",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7eff3a54d8879c640b271.png",
    "calories": 304,
    "protein": 15.450000000000001,
    "carbs": 50.75,
    "fats": 5.75,
    "ingredients": [
      {
        "name": "Cereales de Trigo",
        "quantity": "50",
        "unit": "g",
        "calories": 166,
        "protein": 5.25,
        "carbs": 36.35,
        "fats": 0.95,
        "category": "grain_carb_dry",
        "baseCalories": 3.3200000000000003,
        "baseProtein": 0.105,
        "baseCarbs": 0.7270000000000001,
        "baseFats": 0.019,
        "nutritionReference": "CoFID 2021 11-774 Breakfast cereal, wheat biscuits, Weetabix type, unfortified"
      },
      {
        "name": "Leche",
        "quantity": "300",
        "unit": "g",
        "calories": 138,
        "protein": 10.200000000000001,
        "carbs": 14.4,
        "fats": 4.8,
        "category": "milk",
        "baseCalories": 0.46,
        "baseProtein": 0.034,
        "baseCarbs": 0.048,
        "baseFats": 0.016,
        "nutritionReference": "Base del plan vigente del cliente; confirmar etiqueta de la marca. "
      }
    ],
    "preparation": "1. Verter los cereales en un bol. 2. Añadir leche o bebida vegetal al gusto.",
    "canonicalRecipe": {
      "spreadsheetId": "1mOofR4T4__X4yXdUmVPPtI5lFyrOyB1UkbkBC8GUUv8",
      "sheet": "NUTR_DATA",
      "row": 60
    },
    "notes": "Pesos: pasta, patata y verduras en crudo; pollo y pavo según el perfil de ración cocinada del plan vigente. Fruta y frutos secos conservados, sin introducir variedades nuevas. Cantidades sencillas para preparar varias raciones."
  },
  "p3_m0": {
    "name": "Pudding de chía alto en proteína",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d043e9b0c67b6db9b08b8.png",
    "ingredients": [
      {
        "name": "Semillas de Chía",
        "quantity": "15",
        "unit": "g",
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "calories": 67.5,
        "protein": 1.5,
        "carbs": 2.25,
        "fats": 6
      },
      {
        "name": "Leche",
        "quantity": "200",
        "unit": "g",
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
    "calories": 254.5,
    "protein": 28.3,
    "carbs": 13.1,
    "fats": 10.2
  },
  "p3_m1": {
    "name": "Estofado de Lentejas con Verduras y Costilla",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cf648c174dc51742182c.png",
    "ingredients": [
      {
        "name": "Lentejas Cocidas",
        "quantity": "175",
        "unit": "g",
        "baseCalories": 1.3,
        "baseProtein": 0.08,
        "baseCarbs": 0.22,
        "baseFats": 0.005,
        "calories": 227.5,
        "protein": 14,
        "carbs": 38.5,
        "fats": 0.875
      },
      {
        "name": "Costilla de Cerdo",
        "quantity": "125",
        "unit": "g",
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14,
        "calories": 275,
        "protein": 27.5,
        "carbs": 0,
        "fats": 17.5
      },
      {
        "name": "Zanahoria",
        "quantity": "100",
        "unit": "g",
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
        "quantity": "100",
        "unit": "g",
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
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
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
        "name": "Ajo",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 1.5,
        "protein": 0.1,
        "carbs": 0.25,
        "fats": 0.01
      },
      {
        "name": "Agua",
        "quantity": "200",
        "unit": "g",
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
        "name": "Laurel",
        "quantity": "1",
        "unit": "g",
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
    "preparation": "1. Sofreír la costilla troceada hasta dorar. 2. Añadir las verduras picadas y pochar. 3. Añadir las lentejas (si son de bote, lavadas; si son secas, remojadas) y cubrir con agua/caldo. 4. Cocer hasta que todo esté tierno. Sazonar con laurel y pimentón.",
    "calories": 579,
    "protein": 46.6,
    "carbs": 51.25,
    "fats": 18.89
  },
  "p3_m2": {
    "name": "Sopa de Galets y Pelota de carne de Vacuno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922d159995c4b0151a32409.png",
    "ingredients": [
      {
        "name": "Galets",
        "quantity": "100",
        "unit": "g",
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
        "name": "Carne Picada de Vacuno",
        "quantity": "125",
        "unit": "g",
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14,
        "calories": 275,
        "protein": 27.5,
        "carbs": 0,
        "fats": 17.5
      },
      {
        "name": "Huevo",
        "quantity": "1",
        "unit": "ud",
        "baseCalories": 85.25,
        "baseProtein": 7.15,
        "baseCarbs": 0.605,
        "baseFats": 6.05,
        "gramsPerUnit": 55,
        "calories": 85.25,
        "protein": 7.15,
        "carbs": 0.605,
        "fats": 6.05
      },
      {
        "name": "Pan Rallado",
        "quantity": "10",
        "unit": "g",
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.03,
        "calories": 27,
        "protein": 0.9,
        "carbs": 5,
        "fats": 0.3
      },
      {
        "name": "Caldo de Carne",
        "quantity": "300",
        "unit": "g",
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
        "name": "Ajo",
        "quantity": "5",
        "unit": "g",
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "calories": 1.5,
        "protein": 0.1,
        "carbs": 0.25,
        "fats": 0.01
      },
      {
        "name": "Perejil",
        "quantity": "1",
        "unit": "g",
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
    "preparation": "1. Mezclar la carne picada con el huevo, un poco de pan rallado, ajo y perejil para formar las pelotas. 2. Poner el caldo de carne a hervir. 3. Cuando hierva, añadir las pelotas y los galets. 4. Cocinar a fuego medio durante 15-20 minutos hasta que la pasta esté lista y la carne cocida.",
    "calories": 753.75,
    "protein": 47.65,
    "carbs": 80.86,
    "fats": 25.86
  },
  "p3_m3": {
    "name": "Batido Whey de Proteínas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f021af6c48d41b5a5c003.png",
    "ingredients": [
      {
        "name": "Proteína Whey en Polvo",
        "quantity": "30",
        "unit": "g",
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2
      },
      {
        "name": "Agua",
        "quantity": "250",
        "unit": "g",
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
    "preparation": "1. En un shaker, añadir la cantidad recomendada de proteína en polvo. 2. Añadir la cantidad de líquido deseada (unos 200-300 ml). 3. Cerrar bien el shaker. 4. Agitar enérgicamente durante unos 20-30 segundos hasta que el polvo esté completamente disuelto.",
    "calories": 114,
    "protein": 24,
    "carbs": 1.5,
    "fats": 1.2
  }
};

const dailyMenus = [
  {
    "name": "Día 1",
    "targetMacros": {
      "calories": 1700,
      "protein": 150,
      "carbs": 150
    },
    "baselineTotals": {
      "calories": 1698.65,
      "protein": 151.725,
      "carbs": 151.79999999999998,
      "fats": 53.59
    },
    "desayuno": [
      "p0_m0"
    ],
    "comida": [
      "p0_m1"
    ],
    "cena": [
      "p0_m2"
    ],
    "extra": [
      "p0_m3"
    ]
  },
  {
    "name": "Día 2",
    "targetMacros": {
      "calories": 1700,
      "protein": 150,
      "carbs": 150
    },
    "baselineTotals": {
      "calories": 1690.5,
      "protein": 151.2,
      "carbs": 160.7,
      "fats": 43.7
    },
    "desayuno": [
      "p1_m0"
    ],
    "comida": [
      "p1_m1"
    ],
    "cena": [
      "p1_m2"
    ],
    "extra": [
      "p1_m3"
    ]
  },
  {
    "name": "Día 3",
    "targetMacros": {
      "calories": 1700,
      "protein": 150,
      "carbs": 150
    },
    "baselineTotals": {
      "calories": 1697.65,
      "protein": 149.815,
      "carbs": 149.49,
      "fats": 54.629999999999995
    },
    "desayuno": [
      "p2_m0"
    ],
    "comida": [
      "p2_m1"
    ],
    "cena": [
      "p2_m2"
    ],
    "extra": [
      "p2_m3"
    ]
  },
  {
    "name": "Día 4",
    "targetMacros": {
      "calories": 1700,
      "protein": 150,
      "carbs": 150
    },
    "baselineTotals": {
      "calories": 1701.25,
      "protein": 146.55,
      "carbs": 146.7,
      "fats": 56.14
    },
    "desayuno": [
      "p3_m0"
    ],
    "comida": [
      "p3_m1"
    ],
    "cena": [
      "p3_m2"
    ],
    "extra": [
      "p3_m3"
    ]
  }
];
