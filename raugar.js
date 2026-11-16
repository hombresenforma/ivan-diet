// Titulo: Plan de alimentación - 3 menús

const foodDatabase = {
  "r27": {
    "name": "Tostada Integral con Requesón y Miel",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/prueba-chatgpt/tostada-integral-requeson-miel.jpg",
    "preparation": "1. Tostar el pan integral. 2. Extender el requesón. 3. Añadir la miel por encima.",
    "calories": 250.2,
    "protein": 17.8,
    "carbs": 28.725,
    "fats": 6.949999999999999,
    "ingredients": [
      {
        "name": "Pan Integral",
        "quantity": "45",
        "unit": "g",
        "calories": 112.5,
        "baseCalories": 2.5,
        "protein": 4.05,
        "baseProtein": 0.09,
        "carbs": 20.25,
        "baseCarbs": 0.45,
        "fats": 1.5749999999999997,
        "baseFats": 0.034999999999999996
      },
      {
        "name": "Requesón",
        "quantity": "125",
        "unit": "g",
        "calories": 122.5,
        "baseCalories": 0.98,
        "protein": 13.75,
        "baseProtein": 0.11,
        "carbs": 4.375,
        "baseCarbs": 0.035,
        "fats": 5.375,
        "baseFats": 0.043
      },
      {
        "name": "Miel",
        "quantity": "5",
        "unit": "g",
        "calories": 15.2,
        "baseCalories": 3.04,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 4.1,
        "baseCarbs": 0.82,
        "fats": 0,
        "baseFats": 0
      }
    ]
  },
  "r89": {
    "name": "Guisantes con Jamón y Sepia a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/695e2065c98330f34a08a046.png",
    "preparation": "1. Saltear los guisantes con taquitos de jamón en una sartén con una gota de aceite de oliva. 2. Cocinar la sepia a la plancha a fuego fuerte con ajo y perejil hasta que esté dorada. 3. Servir la sepia acompañada de los guisantes con jamón.",
    "originalBaseRecipeId": "cc_guisantes_con_jamn_y_sepia_a_la_plancha",
    "calories": 458.39000000000004,
    "protein": 52.900200000000005,
    "carbs": 13.6184,
    "fats": 18.8308,
    "ingredients": [
      {
        "name": "Guisantes",
        "quantity": "125",
        "unit": "g",
        "calories": 125,
        "baseCalories": 1,
        "protein": 6.25,
        "baseProtein": 0.05,
        "carbs": 12.5,
        "baseCarbs": 0.1,
        "fats": 5,
        "baseFats": 0.04
      },
      {
        "name": "Jamón Serrano",
        "quantity": "20",
        "unit": "g",
        "calories": 44,
        "baseCalories": 2.2,
        "protein": 4.4,
        "baseProtein": 0.22,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 2.8000000000000003,
        "baseFats": 0.14
      },
      {
        "name": "Sepia",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "baseCalories": 1.6,
        "protein": 42.00000000000001,
        "baseProtein": 0.28,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 6,
        "baseFats": 0.04
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "baseCalories": 8.84,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 5,
        "baseFats": 1
      },
      {
        "name": "Ajo",
        "quantity": "3",
        "unit": "g",
        "calories": 4.47,
        "baseCalories": 1.49,
        "protein": 0.19080000000000003,
        "baseProtein": 0.0636,
        "carbs": 0.9918,
        "baseCarbs": 0.3306,
        "fats": 0.015,
        "baseFats": 0.005
      },
      {
        "name": "Perejil",
        "quantity": "2",
        "unit": "g",
        "calories": 0.72,
        "baseCalories": 0.36,
        "protein": 0.0594,
        "baseProtein": 0.0297,
        "carbs": 0.1266,
        "baseCarbs": 0.0633,
        "fats": 0.0158,
        "baseFats": 0.0079
      }
    ]
  },
  "r172": {
    "name": "Arroz Hervido",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69fee8aca3dd25aa2ac2626b.png",
    "preparation": "1. Cocer el arroz en agua con sal según las instrucciones del paquete hasta que esté en su punto. 2. Escurrir bien y servir.",
    "calories": 182.5,
    "protein": 6,
    "carbs": 37.5,
    "fats": 1,
    "ingredients": [
      {
        "name": "Arroz",
        "quantity": "50",
        "unit": "g",
        "calories": 182.5,
        "baseCalories": 3.65,
        "protein": 6,
        "baseProtein": 0.12,
        "carbs": 37.5,
        "baseCarbs": 0.75,
        "fats": 1,
        "baseFats": 0.02
      },
      {
        "name": "Sal",
        "quantity": "0.5",
        "unit": "g",
        "calories": 0,
        "baseCalories": 0,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 0,
        "baseFats": 0
      }
    ]
  },
  "r67": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "preparation": "1. Cortar el salmón en dados de tamaño mediano. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos adecuados para wok (ej. juliana gruesa o dados). 2. Calentar un wok o sartén grande con un poco de aceite a fuego alto. Saltear el salmón unos 2-3 minutos hasta que esté dorado por fuera pero ligeramente crudo por dentro. Retirar y reservar. 3. Añadir las verduras más duras (cebolla, pimientos) al wok y saltear durante 3-4 minutos. Luego añadir el tomate y saltear 1-2 minutos más. 4. Incorporar el salmón de nuevo al wok. Añadir salsa de soja (baja en sodio preferiblemente) y un toque de jengibre rallado o ajo picado (opcional). Mezclar bien y cocinar por 1-2 minutos más hasta que el salmón esté cocido y todo bien caliente. Servir inmediatamente, opcionalmente sobre una base de arroz o noodles.",
    "calories": 429.2,
    "protein": 34.75,
    "carbs": 18,
    "fats": 23.4,
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "baseCalories": 0.3,
        "protein": 2,
        "baseProtein": 0.02,
        "carbs": 5,
        "baseCarbs": 0.05,
        "fats": 0.2,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "baseCalories": 0.3,
        "protein": 2,
        "baseProtein": 0.02,
        "carbs": 5,
        "baseCarbs": 0.05,
        "fats": 0.2,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Verde",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "baseCalories": 0.3,
        "protein": 1.5,
        "baseProtein": 0.02,
        "carbs": 3.75,
        "baseCarbs": 0.05,
        "fats": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "baseCalories": 0.3,
        "protein": 1.5,
        "baseProtein": 0.02,
        "carbs": 3.75,
        "baseCarbs": 0.05,
        "fats": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Lomo de Salmón",
        "quantity": "125",
        "unit": "g",
        "calories": 275,
        "baseCalories": 2.2,
        "protein": 27.5,
        "baseProtein": 0.22,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 17.5,
        "baseFats": 0.14
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "baseCalories": 8.84,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 5,
        "baseFats": 1
      },
      {
        "name": "Salsa de Soja",
        "quantity": "5",
        "unit": "g",
        "calories": 5,
        "baseCalories": 1,
        "protein": 0.25,
        "baseProtein": 0.05,
        "carbs": 0.5,
        "baseCarbs": 0.1,
        "fats": 0.2,
        "baseFats": 0.04
      }
    ]
  },
  "r25": {
    "name": "Uvas con skyr y nueces",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/uvas-skyr-nueces.jpg",
    "preparation": "1. Lavar las uvas y servirlas con el skyr y las nueces picadas.",
    "calories": 377.85,
    "protein": 28.4,
    "carbs": 42.05,
    "fats": 10.6,
    "ingredients": [
      {
        "name": "Uvas",
        "quantity": "200",
        "unit": "g",
        "calories": 138,
        "baseCalories": 0.69,
        "protein": 1.4000000000000001,
        "baseProtein": 0.007,
        "carbs": 32,
        "baseCarbs": 0.16,
        "fats": 0.4,
        "baseFats": 0.002
      },
      {
        "name": "Skyr natural",
        "quantity": "225",
        "unit": "g",
        "calories": 141.75,
        "baseCalories": 0.63,
        "protein": 24.75,
        "baseProtein": 0.11,
        "carbs": 9,
        "baseCarbs": 0.04,
        "fats": 0.45,
        "baseFats": 0.002
      },
      {
        "name": "Nueces",
        "quantity": "15",
        "unit": "g",
        "calories": 98.10000000000001,
        "baseCalories": 6.540000000000001,
        "protein": 2.25,
        "baseProtein": 0.15,
        "carbs": 1.0499999999999998,
        "baseCarbs": 0.06999999999999999,
        "fats": 9.75,
        "baseFats": 0.65
      }
    ]
  },
  "r161": {
    "name": "Tostada de Centeno con Cottage y Pavo",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b669d75b89c7ceec966248.png",
    "preparation": "1. Tostar el pan de centeno. 2. Untar el queso cottage. 3. Colocar las lonchas de pavo encima.",
    "calories": 309.5,
    "protein": 32.25,
    "carbs": 28.4,
    "fats": 7.25,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "45",
        "unit": "g",
        "calories": 121.50000000000001,
        "baseCalories": 2.7,
        "protein": 4.05,
        "baseProtein": 0.09,
        "carbs": 22.5,
        "baseCarbs": 0.5,
        "fats": 1.3499999999999999,
        "baseFats": 0.03
      },
      {
        "name": "Queso Cottage",
        "quantity": "125",
        "unit": "g",
        "calories": 125,
        "baseCalories": 1,
        "protein": 15.000000000000002,
        "baseProtein": 0.12000000000000001,
        "carbs": 5,
        "baseCarbs": 0.04,
        "fats": 5,
        "baseFats": 0.04
      },
      {
        "name": "Pavo",
        "quantity": "60",
        "unit": "g",
        "calories": 63,
        "baseCalories": 1.05,
        "protein": 13.2,
        "baseProtein": 0.22,
        "carbs": 0.9,
        "baseCarbs": 0.015000000000000001,
        "fats": 0.9,
        "baseFats": 0.015000000000000001
      }
    ]
  },
  "r64": {
    "name": "Ensala de Patata, Atún y Huevo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc08b91eb31afe3d4796.png",
    "preparation": "1. Cocer las patatas con piel en agua con sal hasta que estén tiernas (unos 20-25 minutos). Dejar enfriar, pelar y cortar en dados. 2. Cocer los huevos en agua hirviendo durante 10 minutos. Dejar enfriar, pelar y cortar en rodajas o trozos. 3. Picar finamente el pimiento verde, pimiento rojo, cebolla y tomate. 4. En un bol grande, mezclar las patatas, los huevos, las verduras picadas, el maíz dulce (escurrido) y el atún (escurrido y desmenuzado). 5. Aliñar con aceite de oliva virgen extra, vinagre y sal al gusto. Mezclar con cuidado.",
    "originalBaseRecipeId": "cc_ensala_de_patata_atn_y_huevo",
    "calories": 659.9000000000001,
    "protein": 55.917,
    "carbs": 57.811833333333325,
    "fats": 22.314999999999998,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "200",
        "unit": "g",
        "calories": 154,
        "baseCalories": 0.77,
        "protein": 4,
        "baseProtein": 0.02,
        "carbs": 34,
        "baseCarbs": 0.17,
        "fats": 0.2,
        "baseFats": 0.001
      },
      {
        "name": "Pimiento Verde",
        "quantity": "50",
        "unit": "g",
        "calories": 10,
        "baseCalories": 0.2,
        "protein": 0.45000000000000007,
        "baseProtein": 0.009000000000000001,
        "carbs": 2.3,
        "baseCarbs": 0.046,
        "fats": 0.1,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 23.25,
        "baseCalories": 0.31,
        "protein": 0.75,
        "baseProtein": 0.01,
        "carbs": 4.5,
        "baseCarbs": 0.06,
        "fats": 0.225,
        "baseFats": 0.003
      },
      {
        "name": "Cebolla",
        "quantity": "40",
        "unit": "g",
        "calories": 16,
        "baseCalories": 0.4,
        "protein": 0.44000000000000006,
        "baseProtein": 0.011000000000000001,
        "carbs": 3.7200000000000006,
        "baseCarbs": 0.09300000000000001,
        "fats": 0.04,
        "baseFats": 0.001
      },
      {
        "name": "Tomate",
        "quantity": "75",
        "unit": "g",
        "calories": 13.5,
        "baseCalories": 0.18,
        "protein": 0.675,
        "baseProtein": 0.009000000000000001,
        "carbs": 2.925,
        "baseCarbs": 0.039,
        "fats": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Maíz",
        "quantity": "50",
        "unit": "g",
        "calories": 43,
        "baseCalories": 0.86,
        "protein": 1.6,
        "baseProtein": 0.032,
        "carbs": 9.253333333333334,
        "baseCarbs": 0.18506666666666668,
        "fats": 0.6,
        "baseFats": 0.012
      },
      {
        "name": "Atún en Conserva",
        "quantity": "125",
        "unit": "g",
        "calories": 200,
        "baseCalories": 1.6,
        "protein": 35,
        "baseProtein": 0.28,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 5,
        "baseFats": 0.04
      },
      {
        "name": "Huevo Cocido",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 155,
        "baseCalories": 77.5,
        "protein": 13,
        "baseProtein": 6.5,
        "carbs": 1.1,
        "baseCarbs": 0.55,
        "fats": 11,
        "baseFats": 5.5
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "baseCalories": 8.84,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 5,
        "baseFats": 1
      },
      {
        "name": "Vinagre de vino tinto",
        "quantity": "5",
        "unit": "g",
        "calories": 0.95,
        "baseCalories": 0.19,
        "protein": 0.002,
        "baseProtein": 0.0004,
        "carbs": 0.013500000000000002,
        "baseCarbs": 0.0027,
        "fats": 0,
        "baseFats": 0
      },
      {
        "name": "Sal",
        "quantity": "0.5",
        "unit": "g",
        "calories": 0,
        "baseCalories": 0,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 0,
        "baseFats": 0
      }
    ]
  },
  "r92": {
    "name": "Crema de Verduras Variadas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd68425d68cc771ebd10a.png",
    "preparation": "1. Puedes comprar una crema preparada o bien cocinar unas cuantas verduras en una olla.",
    "originalBaseRecipeId": "pp_crema_de_verduras_variadas",
    "calories": 90,
    "protein": 6,
    "carbs": 15,
    "fats": 0.6,
    "ingredients": [
      {
        "name": "Calabaza",
        "quantity": "150",
        "unit": "g",
        "calories": 45,
        "baseCalories": 0.3,
        "protein": 3,
        "baseProtein": 0.02,
        "carbs": 7.5,
        "baseCarbs": 0.05,
        "fats": 0.3,
        "baseFats": 0.002
      },
      {
        "name": "Tomate",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "baseCalories": 0.3,
        "protein": 1.5,
        "baseProtein": 0.02,
        "carbs": 3.75,
        "baseCarbs": 0.05,
        "fats": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "baseCalories": 0.3,
        "protein": 1.5,
        "baseProtein": 0.02,
        "carbs": 3.75,
        "baseCarbs": 0.05,
        "fats": 0.15,
        "baseFats": 0.002
      }
    ]
  },
  "r108": {
    "name": "Solomillo/Filete de Ternera a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe6c0ed5060d3743015a.png",
    "preparation": "1. Sacar el filete o solomillo de ternera del refrigerador unos 15-20 minutos antes de cocinar para que se temple. 2. Sazonar la carne con sal y pimienta negra recién molida justo antes de ponerla en la plancha. 3. Calentar una plancha o sartén de fondo grueso a fuego alto hasta que esté bien caliente. Añadir una gota de aceite de oliva y extenderlo. 4. Cocinar el filete al gusto. 5. Dejar reposar la carne un par de minutos antes de servir para que los jugos se redistribuyan.",
    "originalBaseRecipeId": "ac_solomillofilete_de_ternera_a_la_plancha",
    "calories": 272.453,
    "protein": 36.78117,
    "carbs": 0.19185000000000002,
    "fats": 13.75978,
    "ingredients": [
      {
        "name": "Solomillo de Ternera",
        "quantity": "175",
        "unit": "g",
        "calories": 227.5,
        "baseCalories": 1.3,
        "protein": 36.75,
        "baseProtein": 0.21,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 8.75,
        "baseFats": 0.05
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.2,
        "baseCalories": 8.84,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 5,
        "baseFats": 1
      },
      {
        "name": "Sal",
        "quantity": "0.5",
        "unit": "g",
        "calories": 0,
        "baseCalories": 0,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 0,
        "baseFats": 0
      },
      {
        "name": "Pimienta Negra",
        "quantity": "0.3",
        "unit": "g",
        "calories": 0.7529999999999999,
        "baseCalories": 2.51,
        "protein": 0.03117,
        "baseProtein": 0.1039,
        "carbs": 0.19185000000000002,
        "baseCarbs": 0.6395000000000001,
        "fats": 0.009779999999999999,
        "baseFats": 0.0326
      }
    ]
  },
  "r140": {
    "name": "Yogur Proteico con Cereales de Avena",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7ef66df76fef1b58db3f2.png",
    "preparation": "1. Verter el yogur en un bol. 2. Añadir los cereales de avena y los frutos rojos por encima.",
    "originalBaseRecipeId": "ext_yogur_proteico_con_cereales_de_avena",
    "calories": 356,
    "protein": 17.8,
    "carbs": 55,
    "fats": 6,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "250",
        "unit": "g",
        "calories": 150,
        "baseCalories": 0.6,
        "protein": 12.5,
        "baseProtein": 0.05,
        "carbs": 10,
        "baseCarbs": 0.04,
        "fats": 5,
        "baseFats": 0.02
      },
      {
        "name": "Cereales de Avena",
        "quantity": "40",
        "unit": "g",
        "calories": 146,
        "baseCalories": 3.65,
        "protein": 4.8,
        "baseProtein": 0.12,
        "carbs": 30,
        "baseCarbs": 0.75,
        "fats": 0.8,
        "baseFats": 0.02
      },
      {
        "name": "Frutos Rojos",
        "quantity": "100",
        "unit": "g",
        "calories": 60,
        "baseCalories": 0.6,
        "protein": 0.5,
        "baseProtein": 0.005,
        "carbs": 15,
        "baseCarbs": 0.15,
        "fats": 0.2,
        "baseFats": 0.002
      }
    ]
  },
  "r7": {
    "name": "Bol crujiente de yogur proteico, whey y manzana",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/sin-cocina/bol-yogur-proteico-manzana.jpg",
    "preparation": "Mezclar el yogur con la whey y añadir los cereales y la manzana en dados. Se prepara en 3 minutos, sin cocinar.",
    "calories": 497,
    "protein": 44.875,
    "carbs": 66.25,
    "fats": 6.225,
    "ingredients": [
      {
        "name": "Yogur proteico natural",
        "quantity": "175",
        "unit": "g",
        "calories": 105,
        "baseCalories": 0.6,
        "protein": 17.5,
        "baseProtein": 0.1,
        "carbs": 7,
        "baseCarbs": 0.04,
        "fats": 0.875,
        "baseFats": 0.005
      },
      {
        "name": "Proteína whey",
        "quantity": "15",
        "unit": "g",
        "calories": 57,
        "baseCalories": 3.8,
        "protein": 12,
        "baseProtein": 0.8,
        "carbs": 0.75,
        "baseCarbs": 0.05,
        "fats": 0.6,
        "baseFats": 0.04
      },
      {
        "name": "Cereales integrales altos en proteína listos para comer",
        "quantity": "75",
        "unit": "g",
        "calories": 270,
        "baseCalories": 3.6,
        "protein": 15,
        "baseProtein": 0.2,
        "carbs": 41.25,
        "baseCarbs": 0.55,
        "fats": 4.5,
        "baseFats": 0.06
      },
      {
        "name": "Manzana",
        "quantity": "125",
        "unit": "g",
        "calories": 65,
        "baseCalories": 0.52,
        "protein": 0.375,
        "baseProtein": 0.003,
        "carbs": 17.25,
        "baseCarbs": 0.138,
        "fats": 0.25,
        "baseFats": 0.002
      }
    ]
  },
  "r81": {
    "name": "Estofado de Lentejas con Verduras y Costilla",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cf648c174dc51742182c.png",
    "preparation": "1. Sofreír la costilla troceada hasta dorar. 2. Añadir las verduras picadas y pochar. 3. Añadir las lentejas (si son de bote, lavadas; si son secas, remojadas) y cubrir con agua/caldo. 4. Cocer hasta que todo esté tierno. Sazonar con laurel y pimentón.",
    "originalBaseRecipeId": "cc_estofado_de_lentejas_con_verduras_y_costilla",
    "calories": 607.5,
    "protein": 48.25,
    "carbs": 55.75,
    "fats": 19.15,
    "ingredients": [
      {
        "name": "Lentejas Cocidas",
        "quantity": "200",
        "unit": "g",
        "calories": 260,
        "baseCalories": 1.3,
        "protein": 16,
        "baseProtein": 0.08,
        "carbs": 44,
        "baseCarbs": 0.22,
        "fats": 1,
        "baseFats": 0.005
      },
      {
        "name": "Costilla de Cerdo",
        "quantity": "125",
        "unit": "g",
        "calories": 275,
        "baseCalories": 2.2,
        "protein": 27.5,
        "baseProtein": 0.22,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 17.5,
        "baseFats": 0.14
      },
      {
        "name": "Zanahoria",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "baseCalories": 0.3,
        "protein": 2,
        "baseProtein": 0.02,
        "carbs": 5,
        "baseCarbs": 0.05,
        "fats": 0.2,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "baseCalories": 0.3,
        "protein": 1.5,
        "baseProtein": 0.02,
        "carbs": 3.75,
        "baseCarbs": 0.05,
        "fats": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "50",
        "unit": "g",
        "calories": 15,
        "baseCalories": 0.3,
        "protein": 1,
        "baseProtein": 0.02,
        "carbs": 2.5,
        "baseCarbs": 0.05,
        "fats": 0.1,
        "baseFats": 0.002
      },
      {
        "name": "Ajo",
        "quantity": "5",
        "unit": "g",
        "calories": 5,
        "baseCalories": 1,
        "protein": 0.25,
        "baseProtein": 0.05,
        "carbs": 0.5,
        "baseCarbs": 0.1,
        "fats": 0.2,
        "baseFats": 0.04
      }
    ]
  },
  "r12": {
    "name": "Pollo al limón con espárragos y espinacas",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/pollo-limon-esparragos.jpg",
    "preparation": "1. Cocinar el pollo a la plancha con parte del aceite. 2. Saltear los espárragos y las espinacas con el resto. 3. Añadir el zumo de limón al pollo y servir.",
    "calories": 324.15000000000003,
    "protein": 44.705,
    "carbs": 3.4499999999999997,
    "fats": 13.065,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": "175",
        "unit": "g",
        "calories": 192.50000000000003,
        "baseCalories": 1.1,
        "protein": 40.25,
        "baseProtein": 0.23,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 2.625,
        "baseFats": 0.015
      },
      {
        "name": "Espárragos verdes",
        "quantity": "100",
        "unit": "g",
        "calories": 20,
        "baseCalories": 0.2,
        "protein": 2.2,
        "baseProtein": 0.022000000000000002,
        "carbs": 1.9,
        "baseCarbs": 0.019,
        "fats": 0.1,
        "baseFats": 0.001
      },
      {
        "name": "Espinacas",
        "quantity": "75",
        "unit": "g",
        "calories": 17.25,
        "baseCalories": 0.23,
        "protein": 2.175,
        "baseProtein": 0.028999999999999998,
        "carbs": 1.0499999999999998,
        "baseCarbs": 0.013999999999999999,
        "fats": 0.3,
        "baseFats": 0.004
      },
      {
        "name": "Zumo de limón",
        "quantity": "20",
        "unit": "g",
        "calories": 4.4,
        "baseCalories": 0.22000000000000003,
        "protein": 0.08,
        "baseProtein": 0.004,
        "carbs": 0.5,
        "baseCarbs": 0.025,
        "fats": 0.04,
        "baseFats": 0.002
      },
      {
        "name": "Aceite de oliva virgen extra",
        "quantity": "10",
        "unit": "g",
        "calories": 90,
        "baseCalories": 9,
        "protein": 0,
        "baseProtein": 0,
        "carbs": 0,
        "baseCarbs": 0,
        "fats": 10,
        "baseFats": 1
      }
    ]
  },
  "r21": {
    "name": "Naranja con anacardos",
    "image": "https://raw.githubusercontent.com/hombresenforma/ivan-diet/main/assets/ivandt/dias-4-7/naranja-anacardos.jpg",
    "preparation": "1. Pelar la naranja, separar los gajos y servir con los anacardos pesados.",
    "calories": 266.2,
    "protein": 7.200000000000001,
    "carbs": 26.1,
    "fats": 14,
    "ingredients": [
      {
        "name": "Naranja",
        "quantity": "200",
        "unit": "g",
        "calories": 94,
        "baseCalories": 0.47,
        "protein": 1.8000000000000003,
        "baseProtein": 0.009000000000000001,
        "carbs": 18,
        "baseCarbs": 0.09,
        "fats": 0.2,
        "baseFats": 0.001
      },
      {
        "name": "Anacardos",
        "quantity": "30",
        "unit": "g",
        "calories": 172.2,
        "baseCalories": 5.739999999999999,
        "protein": 5.4,
        "baseProtein": 0.18000000000000002,
        "carbs": 8.1,
        "baseCarbs": 0.26999999999999996,
        "fats": 13.8,
        "baseFats": 0.46
      }
    ]
  }
};

