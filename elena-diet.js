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
    // --- DESAYUNOS (Base de Datos Original) ---
    'des_tost_cent_hue_cott': {
        id: 'des_tost_cent_hue_cott', name: 'Tostada de Centeno con Huevo y Queso Cottage', 
        calories: 430, protein: 38, carbs: 35, fats: 15, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5cf9b8ed31c657c80e8.png',
        ingredients: [
            { name: 'Pan de centeno', quantity_grams: 80, category: 'cereales_granos_pan' },
            { name: 'Huevos', quantity_grams: 110, category: 'huevos' }, // 2 huevos M
            { name: 'Queso Cottage', quantity_grams: 100, category: 'lacteos_alternativas' },
            { name: 'Aguacate', quantity_grams: 30, category: 'frutas' } 
        ],
        preparation: "1. Tostar el pan de centeno. 2. Cocinar los huevos al gusto (revueltos, pochados, a la plancha). 3. Untar el queso cottage sobre las tostadas. 4. Añadir el aguacate laminado y los huevos encima."
    },
    'des_revu_hue_jam': {
        id: 'des_revu_hue_jam', name: 'Revuelto de Huevos con Jamón', 
        calories: 400, protein: 42, carbs: 10, fats: 22, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5e1e819fcb589a8a30e.png',
        ingredients: [
            { name: 'Huevos', quantity_grams: 165, category: 'huevos' }, // 3 huevos M
            { name: 'Jamón serrano (limpio)', quantity_grams: 60, category: 'carnes_aves' },
            { name: 'Aceite de oliva', quantity_grams: 5, category: 'aceites_grasas' }
        ],
        preparation: "1. Batir los huevos. 2. Saltear el jamón en una sartén con aceite. 3. Añadir los huevos batidos y remover hasta que cuajen al gusto."
    },
    'des_yog_pro_frut_sec': {
        id: 'des_yog_pro_frut_sec', name: 'Yogurt Protéico con Frutos Rojos y Secos', 
        calories: 420, protein: 45, carbs: 30, fats: 14, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afea2b91eb35e413d4ab6.png',
        ingredients: [
            { name: 'Yogur proteico natural', quantity_grams: 200, category: 'lacteos_alternativas' },
            { name: 'Proteína en polvo', quantity_grams: 20, category: 'otros' },
            { name: 'Frutos rojos mixtos', quantity_grams: 100, category: 'frutas' },
            { name: 'Frutos secos variados (nueces, almendras)', quantity_grams: 20, category: 'frutos_secos_semillas' }
        ],
        preparation: "1. Mezclar el yogur con la proteína en polvo. 2. Añadir los frutos rojos y los frutos secos troceados."
    },

    // --- EXTRAS (Base de Datos Original) ---
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
    },
    
    // --- NUEVAS RECETAS DEL PDF (con macros estimados) ---
    's1_lc': {
        id: 's1_lc', name: 'Patata al horno con verduras, tomate y queso', 
        calories: 400, protein: 15, carbs: 50, fats: 15, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Patata al horno con verduras, tomate y queso."
    },
    's1_lw_completo': {
        id: 's1_lw_completo', name: 'Wrap de pollo hervido con verduras y arroz', 
        calories: 500, protein: 40, carbs: 55, fats: 12, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Wrap de pollo hervido con verduras (+arroz)."
    },
     's1_mc': {
        id: 's1_mc', name: 'Ensalada de espinaca, calabaza asada, zanahoria y queso', 
        calories: 450, protein: 20, carbs: 45, fats: 22, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Ensalada de espinaca, calabaza asada, zanahoria asada, queso (+avena)."
    },
    's1_xc': {
        id: 's1_xc', name: 'Pasta de lentejas con sofrito de ternera y cerdo', 
        calories: 600, protein: 45, carbs: 60, fats: 20, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Pasta de lentejas / normal con sofrito de ternera y cerdo, calabacín y cebolla."
    },
    's1_xd_completo': {
        id: 's1_xd_completo', name: 'Ensalada de calabacin salteado, burrata y jamón con burguer de pollo', 
        calories: 650, protein: 55, carbs: 17, fats: 42, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Ensalada de calabacin salteado, burrata, albahaca, tomate seco y jamón frito y burguer de pollo (+ patatas gajo)."
    },
    's2_mc_poke': {
        id: 's2_mc_poke', name: 'Poke de aguacate, mango, arroz y pollo', 
        calories: 650, protein: 40, carbs: 75, fats: 20, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Poke de aguacate, mango, tomate, soja, cebolla, arroz y pollo (+arroz)."
    },
    's2_ld_fajitas': {
        id: 's2_ld_fajitas', name: 'Fajitas mejicanas de pollo y pimientos con arroz', 
        calories: 600, protein: 45, carbs: 65, fats: 18, 
        image: '',
        ingredients: [ {name: 'Receta de PDF', quantity_grams: 0, category: 'otros'} ],
        preparation: "Receta del PDF: Fajitas mejicanas (pimientos salteados y pollo) + (arroz)."
    }
};

