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
    "name": "Revuelto de Huevos y Claras con Jamón",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5e1e819fcb589a8a30e.png",
    "calories": 393.4,
    "protein": 27.000000000000004,
    "carbs": 1.54,
    "fats": 31,
    "ingredients": [
      {
        "name": "Huevos",
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
      },
      {
        "name": "Claras de Huevo",
        "quantity": "3",
        "unit": "unidad(es)",
        "calories": 139.5,
        "protein": 11.700000000000001,
        "carbs": 0.9900000000000001,
        "fats": 9.9,
        "baseCalories": 46.5,
        "baseProtein": 3.9000000000000004,
        "baseCarbs": 0.33,
        "baseFats": 3.3000000000000003
      },
      {
        "name": "Jamón Serrano",
        "quantity": "40",
        "unit": "g",
        "calories": 88,
        "protein": 8.8,
        "carbs": 0,
        "fats": 5.6000000000000005,
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
    "preparation": "1. Batir los huevos y las claras. 2. Cortar el jamón en taquitos o tiras. 3. Saltear ligeramente el jamón en una sartén con una pizca de aceite (opcional). 4. Verter la mezcla de huevo y remover constantemente a fuego medio-bajo hasta que cuaje al gusto.",
    "originalBaseRecipeId": "des_revuelto_de_huevos_y_claras_con_jamn",
    "isSideDish": false
  },
  "p0_m1": {
    "name": "Pan de Centeno",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879305ee8df5478eb937c5e.png",
    "calories": 162,
    "protein": 5.3999999999999995,
    "carbs": 30,
    "fats": 1.7999999999999998,
    "ingredients": [
      {
        "name": "Pan de Centeno",
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
      }
    ],
    "preparation": "1. Cortar una rebanada de pan de centeno o intengral y acompañar con otra comida.",
    "originalBaseRecipeId": "ext_pan_de_centeno",
    "isSideDish": false
  },
  "p0_m2": {
    "name": "Yogur Protéico con Frutos Rojos y Secos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afea2b91eb35e413d4ab6.png",
    "calories": 415,
    "protein": 15.75,
    "carbs": 37,
    "fats": 22.1,
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
    "originalBaseRecipeId": "ext_yogur_protico_con_frutos_rojos_y_secos",
    "isSideDish": false
  },
  "p0_m3": {
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
  "p0_m4": {
    "name": "Wrap de pollo hervido con verduras y arroz",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684ef7e26202d54cb0de24e8.png",
    "calories": 604,
    "protein": 49.5,
    "carbs": 78.75,
    "fats": 8.05,
    "ingredients": [
      {
        "name": "Pechuga de Pollo",
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
      },
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
  "p1_m0": {
    "name": "Musakka de Patata al horno con verduras y carne picada",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efda5653a2c17a7172d67.png",
    "calories": 739.9,
    "protein": 44.9,
    "carbs": 52.05,
    "fats": 37.45,
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
    "preparation": "1. Precalentar el horno a 180°C. Pelar y cortar las patatas en rodajas finas (aproximadamente 0.5 cm). Cortar la berenjena en rodajas similares. Picar la cebolla. 2. En una sartén, calentar aceite y sofreír la cebolla hasta que esté blanda. Añadir la carne picada mixta y cocinar hasta que se dore. Escurrir el exceso de grasa. Incorporar tomate frito, sal, pimienta y orégano. Cocinar unos minutos. 3. En una fuente para horno, montar la musakka: colocar una capa de rodajas de patata en el fondo, luego una capa de rodajas de berenjena, y encima una capa de la mezcla de carne. Repetir las capas hasta terminar con una capa de patata o berenjena. 4. Opcional: cubrir con salsa bechamel y espolvorear con queso rallado. 5. Hornear durante 40-50 minutos, o hasta que las patatas y berenjenas estén tiernas y la superficie dorada. Dejar reposar unos minutos antes de servir.",
    "originalBaseRecipeId": "cc_musakka_de_patata_al_horno_con_verduras_y_carne_picada",
    "isSideDish": false
  },
  "p1_m1": {
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
  "p1_m2": {
    "name": "Tostada de Pan de Centeno con Revuelto de Huevos y Jamón York",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687d09e04d6fb7f271b84cc9.png",
    "calories": 296.5,
    "protein": 18.799999999999997,
    "carbs": 16.75,
    "fats": 17.2,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "1",
        "unit": "rebanada(s)",
        "gramsPerUnit": 30,
        "calories": 81,
        "protein": 2.6999999999999997,
        "carbs": 15,
        "fats": 0.8999999999999999,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.029999999999999995
      },
      {
        "name": "Huevos",
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
      },
      {
        "name": "Jamón York",
        "quantity": "60",
        "unit": "g",
        "calories": 138,
        "protein": 9.6,
        "carbs": 1.2,
        "fats": 10.799999999999999,
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
  "p1_m3": {
    "name": "Poke de aguacate, mango, tomate, soja, cebolla, arroz and pollo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efa4ef6c48db833a5b1af.png",
    "calories": 720.9,
    "protein": 54.25000000000001,
    "carbs": 57,
    "fats": 29.4,
    "ingredients": [
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
        "name": "Mango",
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
        "baseFats": 0.02
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
    "preparation": "1. Cocer el arroz (preferiblemente de sushi o grano corto siguiendo las instrucciones del paquete) y dejar enfriar. 2. Cocinar la pechuga de pollo (hervida, a la plancha o al vapor) y cortarla en dados. Dejar enfriar. 3. Cortar el aguacate y el mango en dados. Picar el tomate en dados pequeños y la cebolla (preferiblemente morada) en juliana fina o brunoise. 4. Para el aliño, mezclar en un cuenco salsa de soja, un chorrito de aceite de sésamo, zumo de lima o limón y opcionalmente un poco de jengibre rallado y miel o sirope de agave. 5. En un bol individual, colocar una base de arroz. Disponer encima de forma separada y estética: el pollo, aguacate, mango, tomate y cebolla. 6. Rociar generosamente con el aliño justo antes de servir. Opcional: espolvorear con semillas de sésamo tostadas o furikake.",
    "originalBaseRecipeId": "cc_poke_de_aguacate_mango_tomate_soja_cebolla_arroz_and_pollo",
    "isSideDish": false
  },
  "p2_m0": {
    "name": "Tortitas de Avena con Frutos Rojos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5d9e819fce58fa8a30c.png",
    "calories": 472,
    "protein": 25.7,
    "carbs": 55.54,
    "fats": 16.720000000000002,
    "ingredients": [
      {
        "name": "Harina de Avena",
        "quantity": "60",
        "unit": "g",
        "calories": 219,
        "protein": 7.199999999999999,
        "carbs": 45,
        "fats": 1.2,
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Claras de Huevo",
        "quantity": "3",
        "unit": "unidad(es)",
        "gramsPerUnit": 30,
        "calories": 139.5,
        "protein": 11.700000000000001,
        "carbs": 0.9900000000000001,
        "fats": 9.9,
        "baseCalories": 1.55,
        "baseProtein": 0.13,
        "baseCarbs": 0.011000000000000001,
        "baseFats": 0.11
      },
      {
        "name": "Huevo",
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
      }
    ],
    "preparation": "1. Mezclar la harina de avena, claras de huevo, y huevo entero (si se usa) con un poco de leche o bebida vegetal hasta obtener una masa homogénea. 2. Cocinar las tortitas en una sartén antiadherente caliente por ambos lados hasta que estén doradas. 3. Servir con los frutos rojos por encima.",
    "originalBaseRecipeId": "des_tortitas_de_avena_con_frutos_rojos",
    "isSideDish": false
  },
  "p2_m1": {
    "name": "Yogur Protéico con Frutos Rojos y Secos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afea2b91eb35e413d4ab6.png",
    "calories": 290,
    "protein": 9.5,
    "carbs": 24.5,
    "fats": 17.1,
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
    "originalBaseRecipeId": "ext_yogur_protico_con_frutos_rojos_y_secos",
    "isSideDish": false
  },
  "p2_m2": {
    "name": "Ensalada de garbanzos con verduras y queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ff252d3f16b5241c27c1e4.png",
    "calories": 512.5,
    "protein": 29.5,
    "carbs": 61.75,
    "fats": 15.450000000000001,
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
        "quantity": "50",
        "unit": "g",
        "calories": 50,
        "protein": 6,
        "carbs": 2,
        "fats": 2,
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
  "p2_m3": {
    "name": "Pimientos Salteados con Cebolla y Tomate Cherry.",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd7144d6fb7451eb7bbf9.png",
    "calories": 155.9,
    "protein": 4.5,
    "carbs": 11.25,
    "fats": 10.45,
    "ingredients": [
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
        "name": "Tomate Cherry",
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
    "preparation": "1. Lavar las verduras y cortarlas a láminas finas a lo largo. 2. Poner un poco de aceite en una sartén y saltear las verduras.",
    "originalBaseRecipeId": "pp_pimientos_salteados_con_cebolla_y_tomate_cherry",
    "isSideDish": false
  },
  "p2_m4": {
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
    "preparation": "1. Sazonar los filetes o rodajas de merluza con sal, pimienta y opcionalmente un poco de ajo en polvo o perejil picado. 2. Calentar una plancha o sartén antiadherente a fuego medio-alto con un chorrito de aceite de oliva virgen extra. 3. Cuando el aceite esté caliente, colocar la merluza en la plancha. Cocinar durante unos 3-5 minutos por cada lado, dependiendo del grosor del pescado, hasta que esté opaca, bien cocida por dentro y se desmenuce fácilmente con un tenedor. 4. Servir inmediatamente, opcionalmente con un chorrito de zumo de limón fresco por encima.",
    "originalBaseRecipeId": "ac_merluza_a_la_plancha",
    "isSideDish": false
  },
  "p3_m0": {
    "name": "Tostada de Centeno con Aguacate y Atún",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff33e819fcc7a1a8d946.png",
    "calories": 328,
    "protein": 25.3,
    "carbs": 19.5,
    "fats": 15.700000000000001,
    "ingredients": [
      {
        "name": "Tostada de Pan de Centeno",
        "quantity": "1",
        "unit": "rebanada(s)",
        "gramsPerUnit": 30,
        "calories": 81,
        "protein": 2.6999999999999997,
        "carbs": 15,
        "fats": 0.8999999999999999,
        "baseCalories": 2.7,
        "baseProtein": 0.09,
        "baseCarbs": 0.5,
        "baseFats": 0.029999999999999995
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
        "quantity": "70",
        "unit": "g",
        "calories": 112,
        "protein": 19.6,
        "carbs": 0,
        "fats": 2.8000000000000003,
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
  "p3_m1": {
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
  "p3_m2": {
    "name": "Fajitas de Pollo y Verduras",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcef0ed50608b742ff33.png",
    "calories": 586.4,
    "protein": 46.8,
    "carbs": 55,
    "fats": 17.799999999999997,
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
  "p3_m3": {
    "name": "Crema de Verduras Variadas",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/687cd68425d68cc771ebd10a.png",
    "calories": 117.5,
    "protein": 7,
    "carbs": 16.25,
    "fats": 2.45,
    "ingredients": [
      {
        "name": "Calabaza",
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
  "p3_m4": {
    "name": "Revuelto de Huevos con Espárragos Trigueros",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f019a532eaa9f6977a78c.png",
    "calories": 420.9,
    "protein": 24.5,
    "carbs": 11.65,
    "fats": 30.5,
    "ingredients": [
      {
        "name": "Espárragos Trigueros",
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
        "name": "Huevos",
        "quantity": "3",
        "unit": "unidad(es)",
        "calories": 232.5,
        "protein": 19.5,
        "carbs": 1.6500000000000001,
        "fats": 16.5,
        "baseCalories": 77.5,
        "baseProtein": 6.5,
        "baseCarbs": 0.55,
        "baseFats": 5.5
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
    "preparation": "1. Lavar los espárragos trigueros y cortar la parte inferior más dura del tallo. Trocear los espárragos en trozos de unos 2-3 cm. 2. Batir los huevos en un bol con una pizca de sal y pimienta. 3. Calentar un poco de aceite de oliva en una sartén a fuego medio. Añadir los espárragos troceados y saltear durante 3-5 minutos, o hasta que estén tiernos pero aún crujientes. 4. Verter los huevos batidos sobre los espárragos en la sartén. 5. Remover suavemente con una espátula, mezclando los huevos con los espárragos, hasta que los huevos estén cuajados al gusto. Servir caliente.",
    "originalBaseRecipeId": "ac_revuelto_de_huevos_con_esprragos_trigueros",
    "isSideDish": true
  },
  "p3_m5": {
    "name": "Queso Fresco Batido con Frutos Rojos y Miel",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6879302d02da47667d446b43.png",
    "calories": 290,
    "protein": 30.75,
    "carbs": 18.5,
    "fats": 10.5,
    "ingredients": [
      {
        "name": "Queso Fresco Batido",
        "quantity": "2",
        "unit": "unidad(es)",
        "calories": 250,
        "protein": 30,
        "carbs": 10,
        "fats": 10,
        "baseCalories": 125,
        "baseProtein": 15,
        "baseCarbs": 5,
        "baseFats": 5
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
      "p0_m0",
      "p0_m1"
    ],
    "comida": [
      "p0_m4"
    ],
    "cena": [
      "p0_m3"
    ],
    "extra": [
      "p0_m2"
    ]
  },
  {
    "name": "ENTRENO 2",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
    },
    "desayuno": [
      "p1_m2"
    ],
    "comida": [
      "p1_m3"
    ],
    "cena": [
      "p1_m0"
    ],
    "extra": [
      "p1_m1"
    ]
  },
  {
    "name": "LIBRE 2",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
    },
    "desayuno": [
      "p2_m0"
    ],
    "comida": [
      "p2_m2"
    ],
    "cena": [
      "p2_m3",
      "p2_m4"
    ],
    "extra": [
      "p2_m1"
    ]
  },
  {
    "name": "FIN DE SEMANA",
    "targetMacros": {
      "calories": 1800,
      "protein": 150,
      "carbs": 150
    },
    "desayuno": [
      "p3_m0",
      "p3_m1"
    ],
    "comida": [
      "p3_m2"
    ],
    "cena": [
      "p3_m3",
      "p3_m4"
    ],
    "extra": [
      "p3_m5"
    ]
  }
];