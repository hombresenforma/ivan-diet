// Contenido para nutri-data.js

const foodCategories = {
    'carnes_aves': 'Carnes y Aves',
    'pescados_mariscos': 'Pescados y Mariscos',
    'verduras_hortalizas': 'Verduras y Hortalizas',
    'frutas': 'Frutas',
    'lacteos_alternativas': 'Lácteos y Alternativas',
    'huevos': 'Huevos',
    'legumbres': 'Legumbres',
    'cereales_granos_pan': 'Cereales, Granos y Pan',
    'frutos_secos_semillas': 'Frutos Secos y Semillas',
    'aceites_grasas': 'Aceites y Grasas',
    'bebidas': 'Bebidas',
    'otros': 'Otros (Suplementos, etc.)'
};

const foodDatabase = {
    // --- DESAYUNOS ---
    'des_tostada_aguacate_salmon': {
        id: 'des_tostada_aguacate_salmon', name: 'Tostada con Aguacate y Salmón',
        calories: 450, protein: 25, carbs: 35, fats: 22,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c659a4c330545f94d9b4.png',
        ingredients: [
            { name: 'Pan integral', quantity_grams: 80, category: 'cereales_granos_pan' },
            { name: 'Salmón ahumado', quantity_grams: 80, category: 'pescados_mariscos' },
            { name: 'Aguacate', quantity_grams: 50, category: 'frutas' }
        ],
        preparation: 'Tostar el pan, untar el aguacate machacado y colocar las lonchas de salmón encima.'
    },
    'des_tostada_aguacate_huevo': {
        id: 'des_tostada_aguacate_huevo', name: 'Tostada con Aguacate y Huevo',
        calories: 420, protein: 20, carbs: 35, fats: 22,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c659a4c330e70494d9b3.png',
        ingredients: [
            { name: 'Pan integral', quantity_grams: 80, category: 'cereales_granos_pan' },
            { name: 'Huevos', quantity_grams: 110, category: 'huevos' },
            { name: 'Aguacate', quantity_grams: 50, category: 'frutas' }
        ],
        preparation: 'Tostar el pan, untar el aguacate machacado y colocar los huevos cocidos (a la plancha o revueltos) encima.'
    },
    'des_revuelto_espinacas_champinones': {
        id: 'des_revuelto_espinacas_champinones', name: 'Revuelto de Espinacas y Champiñones',
        calories: 350, protein: 25, carbs: 10, fats: 25,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c659e9a4146a4da40c83.png',
        ingredients: [
            { name: 'Huevos', quantity_grams: 165, category: 'huevos' },
            { name: 'Espinacas frescas', quantity_grams: 100, category: 'verduras_hortalizas' },
            { name: 'Champiñones', quantity_grams: 100, category: 'verduras_hortalizas' },
            { name: 'Queso feta (opcional)', quantity_grams: 20, category: 'lacteos_alternativas' },
            { name: 'Aceite de oliva', quantity_grams: 5, category: 'aceites_grasas' }
        ],
        preparation: 'Saltear los champiñones y espinacas. Añadir los huevos batidos y remover hasta que cuajen. Añadir queso al final.'
    },
    'des_tortitas_avena_platano': {
        id: 'des_tortitas_avena_platano', name: 'Tortitas de Avena y Plátano',
        calories: 480, protein: 40, carbs: 60, fats: 10,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c65922c0694e9086119f.png',
        ingredients: [
            { name: 'Avena en copos', quantity_grams: 60, category: 'cereales_granos_pan' },
            { name: 'Plátano', quantity_grams: 100, category: 'frutas' },
            { name: 'Claras de huevo', quantity_grams: 150, category: 'huevos' },
            { name: 'Proteína en polvo', quantity_grams: 25, category: 'otros' }
        ],
        preparation: 'Triturar todos los ingredientes hasta obtener una masa homogénea. Cocinar en una sartén antiadherente.'
    },
    'des_porridge_proteico_frutos_secos': {
        id: 'des_porridge_proteico_frutos_secos', name: 'Porridge Proteico con Frutos Secos',
        calories: 500, protein: 40, carbs: 55, fats: 15,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c659e9a4140ba4a40c82.png',
        ingredients: [
            { name: 'Avena en copos', quantity_grams: 70, category: 'cereales_granos_pan' },
            { name: 'Proteína en polvo', quantity_grams: 30, category: 'otros' },
            { name: 'Leche o bebida vegetal', quantity_grams: 200, category: 'bebidas' },
            { name: 'Nueces o almendras', quantity_grams: 20, category: 'frutos_secos_semillas' }
        ],
        preparation: 'Cocinar la avena con la leche. Retirar del fuego y mezclar con la proteína. Servir con los frutos secos por encima.'
    },

    // --- COMIDAS/CENAS ---
    'cc_pollo_curry_arroz': {
        id: 'cc_pollo_curry_arroz', name: 'Pollo al Curry con Arroz',
        calories: 650, protein: 50, carbs: 70, fats: 18,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c6595bd4122045e7f14b.png',
        ingredients: [
            { name: 'Pechuga de pollo', quantity_grams: 200, category: 'carnes_aves' },
            { name: 'Arroz basmati (cocido)', quantity_grams: 180, category: 'cereales_granos_pan' },
            { name: 'Leche de coco light', quantity_grams: 100, category: 'otros' },
            { name: 'Verduras para curry (cebolla, pimiento)', quantity_grams: 100, category: 'verduras_hortalizas' }
        ],
        preparation: 'Saltear el pollo y las verduras. Añadir la pasta de curry y la leche de coco y cocinar a fuego lento. Servir con arroz.'
    },
    'cc_gnocchi_pesto_pollo': {
        id: 'cc_gnocchi_pesto_pollo', name: 'Gnocchis al Pesto con Pollo',
        calories: 680, protein: 45, carbs: 80, fats: 20,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c659160d5b430641b44b.png',
        ingredients: [
            { name: 'Gnocchis de patata', quantity_grams: 200, category: 'cereales_granos_pan' },
            { name: 'Pechuga de pollo', quantity_grams: 150, category: 'carnes_aves' },
            { name: 'Salsa Pesto', quantity_grams: 30, category: 'aceites_grasas' }
        ],
        preparation: 'Cocer los gnocchis. Saltear el pollo en dados. Mezclar los gnocchis, el pollo y el pesto.'
    },
    'cc_ensalada_burrata_jamon': {
        id: 'cc_ensalada_burrata_jamon', name: 'Ensalada de Burrata y Jamón',
        calories: 600, protein: 40, carbs: 20, fats: 42,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c6594d24177d544062f7.png',
        ingredients: [
            { name: 'Burrata', quantity_grams: 125, category: 'lacteos_alternativas' },
            { name: 'Jamón serrano', quantity_grams: 50, category: 'carnes_aves' },
            { name: 'Tomate seco en aceite', quantity_grams: 20, category: 'verduras_hortalizas' }
        ],
        preparation: 'Montar la ensalada con la base de verdes, la burrata, el jamón y los tomates secos.'
    },
    'cc_moussaka_casera': {
        id: 'cc_moussaka_casera', name: 'Moussaka Casera con Arroz',
        calories: 700, protein: 45, carbs: 65, fats: 30,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c65a04988772a08d0e74.png',
        ingredients: [
            { name: 'Carne picada de ternera', quantity_grams: 150, category: 'carnes_aves' },
            { name: 'Berenjena', quantity_grams: 200, category: 'verduras_hortalizas' },
            { name: 'Arroz (cocido)', quantity_grams: 150, category: 'cereales_granos_pan' }
        ],
        preparation: 'Hacer láminas de berenjena a la plancha. Preparar una boloñesa con la carne. Montar capas de berenjena y carne, y gratinar con queso. Servir con arroz.'
    },
    'cc_poke_bowl_pollo': {
        id: 'cc_poke_bowl_pollo', name: 'Poke Bowl de Pollo',
        calories: 620, protein: 45, carbs: 70, fats: 18,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c658a4c33027b494d9a8.png',
        ingredients: [
            { name: 'Arroz de sushi (cocido)', quantity_grams: 180, category: 'cereales_granos_pan' },
            { name: 'Pechuga de pollo', quantity_grams: 150, category: 'carnes_aves' },
            { name: 'Aguacate', quantity_grams: 50, category: 'frutas' },
            { name: 'Mango', quantity_grams: 50, category: 'frutas' }
        ],
        preparation: 'Colocar el arroz en la base de un bol. Añadir el resto de ingredientes cortados en dados por encima. Aliñar con salsa de soja.'
    },
    'cc_boniato_ensalada_pollo': {
        id: 'cc_boniato_ensalada_pollo', name: 'Boniato Asado con Ensalada y Pollo',
        calories: 550, protein: 45, carbs: 55, fats: 15,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c65a04988772ca8d0e76.png',
        ingredients: [
            { name: 'Boniato', quantity_grams: 250, category: 'verduras_hortalizas' },
            { name: 'Pechuga de pollo', quantity_grams: 150, category: 'carnes_aves' },
            { name: 'Ensalada de tomate', quantity_grams: 150, category: 'verduras_hortalizas' }
        ],
        preparation: 'Asar el boniato al horno. Cocinar el pollo a la plancha. Servir el boniato con el pollo y la ensalada.'
    },
    'cc_alcachofas_jamon_huevo': {
        id: 'cc_alcachofas_jamon_huevo', name: 'Alcachofas Salteadas con Jamón y Huevo',
        calories: 450, protein: 30, carbs: 15, fats: 30,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/6655c65a160d5b62b141b44d.png',
        ingredients: [
            { name: 'Corazones de alcachofa', quantity_grams: 200, category: 'verduras_hortalizas' },
            { name: 'Jamón serrano en tacos', quantity_grams: 60, category: 'carnes_aves' },
            { name: 'Huevo a la plancha', quantity_grams: 55, category: 'huevos' }
        ],
        preparation: 'Saltear las alcachofas y el jamón en una sartén. Servir con un huevo a la plancha encima.'
    },
    // NUEVA RECETA COMBINADA PARA LA CENA DEL DÍA 3
    'cc_hamb_ensalada_tomate': {
        id: 'cc_hamb_ensalada_tomate', name: 'Hamburguesa de Pavo-Pollo con Ensalada de Tomate',
        calories: 390, protein: 43, carbs: 15, fats: 18,
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcbc9b8ed3b6397cbb33.png', // Usando imagen de la hamburguesa
        ingredients: [
            { name: 'Carne picada de pavo y pollo', quantity_grams: 180, category: 'carnes_aves' },
            { name: 'Tomate', quantity_grams: 200, category: 'verduras_hortalizas' },
            { name: 'Cebolla', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Ajo (1 diente pequeño)', quantity_grams: 3, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva', quantity_grams: 7, category: 'aceites_grasas' }
        ],
        preparation: "1. Formar la hamburguesa y cocinar a la plancha. 2. Preparar una ensalada con el tomate, cebolla y ajo picado. 3. Servir la hamburguesa junto a la ensalada."
    },
    
    // --- EXTRAS ---
    'ext_frut_citr': {
        id: 'ext_frut_citr', name: 'Fruta Cítrica', 
        calories: 60, protein: 1, carbs: 15, fats: 0, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png',
        ingredients: [{ name: 'Naranja o Mandarina o Kiwi', quantity_grams: 150, category: 'frutas' }],
        preparation: "Pelar y consumir."
    },
    'ext_yog_pro_sabo': {
        id: 'ext_yog_pro_sabo', name: 'Yogur Protéico', 
        calories: 160, protein: 22, carbs: 12, fats: 2, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png',
        ingredients: [{ name: 'Yogur proteico (natural o sabores)', quantity_grams: 200, category: 'lacteos_alternativas' }],
        preparation: "Consumir directamente."
    },
    'ext_frut_dens': {
        id: 'ext_frut_dens', name: 'Fruta Densa', 
        calories: 100, protein: 1, carbs: 25, fats: 0, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png',
        ingredients: [{ name: 'Plátano o Manzana', quantity_grams: 120, category: 'frutas' }],
        preparation: "Pelar (si es necesario) y consumir."
    }
};

