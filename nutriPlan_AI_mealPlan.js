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
    des_tortitas_de_avena_con_frutos_rojos: {
    "id": "des_tortitas_de_avena_con_frutos_rojos",
    "name": "Tortitas de Avena con Frutos Rojos",
    "calories": 553,
    "protein": 31.9,
    "carbs": 79.8,
    "fats": 12.8,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5d9e819fce58fa8a30c.png",
    "ingredients": [
        {
            "name": "Harina de Avena",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Claras de Huevo",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Huevo",
            "quantity_grams": 1,
            "category": "otros"
        },
        {
            "name": "Frutos Rojos",
            "quantity_grams": 100,
            "category": "otros"
        }
    ],
    "preparation": "Placeholder: Instrucciones para preparar las tortitas de avena con frutos rojos."
},
    cc_wok_de_verduras_con_salmn: {
    "id": "cc_wok_de_verduras_con_salmn",
    "name": "Wok de Verduras con Salmón",
    "calories": 459,
    "protein": 28.9,
    "carbs": 24.3,
    "fats": 28,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "ingredients": [
        {
            "name": "Salmón",
            "quantity_grams": 125,
            "category": "otros"
        },
        {
            "name": "Tomate",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Pimiento Rojo",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Pimiento Verde",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Cebolla",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 10,
            "category": "otros"
        }
    ],
    "preparation": "Placeholder: Instrucciones para hacer el wok de verduras con salmón."
},
    pp_alcachofa_salteada_con_jamn_huevo: {
    "id": "pp_alcachofa_salteada_con_jamn_huevo",
    "name": "Alcachofa salteada con jamón, huevo y Cinta de Cerdo a la Plancha",
    "calories": 506,
    "protein": 48.3,
    "carbs": 11.6,
    "fats": 29.1,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efb33f6c48d7f13a5b29b.png",
    "ingredients": [
        {
            "name": "Cinta de Lomo de Cerdo",
            "quantity_grams": 150,
            "category": "otros"
        },
        {
            "name": "Alcachofa",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Jamón",
            "quantity_grams": 25,
            "category": "otros"
        },
        {
            "name": "Huevo",
            "quantity_grams": 1,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 10,
            "category": "otros"
        }
    ],
    "preparation": "Placeholder: Primero, prepara la cinta de cerdo a la plancha. Mientras se cocina, saltea la alcachofa con el jamón y el huevo. Combina ambos platos para servir."
},
    ext_batido_whey_de_protenas: {
    "id": "ext_batido_whey_de_protenas",
    "name": "Batido Whey de Proteínas",
    "calories": 120,
    "protein": 25,
    "carbs": 3,
    "fats": 2,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684f021af6c48d41b5a5c003.png",
    "ingredients": [
        {
            "name": "Proteína en Polvo (Whey)",
            "quantity_grams": 30,
            "category": "otros"
        },
        {
            "name": "Agua",
            "quantity_grams": 200,
            "category": "otros"
        }
    ],
    "preparation": "Placeholder: Mezcla la proteína en polvo con el agua hasta que no queden grumos."
}
};

const dailyMenus = [
  {
    desayuno: [foodDatabase.des_tortitas_de_avena_con_frutos_rojos],
    comida: [foodDatabase.cc_wok_de_verduras_con_salmn],
    cena: [foodDatabase.pp_alcachofa_salteada_con_jamn_huevo],
    extra: [foodDatabase.ext_batido_whey_de_protenas]
  }
];

// Plan generated for: Calories: 1800, Protein: 140, Carbs: 120
