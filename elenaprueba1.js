const foodCategories = {
    "carnes_aves": "Carnes y Aves",
    "pescados_mariscos": "Pescados y Mariscos",
    "verduras_hortalizas": "Verduras y Hortalizas",
    "frutas": "Frutas",
    "lacteos_alternativas": "Lácteos y Alternativas",
    "huevos": "Huevos",
    "legumbres": "Legumbres",
    "cereales_granos_pan": "Cereales, Granos y Pan",
    "frutos_secos_semillas": "Frutos Secos y Semillas",
    "aceites_grasas": "Aceites y Grasas",
    "bebidas": "Bebidas",
    "otros": "Otros (Suplementos, etc.)"
};

const foodDatabase = {
    p0_desayuno_des_tortitas_de_avena_con_frutos_rojos_Tortitas_de_Ave_mainOnly_idx0: {
    "id": "p0_desayuno_des_tortitas_de_avena_con_frutos_rojos_Tortitas_de_Ave_mainOnly_idx0",
    "name": "Tortitas de Avena con Frutos Rojos (Plan 1)",
    "calories": 253,
    "protein": 16.1,
    "carbs": 20,
    "fats": 11.9,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5d9e819fce58fa8a30c.png",
    "ingredients": [
        {
            "name": "Harina de Avena",
            "quantity_grams": 25,
            "category": "otros"
        },
        {
            "name": "Claras de Huevo",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Huevo",
            "quantity_grams": 1,
            "category": "otros"
        },
        {
            "name": "Frutos Rojos",
            "quantity_grams": 25,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 5,
            "category": "otros"
        }
    ],
    "preparation": "Preparación de Tortitas de Avena con Frutos Rojos."
},
    p0_comida_cc_pollo_al_curry_thai_con_arroz_Pollo_al_curry__mainOnly_idx1: {
    "id": "p0_comida_cc_pollo_al_curry_thai_con_arroz_Pollo_al_curry__mainOnly_idx1",
    "name": "Pollo al curry thai con arroz (Plan 1)",
    "calories": 784,
    "protein": 35.4,
    "carbs": 19.3,
    "fats": 64.7,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684ef8924d606648e7332262.png",
    "ingredients": [
        {
            "name": "Pollo",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "leche de coco",
            "quantity_grams": 125,
            "category": "otros"
        },
        {
            "name": "pasta de curry",
            "quantity_grams": 15,
            "category": "otros"
        },
        {
            "name": "arroz integral",
            "quantity_grams": 0,
            "category": "otros"
        },
        {
            "name": "zanahoria",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "cebolla",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 30,
            "category": "otros"
        }
    ],
    "preparation": "Preparación de Pollo al curry thai con arroz."
},
    p0_cena_cc_wrap_de_pollo_hervido_con_verduras_y_arroz_Wrap_de_pollo_h_mainOnly_idx2: {
    "id": "p0_cena_cc_wrap_de_pollo_hervido_con_verduras_y_arroz_Wrap_de_pollo_h_mainOnly_idx2",
    "name": "Wrap de pollo hervido con verduras y arroz (Plan 1)",
    "calories": 455,
    "protein": 38.7,
    "carbs": 35.5,
    "fats": 17.2,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684ef7e26202d54cb0de24e8.png",
    "ingredients": [
        {
            "name": "Pollo",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "arroz",
            "quantity_grams": 0,
            "category": "otros"
        },
        {
            "name": "brócoli",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "zanahoria",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "cebolla",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "tortilla de wrap",
            "quantity_grams": 25,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 10,
            "category": "otros"
        }
    ],
    "preparation": "Preparación de Wrap de pollo hervido con verduras y arroz."
},
    p0_extra_ext_yogur_protico_sabores_natural_Yogur_Prot_ico__mainOnly_idx3: {
    "id": "p0_extra_ext_yogur_protico_sabores_natural_Yogur_Prot_ico__mainOnly_idx3",
    "name": "Yogur Protéico (Sabores, Natural...) (Plan 1)",
    "calories": 60,
    "protein": 10,
    "carbs": 4,
    "fats": 0,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afd789b8ed38b127cbc09.png",
    "ingredients": [
        {
            "name": "Yogur Protéico",
            "quantity_grams": 100,
            "category": "otros"
        }
    ],
    "preparation": "Preparación de Yogur Protéico (Sabores, Natural...)."
},
    p0_extra_ext_matcha_late_Matcha_Late_mainOnly_idx4: {
    "id": "p0_extra_ext_matcha_late_Matcha_Late_mainOnly_idx4",
    "name": "Matcha Late (Plan 1)",
    "calories": 100,
    "protein": 6.8,
    "carbs": 9.4,
    "fats": 3,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afc6c365e94868a73d38f.png",
    "ingredients": [
        {
            "name": "Leche semi-desnatada",
            "quantity_grams": 200,
            "category": "otros"
        },
        {
            "name": "Matcha",
            "quantity_grams": 0,
            "category": "otros"
        }
    ],
    "preparation": "Preparación de Matcha Late."
}
};

const dailyMenus = [
  {
    name: "Plan 1",
    desayuno: [foodDatabase.p0_desayuno_des_tortitas_de_avena_con_frutos_rojos_Tortitas_de_Ave_mainOnly_idx0],
    comida: [foodDatabase.p0_comida_cc_pollo_al_curry_thai_con_arroz_Pollo_al_curry__mainOnly_idx1],
    cena: [foodDatabase.p0_cena_cc_wrap_de_pollo_hervido_con_verduras_y_arroz_Wrap_de_pollo_h_mainOnly_idx2],
    extra: [foodDatabase.p0_extra_ext_yogur_protico_sabores_natural_Yogur_Prot_ico__mainOnly_idx3, foodDatabase.p0_extra_ext_matcha_late_Matcha_Late_mainOnly_idx4]
  }
];

// Detalles de los planes generados:
// Plan: Plan 1, Calorías: 1600, Proteínas: 100, Carbohidratos: 80