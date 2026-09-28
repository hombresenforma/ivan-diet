// Titulo: Plan de Alimentación
// Alergias/exclusiones registradas: Carne roja, Cerdo.
// Ajuste 28/09/2026: desayunos sólidos sin yogur, de 400-550 kcal; se conserva el objetivo de 1800 kcal de los cuatro menús principales y 1500 kcal de EXTRAS.
// Referencias nutricionales: CoFID 2021 y estimaciones de producto identificadas por ingrediente; revisar etiquetas de las marcas reales.
// Se conservan platos y algunas repeticiones previas de pan, lácteos y aceite para priorizar el ajuste solicitado.
const foodDatabase = {
  "p0_m0": {
    "name": "Tostadas de centeno con huevo y pavo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d09e04d6fb7f271b84cc9.png",
    "calories": 432.0,
    "protein": 28.7,
    "carbs": 49.5,
    "fats": 13.1,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca",
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "calories": 259.0,
        "protein": 8.5,
        "carbs": 48.3,
        "fats": 3.3000000000000003
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "ud (50 g comestibles)",
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw",
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "calories": 131.0,
        "protein": 12.6,
        "carbs": 0.0,
        "fats": 9.0
      },
      {
        "name": "Fiambre de Pavo",
        "quantity": "40",
        "unit": "g",
        "nutritionReference": "Estimación fiambre de pavo; confirmar etiqueta",
        "baseCalories": 1.05,
        "baseProtein": 0.19,
        "baseCarbs": 0.03,
        "baseFats": 0.02,
        "calories": 42.0,
        "protein": 7.6,
        "carbs": 1.2,
        "fats": 0.8
      }
    ],
    "preparation": "Tuesta el pan. Cocina los huevos en sartén antiadherente sin aceite adicional o cuécelos. Sirve con el fiambre de pavo. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado. El fiambre debe ser de pavo y no contener cerdo ni carne roja; revisa la etiqueta."
  },
  "p0_m1": {
    "name": "Ensala de Patata, Atún y Huevo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc08b91eb31afe3d4796.png",
    "calories": 660.6500000000001,
    "protein": 64.0,
    "carbs": 64.47500000000001,
    "fats": 18.090000000000003,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "225",
        "unit": "g",
        "calories": 184.5,
        "protein": 4.2749999999999995,
        "carbs": 44.1,
        "fats": 0.225,
        "baseCalories": 0.82,
        "baseProtein": 0.019,
        "baseCarbs": 0.196,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-489 Potatoes, old, raw, flesh only"
      },
      {
        "name": "Pimiento Verde",
        "quantity": "75",
        "unit": "g",
        "calories": 11.25,
        "protein": 0.6,
        "carbs": 1.9500000000000002,
        "fats": 0.225,
        "baseCalories": 0.15,
        "baseProtein": 0.008,
        "baseCarbs": 0.026000000000000002,
        "baseFats": 0.003,
        "nutritionReference": "CoFID 2021 13-318 Peppers, capsicum, green, raw"
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 15.75,
        "protein": 0.6,
        "carbs": 3.2249999999999996,
        "fats": 0.15,
        "baseCalories": 0.21,
        "baseProtein": 0.008,
        "baseCarbs": 0.043,
        "baseFats": 0.002,
        "nutritionReference": "CoFID 2021 13-524 Pepper, capsicum, red, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 26.25,
        "protein": 0.75,
        "carbs": 6.0,
        "fats": 0.075,
        "baseCalories": 0.35,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Tomate",
        "quantity": "75",
        "unit": "g",
        "calories": 10.500000000000002,
        "protein": 0.375,
        "carbs": 2.25,
        "fats": 0.075,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Maíz",
        "quantity": "50",
        "unit": "g",
        "calories": 39.0,
        "protein": 1.3,
        "carbs": 6.950000000000001,
        "fats": 0.8500000000000001,
        "baseCalories": 0.78,
        "baseProtein": 0.026000000000000002,
        "baseCarbs": 0.139,
        "baseFats": 0.017,
        "nutritionReference": "CoFID 2021 13-529 Sweetcorn kernels, canned in water, drained"
      },
      {
        "name": "Atún en Conserva",
        "quantity": "200",
        "unit": "g",
        "calories": 218.00000000000003,
        "protein": 49.8,
        "carbs": 0.0,
        "fats": 2.0,
        "baseCalories": 1.09,
        "baseProtein": 0.249,
        "baseCarbs": 0.0,
        "baseFats": 0.01,
        "nutritionReference": "CoFID 2021 16-416 Tuna, canned in brine, drained"
      },
      {
        "name": "Huevo Cocido",
        "quantity": "1",
        "unit": "ud (50 g comestibles)",
        "calories": 65.5,
        "protein": 6.3,
        "carbs": 0.0,
        "fats": 4.5,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002
      }
    ],
    "preparation": "Cuece la patata y el huevo. Mezcla con las verduras troceadas, el maíz y el atún escurridos. Aliña con el aceite indicado. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "cc_ensala_de_patata_atn_y_huevo"
  },
  "p0_m2": {
    "name": "Ensalada de Tomate, Maíz, Queso de Burgos y Frutos Secos",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/6a953b1ea90361de8b63e6cb.png",
    "calories": 353.1,
    "protein": 12.81,
    "carbs": 15.270000000000001,
    "fats": 27.060000000000002,
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "150",
        "unit": "g",
        "calories": 21.000000000000004,
        "protein": 0.75,
        "carbs": 4.5,
        "fats": 0.15,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Maíz",
        "quantity": "50",
        "unit": "g",
        "calories": 39.0,
        "protein": 1.3,
        "carbs": 6.950000000000001,
        "fats": 0.8500000000000001,
        "baseCalories": 0.78,
        "baseProtein": 0.026000000000000002,
        "baseCarbs": 0.139,
        "baseFats": 0.017,
        "nutritionReference": "CoFID 2021 13-529 Sweetcorn kernels, canned in water, drained"
      },
      {
        "name": "Queso de Burgos",
        "quantity": "50",
        "unit": "g",
        "calories": 87.0,
        "protein": 6.0,
        "carbs": 1.5,
        "fats": 6.25,
        "baseCalories": 1.74,
        "baseProtein": 0.12,
        "baseCarbs": 0.03,
        "baseFats": 0.125,
        "nutritionReference": "Estimación queso fresco Burgos natural; confirmar etiqueta"
      },
      {
        "name": "Frutos Secos",
        "quantity": "20",
        "unit": "g",
        "calories": 116.19999999999999,
        "protein": 4.760000000000001,
        "carbs": 2.32,
        "fats": 9.82,
        "baseCalories": 5.81,
        "baseProtein": 0.23800000000000002,
        "baseCarbs": 0.11599999999999999,
        "baseFats": 0.491,
        "nutritionReference": "CoFID 2021 14-880 Nuts, mixed"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "Mezcla el tomate, el maíz escurrido, el queso fresco y los frutos secos. Aliña con el aceite indicado. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "pp_ensalada_de_tomate_maz_queso_de_burgos_y_frutos_secos"
  },
  "p0_m3": {
    "name": "Yogur Protéico (Sabores, Natural...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png",
    "calories": 77.5,
    "protein": 13.125,
    "carbs": 5.0,
    "fats": 0.375,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "125",
        "unit": "g",
        "calories": 77.5,
        "protein": 13.125,
        "carbs": 5.0,
        "fats": 0.375,
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "nutritionReference": "Referencia protein_dairy del catálogo CRM; confirmar etiqueta de la marca"
      }
    ],
    "preparation": "Toma el yogur proteico en la cantidad indicada. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "ext_yogur_protico_sabores_natural"
  },
  "p0_m4": {
    "name": "Manzana",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "calories": 76.5,
    "protein": 0.9,
    "carbs": 17.4,
    "fats": 0.75,
    "ingredients": [
      {
        "name": "Manzana",
        "quantity": "150",
        "unit": "g",
        "calories": 76.5,
        "protein": 0.9,
        "carbs": 17.4,
        "fats": 0.75,
        "baseCalories": 0.51,
        "baseProtein": 0.006,
        "baseCarbs": 0.11599999999999999,
        "baseFats": 0.005,
        "nutritionReference": "CoFID 2021 14-319 Apples, eating, raw, flesh and skin"
      }
    ],
    "preparation": "Lava la manzana y pesa la parte comestible. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "ext_fruta_densa_pltano_manzana_pera"
  },
  "p0_m5": {
    "name": "Hamburguesa de Pavo-Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcbc9b8ed3b6397cbb33.png",
    "calories": 200.0,
    "protein": 22.5,
    "carbs": 2.5,
    "fats": 11.25,
    "ingredients": [
      {
        "name": "Hamburguesa de Pavo-Pollo",
        "quantity": "125",
        "unit": "g",
        "calories": 200.0,
        "protein": 22.5,
        "carbs": 2.5,
        "fats": 11.25,
        "baseCalories": 1.6,
        "baseProtein": 0.18,
        "baseCarbs": 0.02,
        "baseFats": 0.09,
        "nutritionReference": "Estimación hamburguesa de ave; confirmar etiqueta"
      }
    ],
    "preparation": "Cocina la hamburguesa de ave en sartén antiadherente, sin aceite adicional. Comprueba que no lleve cerdo ni carne roja. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "ac_hamburguesa_de_pavopollo"
  },
  "p1_m0": {
    "name": "Tostadas integrales con atún y aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff33e819fcc7a1a8d946.png",
    "calories": 438.75,
    "protein": 41.425,
    "carbs": 42.9,
    "fats": 12.45,
    "ingredients": [
      {
        "name": "Pan Integral",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 11-981 Bread, wholemeal, average",
        "baseCalories": 2.17,
        "baseProtein": 0.094,
        "baseCarbs": 0.42,
        "baseFats": 0.025,
        "calories": 217.0,
        "protein": 9.4,
        "carbs": 42.0,
        "fats": 2.5
      },
      {
        "name": "Atún en Conserva",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 16-416 Tuna, canned in brine, drained",
        "baseCalories": 1.09,
        "baseProtein": 0.249,
        "baseCarbs": 0.0,
        "baseFats": 0.01,
        "calories": 136.25,
        "protein": 31.125,
        "carbs": 0.0,
        "fats": 1.25
      },
      {
        "name": "Aguacate",
        "quantity": "50",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-386 Avocado, Hass, flesh only",
        "baseCalories": 1.71,
        "baseProtein": 0.018000000000000002,
        "baseCarbs": 0.018,
        "baseFats": 0.174,
        "calories": 85.5,
        "protein": 0.9000000000000001,
        "carbs": 0.8999999999999999,
        "fats": 8.7
      }
    ],
    "preparation": "Tuesta el pan integral y añade el aguacate y el atún escurrido. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado."
  },
  "p1_m1": {
    "name": "Ensalada de garbanzos con verduras y queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ff252d3f16b5241c27c1e4.png",
    "calories": 494.15000000000003,
    "protein": 29.950000000000003,
    "carbs": 39.425,
    "fats": 24.990000000000002,
    "ingredients": [
      {
        "name": "Garbanzos en Conserva",
        "quantity": "175",
        "unit": "g",
        "calories": 225.75,
        "protein": 14.700000000000001,
        "carbs": 32.025,
        "fats": 5.25,
        "baseCalories": 1.29,
        "baseProtein": 0.084,
        "baseCarbs": 0.183,
        "baseFats": 0.03,
        "nutritionReference": "CoFID 2021 13-670 Beans, chick peas, canned, re-heated, drained"
      },
      {
        "name": "Aguacate",
        "quantity": "50",
        "unit": "g",
        "calories": 85.5,
        "protein": 0.9000000000000001,
        "carbs": 0.8999999999999999,
        "fats": 8.7,
        "baseCalories": 1.71,
        "baseProtein": 0.018000000000000002,
        "baseCarbs": 0.018,
        "baseFats": 0.174,
        "nutritionReference": "CoFID 2021 14-386 Avocado, Hass, flesh only"
      },
      {
        "name": "Pepino",
        "quantity": "50",
        "unit": "g",
        "calories": 7.000000000000001,
        "protein": 0.5,
        "carbs": 0.6,
        "fats": 0.3,
        "baseCalories": 0.14,
        "baseProtein": 0.01,
        "baseCarbs": 0.012,
        "baseFats": 0.006,
        "nutritionReference": "CoFID 2021 13-523 Cucumber, raw, flesh and skin"
      },
      {
        "name": "Tomates Cherry",
        "quantity": "50",
        "unit": "g",
        "calories": 11.0,
        "protein": 0.55,
        "carbs": 1.8000000000000003,
        "fats": 0.25,
        "baseCalories": 0.22,
        "baseProtein": 0.011000000000000001,
        "baseCarbs": 0.036000000000000004,
        "baseFats": 0.005,
        "nutritionReference": "CoFID 2021 13-519 Tomatoes, cherry, raw"
      },
      {
        "name": "Espinacas",
        "quantity": "50",
        "unit": "g",
        "calories": 8.0,
        "protein": 1.3,
        "carbs": 0.1,
        "fats": 0.3,
        "baseCalories": 0.16,
        "baseProtein": 0.026000000000000002,
        "baseCarbs": 0.002,
        "baseFats": 0.006,
        "nutritionReference": "CoFID 2021 13-521 Spinach, baby, raw"
      },
      {
        "name": "Queso de Burgos 0%",
        "quantity": "100",
        "unit": "g",
        "calories": 67.0,
        "protein": 12.0,
        "carbs": 4.0,
        "fats": 0.2,
        "baseCalories": 0.67,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.002,
        "nutritionReference": "Estimación queso fresco Burgos 0%; confirmar etiqueta"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "Lava y escurre los garbanzos. Mezcla con las verduras, el aguacate y el queso fresco. Aliña con el aceite indicado. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "pp_ensalada_de_garbanzos_con_verduras_y_queso"
  },
  "p1_m2": {
    "name": "Fajitas de Pollo y Verduras",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcef0ed50608b742ff33.png",
    "calories": 579.4,
    "protein": 56.175,
    "carbs": 53.85,
    "fats": 16.990000000000002,
    "ingredients": [
      {
        "name": "Pan de Fajita",
        "quantity": "75",
        "unit": "g",
        "calories": 213.75,
        "protein": 5.85,
        "carbs": 40.425000000000004,
        "fats": 4.275,
        "baseCalories": 2.85,
        "baseProtein": 0.078,
        "baseCarbs": 0.539,
        "baseFats": 0.057,
        "nutritionReference": "CoFID 2021 11-925 Tortilla, wheat, soft"
      },
      {
        "name": "Tomate",
        "quantity": "75",
        "unit": "g",
        "calories": 10.500000000000002,
        "protein": 0.375,
        "carbs": 2.25,
        "fats": 0.075,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 15.75,
        "protein": 0.6,
        "carbs": 3.2249999999999996,
        "fats": 0.15,
        "baseCalories": 0.21,
        "baseProtein": 0.008,
        "baseCarbs": 0.043,
        "baseFats": 0.002,
        "nutritionReference": "CoFID 2021 13-524 Pepper, capsicum, red, raw"
      },
      {
        "name": "Pimiento Verde",
        "quantity": "75",
        "unit": "g",
        "calories": 11.25,
        "protein": 0.6,
        "carbs": 1.9500000000000002,
        "fats": 0.225,
        "baseCalories": 0.15,
        "baseProtein": 0.008,
        "baseCarbs": 0.026000000000000002,
        "baseFats": 0.003,
        "nutritionReference": "CoFID 2021 13-318 Peppers, capsicum, green, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 26.25,
        "protein": 0.75,
        "carbs": 6.0,
        "fats": 0.075,
        "baseCalories": 0.35,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "200",
        "unit": "g",
        "calories": 212.0,
        "protein": 48.0,
        "carbs": 0.0,
        "fats": 2.2,
        "baseCalories": 1.06,
        "baseProtein": 0.24,
        "baseCarbs": 0.0,
        "baseFats": 0.011000000000000001,
        "nutritionReference": "CoFID 2021 18-290 Chicken, light meat, raw"
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "Corta y saltea el pollo y las verduras usando únicamente el aceite indicado. Rellena las tortillas de trigo; no añadas salsas ni guacamole. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "cc_fajitas_de_pollo_y_verduras"
  },
  "p1_m3": {
    "name": "Plátano",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "calories": 97.2,
    "protein": 1.44,
    "carbs": 24.360000000000003,
    "fats": 0.12,
    "ingredients": [
      {
        "name": "Plátano",
        "quantity": "120",
        "unit": "g",
        "calories": 97.2,
        "protein": 1.44,
        "carbs": 24.360000000000003,
        "fats": 0.12,
        "baseCalories": 0.81,
        "baseProtein": 0.012,
        "baseCarbs": 0.203,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 14-318 Bananas, flesh only"
      }
    ],
    "preparation": "Pela el plátano y pesa la parte comestible. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "ext_fruta_densa_pltano_manzana_pera"
  },
  "p1_m4": {
    "name": "Tortitas de legumbres",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682affdd9b8ed3082d7cbefc.png",
    "calories": 190.0,
    "protein": 10.0,
    "carbs": 30.0,
    "fats": 2.0,
    "ingredients": [
      {
        "name": "Tortitas de Legumbres",
        "quantity": "50",
        "unit": "g",
        "calories": 190.0,
        "protein": 10.0,
        "carbs": 30.0,
        "fats": 2.0,
        "baseCalories": 3.8,
        "baseProtein": 0.2,
        "baseCarbs": 0.6,
        "baseFats": 0.04,
        "nutritionReference": "Estimación tortitas de legumbres; pesar en gramos y confirmar etiqueta"
      }
    ],
    "preparation": "Pesa las tortitas; el número de unidades dependerá de la marca. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "ext_tortitas_de_legumbres_mercadona"
  },
  "p2_m0": {
    "name": "Tostada de semillas con cottage, tomate y huevo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68792fea2035ba213493e87e.png",
    "calories": 431.5,
    "protein": 32.2,
    "carbs": 28.349999999999998,
    "fats": 21.95,
    "ingredients": [
      {
        "name": "Pan de Semillas",
        "quantity": "50",
        "unit": "g",
        "nutritionReference": "CoFID 2021 11-947 Bread, seeded",
        "baseCalories": 2.7,
        "baseProtein": 0.099,
        "baseCarbs": 0.43799999999999994,
        "baseFats": 0.07400000000000001,
        "calories": 135.0,
        "protein": 4.95,
        "carbs": 21.9,
        "fats": 3.7000000000000006
      },
      {
        "name": "Queso Cottage",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "CoFID 2021 12-539 Cheese, cottage, plain",
        "baseCalories": 1.03,
        "baseProtein": 0.094,
        "baseCarbs": 0.031,
        "baseFats": 0.06,
        "calories": 154.5,
        "protein": 14.1,
        "carbs": 4.65,
        "fats": 9.0
      },
      {
        "name": "Tomates Cherry",
        "quantity": "50",
        "unit": "g",
        "nutritionReference": "CoFID 2021 13-519 Tomatoes, cherry, raw",
        "baseCalories": 0.22,
        "baseProtein": 0.011000000000000001,
        "baseCarbs": 0.036000000000000004,
        "baseFats": 0.005,
        "calories": 11.0,
        "protein": 0.55,
        "carbs": 1.8000000000000003,
        "fats": 0.25
      },
      {
        "name": "Huevos",
        "quantity": "2",
        "unit": "ud (50 g comestibles)",
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw",
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "calories": 131.0,
        "protein": 12.6,
        "carbs": 0.0,
        "fats": 9.0
      }
    ],
    "preparation": "Tuesta el pan de semillas. Sirve con el cottage, el tomate y los huevos cocidos o preparados en sartén antiadherente sin aceite. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado."
  },
  "p2_m1": {
    "name": "Cuscús con Atún y Verduras",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b512c9bfc81fa0930b4288.png",
    "calories": 539.9000000000001,
    "protein": 58.199999999999996,
    "carbs": 47.6,
    "fats": 13.640000000000002,
    "ingredients": [
      {
        "name": "Cuscús",
        "quantity": "50",
        "unit": "g",
        "calories": 182.0,
        "protein": 6.0,
        "carbs": 39.6,
        "fats": 1.05,
        "baseCalories": 3.64,
        "baseProtein": 0.12,
        "baseCarbs": 0.792,
        "baseFats": 0.021,
        "nutritionReference": "CoFID 2021 11-901 Couscous, plain, raw"
      },
      {
        "name": "Atún",
        "quantity": "200",
        "unit": "g",
        "calories": 218.00000000000003,
        "protein": 49.8,
        "carbs": 0.0,
        "fats": 2.0,
        "baseCalories": 1.09,
        "baseProtein": 0.249,
        "baseCarbs": 0.0,
        "baseFats": 0.01,
        "nutritionReference": "CoFID 2021 16-416 Tuna, canned in brine, drained"
      },
      {
        "name": "Verduras Variadas",
        "quantity": "200",
        "unit": "g",
        "calories": 50.0,
        "protein": 2.4,
        "carbs": 8.0,
        "fats": 0.6,
        "baseCalories": 0.25,
        "baseProtein": 0.012,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "nutritionReference": "Estimación mezcla de pimiento, calabacín y cebolla, sin aceite"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "Pesa el cuscús en seco e hidrátalo con agua. Saltea las verduras con el aceite indicado, incorpora el atún escurrido y mezcla. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "cc_cuscs_con_atn_y_verduras"
  },
  "p2_m2": {
    "name": "Gazpacho con aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cfbad25d68cc1a4ec3688.png",
    "calories": 338.90000000000003,
    "protein": 5.1000000000000005,
    "carbs": 16.6,
    "fats": 28.490000000000002,
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "calories": 14.000000000000002,
        "protein": 0.5,
        "carbs": 3.0,
        "fats": 0.1,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Pepino",
        "quantity": "100",
        "unit": "g",
        "calories": 14.000000000000002,
        "protein": 1.0,
        "carbs": 1.2,
        "fats": 0.6,
        "baseCalories": 0.14,
        "baseProtein": 0.01,
        "baseCarbs": 0.012,
        "baseFats": 0.006,
        "nutritionReference": "CoFID 2021 13-523 Cucumber, raw, flesh and skin"
      },
      {
        "name": "Pimiento",
        "quantity": "100",
        "unit": "g",
        "calories": 15.0,
        "protein": 0.8,
        "carbs": 2.6,
        "fats": 0.3,
        "baseCalories": 0.15,
        "baseProtein": 0.008,
        "baseCarbs": 0.026000000000000002,
        "baseFats": 0.003,
        "nutritionReference": "CoFID 2021 13-318 Peppers, capsicum, green, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 35.0,
        "protein": 1.0,
        "carbs": 8.0,
        "fats": 0.1,
        "baseCalories": 0.35,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002
      },
      {
        "name": "Aguacate",
        "quantity": "100",
        "unit": "g",
        "baseCalories": 1.71,
        "baseProtein": 0.018000000000000002,
        "baseCarbs": 0.018,
        "baseFats": 0.174,
        "nutritionReference": "CoFID 2021 14-386 Avocado, Hass, flesh only",
        "calories": 171.0,
        "protein": 1.8000000000000003,
        "carbs": 1.7999999999999998,
        "fats": 17.4
      }
    ],
    "preparation": "Tritura el tomate, el pepino, el pimiento y la cebolla con el aceite indicado, agua y vinagre al gusto. Añade el aguacate en dados al servir. No añadas pan ni más aceite. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "pp_gazpacho"
  },
  "p2_m3": {
    "name": "Huevo Duro Cocido",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68f27f5bfb2e440988a37788.png",
    "calories": 131.0,
    "protein": 12.6,
    "carbs": 0.0,
    "fats": 9.0,
    "ingredients": [
      {
        "name": "Huevo Cocido",
        "quantity": "2",
        "unit": "ud (50 g comestibles)",
        "calories": 131.0,
        "protein": 12.6,
        "carbs": 0.0,
        "fats": 9.0,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
      }
    ],
    "preparation": "Cuece los huevos en agua y pélalos. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "ac_huevo_duro_cocido"
  },
  "p2_m4": {
    "name": "Yogur griego con proteína y nueces",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "calories": 351.9,
    "protein": 31.41,
    "carbs": 7.140000000000001,
    "fats": 21.75,
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
        "quantity": "150",
        "unit": "g",
        "calories": 88.5,
        "protein": 15.0,
        "carbs": 5.4,
        "fats": 0.6,
        "baseCalories": 0.59,
        "baseProtein": 0.1,
        "baseCarbs": 0.036000000000000004,
        "baseFats": 0.004,
        "nutritionReference": "Estimación yogur griego desnatado alto en proteína; confirmar etiqueta"
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "15",
        "unit": "g",
        "calories": 57.0,
        "protein": 12.0,
        "carbs": 0.75,
        "fats": 0.6,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "nutritionReference": "Referencia whey_protein del catálogo CRM; confirmar etiqueta"
      },
      {
        "name": "Nueces",
        "quantity": "30",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-879 Walnuts, kernel only",
        "baseCalories": 6.88,
        "baseProtein": 0.147,
        "baseCarbs": 0.033,
        "baseFats": 0.685,
        "calories": 206.4,
        "protein": 4.41,
        "carbs": 0.99,
        "fats": 20.55
      }
    ],
    "preparation": "Mezcla el yogur con la proteína en polvo y añade las nueces. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "des_yogur_griego_desnatado_con_protena_en_polvo"
  },
  "p3_m0": {
    "name": "Tostada de pavo, queso fresco y aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff33e819fcc7a1a8d946.png",
    "calories": 494.25,
    "protein": 33.7,
    "carbs": 32.8,
    "fats": 25.2,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "50",
        "unit": "g",
        "nutritionReference": "Estimación pan de centeno; pesar en gramos; confirmar etiqueta de la marca",
        "baseCalories": 2.59,
        "baseProtein": 0.085,
        "baseCarbs": 0.483,
        "baseFats": 0.033,
        "calories": 129.5,
        "protein": 4.25,
        "carbs": 24.15,
        "fats": 1.6500000000000001
      },
      {
        "name": "Fiambre de Pavo",
        "quantity": "80",
        "unit": "g",
        "nutritionReference": "Estimación fiambre de pavo; confirmar etiqueta",
        "baseCalories": 1.05,
        "baseProtein": 0.19,
        "baseCarbs": 0.03,
        "baseFats": 0.02,
        "calories": 84.0,
        "protein": 15.2,
        "carbs": 2.4,
        "fats": 1.6
      },
      {
        "name": "Queso de Burgos 0%",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "Estimación queso fresco Burgos 0%; confirmar etiqueta",
        "baseCalories": 0.67,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.002,
        "calories": 67.0,
        "protein": 12.0,
        "carbs": 4.0,
        "fats": 0.2
      },
      {
        "name": "Aguacate",
        "quantity": "125",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-386 Avocado, Hass, flesh only",
        "baseCalories": 1.71,
        "baseProtein": 0.018000000000000002,
        "baseCarbs": 0.018,
        "baseFats": 0.174,
        "calories": 213.75,
        "protein": 2.2500000000000004,
        "carbs": 2.25,
        "fats": 21.75
      }
    ],
    "preparation": "Tuesta el pan y añade el queso fresco, el aguacate y el fiambre de pavo. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado. El fiambre debe ser de pavo y no contener cerdo ni carne roja; revisa la etiqueta."
  },
  "p3_m1": {
    "name": "Ensalada con Pollo y Queso de Burgos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afdceb91eb360843d4a0b.png",
    "calories": 375.40000000000003,
    "protein": 50.5,
    "carbs": 15.75,
    "fats": 12.240000000000002,
    "ingredients": [
      {
        "name": "Canónigos",
        "quantity": "50",
        "unit": "g",
        "calories": 10.5,
        "protein": 1.0,
        "carbs": 0.75,
        "fats": 0.2,
        "baseCalories": 0.21,
        "baseProtein": 0.02,
        "baseCarbs": 0.015,
        "baseFats": 0.004,
        "nutritionReference": "Estimación canónigos frescos"
      },
      {
        "name": "Tomate",
        "quantity": "100",
        "unit": "g",
        "calories": 14.000000000000002,
        "protein": 0.5,
        "carbs": 3.0,
        "fats": 0.1,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 35.0,
        "protein": 1.0,
        "carbs": 8.0,
        "fats": 0.1,
        "baseCalories": 0.35,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Queso de Burgos 0%",
        "quantity": "100",
        "unit": "g",
        "calories": 67.0,
        "protein": 12.0,
        "carbs": 4.0,
        "fats": 0.2,
        "baseCalories": 0.67,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.002,
        "nutritionReference": "Estimación queso fresco Burgos 0%; confirmar etiqueta"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 159.0,
        "protein": 36.0,
        "carbs": 0.0,
        "fats": 1.6500000000000001,
        "baseCalories": 1.06,
        "baseProtein": 0.24,
        "baseCarbs": 0.0,
        "baseFats": 0.011000000000000001,
        "nutritionReference": "CoFID 2021 18-290 Chicken, light meat, raw"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "Cocina el pollo usando parte del aceite indicado. Mezcla con los canónigos, el tomate, la cebolla y el queso; aliña con el resto del aceite. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "cc_ensalada_con_pollo_y_queso_de_burgos"
  },
  "p3_m2": {
    "name": "Wok de Verduras con Salmón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "calories": 587.65,
    "protein": 43.125,
    "carbs": 13.425,
    "fats": 40.515,
    "ingredients": [
      {
        "name": "Tomate",
        "quantity": "75",
        "unit": "g",
        "calories": 10.500000000000002,
        "protein": 0.375,
        "carbs": 2.25,
        "fats": 0.075,
        "baseCalories": 0.14,
        "baseProtein": 0.005,
        "baseCarbs": 0.03,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-517 Tomatoes, standard, raw"
      },
      {
        "name": "Pimiento Rojo",
        "quantity": "75",
        "unit": "g",
        "calories": 15.75,
        "protein": 0.6,
        "carbs": 3.2249999999999996,
        "fats": 0.15,
        "baseCalories": 0.21,
        "baseProtein": 0.008,
        "baseCarbs": 0.043,
        "baseFats": 0.002,
        "nutritionReference": "CoFID 2021 13-524 Pepper, capsicum, red, raw"
      },
      {
        "name": "Pimiento Verde",
        "quantity": "75",
        "unit": "g",
        "calories": 11.25,
        "protein": 0.6,
        "carbs": 1.9500000000000002,
        "fats": 0.225,
        "baseCalories": 0.15,
        "baseProtein": 0.008,
        "baseCarbs": 0.026000000000000002,
        "baseFats": 0.003,
        "nutritionReference": "CoFID 2021 13-318 Peppers, capsicum, green, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "75",
        "unit": "g",
        "calories": 26.25,
        "protein": 0.75,
        "carbs": 6.0,
        "fats": 0.075,
        "baseCalories": 0.35,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Lomo de Salmón",
        "quantity": "200",
        "unit": "g",
        "calories": 434.0,
        "protein": 40.8,
        "carbs": 0.0,
        "fats": 30.0,
        "baseCalories": 2.17,
        "baseProtein": 0.204,
        "baseCarbs": 0.0,
        "baseFats": 0.15,
        "nutritionReference": "CoFID 2021 16-356 Salmon, farmed, flesh only, raw"
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "10",
        "unit": "g",
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "Saltea las verduras y cocina el salmón usando únicamente el aceite indicado; sirve juntos. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "cc_wok_de_verduras_con_salmn"
  },
  "p3_m3": {
    "name": "Yogur griego con anacardos y proteína",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "calories": 298.4,
    "protein": 28.31,
    "carbs": 11.330000000000002,
    "fats": 15.46,
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
        "quantity": "150",
        "unit": "g",
        "nutritionReference": "Estimación yogur griego desnatado alto en proteína; confirmar etiqueta",
        "baseCalories": 0.59,
        "baseProtein": 0.1,
        "baseCarbs": 0.036000000000000004,
        "baseFats": 0.004,
        "calories": 88.5,
        "protein": 15.0,
        "carbs": 5.4,
        "fats": 0.6
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "Referencia whey_protein del catálogo CRM; confirmar etiqueta",
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "calories": 38.0,
        "protein": 8.0,
        "carbs": 0.5,
        "fats": 0.4
      },
      {
        "name": "Anacardos",
        "quantity": "30",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-811 Cashew nuts, kernel only, plain",
        "baseCalories": 5.73,
        "baseProtein": 0.177,
        "baseCarbs": 0.18100000000000002,
        "baseFats": 0.48200000000000004,
        "calories": 171.9,
        "protein": 5.31,
        "carbs": 5.430000000000001,
        "fats": 14.46
      }
    ],
    "preparation": "Mezcla el yogur con la proteína y los anacardos. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado."
  },
  "p3_m4": {
    "name": "Kiwi",
    "image": "",
    "calories": 44.0,
    "protein": 0.8,
    "carbs": 8.6,
    "fats": 0.9000000000000001,
    "ingredients": [
      {
        "name": "Kiwi",
        "quantity": "100",
        "unit": "g",
        "nutritionReference": "CoFID 2021 14-371 Kiwi fruit, flesh only, raw",
        "baseCalories": 0.44,
        "baseProtein": 0.008,
        "baseCarbs": 0.086,
        "baseFats": 0.009000000000000001,
        "calories": 44.0,
        "protein": 0.8,
        "carbs": 8.6,
        "fats": 0.9000000000000001
      }
    ],
    "preparation": "Pela el kiwi y pesa la parte comestible. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado."
  },
  "p4_m0": {
    "name": "Tostada de salmon ahumado y queso crema",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b512ae277ba07965ecc3bf.png",
    "calories": 533.0,
    "protein": 33.46,
    "carbs": 50.519999999999996,
    "fats": 21.8,
    "ingredients": [
      {
        "name": "Pan de Centeno",
        "quantity": "100",
        "unit": "g",
        "calories": 259.0,
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
        "calories": 184.0,
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
        "quantity": "40",
        "unit": "g",
        "calories": 90.0,
        "protein": 2.16,
        "carbs": 1.7199999999999998,
        "fats": 8.4,
        "baseCalories": 2.25,
        "baseProtein": 0.054000000000000006,
        "baseCarbs": 0.043,
        "baseFats": 0.21,
        "nutritionReference": "Estimación queso crema natural; confirmar etiqueta de la marca"
      }
    ],
    "preparation": "Tuesta el pan, unta el queso crema y añade el salmón ahumado. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "des_tostada_de_salmon_ahumado_y_queso_crema"
  },
  "p4_m1": {
    "name": "Falso Risotto de Coliflor con Pollo y Setas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cee78c174d4e6d420b9d.png",
    "calories": 343.90000000000003,
    "protein": 46.0,
    "carbs": 12.55,
    "fats": 12.515000000000002,
    "ingredients": [
      {
        "name": "Coliflor",
        "quantity": "100",
        "unit": "g",
        "calories": 30.0,
        "protein": 2.5,
        "carbs": 4.4,
        "fats": 0.4,
        "baseCalories": 0.3,
        "baseProtein": 0.025,
        "baseCarbs": 0.044000000000000004,
        "baseFats": 0.004,
        "nutritionReference": "CoFID 2021 13-512 Cauliflower, raw"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "175",
        "unit": "g",
        "calories": 185.5,
        "protein": 42.0,
        "carbs": 0.0,
        "fats": 1.9250000000000003,
        "baseCalories": 1.06,
        "baseProtein": 0.24,
        "baseCarbs": 0.0,
        "baseFats": 0.011000000000000001,
        "nutritionReference": "CoFID 2021 18-290 Chicken, light meat, raw"
      },
      {
        "name": "Champiñones",
        "quantity": "50",
        "unit": "g",
        "calories": 3.5000000000000004,
        "protein": 0.5,
        "carbs": 0.15,
        "fats": 0.1,
        "baseCalories": 0.07,
        "baseProtein": 0.01,
        "baseCarbs": 0.003,
        "baseFats": 0.002,
        "nutritionReference": "CoFID 2021 13-505 Mushrooms, white, raw"
      },
      {
        "name": "Cebolla",
        "quantity": "100",
        "unit": "g",
        "calories": 35.0,
        "protein": 1.0,
        "carbs": 8.0,
        "fats": 0.1,
        "baseCalories": 0.35,
        "baseProtein": 0.01,
        "baseCarbs": 0.08,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-499 Onions, raw"
      },
      {
        "name": "Aceite de Oliva Virgen",
        "quantity": "10",
        "unit": "g",
        "nutritionReference": "CoFID 2021 17-038 Oil, olive",
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "calories": 89.9,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 9.990000000000002
      }
    ],
    "preparation": "Saltea el pollo, la coliflor, los champiñones y la cebolla usando únicamente el aceite indicado. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado.",
    "originalBaseRecipeId": "cc_falso_risotto_de_coliflor_con_pollo_y_setas"
  },
  "p4_m2": {
    "name": "Pizza de pollo y pavo con mozzarella light",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b51257bfc81f59120b3a5a.png",
    "calories": 622.5,
    "protein": 68.9,
    "carbs": 55.1,
    "fats": 13.3,
    "ingredients": [
      {
        "name": "Masa de Cereales",
        "quantity": "100",
        "unit": "g",
        "calories": 270.0,
        "protein": 8.0,
        "carbs": 48.0,
        "fats": 4.5,
        "baseCalories": 2.7,
        "baseProtein": 0.08,
        "baseCarbs": 0.48,
        "baseFats": 0.045,
        "nutritionReference": "Estimación masa de pizza de cereales; confirmar etiqueta"
      },
      {
        "name": "Tomate Frito",
        "quantity": "50",
        "unit": "g",
        "calories": 40.0,
        "protein": 0.6,
        "carbs": 4.0,
        "fats": 2.25,
        "baseCalories": 0.8,
        "baseProtein": 0.012,
        "baseCarbs": 0.08,
        "baseFats": 0.045,
        "nutritionReference": "Estimación salsa tomate frito; confirmar etiqueta"
      },
      {
        "name": "Mozzarella Light",
        "quantity": "50",
        "unit": "g",
        "calories": 80.0,
        "protein": 11.0,
        "carbs": 1.0,
        "fats": 3.5000000000000004,
        "baseCalories": 1.6,
        "baseProtein": 0.22,
        "baseCarbs": 0.02,
        "baseFats": 0.07,
        "nutritionReference": "Estimación mozzarella light; confirmar etiqueta"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 159.0,
        "protein": 36.0,
        "carbs": 0.0,
        "fats": 1.6500000000000001,
        "baseCalories": 1.06,
        "baseProtein": 0.24,
        "baseCarbs": 0.0,
        "baseFats": 0.011000000000000001,
        "nutritionReference": "CoFID 2021 18-290 Chicken, light meat, raw"
      },
      {
        "name": "Fiambre de Pavo",
        "quantity": "70",
        "unit": "g",
        "calories": 73.5,
        "protein": 13.3,
        "carbs": 2.1,
        "fats": 1.4000000000000001,
        "baseCalories": 1.05,
        "baseProtein": 0.19,
        "baseCarbs": 0.03,
        "baseFats": 0.02,
        "nutritionReference": "Estimación fiambre de pavo; confirmar etiqueta"
      }
    ],
    "preparation": "Extiende la masa, añade el tomate y la mozzarella. Cocina el pollo sin aceite adicional, añádelo junto al fiambre de pavo y hornea hasta que quede bien cocinado. Usa las cantidades indicadas. Carnes, pescado fresco, patata, masa y cereales se pesan en crudo; conservas cocidas y escurridas; fruta y verduras en parte comestible. Aceite solo el indicado. El fiambre debe ser de pavo y no contener cerdo ni carne roja; revisa la etiqueta."
  }
};
const dailyMenus = [
  {
    "name": "Entreno 1",
    "targetMacros": {
      "calories": 1800,
      "protein": 140,
      "carbs": 154,
      "fats": 71
    },
    "baselineTotals": {
      "calories": 1799.75,
      "protein": 142.035,
      "carbs": 154.145,
      "fats": 70.625
    },
    "desayuno": [
      "p0_m0"
    ],
    "comida": [
      "p0_m1"
    ],
    "cena": [
      "p0_m2",
      "p0_m5"
    ],
    "extra": [
      "p0_m3",
      "p0_m4"
    ]
  },
  {
    "name": "Entreno 2",
    "targetMacros": {
      "calories": 1800,
      "protein": 140,
      "carbs": 191,
      "fats": 57
    },
    "baselineTotals": {
      "calories": 1799.5,
      "protein": 138.99,
      "carbs": 190.535,
      "fats": 56.550000000000004
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
      "protein": 140,
      "carbs": 100,
      "fats": 95
    },
    "baselineTotals": {
      "calories": 1793.2,
      "protein": 139.51,
      "carbs": 99.69,
      "fats": 94.83
    },
    "desayuno": [
      "p2_m0"
    ],
    "comida": [
      "p2_m1"
    ],
    "cena": [
      "p2_m2",
      "p2_m3"
    ],
    "extra": [
      "p2_m4"
    ]
  },
  {
    "name": "Libre 2",
    "targetMacros": {
      "calories": 1800,
      "protein": 140,
      "carbs": 82,
      "fats": 94
    },
    "baselineTotals": {
      "calories": 1799.7,
      "protein": 156.435,
      "carbs": 81.905,
      "fats": 94.31500000000001
    },
    "desayuno": [
      "p3_m0",
      "p3_m4"
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
  },
  {
    "name": "EXTRAS",
    "targetMacros": {
      "calories": 1500,
      "protein": 140,
      "carbs": 118,
      "fats": 48
    },
    "baselineTotals": {
      "calories": 1499.4,
      "protein": 148.36,
      "carbs": 118.17,
      "fats": 47.615
    },
    "desayuno": [
      "p4_m0"
    ],
    "comida": [
      "p4_m1"
    ],
    "cena": [
      "p4_m2"
    ],
    "extra": []
  }
];
