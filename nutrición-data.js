// Contenido para nutricion_data.js

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
    // 'especias_condimentos': 'Especias y Condimentos', // No se mostrará como categoría en la lista de compra
    'bebidas': 'Bebidas',
    'otros': 'Otros (Suplementos, etc.)'
};

const foodDatabase = {
    'des_batido_pro': {
        id: 'des_batido_pro', name: 'Batido Proteico con Avena y Manzana', calories: 400, protein: 40, carbs: 45, fats: 7, image: 'https://placehold.co/100x100/374151/FACC15?text=Batido+Pro',
        ingredients: [
            { name: 'Proteína en polvo', quantity_grams: 35, category: 'otros' }, { name: 'Avena en copos', quantity_grams: 50, category: 'cereales_granos_pan' },
            { name: 'Claras de huevo líquidas', quantity_grams: 100, category: 'huevos' }, { name: 'Manzana', quantity_grams: 75, category: 'frutas' }, 
            { name: 'Espinacas frescas', quantity_grams: 30, category: 'verduras_hortalizas' }, { name: 'Agua o leche de almendras s/a', quantity_grams: 150, category: 'bebidas' }
        ],
        preparation: "1. Añadir todos los ingredientes a la batidora. 2. Batir hasta obtener una mezcla homogénea y suave. 3. Servir inmediatamente. Puedes añadir hielo para una textura más fría."
    },
    'des_yogur_nueces_pro': {
        id: 'des_yogur_nueces_pro', name: 'Yogur Proteico con Frutos Rojos y Almendras', calories: 430, protein: 50, carbs: 26, fats: 15, image: 'https://placehold.co/100x100/374151/FACC15?text=Yogur+Pro',
        ingredients: [
            { name: 'Yogur griego natural 0% MG', quantity_grams: 200, category: 'lacteos_alternativas' }, { name: 'Proteína en polvo', quantity_grams: 25, category: 'otros' },
            { name: 'Frutos rojos mixtos', quantity_grams: 100, category: 'frutas' }, { name: 'Almendras crudas o tostadas', quantity_grams: 20, category: 'frutos_secos_semillas' }, 
            { name: 'Semillas de chía', quantity_grams: 5, category: 'frutos_secos_semillas' }
        ],
        preparation: "1. En un bol, mezclar el yogur griego con la proteína en polvo hasta integrar. 2. Añadir los frutos rojos y las semillas de chía. 3. Cubrir con las almendras troceadas. Servir frío."
    },
    'des_revuelto_pavo_pro': { 
        id: 'des_revuelto_pavo_pro', name: 'Revuelto Proteico de Claras y Pavo con Tostadas', calories: 450, protein: 45, carbs: 35, fats: 15, image: 'https://placehold.co/100x100/374151/FACC15?text=Revuelto+Pro',
        ingredients: [
            { name: 'Claras de huevo líquidas', quantity_grams: 200, category: 'huevos' }, { name: 'Huevo entero', quantity_grams: 55, category: 'huevos' },
            { name: 'Fiambre de pavo en dados', quantity_grams: 80, category: 'carnes_aves' }, { name: 'Pan integral', quantity_grams: 60, category: 'cereales_granos_pan' }, 
            { name: 'Tomate en rodajas', quantity_grams: 50, category: 'verduras_hortalizas' }, { name: 'Aceite de oliva virgen extra', quantity_grams: 3, category: 'aceites_grasas' }
        ],
        preparation: "1. Calentar el aceite en una sartén antiadherente. 2. Añadir el pavo y saltear ligeramente. 3. Verter las claras y el huevo batidos. Remover hasta que cuajen al gusto. 4. Servir el revuelto acompañado de las tostadas de pan integral y las rodajas de tomate."
    },
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
    { // Menú 1: Aproximado P:195, C:140, F:57, Kcal:1830 (con doble extra)
        desayuno: [foodDatabase.des_batido_pro],
        comida: [foodDatabase.com_pollo_boniato_veg],
        cena: [foodDatabase.cena_merluza_patata_pim],
        extras: [foodDatabase.ext_cottage_nueces, foodDatabase.ext_yogurpro_naranja]
    },
    { // Menú 2: Aproximado P:191, C:139, F:77, Kcal:1970 (con doble extra)
        desayuno: [foodDatabase.des_yogur_nueces_pro],
        comida: [foodDatabase.com_salmon_quinoa_esp],
        cena: [foodDatabase.cena_bacalao_garb_esp],
        extras: [foodDatabase.ext_yogurpro_naranja, foodDatabase.ext_tortitas_aguacate]
    },
    { // Menú 3 (Entreno): Aproximado P:180, C:161, F:59, Kcal:1854 (con doble extra)
        desayuno: [foodDatabase.des_revuelto_pavo_pro],      
        comida: [foodDatabase.com_ternera_mas_arroz_ens], 
        cena: [foodDatabase.cena_pavo_curry_mas_arroz_veg], 
        extras: [foodDatabase.ext_tortitas_aguacate, foodDatabase.ext_cottage_nueces]
    }
];