const dailyMenus = [
  {
    "name": "Opciones 1",
    "targetMacros": {
      "calories": 1700,
      "protein": 140,
      "carbs": 140
    },
    "desayuno": [
      "r27"
    ],
    "comida": [
      "r89",
      "r172"
    ],
    "cena": [
      "r67"
    ],
    "extra": [
      "r25"
    ],
    "baselineTotals": {
      "calories": 1698.1400000000003,
      "protein": 139.85020000000003,
      "carbs": 139.89339999999999,
      "fats": 60.7808
    }
  },
  {
    "name": "Opciones 2",
    "targetMacros": {
      "calories": 1700,
      "protein": 140,
      "carbs": 140
    },
    "desayuno": [
      "r161"
    ],
    "comida": [
      "r64"
    ],
    "cena": [
      "r92",
      "r108"
    ],
    "extra": [
      "r140"
    ],
    "baselineTotals": {
      "calories": 1687.853,
      "protein": 148.74816999999993,
      "carbs": 156.40368333333333,
      "fats": 49.924780000000005
    }
  },
  {
    "name": "Opciones 3",
    "targetMacros": {
      "calories": 1700,
      "protein": 140,
      "carbs": 140
    },
    "desayuno": [
      "r7"
    ],
    "comida": [
      "r81"
    ],
    "cena": [
      "r12"
    ],
    "extra": [
      "r21"
    ],
    "baselineTotals": {
      "calories": 1694.8500000000001,
      "protein": 145.03,
      "carbs": 151.54999999999995,
      "fats": 52.44
    }
  }
];