// =================================================================================
// MENÚS DIARIOS GENERADOS
// =================================================================================

const dailyMenus = [
    { 
        // DÍA 1: ENTRENAMIENTO
        // Objetivo: ~1800 kcal, 100-120g CHOs, >120g Proteína
        // Estimado: ~1940 kcal, P:165g, C:124g, F:82g
        name: "Día 1 - Entrenamiento",
        desayuno: [foodDatabase.des_revu_hue_jam],         // Kcal:400, P:42, C:10, F:22
        comida: [foodDatabase.s1_xc],                   // Kcal:600, P:45, C:60, F:20
        cena: [foodDatabase.s1_xd_completo],            // Kcal:650, P:55, C:17, F:42
        extras: [foodDatabase.ext_yog_pro_sabo, foodDatabase.ext_frut_dens] // 160+100=260 Kcal, P:22+1=23, C:12+25=37, F:2+0=2
    },
    { 
        // DÍA 2: DESCANSO
        // Objetivo: ~1600 kcal, <120g CHOs, >120g Proteína
        // Estimado: ~1660 kcal, P:136g, C:84g, F:85g
        name: "Día 2 - Descanso",
        desayuno: [foodDatabase.des_revu_hue_jam],         // Kcal:400, P:42, C:10, F:22
        comida: [foodDatabase.s1_lc, foodDatabase.ac_solo_tern_plan], // 400+300=700 Kcal, P:15+45=60, C:50+0=50, F:15+13=28
        cena: [foodDatabase.s1_mc],                   // Kcal:450, P:20, C:45, F:22  (Nota: Se ha usado una versión sin pollo añadido para ajustar)
        extras: [foodDatabase.ext_yog_pro_sabo]             // Kcal:160, P:22, C:12, F:2
    },
    { 
        // DÍA 3: ENTRENAMIENTO
        // Objetivo: ~1800 kcal, 100-120g CHOs, >120g Proteína
        // Estimado: ~1810 kcal, P:156g, C:117g, F:68g
        name: "Día 3 - Entrenamiento",
        desayuno: [foodDatabase.des_tost_cent_hue_cott], // Kcal:430, P:38, C:35, F:15
        comida: [foodDatabase.s2_mc_poke],              // Kcal:650, P:40, C:75, F:20 (Ajuste: usar un poco menos de arroz si se quiere reducir CHOs)
        cena: [foodDatabase.ac_solo_tern_plan, foodDatabase.pp_ens_tom_ajo_cebo], // 300+120=420 Kcal, P:45+3=48, C:0+12=12, F:13+7=20
        extras: [foodDatabase.ext_yog_pro_sabo, foodDatabase.ext_frut_citr] // 160+60=220 Kcal, P:22+1=23, C:12+15=27, F:2+0=2
    },
    { 
        // DÍA 4: DESCANSO
        // Objetivo: ~1600 kcal, <120g CHOs, >120g Proteína
        // Estimado: ~1560 kcal, P:160g, C:75g, F:69g
        name: "Día 4 - Descanso",
        desayuno: [foodDatabase.des_revu_hue_jam],         // Kcal:400, P:42, C:10, F:22
        comida: [foodDatabase.s1_xd_completo],           // Kcal:650, P:55, C:17, F:42 (Sin las patatas gajo para mantener CH bajos)
        cena: [foodDatabase.ac_hamb_pavo_poll, foodDatabase.pp_ens_tom_ajo_cebo], // 270+120=390 Kcal, P:40+3=43, C:3+12=15, F:11+7=18
        extras: [foodDatabase.ext_yog_pro_sabo]             // Kcal:160, P:22, C:12, F:2
    }
];

console.log("Datos de categorías, alimentos y menús de ejemplo definidos.");
