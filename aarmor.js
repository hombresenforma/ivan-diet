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
    "name": "Tostada de Centeno con Huevo y Aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687a695da648331355d3b0b2.png",
    "calories": 459.4,
    "protein": 18.7,
    "carbs": 20.6,
    "fats": 33.9,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
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
  "p0_m1": {
    "name": "Judía verde con patata y Zanahoria",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cf5c1ddc9c1507857434b.png",
    "calories": 322.5,
    "protein": 9.5,
    "carbs": 68.75,
    "fats": 0.65,
    "ingredients": [
      {
        "name": "Judía Verde",
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
        "name": "Zanahoria",
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
      }
    ],
    "preparation": "1. Lavar y cortar las judías verdes, pelar y cortar las patatas y zanahorias. 2. Cocer todas las verduras en agua con sal hasta que estén tiernas. 3. Escurrir y servir. Aliñar con aceite de oliva virgen extra.",
    "originalBaseRecipeId": "pp_juda_verde_con_patata_y_zanahoria",
    "isSideDish": false
  },
  "p0_m2": {
    "name": "Pechuga de Pavo a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f003ef6c48dfc43a5bdb3.png",
    "calories": 408.4,
    "protein": 56.00000000000001,
    "carbs": 0,
    "fats": 18,
    "ingredients": [
      {
        "name": "Pechuga de Pavo",
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
    "preparation": "1. Si los filetes de pechuga de pavo son muy gruesos, se pueden abrir tipo libro o golpear ligeramente para que tengan un grosor más uniforme y se cocinen mejor. 2. Sazonar los filetes de pavo con sal, pimienta y tus especias favoritas. 3. Calentar una plancha o sartén antiadherente a fuego medio-alto con una gota de aceite de oliva. 4. Cocinar la pechuga de pavo durante unos 3-4 minutos por cada lado, o hasta que esté dorada por fuera y completamente cocida por dentro.",
    "originalBaseRecipeId": "ac_pechuga_de_pavo_a_la_plancha",
    "isSideDish": false
  },
  "p0_m3": {
    "name": "Ensalada de Tomate, Aguacate, Cebolla y Lima",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cf9a725d68c4bc3ec3502.png",
    "calories": 202.5,
    "protein": 7.5,
    "carbs": 15.75,
    "fats": 12.450000000000001,
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
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002
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
      }
    ],
    "preparation": "1. Cortar el tomate y el aguacate en dados. 2. Picar la cebolla en juliana fina. 3. Mezclar todos los ingredientes en un bol. 4. Exprimir el zumo de media lima por encima, añadir aceite de oliva y sal. Mezclar bien.",
    "originalBaseRecipeId": "pp_ensalada_de_tomate_aguacate_cebolla_y_lima",
    "isSideDish": false
  },
  "p0_m4": {
    "name": "Revuelto de Huevos con Queso Habarti Light",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f0183653a2c532c17327c.png",
    "calories": 260,
    "protein": 20.5,
    "carbs": 1.7000000000000002,
    "fats": 18.5,
    "ingredients": [
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
        "name": "Queso Havarti Light",
        "quantity": "30",
        "unit": "g",
        "calories": 105,
        "protein": 7.5,
        "carbs": 0.6,
        "fats": 7.5,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25
      }
    ],
    "preparation": "1. Batir los huevos en un bol con una pizca de sal y pimienta. 2. Cortar el queso Havarti light en trocitos pequeños o rallarlo. 3. Calentar una sartén antiadherente a fuego medio con una pizca de aceite de oliva o mantequilla (opcional). 4. Verter los huevos batidos en la sartén caliente. Dejar que empiecen a cuajar ligeramente por los bordes. 5. Añadir los trocitos de queso Havarti light distribuyéndolos por encima de los huevos. 6. Remover suavemente con una espátula, llevando los bordes cuajados hacia el centro y permitiendo que la parte líquida fluya hacia los lados, hasta que los huevos estén cuajados al gusto (más jugosos o más secos) y el queso esté derretido e integrado. Servir inmediatamente.",
    "originalBaseRecipeId": "ac_revuelto_de_huevos_con_queso_habarti_light",
    "isSideDish": true
  },
  "p0_m5": {
    "name": "Yogur Griego Desnatado con Proteína en Polvo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "calories": 239,
    "protein": 30.25,
    "carbs": 14,
    "fats": 6.2,
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
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
        "name": "Proteína en Polvo",
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
    "preparation": "1. Mezclar el yogur griego con la proteína en polvo en un bol hasta que esté bien integrado y sin grumos.",
    "originalBaseRecipeId": "ext_yogur_griego_desnatado_con_protena_en_polvo",
    "isSideDish": false
  },
  "p0_m6": {
    "name": "Fruta Densa (Plátano, Manzana)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "calories": 72,
    "protein": 0.6,
    "carbs": 18,
    "fats": 0.24,
    "ingredients": [
      {
        "name": "Plátano",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 72,
        "protein": 0.6,
        "carbs": 18,
        "fats": 0.24,
        "baseCalories": 72,
        "baseProtein": 0.6,
        "baseCarbs": 18,
        "baseFats": 0.24
      }
    ],
    "preparation": "1. Seleccionar la fruta densa de preferencia (plátano, manzana, pera, etc.). 2. Para plátanos: pelar la piel y consumir directamente. 3. Para manzanas o peras: lavar bien la fruta. Se puede consumir con piel (rica en fibra) o pelada, según preferencia. Se puede comer entera a mordiscos o cortada en trozos.",
    "originalBaseRecipeId": "ext_fruta_densa_pltano_manzana",
    "isSideDish": false
  },
  "p1_m0": {
    "name": "Tostada de centeno con jamón ibérico",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6887226c7537da60484d071f.png",
    "calories": 191,
    "protein": 13.7,
    "carbs": 15,
    "fats": 7.9,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
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
      },
      {
        "name": "Jamón Ibérico",
        "quantity": "50",
        "unit": "g",
        "calories": 110.00000000000001,
        "protein": 11,
        "carbs": 0,
        "fats": 7.000000000000001,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Colocar las lonchas de jamón ibérico por encima. Opcional: añadir un chorrito de aceite de oliva.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_jamn_ibrico",
    "isSideDish": false
  },
  "p1_m1": {
    "name": "Ensala de Patata, Atún y Huevo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc08b91eb31afe3d4796.png",
    "calories": 682.5,
    "protein": 62.00000000000001,
    "carbs": 70.55,
    "fats": 14.35,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "250",
        "unit": "g",
        "calories": 225,
        "protein": 5,
        "carbs": 50,
        "fats": 0.25,
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
        "name": "Atún en Conserva",
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
        "name": "Huevo Cocido",
        "quantity": "1",
        "unit": "unidad(es)",
        "gramsPerUnit": 50,
        "calories": 77.5,
        "protein": 6.5,
        "carbs": 0.55,
        "fats": 5.5,
        "baseCalories": 1.55,
        "baseProtein": 0.13,
        "baseCarbs": 0.011000000000000001,
        "baseFats": 0.11
      }
    ],
    "preparation": "1. Cocer las patatas con piel en agua con sal hasta que estén tiernas (unos 20-25 minutos). Dejar enfriar, pelar y cortar en dados. 2. Cocer los huevos en agua hirviendo durante 10 minutos. Dejar enfriar, pelar y cortar en rodajas o trozos. 3. Picar finamente el pimiento verde, pimiento rojo, cebolla y tomate. 4. En un bol grande, mezclar las patatas, los huevos, las verduras picadas, el maíz dulce (escurrido) y el atún (escurrido y desmenuzado). 5. Aliñar con aceite de oliva virgen extra, vinagre y sal al gusto. Mezclar con cuidado.",
    "originalBaseRecipeId": "cc_ensala_de_patata_atn_y_huevo",
    "isSideDish": false
  },
  "p1_m2": {
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
        "calories": 216,
        "protein": 7.199999999999999,
        "carbs": 40,
        "fats": 2.4,
        "baseCalories": 108,
        "baseProtein": 3.5999999999999996,
        "baseCarbs": 20,
        "baseFats": 1.2
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
  "p1_m3": {
    "name": "Yogur Griego Desnatado con Proteína en Polvo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "calories": 239,
    "protein": 30.25,
    "carbs": 14,
    "fats": 6.2,
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
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
        "name": "Proteína en Polvo",
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
    "preparation": "1. Mezclar el yogur griego con la proteína en polvo en un bol hasta que esté bien integrado y sin grumos.",
    "originalBaseRecipeId": "ext_yogur_griego_desnatado_con_protena_en_polvo",
    "isSideDish": false
  },
  "p1_m4": {
    "name": "Fruta Densa (Plátano, Manzana)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "calories": 90,
    "protein": 0.75,
    "carbs": 22.5,
    "fats": 0.3,
    "ingredients": [
      {
        "name": "Manzana",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 90,
        "protein": 0.75,
        "carbs": 22.5,
        "fats": 0.3,
        "baseCalories": 90,
        "baseProtein": 0.75,
        "baseCarbs": 22.5,
        "baseFats": 0.3
      }
    ],
    "preparation": "1. Seleccionar la fruta densa de preferencia (plátano, manzana, pera, etc.). 2. Para plátanos: pelar la piel y consumir directamente. 3. Para manzanas o peras: lavar bien la fruta. Se puede consumir con piel (rica en fibra) o pelada, según preferencia. Se puede comer entera a mordiscos o cortada en trozos.",
    "originalBaseRecipeId": "ext_fruta_densa_pltano_manzana",
    "isSideDish": false
  },
  "p2_m0": {
    "name": "Pudding de chía alto en proteína",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d043e9b0c67b6db9b08b8.png",
    "calories": 264,
    "protein": 31.5,
    "carbs": 16.5,
    "fats": 7.2,
    "ingredients": [
      {
        "name": "Semillas de Chía",
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
        "name": "Leche",
        "quantity": "100",
        "unit": "g",
        "calories": 100,
        "protein": 5,
        "carbs": 10,
        "fats": 4,
        "baseCalories": 1,
        "baseProtein": 0.05,
        "baseCarbs": 0.1,
        "baseFats": 0.04
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
        "baseCarbs": 0.05,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Mezclar las semillas de chía, la leche (o bebida vegetal) y la proteína en polvo en un recipiente. 2. Remover bien y dejar reposar en la nevara durante al menos 4 horas o toda la noche. 3. Servir frío, opcionalmente con fruta o frutos secos.",
    "originalBaseRecipeId": "des_pudding_de_cha_alto_en_protena",
    "isSideDish": false
  },
  "p2_m1": {
    "name": "Ensalada de garbanzos con verduras y queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ff252d3f16b5241c27c1e4.png",
    "calories": 427.5,
    "protein": 32.5,
    "carbs": 59.25,
    "fats": 5.449999999999999,
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
  "p2_m2": {
    "name": "Hamburguesa de Pavo-Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcbc9b8ed3b6397cbb33.png",
    "calories": 433.4,
    "protein": 24,
    "carbs": 3,
    "fats": 37,
    "ingredients": [
      {
        "name": "Hamburguesa de Pavo-Pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 345,
        "protein": 24,
        "carbs": 3,
        "fats": 27,
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
    "preparation": "1. Si la hamburguesa es casera a partir de carne picada, sazonar la carne con sal, pimienta, ajo en polvo y perejil picado (opcional) y formar la hamburguesa. 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con una gota de aceite de oliva. 3. Cocinar la hamburguesa durante 4-6 minutos por cada lado, o hasta que esté bien cocida por dentro y dorada por fuera.",
    "originalBaseRecipeId": "ac_hamburguesa_de_pavopollo",
    "isSideDish": false
  },
  "p2_m3": {
    "name": "Crema de Calabacín con Huevo Poché y Jamón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cdb9f96c9c55f5257809.png",
    "calories": 296,
    "protein": 25.4,
    "carbs": 11.7,
    "fats": 16.2,
    "ingredients": [
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
        "name": "Puerro",
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
        "name": "Quesito Light",
        "quantity": "1",
        "unit": "unidad(es)",
        "calories": 15,
        "protein": 1.7999999999999998,
        "carbs": 0.6,
        "fats": 0.6,
        "baseCalories": 15,
        "baseProtein": 1.7999999999999998,
        "baseCarbs": 0.6,
        "baseFats": 0.6
      },
      {
        "name": "Jamón Serrano",
        "quantity": "30",
        "unit": "g",
        "calories": 66,
        "protein": 6.6,
        "carbs": 0,
        "fats": 4.2,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14
      },
      {
        "name": "Huevo",
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
      }
    ],
    "preparation": "1. Sofreír puerro y calabacín. Cubrir con agua y cocer. Triturar añadiendo el quesito para cremosidad. 2. Escalfar el huevo en agua hirviendo con vinagre (3-4 min). 3. Servir la crema con el huevo encima y virutas de jamón.",
    "originalBaseRecipeId": "cc_crema_de_calabacn_con_huevo_poch_y_jamn",
    "isSideDish": false
  },
  "p2_m4": {
    "name": "Yogur Protéico (Sabores, Natural...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png",
    "calories": 125,
    "protein": 6.25,
    "carbs": 12.5,
    "fats": 5,
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
      }
    ],
    "preparation": "1. Seleccionar el yogur proteico de preferencia (natural o con sabores). 2. Abrir el envase. 3. Consumir directamente con una cuchara. Opcional: se puede acompañar de frutas frescas troceadas, frutos secos, semillas o un poco de miel o edulcorante si es natural y se desea endulzar.",
    "originalBaseRecipeId": "ext_yogur_protico_sabores_natural",
    "isSideDish": false
  },
  "p2_m5": {
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
  "p3_m0": {
    "name": "Tostada de Centeno con Queso Cottage y Cherries",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68792fea2035ba213493e87e.png",
    "calories": 146,
    "protein": 9.700000000000001,
    "carbs": 19.5,
    "fats": 3,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
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
      },
      {
        "name": "Tomates Cherry",
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
        "name": "Queso Cottage",
        "quantity": "50",
        "unit": "g",
        "calories": 50,
        "protein": 6.000000000000001,
        "carbs": 2,
        "fats": 2,
        "baseCalories": 1,
        "baseProtein": 0.12000000000000001,
        "baseCarbs": 0.04,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Untar el queso cottage sobre las tostadas y añadir los cherries por encima con especias.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_queso_cottage_y_cherries",
    "isSideDish": false
  },
  "p3_m1": {
    "name": "Wrap de pollo hervido con verduras y arroz",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684ef7e26202d54cb0de24e8.png",
    "calories": 663.5,
    "protein": 65.10000000000001,
    "carbs": 71.25,
    "fats": 10.25,
    "ingredients": [
      {
        "name": "Pechuga de Pollo",
        "quantity": "180",
        "unit": "g",
        "calories": 288,
        "protein": 50.400000000000006,
        "carbs": 0,
        "fats": 7.2,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04
      },
      {
        "name": "Arroz",
        "quantity": "40",
        "unit": "g",
        "calories": 146,
        "protein": 4.8,
        "carbs": 30,
        "fats": 0.8,
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Brócoli",
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
        "name": "Zanahoria",
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
        "name": "Tortilla de Wrap",
        "quantity": "1",
        "unit": "unidad(es)",
        "gramsPerUnit": 60,
        "calories": 162,
        "protein": 5.3999999999999995,
        "carbs": 30,
        "fats": 1.7999999999999998,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.029999999999999995
      }
    ],
    "preparation": "1. Hervir la pechuga de pollo en agua con sal hasta que esté cocida (unos 15-20 minutos). Dejar enfriar un poco y desmenuzar o cortar en trozos pequeños. 2. Cocer el arroz según las instrucciones del paquete. 3. Cocer al vapor o hervir el brócoli (en floretes pequeños) y la zanahoria (cortada en juliana o dados pequeños) hasta que estén tiernos pero crujientes. Picar la cebolla finamente (puede usarse cruda o salteada ligeramente). 4. Calentar ligeramente la tortilla de wrap para que sea más flexible. 5. Extender una capa fina de arroz cocido sobre la tortilla, dejando un borde libre. Distribuir encima el pollo desmenuzado, el brócoli, la zanahoria y la cebolla. 6. Opcional: añadir una salsa ligera (yogur con hierbas, hummus, etc.). Enrollar el wrap firmemente, doblando los extremos hacia adentro si se prefiere.",
    "originalBaseRecipeId": "cc_wrap_de_pollo_hervido_con_verduras_y_arroz",
    "isSideDish": false
  },
  "p3_m2": {
    "name": "Revuelto de Huevos con Queso Habarti Light",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f0183653a2c532c17327c.png",
    "calories": 260,
    "protein": 20.5,
    "carbs": 1.7000000000000002,
    "fats": 18.5,
    "ingredients": [
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
        "name": "Queso Havarti Light",
        "quantity": "30",
        "unit": "g",
        "calories": 105,
        "protein": 7.5,
        "carbs": 0.6,
        "fats": 7.5,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25
      }
    ],
    "preparation": "1. Batir los huevos en un bol con una pizca de sal y pimienta. 2. Cortar el queso Havarti light en trocitos pequeños o rallarlo. 3. Calentar una sartén antiadherente a fuego medio con una pizca de aceite de oliva o mantequilla (opcional). 4. Verter los huevos batidos en la sartén caliente. Dejar que empiecen a cuajar ligeramente por los bordes. 5. Añadir los trocitos de queso Havarti light distribuyéndolos por encima de los huevos. 6. Remover suavemente con una espátula, llevando los bordes cuajados hacia el centro y permitiendo que la parte líquida fluya hacia los lados, hasta que los huevos estén cuajados al gusto (más jugosos o más secos) y el queso esté derretido e integrado. Servir inmediatamente.",
    "originalBaseRecipeId": "ac_revuelto_de_huevos_con_queso_habarti_light",
    "isSideDish": true
  },
  "p3_m3": {
    "name": "Calabacín con Cebolla a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc8e9b8ed35d8e7cbb0e.png",
    "calories": 133.4,
    "protein": 3,
    "carbs": 7.5,
    "fats": 10.3,
    "ingredients": [
      {
        "name": "Calabacín",
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
    "preparation": "1. Lavar el calabacín y cortarlo en rodajas de aproximadamente 0.5 a 1 cm de grosor. Pelar y cortar la cebolla en juliana o rodajas. 2. Calentar una plancha o sartén grande con un chorrito de aceite de oliva a fuego medio-alto. 3. Colocar las rodajas de calabacín y la cebolla sobre la plancha caliente. Cocinar durante 3-5 minutos por cada lado, o hasta que estén tiernos y presenten marcas doradas de la plancha. 4. Sazonar con sal, pimienta y opcionalmente un poco de ajo en polvo u orégano durante la cocción o al final.",
    "originalBaseRecipeId": "pp_calabacn_con_cebolla_a_la_plancha",
    "isSideDish": false
  },
  "p3_m4": {
    "name": "Merluza a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f001d4d606642b1333279.png",
    "calories": 328.4,
    "protein": 42.00000000000001,
    "carbs": 0,
    "fats": 16,
    "ingredients": [
      {
        "name": "Filete de Merluza",
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
    "preparation": "1. Sazonar los filetes o rodajas de merluza con sal, pimienta y opcionalmente un poco de ajo en polvo o perejil picado. 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con un chorrito de aceite de oliva virgen extra. 3. Cuando el aceite esté caliente, colocar la merluza en la plancha. Cocinar durante unos 3-5 minutos por cada lado, dependiendo del grosor del pescado, hasta que esté opaca, bien cocida por dentro y se desmenuce fácilmente con un tenedor. Evitar cocinarla en exceso para que no quede seca. 4. Servir inmediatamente, opcionalmente con un chorrito de zumo de limón fresco por encima.",
    "originalBaseRecipeId": "ac_merluza_a_la_plancha",
    "isSideDish": true
  },
  "p3_m5": {
    "name": "Fruta Cítrica (Mandarina, Kiwi, Naranja...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png",
    "calories": 45,
    "protein": 0.375,
    "carbs": 11.25,
    "fats": 0.15,
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
      }
    ],
    "preparation": "1. Seleccionar la fruta cítrica de preferencia (mandarina, kiwi, naranja, pomelo, etc.). 2. Lavar bien la fruta bajo el grifo. 3. Para mandarinas y naranjas: pelar la piel con las manos o con ayuda de un cuchillo. Separar los gajos si se desea. 4. Para kiwis: cortar por la mitad y comer la pulpa con una cucharita, o pelar con un cuchillo y cortar en rodajas. 5. Para pomelos: cortar por la mitad y extraer los gajos, o comer con cuchara. Consumir directamente.",
    "originalBaseRecipeId": "ext_fruta_ctrica_mandarina_kiwi_naranja",
    "isSideDish": false
  },
  "p3_m6": {
    "name": "Yogur Protéico (Sabores, Natural...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png",
    "calories": 125,
    "protein": 6.25,
    "carbs": 12.5,
    "fats": 5,
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
      }
    ],
    "preparation": "1. Seleccionar el yogur proteico de preferencia (natural o con sabores). 2. Abrir el envase. 3. Consumir directamente con una cuchara. Opcional: se puede acompañar de frutas frescas troceadas, frutos secos, semillas o un poco de miel o edulcorante si es natural y se desea endulzar.",
    "originalBaseRecipeId": "ext_yogur_protico_sabores_natural",
    "isSideDish": false
  }
};

const dailyMenus = [
  {
    "name": "ENTRENO",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
    },
    "desayuno": [
      "p0_m0"
    ],
    "comida": [
      "p0_m1",
      "p0_m2"
    ],
    "cena": [
      "p0_m3",
      "p0_m4"
    ],
    "extra": [
      "p0_m5",
      "p0_m6"
    ]
  },
  {
    "name": "Entreno 2",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
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
      "p1_m3",
      "p1_m4"
    ]
  },
  {
    "name": "Libre 1",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
    },
    "desayuno": [
      "p2_m0"
    ],
    "comida": [
      "p2_m1",
      "p2_m2"
    ],
    "cena": [
      "p2_m3"
    ],
    "extra": [
      "p2_m4",
      "p2_m5"
    ]
  },
  {
    "name": "Libre 2",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
    },
    "desayuno": [
      "p3_m0"
    ],
    "comida": [
      "p3_m1",
      "p3_m2"
    ],
    "cena": [
      "p3_m3",
      "p3_m4"
    ],
    "extra": [
      "p3_m5",
      "p3_m6"
    ]
  }
];