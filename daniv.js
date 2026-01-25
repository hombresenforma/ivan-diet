// Titulo: Plan de Alimentación

// Contenido de app_datos.js
//
// =========================================================================
// =========================================================================
// DATOS DEL PLAN (4 DÍAS)
//
// =========================================================================
// =========================================================================

const foodDatabase = {
  "p0_m0": {
    "name": "Fajita/Wrap de Jamón y Queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68a36fb52e34b733ba5c5630.png",
    "calories": 546.2,
    "protein": 31.4,
    "carbs": 22.8,
    "fats": 35.599999999999994,
    "ingredients": [
      {
        "name": "Pan de Fajita",
        "quantity": "1",
        "unit": "unidad(es)",
        "gramsPerUnit": 40,
        "calories": 108,
        "protein": 3.5999999999999996,
        "carbs": 20,
        "fats": 1.2,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.03
      },
      {
        "name": "Jamón Cocido",
        "quantity": "80",
        "unit": "g",
        "calories": 184,
        "protein": 12.8,
        "carbs": 1.6,
        "fats": 14.399999999999999,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18
      },
      {
        "name": "Queso Havarti Light",
        "quantity": "60",
        "unit": "g",
        "calories": 210,
        "protein": 15,
        "carbs": 1.2,
        "fats": 15,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25
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
    "preparation": "1. Calentar la tortilla de fajita. 2. Añadir el jamón cocido y el queso. 3. Doblar y servir. 4. Opcional: añadir un chorrito de aceite de oliva.",
    "originalBaseRecipeId": "des_fajitawrap_de_jamn_y_queso",
    "isSideDish": false
  },
  "p0_m1": {
    "name": "Yogur Proteico con Cereales de Avena",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7ef66df76fef1b58db3f2.png",
    "calories": 410.5,
    "protein": 14.899999999999999,
    "carbs": 72.5,
    "fats": 6.5,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 125,
        "protein": 6.25,
        "carbs": 12.5,
        "fats": 5,
        "baseCalories": 125,
        "baseProtein": 6.25,
        "baseCarbs": 12.5,
        "baseFats": 5
      },
      {
        "name": "Cereales de Avena",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.399999999999999,
        "carbs": 52.5,
        "fats": 1.4000000000000001,
        "baseCalories": 3.65,
        "baseProtein": 0.11999999999999998,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Frutos Rojos",
        "quantity": "50",
        "unit": "g",
        "calories": 30,
        "protein": 0.25,
        "carbs": 7.5,
        "fats": 0.1,
        "baseCalories": 0.6,
        "baseProtein": 0.005,
        "baseCarbs": 0.15,
        "baseFats": 0.002
      }
    ],
    "preparation": "1. Verter el yogur en un bol. 2. Añadir los cereales de avena y los frutos rojos por encima.",
    "originalBaseRecipeId": "ext_yogur_proteico_con_cereales_de_avena",
    "isSideDish": false
  },
  "p0_m2": {
    "name": "Musakka de Patata al horno con verduras y carne picada",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efda5653a2c17a7172d67.png",
    "calories": 895.9,
    "protein": 53.5,
    "carbs": 72.05,
    "fats": 41.75,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "300",
        "unit": "g",
        "calories": 270,
        "protein": 6,
        "carbs": 60,
        "fats": 0.3,
        "baseCalories": 0.9,
        "baseProtein": 0.02,
        "baseCarbs": 0.2,
        "baseFats": 0.001
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Berenjena",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Tomate Frito",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Queso Rallado",
        "quantity": "40",
        "unit": "g",
        "calories": 140,
        "protein": 10,
        "carbs": 0.8,
        "fats": 10,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25
      },
      {
        "name": "Carne Picada Mixta (Ternera y Cerdo)",
        "quantity": "150",
        "unit": "g",
        "calories": 330,
        "protein": 33,
        "carbs": 0,
        "fats": 21.000000000000004,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Precalentar el horno a 180°C. Pelar y cortar las patatas en rodajas finas (aproximadamente 0.5 cm). Cortar la berenjena en rodajas similares. Picar la cebolla. 2. En una sartén, calentar aceite y sofreír la cebolla hasta que esté blanda. Añadir la carne picada mixta y cocinar hasta que se dore. Escurrir el exceso de grasa. Incorporar tomate frito, sal, pimienta y orégano. Cocinar unos minutos. 3. En una fuente para horno, montar la musakka: colocar una capa de rodajas de patata en el fondo, luego una capa de rodajas de berenjena, y encima una capa de la mezcla de carne. Repetir las capas hasta terminar con una capa de patata o berenjena. 4. Opcional: cubrir con salsa bechamel y espolvorear con queso rallado. 5. Hornear durante 40-50 minutos, o hasta que las patatas y berenjenas estén tiernas y la superficie dorada. Dejar reposar unos minutos antes de servir.",
    "originalBaseRecipeId": "cc_musakka_de_patata_al_horno_con_verduras_y_carne_picada",
    "isSideDish": false
  },
  "p0_m3": {
    "name": "Crema de Verduras Variadas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd68425d68cc771ebd10a.png",
    "calories": 140,
    "protein": 8.5,
    "carbs": 20,
    "fats": 2.6,
    "ingredients": [
      {
        "name": "Calabaza",
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
        "baseFats": 0.002
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
        "baseFats": 0.002
      },
      {
        "name": "Agua",
        "quantity": "50",
        "unit": "g",
        "calories": 50,
        "protein": 2.5,
        "carbs": 5,
        "fats": 2,
        "baseCalories": 1,
        "baseProtein": 0.05,
        "baseCarbs": 0.1,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Puedes comprar una crema preparada o bien cocinar unas cuantas verduras en una olla.",
    "originalBaseRecipeId": "pp_crema_de_verduras_variadas",
    "isSideDish": false
  },
  "p0_m4": {
    "name": "Merluza a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f001d4d606642b1333279.png",
    "calories": 408.4,
    "protein": 56.00000000000001,
    "carbs": 0,
    "fats": 18,
    "ingredients": [
      {
        "name": "Filete de Merluza",
        "quantity": "200",
        "unit": "g",
        "calories": 320,
        "protein": 56.00000000000001,
        "carbs": 0,
        "fats": 8,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Sazonar los filetes o rodajas de merluza con sal, pimienta y opcionalmente un poco de ajo en polvo o perejil picado. 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con un chorrito de aceite de oliva virgen extra. 3. Cuando el aceite esté caliente, colocar la merluza en la plancha. Cocinar durante unos 3-5 minutos por cada lado, dependiendo del grosor del pescado, hasta que esté opaca, bien cocida por dentro y se desmenuce fácilmente con un tenedor. Evitar cocinarla en exceso para que no quede seca. 4. Servir inmediatamente, opcionalmente con un chorrito de zumo de limón fresco por encima.",
    "originalBaseRecipeId": "ac_merluza_a_la_plancha",
    "isSideDish": true
  },
  "p0_m5": {
    "name": "Fruta Cítrica (Mandarina, Kiwi, Naranja...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png",
    "calories": 90,
    "protein": 0.75,
    "carbs": 22.5,
    "fats": 0.3,
    "ingredients": [
      {
        "name": "Kiwi",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 90,
        "protein": 0.75,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 45,
        "baseProtein": 0.375,
        "baseCarbs": 11.25,
        "baseFats": 0.15
      }
    ],
    "preparation": "1. Seleccionar la fruta cítrica de preferencia (mandarina, kiwi, naranja, pomelo, etc.). 2. Lavar bien la fruta bajo el grifo. 3. Para mandarinas y naranjas: pelar la piel con las manos o con ayuda de un cuchillo. Separar los gajos si se desea. 4. Para kiwis: cortar por la mitad y comer la pulpa con una cucharita, o pelar con un cuchillo y cortar en rodajas. 5. Para pomelos: cortar por la mitad y extraer los gajos, o comer con cuchara. Consumir directamente.",
    "originalBaseRecipeId": "ext_fruta_ctrica_mandarina_kiwi_naranja",
    "isSideDish": false
  },
  "p0_m6": {
    "name": "Frutos Secos (Mezcla)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68525c0b1d27cfeb580a55f7.png",
    "calories": 135,
    "protein": 3,
    "carbs": 4.5,
    "fats": 12,
    "ingredients": [
      {
        "name": "Anacardos",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Almendras",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Nueces",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      }
    ],
    "preparation": "Consumir directamente como un snack energético y nutritivo. Se puede tomar un puñado (ej. 25-30g) o ajustar la cantidad según las necesidades calóricas.",
    "originalBaseRecipeId": "ext_frutos_secos_mezcla",
    "isSideDish": false
  },
  "p0_m7": {
    "name": "Batido Whey de Proteínas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f021af6c48d41b5a5c003.png",
    "calories": 114,
    "protein": 24,
    "carbs": 1.5,
    "fats": 1.2,
    "ingredients": [
      {
        "name": "Proteína Whey en Polvo",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. En un shaker, añadir la cantidad recomendada de proteína en polvo. 2. Añadir la cantidad de líquido deseada (unos 200-300 ml). 3. Cerrar bien el shaker. 4. Agitar enérgicamente durante unos 20-30 segundos hasta que el polvo esté completamente disuelto.",
    "originalBaseRecipeId": "ext_batido_whey_de_protenas",
    "isSideDish": false
  },
  "p1_m0": {
    "name": "Tostada de Pan de Centeno con Revuelto de Huevos y Jamón York",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d09e04d6fb7f271b84cc9.png",
    "calories": 489.5,
    "protein": 30.4,
    "carbs": 32.6,
    "fats": 26.3,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "2",
        "unit": "rebanada(s)",
        "calories": 162,
        "protein": 5.3999999999999995,
        "carbs": 30,
        "fats": 1.7999999999999998,
        "baseCalories": 81,
        "baseProtein": 2.6999999999999997,
        "baseCarbs": 15,
        "baseFats": 0.8999999999999999
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 155,
        "protein": 13,
        "carbs": 1.1,
        "fats": 11,
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5
      },
      {
        "name": "Jamón York",
        "quantity": "75",
        "unit": "g",
        "calories": 172.5,
        "protein": 12,
        "carbs": 1.5,
        "fats": 13.5,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Preparar un revuelto de huevos con taquitos de jamón york. 3. Servir el revuelto sobre la tostada.",
    "originalBaseRecipeId": "des_tostada_de_pan_de_centeno_con_revuelto_de_huevos_y_jamn_york",
    "isSideDish": false
  },
  "p1_m1": {
    "name": "Crema de Cacahuete",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ee03e1c8952ccb30699d34.png",
    "calories": 112.5,
    "protein": 2.5,
    "carbs": 3.75,
    "fats": 10,
    "ingredients": [
      {
        "name": "Crema de Cacahuete",
        "quantity": "25",
        "unit": "g",
        "calories": 112.5,
        "protein": 2.5,
        "carbs": 3.75,
        "fats": 10,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      }
    ],
    "preparation": "Untar sobre tostadas, añadir a batidos o consumir directamente.",
    "originalBaseRecipeId": "ext_crema_de_cacahuete",
    "isSideDish": false
  },
  "p1_m2": {
    "name": "Pan de Centeno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879305ee8df5478eb937c5e.png",
    "calories": 81,
    "protein": 2.6999999999999997,
    "carbs": 15,
    "fats": 0.8999999999999999,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "1",
        "unit": "rebanada(s)",
        "calories": 81,
        "protein": 2.6999999999999997,
        "carbs": 15,
        "fats": 0.8999999999999999,
        "baseCalories": 81,
        "baseProtein": 2.6999999999999997,
        "baseCarbs": 15,
        "baseFats": 0.8999999999999999
      }
    ],
    "preparation": "1. Cortar una rebanada de pan de centeno o intengral y acompañar con otra comida.",
    "originalBaseRecipeId": "ext_pan_de_centeno",
    "isSideDish": false
  },
  "p1_m3": {
    "name": "Arroz tres delicias",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68872f8e1fc4545c499532f0.png",
    "calories": 896.4,
    "protein": 40.4,
    "carbs": 102.1,
    "fats": 36.4,
    "ingredients": [
      {
        "name": "Arroz",
        "quantity": "120",
        "unit": "g",
        "calories": 438,
        "protein": 14.399999999999999,
        "carbs": 90,
        "fats": 2.4,
        "baseCalories": 3.65,
        "baseProtein": 0.11999999999999998,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Huevo (en tortilla)",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 155,
        "protein": 13,
        "carbs": 1.1,
        "fats": 11,
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5
      },
      {
        "name": "Guisantes",
        "quantity": "50",
        "unit": "g",
        "calories": 50,
        "protein": 2.5,
        "carbs": 5,
        "fats": 2,
        "baseCalories": 1,
        "baseProtein": 0.05,
        "baseCarbs": 0.1,
        "baseFats": 0.04
      },
      {
        "name": "Jamón York",
        "quantity": "50",
        "unit": "g",
        "calories": 114.99999999999999,
        "protein": 8,
        "carbs": 1,
        "fats": 9,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18
      },
      {
        "name": "Maíz",
        "quantity": "50",
        "unit": "g",
        "calories": 50,
        "protein": 2.5,
        "carbs": 5,
        "fats": 2,
        "baseCalories": 1,
        "baseProtein": 0.05,
        "baseCarbs": 0.1,
        "baseFats": 0.04
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Cocer el arroz y reservar. 2. Hacer una tortilla francesa con los huevos y cortarla en trocitos. 3. Saltear los guisantes y el maíz. 4. Cortar el jamón York en daditos. 5. Mezclar todos los ingredientes en una sartén o wok con un poco de salsa de soja (opcional) y saltear todo junto durante un par de minutos.",
    "originalBaseRecipeId": "cc_arroz_tres_delicias",
    "isSideDish": false
  },
  "p1_m4": {
    "name": "Patatas Cocidas con Salteado de Verduras y Hamburguesa a la plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cf8559b0c6709fc9afa98.png",
    "calories": 839.9,
    "protein": 39.3,
    "carbs": 74.85,
    "fats": 43.15,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "300",
        "unit": "g",
        "calories": 270,
        "protein": 6,
        "carbs": 60,
        "fats": 0.3,
        "baseCalories": 0.9,
        "baseProtein": 0.02,
        "baseCarbs": 0.2,
        "baseFats": 0.001
      },
      {
        "name": "Pimiento Verde",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Hamburguesa de Pavo-Pollo",
        "quantity": "180",
        "unit": "g",
        "calories": 413.99999999999994,
        "protein": 28.8,
        "carbs": 3.6,
        "fats": 32.4,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Cocer las patatas en agua con sal. 2. Mientras, saltear las verduras (pimiento, cebolla) en una sartén. 3. Cocinar la hamburguesa a la plancha. 4. Servir las patatas cocidas con el salteado de verduras y la hamburguesa.",
    "originalBaseRecipeId": "cc_patatas_cocidas_con_salteado_de_verduras_y_hamburguesa_a_la_plancha",
    "isSideDish": false
  },
  "p1_m5": {
    "name": "Yogurt Protéico con Frutos Rojos y Secos",
    "image": "",
    "calories": 350,
    "protein": 10,
    "carbs": 39.5,
    "fats": 17.3,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 125,
        "protein": 6.25,
        "carbs": 12.5,
        "fats": 5,
        "baseCalories": 125,
        "baseProtein": 6.25,
        "baseCarbs": 12.5,
        "baseFats": 5
      },
      {
        "name": "Frutos Rojos",
        "quantity": "150",
        "unit": "g",
        "calories": 90,
        "protein": 0.75,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 0.6,
        "baseProtein": 0.005,
        "baseCarbs": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Frutos Secos",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      }
    ],
    "preparation": "1. En un bol, verter el yogur proteico. 2. Añadir los frutos rojos frescos o descongelados. 3. Espolvorear con los frutos secos troceados por encima. Servir inmediatamente.",
    "originalBaseRecipeId": "ext_yogurt_protico_con_frutos_rojos_y_secos",
    "isSideDish": false
  },
  "p1_m6": {
    "name": "Fruta Cítrica (Mandarina, Kiwi, Naranja...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png",
    "calories": 93,
    "protein": 0.775,
    "carbs": 23.25,
    "fats": 0.31,
    "ingredients": [
      {
        "name": "Kiwi",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 45,
        "protein": 0.375,
        "carbs": 11.25,
        "fats": 0.15,
        "baseCalories": 45,
        "baseProtein": 0.375,
        "baseCarbs": 11.25,
        "baseFats": 0.15
      },
      {
        "name": "Mandarina",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 48,
        "protein": 0.4,
        "carbs": 12,
        "fats": 0.16,
        "baseCalories": 48,
        "baseProtein": 0.4,
        "baseCarbs": 12,
        "baseFats": 0.16
      }
    ],
    "preparation": "1. Seleccionar la fruta cítrica de preferencia (mandarina, kiwi, naranja, pomelo, etc.). 2. Lavar bien la fruta bajo el grifo. 3. Para mandarinas y naranjas: pelar la piel con las manos o con ayuda de un cuchillo. Separar los gajos si se desea. 4. Para kiwis: cortar por la mitad y comer la pulpa con una cucharita, o pelar con un cuchillo y cortar en rodajas. 5. Para pomelos: cortar por la mitad y extraer los gajos, o comer con cuchara. Consumir directamente.",
    "originalBaseRecipeId": "ext_fruta_ctrica_mandarina_kiwi_naranja",
    "isSideDish": false
  },
  "p2_m0": {
    "name": "Tostada de Centeno con Aguacate y Atún",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff33e819fcc7a1a8d946.png",
    "calories": 489,
    "protein": 42,
    "carbs": 34.5,
    "fats": 18.6,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "2",
        "unit": "rebanada(s)",
        "calories": 162,
        "protein": 5.3999999999999995,
        "carbs": 30,
        "fats": 1.7999999999999998,
        "baseCalories": 81,
        "baseProtein": 2.6999999999999997,
        "baseCarbs": 15,
        "baseFats": 0.8999999999999999
      },
      {
        "name": "Aguacate",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Atún en Conserva",
        "quantity": "120",
        "unit": "g",
        "calories": 192,
        "protein": 33.6,
        "carbs": 0,
        "fats": 4.8,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Tostar el pan de centeno hasta que esté dorado y crujiente. 2. Mientras tanto, machacar o laminar el aguacate. 3. Extender el aguacate sobre la tostada. 4. Escurrir bien el atún y desmenuzarlo sobre el aguacate. Opcional: añadir un chorrito de zumo de limón sobre el aguacate para evitar que se oxide y un poco de pimienta negra.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_aguacate_y_atn",
    "isSideDish": false
  },
  "p2_m1": {
    "name": "Gnoccis con sofrito de ternera, calabacín, cebolla y cerdo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efd20653a2c44bb172cef.png",
    "calories": 729,
    "protein": 48.8,
    "carbs": 72.5,
    "fats": 25.100000000000005,
    "ingredients": [
      {
        "name": "Gnocchis",
        "quantity": "120",
        "unit": "g",
        "calories": 324,
        "protein": 10.799999999999999,
        "carbs": 60,
        "fats": 3.6,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.030000000000000002
      },
      {
        "name": "Carne Picada Mixta (Ternera y Cerdo)",
        "quantity": "150",
        "unit": "g",
        "calories": 330,
        "protein": 33,
        "carbs": 0,
        "fats": 21.000000000000004,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
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
        "baseFats": 0.002
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
        "baseFats": 0.002
      }
    ],
    "preparation": "1. Picar finamente la cebolla. Rallar o picar el calabacín en dados pequeños. 2. En una sartén grande, calentar un poco de aceite de oliva y sofreír la cebolla hasta que esté transparente. 3. Añadir la carne picada mixta y cocinar a fuego medio-alto, deshaciendo los grumos, hasta que se dore. 4. Incorporar el calabacín y cocinar unos minutos hasta que empiece a ablandarse. Añadir el tomate frito y sazonar con sal, pimienta y orégano o albahaca al gusto. Cocinar a fuego lento durante 10-15 minutos para que la salsa espese ligeramente y se mezclen los sabores. 5. Mientras tanto, cocer los gnocchis según las instrucciones del paquete (normalmente están listos cuando flotan en la superficie del agua hirviendo, unos 2-3 minutos). 6. Escurrir los gnocchis y mezclarlos suavemente con la salsa de carne y verduras. Servir caliente, opcionalmente con queso parmesano rallado.",
    "originalBaseRecipeId": "cc_gnoccis_con_sofrito_de_ternera_calabacn_cebolla_y_cerdo",
    "isSideDish": false
  },
  "p2_m2": {
    "name": "Berenjenas Rellenas de Pavo al Horno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cdf6e7de6638e2767e27.png",
    "calories": 593.4,
    "protein": 60.50000000000001,
    "carbs": 16,
    "fats": 29.1,
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
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Carne Picada de Pavo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42.00000000000001,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Tomate Frito",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Queso Havarti Light",
        "quantity": "50",
        "unit": "g",
        "calories": 175,
        "protein": 12.5,
        "carbs": 1,
        "fats": 12.5,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Asar las berenjenas partidas por la mitad. Vaciar la carne. 2. Sofreír cebolla y carne de pavo. Añadir la carne de berenjena picada y tomate. 3. Rellenar las pieles, cubrir con queso y gratinar.",
    "originalBaseRecipeId": "cc_berenjenas_rellenas_de_pavo_al_horno",
    "isSideDish": false
  },
  "p2_m3": {
    "name": "Yogurt Protéico con Frutos Rojos y Secos",
    "image": "",
    "calories": 421,
    "protein": 15.8,
    "carbs": 38.5,
    "fats": 22.119999999999997,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 250,
        "protein": 12.5,
        "carbs": 25,
        "fats": 10,
        "baseCalories": 125,
        "baseProtein": 6.25,
        "baseCarbs": 12.5,
        "baseFats": 5
      },
      {
        "name": "Frutos Rojos",
        "quantity": "60",
        "unit": "g",
        "calories": 36,
        "protein": 0.3,
        "carbs": 9,
        "fats": 0.12,
        "baseCalories": 0.6,
        "baseProtein": 0.005,
        "baseCarbs": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Frutos Secos",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      }
    ],
    "preparation": "1. En un bol, verter el yogur proteico. 2. Añadir los frutos rojos frescos o descongelados. 3. Espolvorear con los frutos secos troceados por encima. Servir inmediatamente.",
    "originalBaseRecipeId": "ext_yogurt_protico_con_frutos_rojos_y_secos",
    "isSideDish": false
  },
  "p2_m4": {
    "name": "Fruta Cítrica (Mandarina, Kiwi, Naranja...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png",
    "calories": 96,
    "protein": 0.8,
    "carbs": 24,
    "fats": 0.32,
    "ingredients": [
      {
        "name": "Mandarina",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 96,
        "protein": 0.8,
        "carbs": 24,
        "fats": 0.32,
        "baseCalories": 48,
        "baseProtein": 0.4,
        "baseCarbs": 12,
        "baseFats": 0.16
      }
    ],
    "preparation": "1. Seleccionar la fruta cítrica de preferencia (mandarina, kiwi, naranja, pomelo, etc.). 2. Lavar bien la fruta bajo el grifo. 3. Para mandarinas y naranjas: pelar la piel con las manos o con ayuda de un cuchillo. Separar los gajos si se desea. 4. Para kiwis: cortar por la mitad y comer la pulpa con una cucharita, o pelar con un cuchillo y cortar en rodajas. 5. Para pomelos: cortar por la mitad y extraer los gajos, o comer con cuchara. Consumir directamente.",
    "originalBaseRecipeId": "ext_fruta_ctrica_mandarina_kiwi_naranja",
    "isSideDish": false
  },
  "p3_m0": {
    "name": "Tostada de Centeno con Huevo y Aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687a695da648331355d3b0b2.png",
    "calories": 540.4,
    "protein": 21.4,
    "carbs": 35.6,
    "fats": 34.8,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "2",
        "unit": "rebanada(s)",
        "calories": 162,
        "protein": 5.3999999999999995,
        "carbs": 30,
        "fats": 1.7999999999999998,
        "baseCalories": 81,
        "baseProtein": 2.6999999999999997,
        "baseCarbs": 15,
        "baseFats": 0.8999999999999999
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 155,
        "protein": 13,
        "carbs": 1.1,
        "fats": 11,
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5
      },
      {
        "name": "Aguacate",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Cocinar los huevos al gusto (revueltos, pochados, a la plancha). 3. Machacar el aguacate sobre las tostadas y añadir aceite y especias.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_huevo_y_aguacate",
    "isSideDish": false
  },
  "p3_m1": {
    "name": "Ensalada de garbanzos con verduras y queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ff252d3f16b5241c27c1e4.png",
    "calories": 562.5,
    "protein": 35.5,
    "carbs": 63.75,
    "fats": 17.450000000000003,
    "ingredients": [
      {
        "name": "Garbanzos en Conserva",
        "quantity": "200",
        "unit": "g",
        "calories": 260,
        "protein": 16,
        "carbs": 44,
        "fats": 1,
        "baseCalories": 1.3,
        "baseProtein": 0.08,
        "baseCarbs": 0.22,
        "baseFats": 0.005
      },
      {
        "name": "Aguacate",
        "quantity": "30",
        "unit": "g",
        "calories": 135,
        "protein": 3,
        "carbs": 4.5,
        "fats": 12,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Pepino",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Tomates Cherry",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Espinacas",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Queso de Burgos 0%",
        "quantity": "100",
        "unit": "g",
        "calories": 100,
        "protein": 12,
        "carbs": 4,
        "fats": 4,
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Enjuagar los garbanzos y escurrirlos. 2. Picar el aguacate, pepino y tomates cherry. 3. Mezclar todos los ingredientes en un bol con las espinacas. 4. Cortar el queso de Burgos en dados y añadirlo a la ensalada. 5. Aliñar al gusto con aceite de oliva, vinagre y sal.",
    "originalBaseRecipeId": "pp_ensalada_de_garbanzos_con_verduras_y_queso",
    "isSideDish": false
  },
  "p3_m2": {
    "name": "Cinta de Cerdo a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f007b4d606644a53332bf.png",
    "calories": 352.4,
    "protein": 26.4,
    "carbs": 0,
    "fats": 26.8,
    "ingredients": [
      {
        "name": "Cinta de Lomo de Cerdo",
        "quantity": "120",
        "unit": "g",
        "calories": 264,
        "protein": 26.4,
        "carbs": 0,
        "fats": 16.8,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Sazonar los filetes de cinta de lomo de cerdo por ambos lados con sal, pimienta y ajo en polvo (opcional). 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con un poco de aceite de oliva. 3. Cocinar los filetes de lomo durante unos 2-4 minutos por cada lado, dependiendo del grosor y del punto de cocción deseado. Es importante no cocinarlos en exceso para evitar que queden secos. Deben estar dorados por fuera y bien hechos por dentro.",
    "originalBaseRecipeId": "ac_cinta_de_cerdo_a_la_plancha",
    "isSideDish": true
  },
  "p3_m3": {
    "name": "Fajitas de Pollo y Verduras",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcef0ed50608b742ff33.png",
    "calories": 634.4,
    "protein": 55.2,
    "carbs": 55,
    "fats": 19,
    "ingredients": [
      {
        "name": "Pan de Fajita",
        "quantity": "2",
        "unit": "unidad(es)",
        "gramsPerUnit": 40,
        "calories": 216,
        "protein": 7.199999999999999,
        "carbs": 40,
        "fats": 2.4,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.03
      },
      {
        "name": "Tomate",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Pimiento Verde",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.5,
        "carbs": 3.75,
        "fats": 0.15,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
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
        "baseFats": 0.04
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 88.4,
        "protein": 0,
        "carbs": 0,
        "fats": 10,
        "baseCalories": 8.84,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 1
      }
    ],
    "preparation": "1. Cortar la pechuga de pollo en tiras finas. Cortar el pimiento rojo, pimiento Verde y cebolla en juliana. Picar el tomate en dados pequeños. 2. Calentar un poco de aceite en una sartén grande. Saltear el pollo hasta que esté dorado y cocido. Retirar y reservar. 3. En la misma sartén, añadir un poco más de aceite si es necesario y saltear las verduras (pimientos y cebolla) hasta que estén tiernas pero crujientes. 4. Volver a añadir el pollo a la sartén con las verduras. Sazonar con especias para fajitas (opcional) o sal y pimienta. Mezclar bien. 5. Calentar las tortillas de fajita según las instrucciones del paquete. 6. Rellenar las tortillas con la mezcla de pollo y verduras, y añadir el tomate fresco picado por encima. Opcional: servir con guacamole, crema agria o salsa.",
    "originalBaseRecipeId": "cc_fajitas_de_pollo_y_verduras",
    "isSideDish": false
  },
  "p3_m4": {
    "name": "Queso Fresco Batido con Frutos Rojos y Miel",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879302d02da47667d446b43.png",
    "calories": 171,
    "protein": 15.8,
    "carbs": 15,
    "fats": 5.5200000000000005,
    "ingredients": [
      {
        "name": "Queso Fresco Batido",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 125,
        "protein": 15,
        "carbs": 5,
        "fats": 5,
        "baseCalories": 125,
        "baseProtein": 15,
        "baseCarbs": 5,
        "baseFats": 5
      },
      {
        "name": "Frutos Rojos",
        "quantity": "60",
        "unit": "g",
        "calories": 36,
        "protein": 0.3,
        "carbs": 9,
        "fats": 0.12,
        "baseCalories": 0.6,
        "baseProtein": 0.005,
        "baseCarbs": 0.15,
        "baseFats": 0.002
      },
      {
        "name": "Miel Cruda",
        "quantity": "10",
        "unit": "g",
        "calories": 10,
        "protein": 0.5,
        "carbs": 1,
        "fats": 0.4,
        "baseCalories": 1,
        "baseProtein": 0.05,
        "baseCarbs": 0.1,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. En un bol, verter el queso fresco. 2. Añadir los frutos rojos frescos o descongelados. 3. Echar la cantidad de miel acordada por encima.",
    "originalBaseRecipeId": "ext_queso_fresco_batido_con_frutos_rojos_y_miel",
    "isSideDish": false
  },
  "p3_m5": {
    "name": "Frutos Secos (Mezcla)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68525c0b1d27cfeb580a55f7.png",
    "calories": 135,
    "protein": 3,
    "carbs": 4.5,
    "fats": 12,
    "ingredients": [
      {
        "name": "Anacardos",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Almendras",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      },
      {
        "name": "Nueces",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4
      }
    ],
    "preparation": "Consumir directamente como un snack energético y nutritivo. Se puede tomar un puñado (ej. 25-30g) o ajustar la cantidad según las necesidades calóricas.",
    "originalBaseRecipeId": "ext_frutos_secos_mezcla",
    "isSideDish": false
  }
};

const dailyMenus = [
  {
    "name": "Día 1",
    "targetMacros": {
      "calories": 2000,
      "protein": 150,
      "carbs": 200
    },
    "desayuno": [
      "p0_m0",
      "p0_m1"
    ],
    "comida": [
      "p0_m2"
    ],
    "cena": [
      "p0_m3",
      "p0_m4"
    ],
    "extra": [
      "p0_m5",
      "p0_m6",
      "p0_m7"
    ]
  },
  {
    "name": "Día 2",
    "targetMacros": {
      "calories": 2000,
      "protein": 160,
      "carbs": 200
    },
    "desayuno": [
      "p1_m0",
      "p1_m1",
      "p1_m2"
    ],
    "comida": [
      "p1_m3"
    ],
    "cena": [
      "p1_m4"
    ],
    "extra": [
      "p1_m5",
      "p1_m6"
    ]
  },
  {
    "name": "Lowcarb",
    "targetMacros": {
      "calories": 2000,
      "protein": 160,
      "carbs": 200
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
      "p2_m3",
      "p2_m4"
    ]
  },
  {
    "name": "Lowcarb 2",
    "targetMacros": {
      "calories": 2000,
      "protein": 150,
      "carbs": 200
    },
    "desayuno": [
      "p3_m0"
    ],
    "comida": [
      "p3_m1",
      "p3_m2"
    ],
    "cena": [
      "p3_m3"
    ],
    "extra": [
      "p3_m4",
      "p3_m5"
    ]
  }
];