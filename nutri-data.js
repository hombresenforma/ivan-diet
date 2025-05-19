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
    // NUEVOS DESAYUNOS AJUSTADOS CON IMÁGENES ACTUALIZADAS
    'des_tostada_centeno_huevo_cottage_ajustado': {
        id: 'des_tostada_centeno_huevo_cottage_ajustado', name: 'Tostada de Centeno con Huevo y Cottage', calories: 427, protein: 39.4, carbs: 42.5, fats: 11.1, image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5cf9b8ed31c657c80e8.png',
        ingredients: [
            { name: 'Pan de centeno', quantity_grams: 80, category: 'cereales_granos_pan' },
            { name: 'Claras de huevo líquidas', quantity_grams: 100, category: 'huevos' },
            { name: 'Huevo entero', quantity_grams: 55, category: 'huevos' }, // 1 Huevo M
            { name: 'Queso Cottage 0% MG', quantity_grams: 120, category: 'lacteos_alternativas' },
            { name: 'Aguacate', quantity_grams: 20, category: 'frutas' }
        ],
        preparation: "1. Tostar el pan de centeno. 2. Preparar los huevos (revueltos con las claras o pochados). 3. Untar el queso cottage sobre las tostadas. 4. Colocar el aguacate laminado y los huevos encima. Sazonar al gusto."
    },
    'des_tortitas_avena_frutos_rojos_ajustado': {
        id: 'des_tortitas_avena_frutos_rojos_ajustado', name: 'Tortitas de Avena con Frutos Rojos y Nueces', calories: 569, protein: 52, carbs: 59.2, fats: 12.5, image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5d9e819fce58fa8a30c.png',
        ingredients: [
            { name: 'Avena en copos (o harina)', quantity_grams: 70, category: 'cereales_granos_pan' },
            { name: 'Claras de huevo líquidas', quantity_grams: 150, category: 'huevos' },
            { name: 'Proteína en polvo', quantity_grams: 30, category: 'otros' },
            { name: 'Frutos rojos mixtos', quantity_grams: 100, category: 'frutas' },
            { name: 'Nueces', quantity_grams: 10, category: 'frutos_secos_semillas' },
            { name: 'Leche de almendras s/a (opcional para la mezcla)', quantity_grams: 50, category: 'bebidas' }
        ],
        preparation: "1. Mezclar la avena (si es en copos, triturar primero para hacer harina), las claras, la proteína en polvo y la leche de almendras hasta obtener una masa homogénea. 2. Cocinar las tortitas en una sartén antiadherente a fuego medio. 3. Servir con los frutos rojos y las nueces por encima."
    },
    'des_revuelto_huevos_jamon_ajustado': {
        id: 'des_revuelto_huevos_jamon_ajustado', name: 'Revuelto de Huevos y Claras con Jamón y Tostada', calories: 533, protein: 56.5, carbs: 30.5, fats: 19.7, image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5e1e819fcb589a8a30e.png',
        ingredients: [
            { name: 'Huevo entero', quantity_grams: 110, category: 'huevos' }, // 2 Huevos M
            { name: 'Claras de huevo líquidas', quantity_grams: 150, category: 'huevos' },
            { name: 'Jamón serrano (limpio de grasa)', quantity_grams: 70, category: 'carnes_aves' },
            { name: 'Pan de centeno', quantity_grams: 60, category: 'cereales_granos_pan' },
            { name: 'Tomates cherry', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva virgen extra', quantity_grams: 3, category: 'aceites_grasas' }
        ],
        preparation: "1. Batir los huevos y las claras. 2. Calentar el aceite en una sartén y saltear el jamón en dados. 3. Verter los huevos batidos y remover hasta que cuajen al gusto. 4. Servir con el pan de centeno tostado y los tomates cherry."
    },

    // COMIDAS (sin cambios)
    'com_pollo_boniato_veg': {
        id: 'com_pollo_boniato_veg', name: 'Pollo al Horno con Boniato y Verduras', calories: 560, protein: 60, carbs: 40, fats: 18, image: 'https://placehold.co/100x100/374151/FACC15?text=Pollo+Horno',
        ingredients: [
            { name: 'Pechuga de pollo', quantity_grams: 180, category: 'carnes_aves' }, { name: 'Boniato (batata)', quantity_grams: 150, category: 'verduras_hortalizas' },
            { name: 'Brócoli', quantity_grams: 100, category: 'verduras_hortalizas' }, { name: 'Judías verdes', quantity_grams: 100, category: 'verduras_hortalizas' }, 
            { name: 'Aceite de oliva virgen extra', quantity_grams: 10, category: 'aceites_grasas' }
        ],
        preparation: "1. Precalentar horno a 200°C. 2. Cortar el boniato en dados y las verduras. 3. Sazonar el pollo y las verduras con aceite y especias al gusto. 4. Hornear el pollo y el boniato durante 20-25 min. Añadir las verduras a mitad de cocción o cocerlas al vapor aparte. Servir caliente."
    },
    'com_salmon_quinoa_esp': {
        id: 'com_salmon_quinoa_esp', name: 'Salmón a la Plancha con Quinoa y Espárragos', calories: 550, protein: 45, carbs: 30, fats: 28, image: 'https://placehold.co/100x100/374151/FACC15?text=Salmón+Quinoa',
        ingredients: [
            { name: 'Lomo de salmón fresco', quantity_grams: 160, category: 'pescados_mariscos' }, { name: 'Quinoa (cocida)', quantity_grams: 120, category: 'cereales_granos_pan' },
            { name: 'Espárragos trigueros', quantity_grams: 200, category: 'verduras_hortalizas' }, { name: 'Aceite de oliva virgen extra', quantity_grams: 8, category: 'aceites_grasas' }, 
            { name: 'Limón', quantity_grams: 20, category: 'frutas' }
        ],
        preparation: "1. Cocer la quinoa según instrucciones. 2. Salpimentar el salmón y cocinar a la plancha con un poco de aceite y eneldo (al gusto). 3. Saltear los espárragos a la plancha. 4. Servir el salmón con la quinoa y los espárragos. Aliñar con zumo de limón."
    },
    'com_ternera_mas_arroz_ens': { 
        id: 'com_ternera_mas_arroz_ens', name: 'Filete de Ternera con Más Arroz Integral y Ensalada', calories: 552, protein: 48, carbs: 51, fats: 18, image: 'https://placehold.co/100x100/374151/FACC15?text=Ternera+Más+Arroz',
        ingredients: [
            { name: 'Filete de ternera magra', quantity_grams: 190, category: 'carnes_aves' }, { name: 'Arroz integral (cocido)', quantity_grams: 150, category: 'cereales_granos_pan' },
            { name: 'Lechuga mixta', quantity_grams: 100, category: 'verduras_hortalizas' }, { name: 'Tomate', quantity_grams: 50, category: 'verduras_hortalizas' }, 
            { name: 'Pepino', quantity_grams: 50, category: 'verduras_hortalizas' }, { name: 'Aceite de oliva virgen extra', quantity_grams: 5, category: 'aceites_grasas' }, 
            { name: 'Vinagre de manzana', quantity_grams: 5, category: 'otros' }
        ],
        preparation: "1. Cocer el arroz integral. 2. Cocinar el filete de ternera a la plancha al gusto. 3. Preparar una ensalada con la lechuga, tomate y pepino. Aliñar con aceite y vinagre. 4. Servir el filete con el arroz y la ensalada."
    },

    // CENAS (sin cambios)
    'cena_merluza_patata_pim': {
        id: 'cena_merluza_patata_pim', name: 'Merluza al Vapor con Patata y Pimientos', calories: 450, protein: 55, carbs: 30, fats: 12, image: 'https://placehold.co/100x100/374151/FACC15?text=Merluza+Vapor',
        ingredients: [
            { name: 'Filete de merluza', quantity_grams: 250, category: 'pescados_mariscos' }, { name: 'Patata mediana', quantity_grams: 120, category: 'verduras_hortalizas' },
            { name: 'Pimientos (rojo y verde)', quantity_grams: 150, category: 'verduras_hortalizas' }, { name: 'Aceite de oliva virgen extra', quantity_grams: 8, category: 'aceites_grasas' }
        ],
        preparation: "1. Cocer la patata al vapor o hervida. 2. Cocinar la merluza al vapor o a la plancha. 3. Saltear los pimientos si no están asados. 4. Servir la merluza con la patata y los pimientos. Aliñar con aceite, ajo y perejil (al gusto)."
    },
    'cena_bacalao_garb_esp': {
        id: 'cena_bacalao_garb_esp', name: 'Bacalao con Garbanzos y Espinacas', calories: 450, protein: 55, carbs: 25, fats: 15, image: 'https://placehold.co/100x100/374151/FACC15?text=Bacalao+Garb',
        ingredients: [
            { name: 'Lomo de bacalao desalado', quantity_grams: 200, category: 'pescados_mariscos' }, { name: 'Garbanzos cocidos', quantity_grams: 100, category: 'legumbres' },
            { name: 'Espinacas frescas', quantity_grams: 150, category: 'verduras_hortalizas' }, { name: 'Ajo', quantity_grams: 5, category: 'verduras_hortalizas' }, 
            { name: 'Aceite de oliva virgen extra', quantity_grams: 8, category: 'aceites_grasas' }
        ],
        preparation: "1. En una sartén con aceite, dorar el ajo laminado. Retirar y reservar. 2. En el mismo aceite, saltear las espinacas. 3. Añadir los garbanzos y pimentón (al gusto), remover. 4. Cocinar el bacalao a la plancha o al horno. 5. Servir el bacalao sobre la cama de garbanzos y espinacas. Decorar con el ajo."
    },
    'cena_pavo_curry_mas_arroz_veg': { 
        id: 'cena_pavo_curry_mas_arroz_veg', name: 'Pavo al Curry con Más Arroz Basmati y Verduras', calories: 462, protein: 51, carbs: 39, fats: 8, image: 'https://placehold.co/100x100/374151/FACC15?text=Pavo+Más+Curry',
        ingredients: [
            { name: 'Dados de pechuga de pavo', quantity_grams: 180, category: 'carnes_aves' }, { name: 'Leche de coco light', quantity_grams: 60, category: 'otros' }, 
            { name: 'Pasta de curry', quantity_grams: 10, category: 'otros' }, { name: 'Brócoli', quantity_grams: 75, category: 'verduras_hortalizas' }, 
            { name: 'Zanahoria', quantity_grams: 50, category: 'verduras_hortalizas' }, { name: 'Pimiento rojo', quantity_grams: 75, category: 'verduras_hortalizas' }, 
            { name: 'Arroz basmati (cocido)', quantity_grams: 90, category: 'cereales_granos_pan' }
        ],
        preparation: "1. Saltear el pavo en una sartén antiadherente. 2. Añadir las verduras cortadas y cocinar unos minutos. 3. Incorporar la pasta de curry y la leche de coco. Mezclar bien y cocinar a fuego lento hasta que la salsa espese y las verduras estén tiernas. 4. Servir con el arroz basmati cocido."
    },

    // EXTRAS (sin cambios)
    'ext_cottage_nueces': {
        id: 'ext_cottage_nueces', name: 'Queso Cottage con Nueces', calories: 190, protein: 20, carbs: 5, fats: 10, image: 'https://placehold.co/100x100/374151/FACC15?text=Cottage+Ext',
        ingredients: [ { name: 'Queso Cottage 0% MG', quantity_grams: 150, category: 'lacteos_alternativas' }, { name: 'Nueces', quantity_grams: 15, category: 'frutos_secos_semillas' } ],
        preparation: "Mezclar el queso cottage con las nueces troceadas. Se puede añadir una pizca de canela."
    },
    'ext_yogurpro_naranja': {
        id: 'ext_yogurpro_naranja', name: 'Yogur Proteico con Naranja', calories: 190, protein: 25, carbs: 20, fats: 1, image: 'https://placehold.co/100x100/374151/FACC15?text=YogurPro+Ext',
        ingredients: [ { name: 'Yogur proteico natural (Skyr, Quark)', quantity_grams: 200, category: 'lacteos_alternativas' }, { name: 'Naranja', quantity_grams: 150, category: 'frutas' } ],
        preparation: "Pelar y trocear la naranja. Servir con el yogur proteico."
    },
    'ext_tortitas_aguacate': { 
        id: 'ext_tortitas_aguacate', name: 'Tortitas de Maíz con Pavo y Aguacate', calories: 200, protein: 18, carbs: 18, fats: 8, image: 'https://placehold.co/100x100/374151/FACC15?text=Tortitas+Ext',
        ingredients: [ { name: 'Tortitas de maíz o arroz', quantity_grams: 20, category: 'cereales_granos_pan' }, { name: 'Fiambre de pavo', quantity_grams: 60, category: 'carnes_aves' }, 
                       { name: 'Aguacate', quantity_grams: 30, category: 'aceites_grasas' } ],
        preparation: "Untar el aguacate sobre las tortitas y cubrir con el fiambre de pavo. Se puede añadir una pizca de pimienta."
    }
};

