// Titulo: INICIO 3
// Alergias: 
const foodDatabase = {
  "p0_m0": {
    "name": "Tostada de centeno con jamón ibérico",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6887226c7537da60484d071f.png",
    "calories": 200,
    "protein": 10,
    "carbs": 20.8,
    "fats": 8.4,
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
        "name": "Jamón Ibérico",
        "quantity": "40",
        "unit": "g",
        "calories": 92,
        "protein": 6.4,
        "carbs": 0.8,
        "fats": 7.2,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18,
        "category": "processed_protein"
      }
    ],
    "preparation": "1. Tostar el pan de centeno. 2. Colocar las lonchas de jamón ibérico por encima. Opcional: añadir un chorrito de aceite de oliva."
  },
  "p0_m1": {
    "name": "Ensalada de berenjena y tomate asado, queso y pollo con arroz",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684ef97c6202d51cbcde28c8.png",
    "calories": 708.8,
    "protein": 64.5,
    "carbs": 71.9,
    "fats": 15.6,
    "ingredients": [
      {
        "name": "Berenjena",
        "quantity": "200",
        "unit": "g",
        "calories": 60,
        "protein": 4,
        "carbs": 10,
        "fats": 0.4,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg"
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
        "name": "Queso de Cabra",
        "quantity": "30",
        "unit": "g",
        "calories": 105,
        "protein": 7.5,
        "carbs": 0.6,
        "fats": 7.5,
        "baseCalories": 3.5,
        "baseProtein": 0.25,
        "baseCarbs": 0.02,
        "baseFats": 0.25,
        "category": "cheese"
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04,
        "category": "lean_protein"
      },
      {
        "name": "Arroz",
        "quantity": "75",
        "unit": "g",
        "calories": 273.8,
        "protein": 9,
        "carbs": 56.3,
        "fats": 1.5,
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02,
        "category": "grain_carb_dry"
      }
    ],
    "preparation": "1. Precalentar el horno a 200°C. Cortar la berenjena en rodajas o dados y los tomates por la mitad o en cuartos. Rociar con aceite de oliva, salpimentar y asar durante 20-25 minutos o hasta que estén tiernos. 2. Cocinar la pechuga de pollo (a la plancha, asada o hervida) y cortarla en trozos o tiras. 3. Cocer el arroz según las instrucciones del paquete. Puede usarse caliente, tibio o frío. 4. Cortar el queso (tipo feta, mozzarella fresca, o el de preferencia) en dados. 5. En un bol grande, combinar el arroz, la berenjena y tomate asados, el pollo y el queso. 6. Aliñar con aceite de oliva virgen extra, vinagre balsámico (opcional) y hierbas frescas como albahaca u orégano. Mezclar suavemente."
  },
  "p0_m2": {
    "name": "Ensalada de garbanzos con verduras y queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68ff252d3f16b5241c27c1e4.png",
    "calories": 540,
    "protein": 31,
    "carbs": 57,
    "fats": 20.4,
    "ingredients": [
      {
        "name": "Garbanzos en Conserva",
        "quantity": "150",
        "unit": "g",
        "calories": 195,
        "protein": 12,
        "carbs": 33,
        "fats": 0.8,
        "baseCalories": 1.3,
        "baseProtein": 0.08,
        "baseCarbs": 0.22,
        "baseFats": 0.005,
        "category": "legume_carb_cooked"
      },
      {
        "name": "Aguacate",
        "quantity": "40",
        "unit": "g",
        "calories": 180,
        "protein": 4,
        "carbs": 6,
        "fats": 16,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "category": "solid_fat"
      },
      {
        "name": "Pepino",
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
        "name": "Espinacas",
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
        "name": "Queso de Burgos 0%",
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
        "category": "light_cheese"
      }
    ],
    "preparation": "1. Enjuagar los garbanzos y escurrirlos. 2. Picar el aguacate, pepino y tomates cherry. 3. Mezclar todos los ingredientes en un bol con las espinacas. 4. Cortar el queso de Burgos en dados y añadirlo a la ensalada. 5. Aliñar al gusto con aceite de oliva, vinagre y sal."
  },
  "p0_m3": {
    "name": "Yogur Griego Desnatado con Proteína en Polvo",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7efa6d27b18380fc8e8fd.png",
    "calories": 238,
    "protein": 45,
    "carbs": 9.5,
    "fats": 1.8,
    "ingredients": [
      {
        "name": "Yogur Griego Desnatado",
        "quantity": "200",
        "unit": "g",
        "calories": 124,
        "protein": 21,
        "carbs": 8,
        "fats": 0.6,
        "category": "protein_dairy",
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003
      },
      {
        "name": "Proteína en Polvo",
        "quantity": "30",
        "unit": "g",
        "calories": 114,
        "protein": 24,
        "carbs": 1.5,
        "fats": 1.2,
        "category": "whey_protein",
        "baseCalories": 3.8,
        "baseProtein": 0.8,
        "baseCarbs": 0.05,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Mezclar el yogur griego con la proteína en polvo en un bol hasta que esté bien integrado y sin grumos."
  },
  "p1_m0": {
    "name": "Pan wasa con Jamón dulce y Aguacate",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68cc568b05b71972b49f95e0.png",
    "calories": 199,
    "protein": 7.8,
    "carbs": 21.9,
    "fats": 8.8,
    "ingredients": [
      {
        "name": "Pan Wasa",
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
        "name": "Jamón Cocido",
        "quantity": "20",
        "unit": "g",
        "calories": 46,
        "protein": 3.2,
        "carbs": 0.4,
        "fats": 3.6,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18,
        "category": "processed_protein"
      },
      {
        "name": "Aguacate",
        "quantity": "10",
        "unit": "g",
        "calories": 45,
        "protein": 1,
        "carbs": 1.5,
        "fats": 4,
        "baseCalories": 4.5,
        "baseProtein": 0.1,
        "baseCarbs": 0.15,
        "baseFats": 0.4,
        "category": "solid_fat"
      }
    ],
    "preparation": "1. Untar el aguacate sobre el pan wasa. 2. Añadir el jamón dulce por encima."
  },
  "p1_m1": {
    "name": "Musakka de Patata al horno con verduras y carne picada",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efda5653a2c17a7172d67.png",
    "calories": 650,
    "protein": 51,
    "carbs": 35.8,
    "fats": 31.7,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": "100",
        "unit": "g",
        "calories": 90,
        "protein": 2,
        "carbs": 20,
        "fats": 0.1,
        "baseCalories": 0.9,
        "baseProtein": 0.02,
        "baseCarbs": 0.2,
        "baseFats": 0.001,
        "category": "tuber_carb"
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
        "name": "Berenjena",
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
        "name": "Tomate Frito",
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
        "baseFats": 0.25,
        "category": "cheese"
      },
      {
        "name": "Carne Picada Mixta (Ternera y Cerdo)",
        "quantity": "150",
        "unit": "g",
        "calories": 330,
        "protein": 33,
        "carbs": 0,
        "fats": 21,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14,
        "category": "fatty_protein"
      }
    ],
    "preparation": "1. Precalentar el horno a 180°C. Pelar y cortar las patatas en rodajas finas (aproximadamente 0.5 cm). Cortar la berenjena en rodajas similares. Picar la cebolla. 2. En una sartén, calentar aceite y sofreír la cebolla hasta que esté blanda. Añadir la carne picada mixta y cocinar hasta que se dore. Escurrir el exceso de grasa. Incorporar tomate frito, sal, pimienta y orégano. Cocinar unos minutos. 3. En una fuente para horno, montar la musakka: colocar una capa de rodajas de patata en el fondo, luego una capa de rodajas de berenjena, y encima una capa de la mezcla de carne. Repetir las capas hasta terminar con una capa de patata o berenjena. 4. Opcional: cubrir con salsa bechamel y espolvorear con queso rallado. 5. Hornear durante 40-50 minutos, o hasta que las patatas y berenjenas estén tiernas y la superficie dorada. Dejar reposar unos minutos antes de servir."
  },
  "p1_m2": {
    "name": "Ensalada con Pollo y Queso de Burgos",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afdceb91eb360843d4a0b.png",
    "calories": 430,
    "protein": 60,
    "carbs": 19,
    "fats": 10.6,
    "ingredients": [
      {
        "name": "Canónigos",
        "quantity": "100",
        "unit": "g",
        "calories": 30,
        "protein": 2,
        "carbs": 5,
        "fats": 0.2,
        "category": "default_veg",
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
        "category": "default_veg",
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
        "category": "default_veg",
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
        "category": "light_cheese",
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04
      },
      {
        "name": "Pechuga de Pollo",
        "quantity": "150",
        "unit": "g",
        "calories": 240,
        "protein": 42,
        "carbs": 0,
        "fats": 6,
        "category": "lean_protein",
        "baseCalories": 1.6,
        "baseProtein": 0.28,
        "baseCarbs": 0,
        "baseFats": 0.04
      }
    ],
    "preparation": "1. Cocinar la pechuga de pollo (a la plancha, hervida o asada) y cortarla en tiras o dados. 2. Lavar los canónigos y escurrirlos bien. Cortar los tomates (cherry por la mitad, o normales en gajos) y la cebolla en rodajas finas o juliana. Cortar el queso de Burgos 0% en dados o láminas. 3. En un bol o plato grande, disponer una base de canónigos. Añadir encima el tomate, la cebolla, el pollo y el queso de Burgos. 4. Aliñar con aceite de oliva virgen extra, vinagre (de manzana o Módena) y sal al gusto."
  },
  "p1_m3": {
    "name": "Yogur Proteico con Cereales de Avena",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7ef66df76fef1b58db3f2.png",
    "calories": 441,
    "protein": 31.1,
    "carbs": 74,
    "fats": 2.5,
    "ingredients": [
      {
        "name": "Yogur Protéico",
        "quantity": "200",
        "unit": "g",
        "calories": 124,
        "protein": 21,
        "carbs": 8,
        "fats": 0.6,
        "baseCalories": 0.62,
        "baseProtein": 0.105,
        "baseCarbs": 0.04,
        "baseFats": 0.003,
        "category": "protein_dairy"
      },
      {
        "name": "Cereales de Avena",
        "quantity": "80",
        "unit": "g",
        "calories": 292,
        "protein": 9.6,
        "carbs": 60,
        "fats": 1.6,
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
    "name": "Fajita/Wrap de Jamón y Queso",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68a36fb52e34b733ba5c5630.png",
    "calories": 272.4,
    "protein": 10.4,
    "carbs": 21.6,
    "fats": 16,
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
        "name": "Jamón Cocido",
        "quantity": "20",
        "unit": "g",
        "calories": 46,
        "protein": 3.2,
        "carbs": 0.4,
        "fats": 3.6,
        "baseCalories": 2.3,
        "baseProtein": 0.16,
        "baseCarbs": 0.02,
        "baseFats": 0.18,
        "category": "processed_protein"
      },
      {
        "name": "Queso Havarti Light",
        "quantity": "30",
        "unit": "g",
        "calories": 30,
        "protein": 3.6,
        "carbs": 1.2,
        "fats": 1.2,
        "baseCalories": 1,
        "baseProtein": 0.12,
        "baseCarbs": 0.04,
        "baseFats": 0.04,
        "category": "light_cheese"
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
        "baseFats": 1,
        "category": "oil_fat"
      }
    ],
    "preparation": "1. Calentar la tortilla de fajita. 2. Añadir el jamón cocido y el queso. 3. Doblar y servir. 4. Opcional: añadir un chorrito de aceite de oliva."
  },
  "p2_m1": {
    "name": "Estofado de Lentejas con Verduras y Costilla",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cf648c174dc51742182c.png",
    "calories": 571.5,
    "protein": 44.1,
    "carbs": 59.3,
    "fats": 15.6,
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
        "baseFats": 0.005,
        "category": "legume_carb_cooked"
      },
      {
        "name": "Costilla de Cerdo",
        "quantity": "100",
        "unit": "g",
        "calories": 220,
        "protein": 22,
        "carbs": 0,
        "fats": 14,
        "baseCalories": 2.2,
        "baseProtein": 0.22,
        "baseCarbs": 0,
        "baseFats": 0.14,
        "category": "fatty_protein"
      },
      {
        "name": "Zanahoria",
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
        "name": "Ajo",
        "quantity": "5",
        "unit": "g",
        "calories": 1.5,
        "protein": 0.1,
        "carbs": 0.3,
        "fats": 0,
        "baseCalories": 0.3,
        "baseProtein": 0.02,
        "baseCarbs": 0.05,
        "baseFats": 0.002,
        "category": "default_veg"
      }
    ],
    "preparation": "1. Sofreír la costilla troceada hasta dorar. 2. Añadir las verduras picadas y pochar. 3. Añadir las lentejas (si son de bote, lavadas; si son secas, remojadas) y cubrir con agua/caldo. 4. Cocer hasta que todo esté tierno. Sazonar con laurel y pimentón."
  },
  "p2_m2": {
    "name": "Sopa de Pescado y Marisco",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6922cdd4f96c9c485a257968.png",
    "calories": 540,
    "protein": 88,
    "carbs": 10,
    "fats": 12.4,
    "ingredients": [
      {
        "name": "Merluza",
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
      },
      {
        "name": "Gambas",
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
      },
      {
        "name": "Almejas",
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
        "name": "Caldo de Pescado",
        "quantity": "100",
        "unit": "g",
        "calories": 0,
        "protein": 0,
        "carbs": 0,
        "fats": 0,
        "baseCalories": 0,
        "baseProtein": 0,
        "baseCarbs": 0,
        "baseFats": 0,
        "category": "free_food"
      }
    ],
    "preparation": "1. Sofreír pimiento y tomate. 2. Añadir caldo de pescado y llevar a ebullición. 3. Incorporar la merluza troceada y marisco limpio. Cocer 5-7 minutos hasta que el pescado esté listo y almejas abiertas."
  },
  "p2_m3": {
    "name": "Cereales de Trigo sin Azúcar",
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/68e7eff3a54d8879c640b271.png",
    "calories": 319.8,
    "protein": 12.4,
    "carbs": 61.1,
    "fats": 3.1,
    "ingredients": [
      {
        "name": "Cereales de Trigo",
        "quantity": "75",
        "unit": "g",
        "calories": 273.8,
        "protein": 9,
        "carbs": 56.3,
        "fats": 1.5,
        "category": "grain_carb_dry",
        "baseCalories": 3.65,
        "baseProtein": 0.12,
        "baseCarbs": 0.75,
        "baseFats": 0.02
      },
      {
        "name": "Leche",
        "quantity": "100",
        "unit": "g",
        "calories": 46,
        "protein": 3.4,
        "carbs": 4.8,
        "fats": 1.6,
        "category": "milk",
        "baseCalories": 0.46,
        "baseProtein": 0.034,
        "baseCarbs": 0.048,
        "baseFats": 0.016
      }
    ],
    "preparation": "1. Verter los cereales en un bol. 2. Añadir leche o bebida vegetal al gusto."
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
      "calories": 1686.8,
      "protein": 150.5,
      "carbs": 159.2,
      "fats": 46.2
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
      "calories": 1720,
      "protein": 149.9,
      "carbs": 150.7,
      "fats": 53.6
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
      "calories": 1703.7,
      "protein": 154.9,
      "carbs": 152,
      "fats": 47.1
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
  }
];
