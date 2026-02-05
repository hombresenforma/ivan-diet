// Titulo: Plan de Alimentación

// Contenido de app_datos.js
//
// =========================================================================
// =========================================================================
// DATOS DEL PLAN (1 DÍAS)
//
// =========================================================================
// =========================================================================

const foodDatabase = {
  "p0_m0": {
    "name": "Porridge de Avena y Frutos Rojos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afdf19b8ed348797cbcd8.png",
    "calories": 432,
    "protein": 12.85,
    "carbs": 87.5,
    "fats": 3.9,
    "ingredients": [
      {
        "name": "Copos de Avena",
        "quantity": "80",
        "unit": "g",
        "calories": 292,
        "protein": 9.6,
        "carbs": 60,
        "fats": 1.6,
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Leche",
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
      }
    ],
    "preparation": "1. En un cazo, cocinar los copos de avena con la leche o bebida vegetal a fuego medio, removiendo constantemente hasta que espese y la avena esté cocida (unos 5-7 minutos). 2. Servir caliente en un bol con los frutos rojos por encima. Opcional: añadir canela o edulcorante al gusto.",
    "originalBaseRecipeId": "des_porridge_de_avena_y_frutos_rojos",
    "isSideDish": false
  },
  "p0_m1": {
    "name": "Ensalada de Lentejas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff5a365e949c0a73d706.png",
    "calories": 440,
    "protein": 22,
    "carbs": 56,
    "fats": 13.3,
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
    "preparation": "1. Si usas lentejas de bote, enjuagarlas bien bajo el grifo y escurrirlas. Si las cocinas, déjalas enfriar. 2. Picar el tomate y la cebolla (preferiblemente morada) en dados pequeños. Cortar el queso de Burgos 0% y el aguacate en dados. 3. En un bol grande, mezclar con cuidado las lentejas, el tomate, la cebolla, el queso de Burgos y el aguacate. 4. Aliñar con aceite de oliva virgen extra, vinagre (de manzana o Jerez) y sal al gusto.",
    "originalBaseRecipeId": "pp_ensalada_de_lentejas",
    "isSideDish": false
  },
  "p0_m2": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "calories": 442.4,
    "protein": 32.4,
    "carbs": 15,
    "fats": 27.400000000000002,
    "ingredients": [
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
  "p0_m3": {
    "name": "Tostada de Centeno con Queso Cottage y Cherries",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68792fea2035ba213493e87e.png",
    "calories": 284.5,
    "protein": 18.9,
    "carbs": 37.75,
    "fats": 5.949999999999999,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "2",
        "unit": "rebanada(s)",
        "gramsPerUnit": 30,
        "calories": 162,
        "protein": 5.3999999999999995,
        "carbs": 30,
        "fats": 1.7999999999999998,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.029999999999999995
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
        "name": "Queso Cottage",
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
    "preparation": "1. Tostar el pan de centeno. 2. Untar el queso cottage sobre las tostadas y añadir los cherries por encima con especias.",
    "originalBaseRecipeId": "ext_tostada_de_centeno_con_queso_cottage_y_cherries",
    "isSideDish": false
  },
  "p0_m4": {
    "name": "Hamburguesa de Pavo-Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcbc9b8ed3b6397cbb33.png",
    "calories": 318.4,
    "protein": 16,
    "carbs": 2,
    "fats": 28,
    "ingredients": [
      {
        "name": "Hamburguesa de Pavo-Pollo",
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
  }
};

const dailyMenus = [
  {
    "name": "Día 1",
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
      "p0_m4"
    ],
    "cena": [
      "p0_m2"
    ],
    "extra": [
      "p0_m3"
    ]
  }
];