// =================================================================================
// MENÚS DIARIOS GENERADOS
// =================================================================================

const dailyMenus = [
    { 
        // DÍA 1: ENTRENAMIENTO
        // Objetivo: ~1750 kcal, 90-120g HC, 100-125g Proteína
        // Estimado: ~1760 kcal, P:121g, C:115g, F:88g
        name: "Día 1 - Entrenamiento",
        desayuno: [foodDatabase.des_tostada_aguacate_salmon], // Kcal:450, P:25, C:35, F:22
        comida: [foodDatabase.cc_gnocchi_pesto_pollo],      // Kcal:680, P:45, C:80, F:20
        cena: [foodDatabase.cc_alcachofas_jamon_huevo],      // Kcal:370, P:28, C:15, F:23 (Ajuste: menos aceite)
        extras: [foodDatabase.ext_yog_pro_sabo, foodDatabase.ext_frut_citr] // 160+60=220 Kcal, P:22+1=23, C:12+15=27, F:2+0=2
    },
    { 
        // DÍA 2: DESCANSO
        // Objetivo: ~1600 kcal, <80g HC, 100-125g Proteína
        // Estimado: ~1560 kcal, P:122, C:72, F:89
        name: "Día 2 - Descanso",
        desayuno: [foodDatabase.des_revuelto_espinacas_champinones], // Kcal:350, P:25, C:10, F:25
        comida: [foodDatabase.cc_ensalada_burrata_jamon],   // Kcal:600, P:40, C:20, F:42
        cena: [foodDatabase.cc_boniato_ensalada_pollo],      // Kcal:450, P:35, C:45, F:20 (Ajuste: porción más pequeña de boniato y pollo)
        extras: [foodDatabase.ext_yog_pro_sabo]              // Kcal:160, P:22, C:12, F:2
    },
    { 
        // DÍA 3: DESCANSO
        // Objetivo: ~1600 kcal, <80g HC, 100-125g Proteína
        // Estimado: ~1580 kcal, P:125, C:75, F:87
        name: "Día 3 - Descanso",
        desayuno: [foodDatabase.des_tostada_aguacate_huevo], // Kcal:420, P:20, C:35, F:22
        comida: [foodDatabase.cc_poke_bowl_pollo],         // Kcal:610, P:60, C:45, F:20 (Ajuste: menos arroz, más pollo)
        cena: [foodDatabase.cc_hamb_ensalada_tomate],        // Kcal:390, P:43, C:15, F:18
        extras: [foodDatabase.ext_yog_pro_sabo]              // Kcal:160, P:22, C:12, F:2
    }
];
