// Titulo: Plan de Alimentación

// Contenido de app_datos.js
//
// =========================================================================
// =========================================================================
// DATOS DEL PLAN (3 DÍAS)
//
// =========================================================================
// =========================================================================

const foodDatabase = {
  "p0_m0": {
    "name": "Sandwich Vegetal de Jamón York",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd5829b0c67f95e9a8e7e.png",
    "calories": 437,
    "protein": 24.4,
    "carbs": 39.5,
    "fats": 20.1,
    "ingredients": [
      {
        "name": "Pan de Centeno",
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
        "name": "Jamón York",
        "quantity": "100",
        "unit": "g",
        "calories": 229.99999999999997,
        "protein": 16,
        "carbs": 2,
        "fats": 18,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18
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
        "name": "Lechuga",
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
    "preparation": "1. Prepara un bocadillo con un par de rebanadas de Pan de Centeno. 2. Añade el Pavo o Jamón York y opcionalmente tomate y lechuga.",
    "originalBaseRecipeId": "des_sandwich_vegetal_de_jamn_york",
    "isSideDish": false
  },
  "p0_m1": {
    "name": "Ensalada de Lentejas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff5a365e949c0a73d706.png",
    "calories": 575,
    "protein": 37.4,
    "carbs": 63.3,
    "fats": 18.2,
    "ingredients": [
      {
        "name": "Lentejas Cocidas",
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
        "name": "Queso de Burgos 0%",
        "quantity": "120",
        "unit": "g",
        "calories": 120,
        "protein": 14.399999999999999,
        "carbs": 4.8,
        "fats": 4.8,
        "baseCalories": 1,
        "baseProtein": 0.11999999999999998,
        "baseCarbs": 0.04,
        "baseFats": 0.04
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
      }
    ],
    "preparation": "1. Si usas lentejas de bote, enjuagarlas bien bajo el grifo y escurrirlas. Si las cocinas, déjalas enfriar. 2. Picar el tomate y la cebolla (preferiblemente morada) en dados pequeños. Cortar el queso de Burgos 0% y el aguacate en dados. 3. En un bol grande, mezclar con cuidado las lentejas, el tomate, la cebolla, el queso de Burgos y el aguacate. 4. Aliñar con aceite de oliva virgen extra, vinagre (de manzana o Jerez) y sal al gusto. Opcional: añadir cilantro fresco picado o comino molido para un toque diferente.",
    "originalBaseRecipeId": "pp_ensalada_de_lentejas",
    "isSideDish": false
  },
  "p0_m2": {
    "name": "Pechuga de Pavo a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f003ef6c48dfc43a5bdb3.png",
    "calories": 248.4,
    "protein": 28.000000000000004,
    "carbs": 0,
    "fats": 14,
    "ingredients": [
      {
        "name": "Pechuga de Pavo",
        "quantity": "100",
        "unit": "g",
        "calories": 160,
        "protein": 28.000000000000004,
        "carbs": 0,
        "fats": 4,
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
    "preparation": "1. Si los filetes de pechuga de pavo son muy gruesos, se pueden abrir tipo libro o golpear ligeramente para que tengan un grosor más uniforme y se cocinen mejor. 2. Sazonar los filetes de pavo con sal, pimienta y tus especias favoritas (ej. orégano, pimentón dulce, curry en polvo, hierbas provenzales). 3. Calentar una plancha o sartén antiadherente a fuego medio-alto con una gota de aceite de oliva. 4. Cocinar la pechuga de pavo durante unos 3-4 minutos por cada lado, o hasta que esté dorada por fuera y completamente cocida por dentro (sin partes rosadas). El tiempo exacto dependerá del grosor.",
    "originalBaseRecipeId": "ac_pechuga_de_pavo_a_la_plancha",
    "isSideDish": true
  },
  "p0_m3": {
    "name": "Calabacín con Cebolla a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc8e9b8ed35d8e7cbb0e.png",
    "calories": 148.4,
    "protein": 4,
    "carbs": 10,
    "fats": 10.4,
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
  "p0_m4": {
    "name": "Revuelto de Huevos con Espárragos Trigueros",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f019a532eaa9f6977a78c.png",
    "calories": 249.2,
    "protein": 15.5,
    "carbs": 6.1,
    "fats": 18,
    "ingredients": [
      {
        "name": "Espárragos Trigueros",
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
    "preparation": "1. Lavar los espárragos trigueros y cortar la parte inferior más dura del tallo. Trocear los espárragos en trozos de unos 2-3 cm. 2. Batir los huevos en un bol con una pizca de sal y pimienta. 3. Calentar un poco de aceite de oliva en una sartén a fuego medio. Añadir los espárragos troceados y saltear durante 3-5 minutos, o hasta que estén tiernos pero aún crujientes. 4. Verter los huevos batidos sobre los espárragos en la sartén. 5. Remover suavemente con una espátula, mezclando los huevos con los espárragos, hasta que los huevos estén cuajados al gusto. Servir caliente.",
    "originalBaseRecipeId": "ac_revuelto_de_huevos_con_esprragos_trigueros",
    "isSideDish": true
  },
  "p0_m5": {
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
  "p0_m6": {
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
  "p1_m0": {
    "name": "Tostada de Pan de Centeno con Revuelto de Huevos y Jamón York",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d09e04d6fb7f271b84cc9.png",
    "calories": 351,
    "protein": 23.7,
    "carbs": 17.1,
    "fats": 20.9,
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
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Preparar un revuelto de huevos con taquitos de jamón york. 3. Servir el revuelto sobre la tostada.",
    "originalBaseRecipeId": "des_tostada_de_pan_de_centeno_con_revuelto_de_huevos_y_jamn_york",
    "isSideDish": false
  },
  "p1_m1": {
    "name": "Ensalada de Pasta con Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc47b91eb349463d47dd.png",
    "calories": 726.4,
    "protein": 59.900000000000006,
    "carbs": 76.25,
    "fats": 18.35,
    "ingredients": [
      {
        "name": "Pasta Integral",
        "quantity": "70",
        "unit": "g",
        "calories": 255.5,
        "protein": 8.4,
        "carbs": 52.5,
        "fats": 1.4000000000000001,
        "baseCalories": 3.65,
        "baseProtein": 0.12000000000000001,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Canónigos",
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
    "preparation": "1. Cocer la pasta según las instrucciones del paquete. Escurrir, pasar por agua fría para detener la cocción y dejar enfriar. 2. Cocinar la pechuga de pollo (a la plancha, hervida o asada) y desmenuzarla o cortarla en dados. 3. Lavar los canónigos. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos pequeños. 4. En un bol grande, combinar la pasta fría, el pollo, los canónigos y las verduras picadas. 5. Aliñar con aceite de oliva virgen extra, vinagre o tu salsa para ensaladas favorita (ej. yogur, mostaza y miel). Salpimentar al gusto.",
    "originalBaseRecipeId": "cc_ensalada_de_pasta_con_pollo",
    "isSideDish": false
  },
  "p1_m2": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "calories": 472.4,
    "protein": 34.4,
    "carbs": 20,
    "fats": 27.6,
    "ingredients": [
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
        "name": "Lomo de Salmón",
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
    "preparation": "1. Cortar el salmón en dados de tamaño mediano. Picar el tomate, pimiento rojo, pimiento verde y cebolla en trozos adecuados para wok (ej. juliana gruesa o dados). 2. Calentar un wok o sartén grande con un poco de aceite a fuego alto. Saltear el salmón unos 2-3 minutos hasta que esté dorado por fuera pero ligeramente crudo por dentro. Retirar y reservar. 3. Añadir las verduras más duras (cebolla, pimientos) al wok y saltear durante 3-4 minutos. Luego añadir el tomate y saltear 1-2 minutos más. 4. Incorporar el salmón de nuevo al wok. Añadir salsa de soja (baja en sodio preferiblemente) y un toque de jengibre rallado o ajo picado (opcional). Mezclar bien y cocinar por 1-2 minutos más hasta que el salmón esté cocido y todo bien caliente. Servir inmediatamente, opcionalmente sobre una base de arroz o noodles.",
    "originalBaseRecipeId": "cc_wok_de_verduras_con_salmn",
    "isSideDish": false
  },
  "p1_m3": {
    "name": "Yogurt Protéico con Frutos Rojos y Secos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afea2b91eb35e413d4ab6.png",
    "calories": 296,
    "protein": 9.55,
    "carbs": 26,
    "fats": 17.12,
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
  "p2_m0": {
    "name": "Tostada de centeno con jamón ibérico",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6887226c7537da60484d071f.png",
    "calories": 246,
    "protein": 19.2,
    "carbs": 15,
    "fats": 11.400000000000002,
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
        "quantity": "75",
        "unit": "g",
        "calories": 165,
        "protein": 16.5,
        "carbs": 0,
        "fats": 10.500000000000002,
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
  "p2_m1": {
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
  "p2_m2": {
    "name": "Ensala de Patata, Atún y Huevo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc08b91eb31afe3d4796.png",
    "calories": 667.5,
    "protein": 63.00000000000001,
    "carbs": 65.55,
    "fats": 14.5,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "200",
        "unit": "g",
        "calories": 180,
        "protein": 4,
        "carbs": 40,
        "fats": 0.2,
        "baseCalories": 0.9,
        "baseProtein": 0.02,
        "baseCarbs": 0.2,
        "baseFats": 0.001
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
        "calories": 77.5,
        "protein": 6.5,
        "carbs": 0.55,
        "fats": 5.5,
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5
      }
    ],
    "preparation": "1. Cocer las patatas con piel en agua con sal hasta que estén tiernas (unos 20-25 minutos). Dejar enfriar, pelar y cortar en dados. 2. Cocer los huevos en agua hirviendo durante 10 minutos. Dejar enfriar, pelar y cortar en rodajas o trozos. 3. Picar finamente el pimiento verde, pimiento rojo, cebolla y tomate. 4. En un bol grande, mezclar las patatas, los huevos, las verduras picadas, el maíz dulce (escurrido) y el atún (escurrido y desmenuzado). 5. Aliñar con aceite de oliva virgen extra, vinagre y sal al gusto. Mezclar con cuidado.",
    "originalBaseRecipeId": "cc_ensala_de_patata_atn_y_huevo",
    "isSideDish": false
  },
  "p2_m3": {
    "name": "Fajitas de Pollo y Verduras",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcef0ed50608b742ff33.png",
    "calories": 664.4,
    "protein": 57.2,
    "carbs": 60,
    "fats": 19.200000000000003,
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
    "name": "Tortitas de Legumbres (Mercadona)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682affdd9b8ed3082d7cbefc.png",
    "calories": 32,
    "protein": 1.6,
    "carbs": 3.2,
    "fats": 1.28,
    "ingredients": [
      {
        "name": "Tortitas de Legumbres",
        "quantity": "4",
        "unit": "unidad(es)",
        "calories": 32,
        "protein": 1.6,
        "carbs": 3.2,
        "fats": 1.28,
        "baseCalories": 8,
        "baseProtein": 0.4,
        "baseCarbs": 0.8,
        "baseFats": 0.32
      }
    ],
    "preparation": "1. Abrir el paquete de tortitas de legumbres. 2. Consumir directamente como snack crujiente. Son ideales para picar entre horas o como una alternativa más saludable a otros snacks procesados. Se pueden acompañar de hummus, guacamole o queso fresco si se desea algo más completo.",
    "originalBaseRecipeId": "ext_tortitas_de_legumbres_mercadona",
    "isSideDish": false
  }
};

const dailyMenus = [
  {
    "name": "Opciones 1",
    "targetMacros": {
      "calories": 2000,
      "protein": 150,
      "carbs": 200
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
    "name": "Opciones 2",
    "targetMacros": {
      "calories": 2000,
      "protein": 160,
      "carbs": 200
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
    "name": "Opciones 3",
    "targetMacros": {
      "calories": 2000,
      "protein": 160,
      "carbs": 200
    },
    "desayuno": [
      "p2_m0",
      "p2_m1"
    ],
    "comida": [
      "p2_m2"
    ],
    "cena": [
      "p2_m3"
    ],
    "extra": [
      "p2_m4",
      "p2_m5"
    ]
  }
];