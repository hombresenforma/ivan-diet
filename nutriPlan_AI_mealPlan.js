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
    'des_tostada_de_centeno_con_huevo_y_queso_cottage': {
    "id": "des_tostada_de_centeno_con_huevo_y_queso_cottage",
    "name": "Tostada de Centeno con Huevo y Queso Cottage",
    "calories": 533,
    "protein": 49,
    "carbs": 32,
    "fats": 25,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682ad5cf9b8ed31c657c80e8.png",
    "ingredients": [
        {
            "name": "Tostada de Pan de Centeno",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Huevo",
            "quantity_grams": 4,
            "category": "otros"
        },
        {
            "name": "Queso Cottage",
            "quantity_grams": 150,
            "category": "otros"
        }
    ],
    "preparation": "Preparación no especificada."
},
    'cc_poke_de_aguacate_mango_tomate_soja_cebolla_arroz_y_pollo': {
    "id": "cc_poke_de_aguacate_mango_tomate_soja_cebolla_arroz_y_pollo",
    "name": "Poke de aguacate, mango, tomate, soja, cebolla, arroz y pollo",
    "calories": 739,
    "protein": 59,
    "carbs": 34,
    "fats": 41,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/684efa4ef6c48db833a5b1af.png",
    "ingredients": [
        {
            "name": "Pollo (cocido)",
            "quantity_grams": 175,
            "category": "otros"
        },
        {
            "name": "Arroz (cocido)",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Aguacate",
            "quantity_grams": 100,
            "category": "otros"
        },
        {
            "name": "Mango",
            "quantity_grams": 25,
            "category": "otros"
        },
        {
            "name": "Tomate",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Cebolla",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 20,
            "category": "otros"
        }
    ],
    "preparation": "Preparación no especificada."
},
    'cc_wok_de_verduras_con_salmn': {
    "id": "cc_wok_de_verduras_con_salmn",
    "name": "Wok de Verduras con Salmón",
    "calories": 709,
    "protein": 59,
    "carbs": 12,
    "fats": 46,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afda0b91eb330dd3d49b2.png",
    "ingredients": [
        {
            "name": "Salmón (cocido)",
            "quantity_grams": 225,
            "category": "otros"
        },
        {
            "name": "Pimiento Rojo",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Pimiento Verde",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Cebolla",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Tomate",
            "quantity_grams": 50,
            "category": "otros"
        },
        {
            "name": "Aceite de Oliva",
            "quantity_grams": 10,
            "category": "otros"
        }
    ],
    "preparation": "Preparación no especificada."
},
    'ext_fruta_densa_pltano_manzana': {
    "id": "ext_fruta_densa_pltano_manzana",
    "name": "Fruta Densa (Plátano, Manzana)",
    "calories": 170,
    "protein": 1,
    "carbs": 43,
    "fats": 0,
    "image": "https://storage.googleapis.com/msgsndr/dikOTQ4DE3OClw85d5oB/media/682afe4bb91eb325b93d4a82.png",
    "ingredients": [
        {
            "name": "Plátano",
            "quantity_grams": 125,
            "category": "otros"
        },
        {
            "name": "Manzana",
            "quantity_grams": 100,
            "category": "otros"
        }
    ],
    "preparation": "Preparación no especificada."
}
};

const dailyMenus = [
  {
    desayuno: [foodDatabase.des_tostada_de_centeno_con_huevo_y_queso_cottage],
    comida: [foodDatabase.cc_poke_de_aguacate_mango_tomate_soja_cebolla_arroz_y_pollo],
    cena: [foodDatabase.cc_wok_de_verduras_con_salmn],
    extra: [foodDatabase.ext_fruta_densa_pltano_manzana]
  }
];