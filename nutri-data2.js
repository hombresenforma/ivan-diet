// Contenido para nutri-data2.js

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
    'des_tort_aven_frut': {
        id: 'des_tort_aven_frut', name: 'Tortitas de Avena con Frutos Rojos', 
        calories: 450, protein: 40, carbs: 50, fats: 10, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5d9e819fce58fa8a30c.png',
        ingredients: [
            { name: 'Avena en copos', quantity_grams: 60, category: 'cereales_granos_pan' },
            { name: 'Claras de huevo', quantity_grams: 150, category: 'huevos' },
            { name: 'Proteína en polvo', quantity_grams: 25, category: 'otros' },
            { name: 'Frutos rojos mixtos', quantity_grams: 100, category: 'frutas' },
            { name: 'Bebida vegetal (para la mezcla)', quantity_grams: 50, category: 'bebidas' }
        ],
        preparation: "1. Mezclar la avena (o harina de avena), claras, proteína y bebida vegetal. 2. Cocinar las tortitas en una sartén antiadherente. 3. Servir con los frutos rojos por encima."
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
    'des_porr_aven_frut': {
        id: 'des_porr_aven_frut', name: 'Porridge de Avena y Frutos Rojos', 
        calories: 380, protein: 30, carbs: 50, fats: 7, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afdf19b8ed348797cbcd8.png',
        ingredients: [
            { name: 'Avena en copos', quantity_grams: 60, category: 'cereales_granos_pan' },
            { name: 'Leche o bebida vegetal', quantity_grams: 200, category: 'bebidas' },
            { name: 'Proteína en polvo', quantity_grams: 20, category: 'otros' },
            { name: 'Frutos rojos mixtos', quantity_grams: 100, category: 'frutas' }
        ],
        preparation: "1. Cocinar la avena con la leche/bebida vegetal. 2. Una vez cocido, mezclar con la proteína en polvo. 3. Servir con los frutos rojos por encima."
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
    'des_tost_cent_agua_atun': {
        id: 'des_tost_cent_agua_atun', name: 'Tostada de Centeno con Aguacate y Atún', 
        calories: 410, protein: 35, carbs: 35, fats: 15, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff33e819fcc7a1a8d946.png',
        ingredients: [
            { name: 'Pan de centeno', quantity_grams: 80, category: 'cereales_granos_pan' },
            { name: 'Atún al natural (escurrido)', quantity_grams: 100, category: 'pescados_mariscos' },
            { name: 'Aguacate', quantity_grams: 50, category: 'frutas' }
        ],
        preparation: "1. Tostar el pan de centeno. 2. Machacar o laminar el aguacate y untarlo sobre las tostadas. 3. Colocar el atún desmenuzado por encima."
    },

    // --- COMIDAS/CENAS COMPLETAS ---
    'cc_ens_pat_atun_hue': {
        id: 'cc_ens_pat_atun_hue', name: 'Ensalada de Patata, Atún y Huevo', 
        calories: 520, protein: 45, carbs: 40, fats: 20, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc08b91eb31afe3d4796.png',
        ingredients: [
            { name: 'Patata cocida', quantity_grams: 200, category: 'verduras_hortalizas' },
            { name: 'Atún al natural (escurrido)', quantity_grams: 120, category: 'pescados_mariscos' },
            { name: 'Huevos cocidos', quantity_grams: 110, category: 'huevos' }, // 2 huevos M
            { name: 'Lechuga', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Tomate', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva virgen extra', quantity_grams: 10, category: 'aceites_grasas' }
        ],
        preparation: "1. Cortar la patata y los huevos cocidos. 2. Mezclar con el atún, la lechuga y el tomate. 3. Aliñar con aceite de oliva."
    },
    'cc_ens_past_poll': {
        id: 'cc_ens_past_poll', name: 'Ensalada de Pasta con Pollo', 
        calories: 550, protein: 50, carbs: 45, fats: 18, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc47b91eb349463d47dd.png',
        ingredients: [
            { name: 'Pasta integral (cocida)', quantity_grams: 150, category: 'cereales_granos_pan' }, // aprox 60g en crudo
            { name: 'Pechuga de pollo (cocida o plancha)', quantity_grams: 150, category: 'carnes_aves' },
            { name: 'Maíz dulce', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Pimiento rojo', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva virgen extra', quantity_grams: 10, category: 'aceites_grasas' }
        ],
        preparation: "1. Cocer la pasta. 2. Cortar el pollo y el pimiento. 3. Mezclar todos los ingredientes y aliñar con aceite."
    },
    'cc_faji_poll_verd': {
        id: 'cc_faji_poll_verd', name: 'Fajitas de Pollo y Verduras', 
        calories: 530, protein: 50, carbs: 40, fats: 19, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcef0ed50608b742ff33.png',
        ingredients: [
            { name: 'Tortillas de trigo integral (2 medianas)', quantity_grams: 80, category: 'cereales_granos_pan' },
            { name: 'Pechuga de pollo (en tiras)', quantity_grams: 150, category: 'carnes_aves' },
            { name: 'Pimiento (rojo, verde, amarillo)', quantity_grams: 150, category: 'verduras_hortalizas' },
            { name: 'Cebolla', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Aguacate', quantity_grams: 40, category: 'frutas' },
            { name: 'Aceite de oliva', quantity_grams: 5, category: 'aceites_grasas' }
        ],
        preparation: "1. Saltear el pollo con las verduras (pimientos, cebolla) en aceite. 2. Calentar las tortillas. 3. Rellenar las tortillas con el pollo, verduras y aguacate."
    },
    'cc_wok_verd_salm': {
        id: 'cc_wok_verd_salm', name: 'Wok de Verduras con Salmón', 
        calories: 580, protein: 45, carbs: 35, fats: 30, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png',
        ingredients: [
            { name: 'Lomo de salmón (en dados)', quantity_grams: 150, category: 'pescados_mariscos' },
            { name: 'Brócoli', quantity_grams: 100, category: 'verduras_hortalizas' },
            { name: 'Zanahoria', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Pimiento rojo', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Salsa de soja baja en sodio', quantity_grams: 15, category: 'otros' },
            { name: 'Aceite de sésamo (o de oliva)', quantity_grams: 10, category: 'aceites_grasas' }
        ],
        preparation: "1. Saltear el salmón en el aceite. 2. Añadir las verduras y cocinar hasta que estén al dente. 3. Incorporar la salsa de soja y cocinar un minuto más."
    },
    'cc_ens_poll_burg': {
        id: 'cc_ens_poll_burg', name: 'Ensalada con Pollo y Queso de Burgos', 
        calories: 480, protein: 55, carbs: 20, fats: 20, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afdceb91eb360843d4a0b.png',
        ingredients: [
            { name: 'Pechuga de pollo (plancha o cocida)', quantity_grams: 180, category: 'carnes_aves' },
            { name: 'Queso de Burgos 0%', quantity_grams: 100, category: 'lacteos_alternativas' },
            { name: 'Lechuga variada', quantity_grams: 150, category: 'verduras_hortalizas' },
            { name: 'Tomates cherry', quantity_grams: 100, category: 'verduras_hortalizas' },
            { name: 'Nueces', quantity_grams: 15, category: 'frutos_secos_semillas' },
            { name: 'Aceite de oliva virgen extra', quantity_grams: 5, category: 'aceites_grasas' }
        ],
        preparation: "1. Cortar el pollo y el queso de Burgos. 2. Mezclar con la lechuga y los tomates. 3. Añadir las nueces y aliñar con aceite."
    },

    // --- PLATOS PRINCIPALES (necesitan acompañamiento) ---
    'pp_ens_lent': {
        id: 'pp_ens_lent', name: 'Ensalada de Lentejas', 
        calories: 280, protein: 20, carbs: 40, fats: 5, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682aff5a365e949c0a73d706.png',
        ingredients: [
            { name: 'Lentejas cocidas', quantity_grams: 180, category: 'legumbres' },
            { name: 'Pimiento rojo', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Cebolla morada', quantity_grams: 30, category: 'verduras_hortalizas' },
            { name: 'Tomate', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva', quantity_grams: 5, category: 'aceites_grasas' }
        ],
        preparation: "1. Mezclar las lentejas cocidas con el pimiento, cebolla y tomate picados. 2. Aliñar con aceite."
    },
    'pp_cala_cebo_plan': {
        id: 'pp_cala_cebo_plan', name: 'Calabacín con Cebolla a la Plancha', 
        calories: 150, protein: 5, carbs: 15, fats: 8, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc8e9b8ed35d8e7cbb0e.png',
        ingredients: [
            { name: 'Calabacín', quantity_grams: 250, category: 'verduras_hortalizas' },
            { name: 'Cebolla', quantity_grams: 100, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva', quantity_grams: 8, category: 'aceites_grasas' }
        ],
        preparation: "1. Cortar el calabacín en rodajas y la cebolla en juliana. 2. Cocinar a la plancha con aceite hasta que estén tiernos."
    },
    'pp_ens_tom_ajo_cebo': {
        id: 'pp_ens_tom_ajo_cebo', name: 'Ensalada de Tomate, Ajo y Cebolla', 
        calories: 120, protein: 3, carbs: 12, fats: 7, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe199b8ed3c4d37cbd18.png',
        ingredients: [
            { name: 'Tomate', quantity_grams: 200, category: 'verduras_hortalizas' },
            { name: 'Cebolla', quantity_grams: 50, category: 'verduras_hortalizas' },
            { name: 'Ajo (1 diente pequeño)', quantity_grams: 3, category: 'verduras_hortalizas' },
            { name: 'Aceite de oliva', quantity_grams: 7, category: 'aceites_grasas' }
        ],
        preparation: "1. Cortar el tomate y la cebolla. Picar el ajo finamente. 2. Mezclar y aliñar con aceite."
    },

    // --- ACOMPAÑAMIENTOS ---
    'ac_hamb_pavo_poll': {
        id: 'ac_hamb_pavo_poll', name: 'Hamburguesa de Pavo-Pollo', 
        calories: 270, protein: 40, carbs: 3, fats: 11, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afcbc9b8ed3b6397cbb33.png',
        ingredients: [
            { name: 'Carne picada de pavo y pollo', quantity_grams: 180, category: 'carnes_aves' }
        ],
        preparation: "1. Formar la hamburguesa. 2. Cocinar a la plancha o al horno hasta que esté bien hecha."
    },
    'ac_solo_tern_plan': {
        id: 'ac_solo_tern_plan', name: 'Solomillo/Filete de Ternera a la Plancha', 
        calories: 300, protein: 45, carbs: 0, fats: 13, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe6c0ed5060d3743015a.png',
        ingredients: [
            { name: 'Solomillo o filete de ternera magra', quantity_grams: 180, category: 'carnes_aves' }
        ],
        preparation: "1. Cocinar el filete de ternera a la plancha al punto deseado."
    },

    // --- EXTRAS ---
    'ext_match_late': {
        id: 'ext_match_late', name: 'Matcha Latte', 
        calories: 80, protein: 2, carbs: 10, fats: 4, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc6c365e94868a73d38f.png',
        ingredients: [
            { name: 'Té Matcha en polvo', quantity_grams: 3, category: 'otros' },
            { name: 'Leche o bebida vegetal', quantity_grams: 150, category: 'bebidas' },
            { name: 'Edulcorante (opcional)', quantity_grams: 0, category: 'otros' }
        ],
        preparation: "1. Mezclar el matcha con un poco de agua caliente. 2. Añadir la leche caliente (o fría) y edulcorante si se desea."
    },
    'ext_cafe_cort': {
        id: 'ext_cafe_cort', name: 'Café (Cortado)', 
        calories: 30, protein: 1, carbs: 2, fats: 1.5, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd0f9b8ed358c27cbba0.png',
        ingredients: [
            { name: 'Café expreso', quantity_grams: 30, category: 'bebidas' },
            { name: 'Leche (un chorrito)', quantity_grams: 20, category: 'lacteos_alternativas' }
        ],
        preparation: "Preparar un café expreso y añadir un poco de leche."
    },
    'ext_frut_citr': {
        id: 'ext_frut_citr', name: 'Fruta Cítrica', 
        calories: 60, protein: 1, carbs: 15, fats: 0, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd3d0ed506305442ffe4.png',
        ingredients: [
            { name: 'Naranja o Mandarina o Kiwi', quantity_grams: 150, category: 'frutas' }
        ],
        preparation: "Pelar y consumir."
    },
    'ext_yog_pro_sabo': {
        id: 'ext_yog_pro_sabo', name: 'Yogur Protéico', 
        calories: 160, protein: 22, carbs: 12, fats: 2, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png',
        ingredients: [
            { name: 'Yogur proteico (natural o sabores)', quantity_grams: 200, category: 'lacteos_alternativas' }
        ],
        preparation: "Consumir directamente."
    },
    'ext_frut_dens': {
        id: 'ext_frut_dens', name: 'Fruta Densa', 
        calories: 100, protein: 1, carbs: 25, fats: 0, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png',
        ingredients: [
            { name: 'Plátano o Manzana', quantity_grams: 120, category: 'frutas' }
        ],
        preparation: "Pelar (si es necesario) y consumir."
    },
    'ext_tort_legu': {
        id: 'ext_tort_legu', name: 'Tortitas de Legumbres', 
        calories: 130, protein: 7, carbs: 18, fats: 3, 
        image: 'https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682affdd9b8ed3082d7cbefc.png',
        ingredients: [
            { name: 'Tortitas de legumbres (Mercadona u similar)', quantity_grams: 30, category: 'cereales_granos_pan' } // Ajustar gramos según producto
        ],
        preparation: "Consumir directamente."
    }
};

const dailyMenus = [
    { // Menú 1: Estimado Kcal:1800, P:176, C:140, F:60
        desayuno: [foodDatabase.des_tost_cent_hue_cott],      // Kcal:430 P:38 C:35 F:15
        comida: [foodDatabase.pp_ens_lent, foodDatabase.ac_hamb_pavo_poll], // Kcal:280 P:20 C:40 F:5 + Kcal:270 P:40 C:3 F:11 = Kcal:550 P:60 C:43 F:16
        cena: [foodDatabase.cc_ens_past_poll],               // Kcal:550 P:50 C:45 F:18
        extras: [foodDatabase.ext_yog_pro_sabo, foodDatabase.ext_frut_dens] // Kcal:160 P:22 C:12 F:2 + Kcal:100 P:1 C:25 F:0 = Kcal:260 P:23 C:37 F:2
    },
    { // Menú 2: Estimado Kcal:1740, P:161, C:130, F:67.5
        desayuno: [foodDatabase.des_porr_aven_frut],          // Kcal:380 P:30 C:50 F:7
        comida: [foodDatabase.cc_faji_poll_verd],           // Kcal:530 P:50 C:40 F:19
        cena: [foodDatabase.pp_cala_cebo_plan, foodDatabase.ac_solo_tern_plan], // Kcal:150 P:5 C:15 F:8 + Kcal:300 P:45 C:0 F:13 = Kcal:450 P:50 C:15 F:21
        extras: [foodDatabase.ext_frut_citr, foodDatabase.ext_tort_legu]   // Kcal:60 P:1 C:15 F:0 + Kcal:130 P:7 C:18 F:3 = Kcal:190 P:8 C:33 F:3
    },
    { // Menú 3 (Entreno): Estimado Kcal:1810, P:185, C:130, F:61.5
        desayuno: [foodDatabase.des_yog_pro_frut_sec],        // Kcal:420 P:45 C:30 F:14
        comida: [foodDatabase.cc_wok_verd_salm],             // Kcal:580 P:45 C:35 F:30
        cena: [foodDatabase.cc_ens_poll_burg],               // Kcal:480 P:55 C:20 F:20
        extras: [foodDatabase.ext_match_late, foodDatabase.ext_cafe_cort] // Kcal:80 P:2 C:10 F:4 + Kcal:30 P:1 C:2 F:1.5 = Kcal:110 P:3 C:12 F:5.5
    }
];