const dailyMenus = [
    { // Menú 1: Ajustado con nuevo desayuno
        desayuno: [foodDatabase.des_tostada_centeno_huevo_cottage_ajustado],
        comida: [foodDatabase.com_pollo_boniato_veg],
        cena: [foodDatabase.cena_merluza_patata_pim],
        extras: [foodDatabase.ext_cottage_nueces, foodDatabase.ext_yogurpro_naranja]
    },
    { // Menú 2: Ajustado con nuevo desayuno
        desayuno: [foodDatabase.des_tortitas_avena_frutos_rojos_ajustado],
        comida: [foodDatabase.com_salmon_quinoa_esp],
        cena: [foodDatabase.cena_bacalao_garb_esp],
        extras: [foodDatabase.ext_yogurpro_naranja, foodDatabase.ext_tortitas_aguacate]
    },
    { // Menú 3 (Entreno): Ajustado con nuevo desayuno
        desayuno: [foodDatabase.des_revuelto_huevos_jamon_ajustado],      
        comida: [foodDatabase.com_ternera_mas_arroz_ens], 
        cena: [foodDatabase.cena_pavo_curry_mas_arroz_veg], 
        extras: [foodDatabase.ext_tortitas_aguacate, foodDatabase.ext_cottage_nueces]
    }
];
