// Titulo: Plan de Alimentación
// Alergias: no constan en la ficha CRM consultada.
// Ajuste 28/09/2026: días 1 y 2 ~2900 kcal, >300 g CH y máximo 160 g proteína; Lowcarb ~2300 kcal y <180 g CH.
// Valores estimados por cantidades: CoFID 2021, referencias de producto indicadas por ingrediente y catálogo CRM. Las marcas reales pueden variar.
// Se conservan las recetas solicitadas y sus repeticiones previas; no se ha rehecho el menú por variedad.
const foodDatabase = {
  "p0_m0": {
    "name": "Tostada de salmon ahumado y queso crema",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b512ae277ba07965ecc3bf.png",
    "calories": 555.5,
    "protein": 34.0,
    "carbs": 50.949999999999996,
    "fats": 23.9,
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
        "calories": 93.0,
        "protein": 15.75,
        "carbs": 6.0,
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
        "calories": 381.0,
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
  "p0_m2": {
    "name": "Pollo al curry thai con arroz",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684ef8924d606648e7332262.png",
    "calories": 1158.55,
    "protein": 47.735,
    "carbs": 159.15,
    "fats": 40.59,
    "ingredients": [
      {
        "name": "Pechuga de Pollo",
        "quantity": "125",
        "unit": "g",
        "calories": 132.5,
        "protein": 30.0,
        "carbs": 0.0,
        "fats": 1.3750000000000002,
        "baseCalories": 1.06,
        "baseProtein": 0.24,
        "baseCarbs": 0.0,
        "baseFats": 0.011000000000000001,
        "nutritionReference": "CoFID 2021 18-290 Chicken, light meat, raw"
      },
      {
        "name": "Leche de Coco",
        "quantity": "150",
        "unit": "g",
        "calories": 232.5,
        "protein": 2.0999999999999996,
        "carbs": 5.1000000000000005,
        "fats": 22.5,
        "baseCalories": 1.55,
        "baseProtein": 0.013999999999999999,
        "baseCarbs": 0.034,
        "baseFats": 0.15,
        "nutritionReference": "Referencia de producto: https://www.bluedragon.co.uk/products/coconut-milk ; usar leche de coco culinaria equivalente"
      },
      {
        "name": "Pasta de Curry",
        "quantity": "30",
        "unit": "g",
        "calories": 51.9,
        "protein": 0.66,
        "carbs": 3.5999999999999996,
        "fats": 3.5999999999999996,
        "baseCalories": 1.73,
        "baseProtein": 0.022000000000000002,
        "baseCarbs": 0.12,
        "baseFats": 0.12,
        "nutritionReference": "Referencia de producto: https://www.bluedragon.co.uk/products/thai-red-curry-paste ; confirmar etiqueta"
      },
      {
        "name": "Arroz Integral",
        "quantity": "175",
        "unit": "g",
        "calories": 582.75,
        "protein": 13.475,
        "carbs": 134.75,
        "fats": 2.625,
        "baseCalories": 3.33,
        "baseProtein": 0.077,
        "baseCarbs": 0.77,
        "baseFats": 0.015,
        "nutritionReference": "CoFID 2021 11-868 Rice, brown, wholegrain, raw"
      },
      {
        "name": "Zanahoria",
        "quantity": "100",
        "unit": "g",
        "calories": 34.0,
        "protein": 0.5,
        "carbs": 7.7,
        "fats": 0.4,
        "baseCalories": 0.34,
        "baseProtein": 0.005,
        "baseCarbs": 0.077,
        "baseFats": 0.004,
        "nutritionReference": "CoFID 2021 13-496 Carrots, old, raw"
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
    "preparation": "1. Cortar el pollo en trozos de bocado. Picar la cebolla y cortar la zanahoria en rodajas finas o bastones. 2. En una sartén grande o wok, calentar un poco de aceite y saltear la cebolla y zanahoria hasta que la cebolla esté transparente. 3. Añadir el pollo y cocinar hasta que se dore por todos lados. 4. Incorporar la pasta de curry thai (usar la cantidad indicada) y cocinar por 1 minuto, removiendo para que se impregnen los sabores. 5. Verter la leche de coco y llevar a ebullición suave. Reducir el fuego y cocinar a fuego lento durante 10-15 minutos, o hasta que el pollo esté tierno y la salsa haya espesado ligeramente. Sazonar con sal si es necesario. 6. Servir el pollo al curry caliente sobre una cama de arroz integral cocido. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "cc_pollo_al_curry_thai_con_arroz"
  },
  "p0_m3": {
    "name": "Musakka de Patata al horno con verduras y carne picada",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efda5653a2c17a7172d67.png",
    "calories": 632.525,
    "protein": 31.7975,
    "carbs": 66.5,
    "fats": 28.302500000000002,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "275",
        "unit": "g",
        "calories": 225.5,
        "protein": 5.225,
        "carbs": 53.9,
        "fats": 0.275,
        "baseCalories": 0.82,
        "baseProtein": 0.019,
        "baseCarbs": 0.196,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-489 Potatoes, old, raw, flesh only"
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
        "name": "Berenjena",
        "quantity": "100",
        "unit": "g",
        "calories": 15.0,
        "protein": 0.9000000000000001,
        "carbs": 2.2,
        "fats": 0.4,
        "baseCalories": 0.15,
        "baseProtein": 0.009000000000000001,
        "baseCarbs": 0.022000000000000002,
        "baseFats": 0.004,
        "nutritionReference": "CoFID 2021 13-161 Aubergine, raw"
      },
      {
        "name": "Tomate Frito",
        "quantity": "30",
        "unit": "g",
        "calories": 24.0,
        "protein": 0.36,
        "carbs": 2.4,
        "fats": 1.3499999999999999,
        "baseCalories": 0.8,
        "baseProtein": 0.012,
        "baseCarbs": 0.08,
        "baseFats": 0.045,
        "nutritionReference": "Estimación salsa tomate frito; confirmar etiqueta"
      },
      {
        "name": "Carne Picada Mixta (Ternera y Cerdo)",
        "quantity": "125",
        "unit": "g",
        "calories": 243.125,
        "protein": 24.3125,
        "carbs": 0.0,
        "fats": 16.1875,
        "baseCalories": 1.945,
        "baseProtein": 0.1945,
        "baseCarbs": 0.0,
        "baseFats": 0.1295,
        "nutritionReference": "CoFID 2021 mezcla 50% 18-469 y 50% 18-606, peso crudo"
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
    "preparation": "Precalentar el horno a 180 °C. Cortar patata y berenjena en rodajas finas y picar la cebolla. Sofreír la cebolla y la carne con el aceite indicado; añadir tomate frito y especias. Montar capas de patata, berenjena y carne en una fuente. Hornear hasta que la patata esté tierna y la carne totalmente cocinada, aproximadamente 40-50 minutos. Pesar patata y carne en crudo. Utilizar únicamente las cantidades indicadas; sin queso ni aceite adicionales.",
    "originalBaseRecipeId": "cc_musakka_de_patata_al_horno_con_verduras_y_carne_picada"
  },
  "p0_m4": {
    "name": "Batido Whey de Proteínas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f021af6c48d41b5a5c003.png",
    "calories": 57.0,
    "protein": 12.0,
    "carbs": 0.75,
    "fats": 0.6,
    "ingredients": [
      {
        "name": "Proteína Whey en Polvo",
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
      }
    ],
    "preparation": "Disolver los 15 g de proteína indicados en 200-300 ml de agua y agitar. No añadir leche ni otros ingredientes.",
    "originalBaseRecipeId": "ext_batido_whey_de_protenas"
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
        "calories": 131.0,
        "protein": 12.6,
        "carbs": 0.0,
        "fats": 9.0,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
      },
      {
        "name": "Jamón York",
        "quantity": "40",
        "unit": "g",
        "calories": 44.0,
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
    "calories": 259.0,
    "protein": 8.5,
    "carbs": 48.3,
    "fats": 3.3000000000000003,
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
      }
    ],
    "preparation": "Pesar los gramos de pan indicados y acompañar con la comida correspondiente; la cantidad no equivale necesariamente a una sola rebanada.",
    "originalBaseRecipeId": "ext_pan_de_centeno"
  },
  "p1_m3": {
    "name": "Pasta tricolor con pisto de verduras, y carne picada",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b50fe5fc5128125e8bc1e4.png",
    "calories": 986.65,
    "protein": 40.9,
    "carbs": 139.45,
    "fats": 32.44,
    "ingredients": [
      {
        "name": "Pasta Tricolor",
        "quantity": "175",
        "unit": "g",
        "calories": 596.75,
        "protein": 19.25,
        "carbs": 131.95,
        "fats": 2.8000000000000003,
        "baseCalories": 3.41,
        "baseProtein": 0.11,
        "baseCarbs": 0.754,
        "baseFats": 0.016,
        "nutritionReference": "CoFID 2021 11-717 Pasta shapes, coloured, flavoured, dried, raw"
      },
      {
        "name": "Pisto de Verduras",
        "quantity": "150",
        "unit": "g",
        "calories": 75.0,
        "protein": 1.9500000000000002,
        "carbs": 7.5,
        "fats": 3.4499999999999997,
        "baseCalories": 0.5,
        "baseProtein": 0.013000000000000001,
        "baseCarbs": 0.05,
        "baseFats": 0.023,
        "nutritionReference": "Estimación pisto sin aceite añadido; aceite contabilizado aparte"
      },
      {
        "name": "Carne Picada",
        "quantity": "100",
        "unit": "g",
        "calories": 225.0,
        "protein": 19.7,
        "carbs": 0.0,
        "fats": 16.2,
        "baseCalories": 2.25,
        "baseProtein": 0.19699999999999998,
        "baseCarbs": 0.0,
        "baseFats": 0.162,
        "nutritionReference": "CoFID 2021 18-469 Beef, mince, raw"
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
    "preparation": "1. Cocer la pasta. 2. Saltear la carne picada con el pisto. 3. Mezclar todo. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "cc_pasta_tricolor_con_pisto_de_verduras_y_carne_picada"
  },
  "p1_m4": {
    "name": "Patata con brócoli y pollo asado",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687de454838c601605b6e271.png",
    "calories": 475.9,
    "protein": 34.0,
    "carbs": 62.00000000000001,
    "fats": 11.990000000000002,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "300",
        "unit": "g",
        "calories": 245.99999999999997,
        "protein": 5.7,
        "carbs": 58.800000000000004,
        "fats": 0.3,
        "baseCalories": 0.82,
        "baseProtein": 0.019,
        "baseCarbs": 0.196,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 13-489 Potatoes, old, raw, flesh only"
      },
      {
        "name": "Brócoli",
        "quantity": "100",
        "unit": "g",
        "calories": 34.0,
        "protein": 4.3,
        "carbs": 3.2,
        "fats": 0.6,
        "baseCalories": 0.34,
        "baseProtein": 0.043,
        "baseCarbs": 0.032,
        "baseFats": 0.006,
        "nutritionReference": "CoFID 2021 13-502 Broccoli, green, raw"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "100",
        "unit": "g",
        "calories": 106.0,
        "protein": 24.0,
        "carbs": 0.0,
        "fats": 1.1,
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
    "preparation": "1. Cocer la patata y el brócoli al vapor o en agua hirviendo hasta que estén tiernos. 2. Cocinar la pechuga de pollo a la plancha o asada al horno, sazonada al gusto. 3. Servir la patata y el brócoli como base y colocar el pollo troceado por encima. Aliñar con aceite de oliva y especias si se desea. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "cc_patata_con_brcoli_y_pollo_asado"
  },
  "p1_m5": {
    "name": "Yogur Griego Desnatado con Proteína en Polvo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "calories": 141.25,
    "protein": 25.5,
    "carbs": 6.800000000000001,
    "fats": 1.1,
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
        "quantity": "175",
        "unit": "g",
        "calories": 103.25,
        "protein": 17.5,
        "carbs": 6.300000000000001,
        "fats": 0.7000000000000001,
        "baseCalories": 0.59,
        "baseProtein": 0.1,
        "baseCarbs": 0.036000000000000004,
        "baseFats": 0.004,
        "nutritionReference": "Estimación yogur griego desnatado alto en proteína; confirmar etiqueta"
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "10",
        "unit": "g",
        "calories": 38.0,
        "protein": 8.0,
        "carbs": 0.5,
        "fats": 0.4,
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04,
        "nutritionReference": "Referencia whey_protein del catálogo CRM; confirmar etiqueta"
      }
    ],
    "preparation": "1. Mezclar el yogur griego con la proteína en polvo en un bol hasta que esté bien integrado. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "ext_yogur_griego_desnatado_con_protena_en_polvo"
  },
  "p1_m6": {
    "name": "Fruta Densa (Plátano, Manzana)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "calories": 291.6,
    "protein": 4.32,
    "carbs": 73.08000000000001,
    "fats": 0.36,
    "ingredients": [
      {
        "name": "Plátano",
        "quantity": "3",
        "unit": "ud (120 g sin piel)",
        "calories": 291.6,
        "protein": 4.32,
        "carbs": 73.08000000000001,
        "fats": 0.36,
        "baseCalories": 97.2,
        "baseProtein": 1.44,
        "baseCarbs": 24.360000000000003,
        "baseFats": 0.12,
        "nutritionReference": "CoFID 2021 14-318 Bananas, flesh only"
      }
    ],
    "preparation": "Tomar los plátanos indicados; cada unidad equivale aproximadamente a 120 g sin piel.",
    "originalBaseRecipeId": "ext_fruta_densa_pltano_manzana"
  },
  "p2_m0": {
    "name": "Tostada de Centeno con Cottage y Pavo",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b669d75b89c7ceec966248.png",
    "calories": 507.0,
    "protein": 34.9,
    "carbs": 55.699999999999996,
    "fats": 16.1,
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
        "name": "Queso Cottage",
        "quantity": "200",
        "unit": "g",
        "calories": 206.0,
        "protein": 18.8,
        "carbs": 6.2,
        "fats": 12.0,
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
        "calories": 42.0,
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
  "p2_m1": {
    "name": "Fajita con Revuelto de Jamón Dulce",
    "image": "https://assets.cdn.filesafe.space/dikOTQ4DE3OClw85d5oB/media/69b51120eba48737da3f22f1.png",
    "calories": 582.4,
    "protein": 43.5,
    "carbs": 28.550000000000004,
    "fats": 33.24,
    "ingredients": [
      {
        "name": "Pan de Fajita",
        "quantity": "50",
        "unit": "g",
        "calories": 142.5,
        "protein": 3.9,
        "carbs": 26.950000000000003,
        "fats": 2.85,
        "baseCalories": 2.85,
        "baseProtein": 0.078,
        "baseCarbs": 0.539,
        "baseFats": 0.057,
        "nutritionReference": "CoFID 2021 11-925 Tortilla, wheat, soft"
      },
      {
        "name": "Jamón Dulce",
        "quantity": "80",
        "unit": "g",
        "calories": 88.0,
        "protein": 14.399999999999999,
        "carbs": 1.6,
        "fats": 2.4,
        "baseCalories": 1.1,
        "baseProtein": 0.18,
        "baseCarbs": 0.02,
        "baseFats": 0.03,
        "nutritionReference": "Estimación jamón cocido; confirmar etiqueta"
      },
      {
        "name": "Huevos",
        "quantity": "4",
        "unit": "ud (50 g comestibles)",
        "calories": 262.0,
        "protein": 25.2,
        "carbs": 0.0,
        "fats": 18.0,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
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
    "preparation": "1. Preparar un revuelto con los huevos y el jamón dulce. 2. Rellenar la fajita caliente. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "des_fajita_con_revuelto_de_jamn_dulce"
  },
  "p2_m2": {
    "name": "Berenjenas Rellenas de Pavo al Horno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cdf6e7de6638e2767e27.png",
    "calories": 596.9,
    "protein": 61.25,
    "carbs": 15.3,
    "fats": 32.04,
    "ingredients": [
      {
        "name": "Berenjena",
        "quantity": "150",
        "unit": "g",
        "calories": 22.5,
        "protein": 1.35,
        "carbs": 3.3000000000000003,
        "fats": 0.6,
        "baseCalories": 0.15,
        "baseProtein": 0.009000000000000001,
        "baseCarbs": 0.022000000000000002,
        "baseFats": 0.004,
        "nutritionReference": "CoFID 2021 13-161 Aubergine, raw"
      },
      {
        "name": "Carne Picada de Pavo",
        "quantity": "125",
        "unit": "g",
        "calories": 131.25,
        "protein": 28.25,
        "carbs": 0.0,
        "fats": 2.0,
        "baseCalories": 1.05,
        "baseProtein": 0.226,
        "baseCarbs": 0.0,
        "baseFats": 0.016,
        "nutritionReference": "CoFID 2021 18-350 Turkey, meat, average, raw"
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
        "name": "Tomate Frito",
        "quantity": "75",
        "unit": "g",
        "calories": 60.0,
        "protein": 0.9,
        "carbs": 6.0,
        "fats": 3.375,
        "baseCalories": 0.8,
        "baseProtein": 0.012,
        "baseCarbs": 0.08,
        "baseFats": 0.045,
        "nutritionReference": "Estimación salsa tomate frito; confirmar etiqueta"
      },
      {
        "name": "Queso Havarti Light",
        "quantity": "100",
        "unit": "g",
        "calories": 267.0,
        "protein": 30.0,
        "carbs": 0.0,
        "fats": 16.0,
        "baseCalories": 2.67,
        "baseProtein": 0.3,
        "baseCarbs": 0.0,
        "baseFats": 0.16,
        "nutritionReference": "Estimación Havarti light; confirmar etiqueta"
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
    "preparation": "1. Asar las berenjenas partidas por la mitad. Vaciar la carne. 2. Sofreír cebolla y carne de pavo. Añadir la carne de berenjena picada y tomate. 3. Rellenar las pieles, cubrir con queso y gratinar. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "cc_berenjenas_rellenas_de_pavo_al_horno"
  },
  "p2_m3": {
    "name": "Pan de Centeno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879305ee8df5478eb937c5e.png",
    "calories": 259.0,
    "protein": 8.5,
    "carbs": 48.3,
    "fats": 3.3000000000000003,
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
      }
    ],
    "preparation": "Pesar los gramos de pan indicados y acompañar con la comida correspondiente; la cantidad no equivale necesariamente a una sola rebanada.",
    "originalBaseRecipeId": "ext_pan_de_centeno"
  },
  "p2_m4": {
    "name": "Yogur Protéico con Frutos Rojos y Secos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afea2b91eb35e413d4ab6.png",
    "calories": 287.79999999999995,
    "protein": 20.905,
    "carbs": 15.68,
    "fats": 15.425,
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
      },
      {
        "name": "Frutos Rojos",
        "quantity": "80",
        "unit": "g",
        "calories": 36.0,
        "protein": 0.64,
        "carbs": 7.199999999999999,
        "fats": 0.32,
        "baseCalories": 0.45,
        "baseProtein": 0.008,
        "baseCarbs": 0.09,
        "baseFats": 0.004,
        "nutritionReference": "Estimación mezcla de frutos rojos sin azúcar"
      },
      {
        "name": "Frutos Secos",
        "quantity": "30",
        "unit": "g",
        "calories": 174.29999999999998,
        "protein": 7.140000000000001,
        "carbs": 3.4799999999999995,
        "fats": 14.73,
        "baseCalories": 5.81,
        "baseProtein": 0.23800000000000002,
        "baseCarbs": 0.11599999999999999,
        "baseFats": 0.491,
        "nutritionReference": "CoFID 2021 14-880 Nuts, mixed"
      }
    ],
    "preparation": "1. En un bol, verter el yogur proteico. 2. Añadir los frutos rojos frescos o descongelados. 3. Espolvorear con los frutos secos troceados por encima. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "ext_yogur_protico_con_frutos_rojos_y_secos"
  },
  "p2_m5": {
    "name": "Fruta Cítrica (Mandarina, Kiwi, Naranja...)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png",
    "calories": 68.8,
    "protein": 1.28,
    "carbs": 14.399999999999999,
    "fats": 0.32,
    "ingredients": [
      {
        "name": "Mandarina",
        "quantity": "2",
        "unit": "ud (80 g sin piel)",
        "calories": 68.8,
        "protein": 1.28,
        "carbs": 14.399999999999999,
        "fats": 0.32,
        "baseCalories": 34.4,
        "baseProtein": 0.64,
        "baseCarbs": 7.199999999999999,
        "baseFats": 0.16,
        "nutritionReference": "Estimación mandarina, parte comestible"
      }
    ],
    "preparation": "Pelar y tomar las mandarinas indicadas; la cantidad se refiere a la parte comestible.",
    "originalBaseRecipeId": "ext_fruta_ctrica_mandarina_kiwi_naranja"
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
        "calories": 131.0,
        "protein": 12.6,
        "carbs": 0.0,
        "fats": 9.0,
        "baseCalories": 65.5,
        "baseProtein": 6.3,
        "baseCarbs": 0.0,
        "baseFats": 4.5,
        "nutritionReference": "CoFID 2021 12-937 Eggs, chicken, whole, raw"
      },
      {
        "name": "Aguacate",
        "quantity": "200",
        "unit": "g",
        "calories": 342.0,
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
    "preparation": "1. Tostar el pan de centeno. 2. Cocinar los huevos al gusto (revueltos, pochados, a la plancha). 3. Machacar el aguacate sobre las tostadas y añadir aceite y especias. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "des_tostada_de_centeno_con_huevo_y_aguacate"
  },
  "p3_m1": {
    "name": "Ensalada de Lentejas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff5a365e949c0a73d706.png",
    "calories": 383.65000000000003,
    "protein": 30.15,
    "carbs": 41.375,
    "fats": 11.665000000000003,
    "ingredients": [
      {
        "name": "Lentejas Cocidas",
        "quantity": "175",
        "unit": "g",
        "calories": 161.0,
        "protein": 13.65,
        "carbs": 25.375,
        "fats": 1.2249999999999999,
        "baseCalories": 0.92,
        "baseProtein": 0.078,
        "baseCarbs": 0.145,
        "baseFats": 0.006999999999999999,
        "nutritionReference": "CoFID 2021 13-661 Lentils, green and brown, whole, dried, boiled in unsalted water"
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
        "quantity": "125",
        "unit": "g",
        "calories": 83.75,
        "protein": 15.0,
        "carbs": 5.0,
        "fats": 0.25,
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
    "preparation": "Escurrir las lentejas cocidas. Picar tomate y cebolla, añadir el queso fresco y aliñar con la cantidad de aceite indicada. Mezclar; no añadir aguacate ni otros ingredientes.",
    "originalBaseRecipeId": "pp_ensalada_de_lentejas"
  },
  "p3_m2": {
    "name": "Hamburguesa de Pavo-Pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcbc9b8ed3b6397cbb33.png",
    "calories": 289.9,
    "protein": 22.5,
    "carbs": 2.5,
    "fats": 21.240000000000002,
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
    "preparation": "1. Si la hamburguesa es casera a partir de carne picada, sazonar la carne con sal, pimienta, ajo en polvo y perejil picado (opcional) y formar la hamburguesa. 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con una gota de aceite de oliva. 3. Cocinar la hamburguesa durante 4-6 minutos por cada lado, o hasta que esté bien cocida por dentro y dorada por fuera. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "ac_hamburguesa_de_pavopollo"
  },
  "p3_m3": {
    "name": "Boniato asado con ensalada de tomate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efcd1f6c48df26aa5ba5b.png",
    "calories": 254.55,
    "protein": 4.99,
    "carbs": 60.555,
    "fats": 0.935,
    "ingredients": [
      {
        "name": "Boniato",
        "quantity": "225",
        "unit": "g",
        "calories": 195.75,
        "protein": 2.7,
        "carbs": 47.925,
        "fats": 0.675,
        "baseCalories": 0.87,
        "baseProtein": 0.012,
        "baseCarbs": 0.213,
        "baseFats": 0.003,
        "nutritionReference": "CoFID 2021 13-463 Sweet potato, raw, flesh only"
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
        "name": "Ajo",
        "quantity": "10",
        "unit": "g",
        "calories": 9.8,
        "protein": 0.79,
        "carbs": 1.6300000000000001,
        "fats": 0.06,
        "baseCalories": 0.98,
        "baseProtein": 0.079,
        "baseCarbs": 0.163,
        "baseFats": 0.006,
        "nutritionReference": "CoFID 2021 13-244 Garlic, raw"
      }
    ],
    "preparation": "Asar el boniato pesado en crudo. Preparar la ensalada de tomate, cebolla y ajo; aliñar con vinagre y sal, sin aceite adicional. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "pp_boniato_asado_con_ensalada_de_tomate"
  },
  "p3_m4": {
    "name": "Pechuga de Pavo a la Plancha",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f003ef6c48dfc43a5bdb3.png",
    "calories": 254.95,
    "protein": 48.8,
    "carbs": 0.0,
    "fats": 6.595000000000001,
    "ingredients": [
      {
        "name": "Pechuga de Pavo",
        "quantity": "200",
        "unit": "g",
        "calories": 210.0,
        "protein": 48.8,
        "carbs": 0.0,
        "fats": 1.6,
        "baseCalories": 1.05,
        "baseProtein": 0.244,
        "baseCarbs": 0.0,
        "baseFats": 0.008,
        "nutritionReference": "CoFID 2021 18-349 Turkey, light meat, raw"
      },
      {
        "name": "Aceite de Oliva Virgen Extra",
        "quantity": "5",
        "unit": "g",
        "calories": 44.95,
        "protein": 0.0,
        "carbs": 0.0,
        "fats": 4.995000000000001,
        "baseCalories": 8.99,
        "baseProtein": 0.0,
        "baseCarbs": 0.0,
        "baseFats": 0.9990000000000001,
        "nutritionReference": "CoFID 2021 17-038 Oil, olive"
      }
    ],
    "preparation": "1. Si los filetes de pechuga de pavo son muy gruesos, se pueden abrir tipo libro o golpear ligeramente para que tengan un grosor más uniforme y se cocinen mejor. 2. Sazonar los filetes de pavo con sal, pimienta y tus especias favoritas. 3. Calentar una plancha o sartén antiadherente a fuego medio-alto con una gota de aceite de oliva. 4. Cocinar la pechuga de pavo durante unos 3-4 minutos por cada lado, o hasta que esté dorada por fuera y completamente cocida por dentro. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más. Cereales, tubérculos y carnes se pesan en crudo; las lentejas se pesan ya cocidas y escurridas.",
    "originalBaseRecipeId": "ac_pechuga_de_pavo_a_la_plancha"
  },
  "p3_m5": {
    "name": "Queso Fresco Batido con Frutos Rojos y Miel",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879302d02da47667d446b43.png",
    "calories": 178.3,
    "protein": 19.77,
    "carbs": 24.54,
    "fats": 0.49,
    "ingredients": [
      {
        "name": "Queso Fresco Batido",
        "quantity": "250",
        "unit": "g",
        "calories": 122.5,
        "protein": 19.25,
        "carbs": 11.5,
        "fats": 0.25,
        "baseCalories": 0.49,
        "baseProtein": 0.077,
        "baseCarbs": 0.046,
        "baseFats": 0.001,
        "nutritionReference": "CoFID 2021 12-528 Fromage frais, virtually fat free, natural"
      },
      {
        "name": "Frutos Rojos",
        "quantity": "60",
        "unit": "g",
        "calories": 27.0,
        "protein": 0.48,
        "carbs": 5.3999999999999995,
        "fats": 0.24,
        "baseCalories": 0.45,
        "baseProtein": 0.008,
        "baseCarbs": 0.09,
        "baseFats": 0.004,
        "nutritionReference": "Estimación mezcla de frutos rojos sin azúcar"
      },
      {
        "name": "Miel Cruda",
        "quantity": "10",
        "unit": "g",
        "calories": 28.799999999999997,
        "protein": 0.04,
        "carbs": 7.640000000000001,
        "fats": 0.0,
        "baseCalories": 2.88,
        "baseProtein": 0.004,
        "baseCarbs": 0.764,
        "baseFats": 0.0,
        "nutritionReference": "CoFID 2021 17-050 Honey"
      }
    ],
    "preparation": "1. En un bol, verter el queso fresco. 2. Añadir los frutos rojos frescos o descongelados. 3. Echar la cantidad de miel acordada por encima. Usa únicamente las cantidades de la lista. Aceite total: el indicado, repartido entre las preparaciones; sin añadir más.",
    "originalBaseRecipeId": "ext_queso_fresco_batido_con_frutos_rojos_y_miel"
  },
  "p3_m6": {
    "name": "Frutos Secos (Mezcla)",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68525c0b1d27cfeb580a55f7.png",
    "calories": 181.5,
    "protein": 5.36,
    "carbs": 2.6700000000000004,
    "fats": 16.66,
    "ingredients": [
      {
        "name": "Anacardos",
        "quantity": "10",
        "unit": "g",
        "calories": 57.300000000000004,
        "protein": 1.77,
        "carbs": 1.8100000000000003,
        "fats": 4.82,
        "baseCalories": 5.73,
        "baseProtein": 0.177,
        "baseCarbs": 0.18100000000000002,
        "baseFats": 0.48200000000000004,
        "nutritionReference": "CoFID 2021 14-811 Cashew nuts, kernel only, plain"
      },
      {
        "name": "Almendras",
        "quantity": "10",
        "unit": "g",
        "calories": 55.4,
        "protein": 2.12,
        "carbs": 0.53,
        "fats": 4.99,
        "baseCalories": 5.54,
        "baseProtein": 0.212,
        "baseCarbs": 0.053,
        "baseFats": 0.499,
        "nutritionReference": "CoFID 2021 14-896 Almonds, whole kernels"
      },
      {
        "name": "Nueces",
        "quantity": "10",
        "unit": "g",
        "calories": 68.8,
        "protein": 1.47,
        "carbs": 0.33,
        "fats": 6.8500000000000005,
        "baseCalories": 6.88,
        "baseProtein": 0.147,
        "baseCarbs": 0.033,
        "baseFats": 0.685,
        "nutritionReference": "CoFID 2021 14-879 Walnuts, kernel only"
      }
    ],
    "preparation": "Tomar 10 g de anacardos, 10 g de almendras y 10 g de nueces: 30 g en total.",
    "originalBaseRecipeId": "ext_frutos_secos_mezcla"
  }
};

const dailyMenus = [
  {
    "name": "Día 1",
    "targetMacros": {
      "calories": 2900,
      "protein": 160,
      "carbs": 358.6,
      "fats": 102.1
    },
    "baselineTotals": {
      "calories": 2900.075,
      "protein": 152.5825,
      "carbs": 358.55,
      "fats": 102.1425
    },
    "desayuno": [
      "p0_m0",
      "p0_m1"
    ],
    "comida": [
      "p0_m2"
    ],
    "cena": [
      "p0_m3"
    ],
    "extra": [
      "p0_m4"
    ]
  },
  {
    "name": "Día 2",
    "targetMacros": {
      "calories": 2900,
      "protein": 160,
      "carbs": 406.8,
      "fats": 79.9
    },
    "baselineTotals": {
      "calories": 2900.0,
      "protein": 152.61,
      "carbs": 406.81,
      "fats": 79.88000000000001
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
      "calories": 2300,
      "protein": 150,
      "carbs": 177.9,
      "fats": 100.4
    },
    "baselineTotals": {
      "calories": 2301.9,
      "protein": 170.335,
      "carbs": 177.93,
      "fats": 100.42500000000001
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
      "p2_m4",
      "p2_m5"
    ]
  },
  {
    "name": "Lowcarb 2",
    "targetMacros": {
      "calories": 2300,
      "protein": 150,
      "carbs": 171.5,
      "fats": 113.9
    },
    "baselineTotals": {
      "calories": 2300.0,
      "protein": 154.145,
      "carbs": 171.465,
      "fats": 113.85000000000001
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
