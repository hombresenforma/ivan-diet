// Titulo: Plan de alimentación de Fran Mohedano — 3 opciones
// Alergias: Sin restricciones médicas registradas
const foodDatabase = {
  "o1_des": {
    "name": "Desayuno: Tortilla, avena y frutos rojos", "calories": 521, "protein": 38, "carbs": 43, "fats": 21,
    "ingredients": [
      {"name":"Huevos","quantity":"3","unit":"unidad(es)","calories":234,"protein":19.5,"carbs":1.7,"fats":16.5},
      {"name":"Claras de huevo","quantity":"100","unit":"g","calories":52,"protein":11,"carbs":0.7,"fats":0},
      {"name":"Copos de avena","quantity":"50","unit":"g","calories":185,"protein":6.5,"carbs":30.6,"fats":3.5},
      {"name":"Frutos rojos","quantity":"100","unit":"g","calories":50,"protein":1,"carbs":10,"fats":0.5}
    ], "preparation":"Preparar la tortilla con los huevos y las claras. Cocer la avena y servir con los frutos rojos."
  },
  "o1_com": {
    "name":"Comida: Pollo con arroz y verduras", "calories":623, "protein":54, "carbs":49, "fats":19,
    "ingredients":[
      {"name":"Pechuga de pollo","quantity":"150","unit":"g","calories":248,"protein":46.5,"carbs":0,"fats":5.4},
      {"name":"Arroz cocido","quantity":"140","unit":"g","calories":182,"protein":3.8,"carbs":39.2,"fats":0.4},
      {"name":"Verduras variadas","quantity":"150","unit":"g","calories":60,"protein":3,"carbs":10,"fats":0.5},
      {"name":"Aceite de oliva virgen extra","quantity":"15","unit":"g","calories":133,"protein":0,"carbs":0,"fats":15}
    ], "preparation":"Cocinar el pollo a la plancha, acompañar con arroz y verduras, y añadir el aceite al servir."
  },
  "o1_cen": {
    "name":"Cena: Salmón con patata y verduras", "calories":596, "protein":44, "carbs":41, "fats":27,
    "ingredients":[
      {"name":"Salmón","quantity":"170","unit":"g","calories":354,"protein":37,"carbs":0,"fats":22},
      {"name":"Patata cocida o asada","quantity":"180","unit":"g","calories":138,"protein":3.6,"carbs":30.6,"fats":0.2},
      {"name":"Verduras variadas","quantity":"150","unit":"g","calories":60,"protein":3,"carbs":10,"fats":0.5},
      {"name":"Aceite de oliva virgen extra","quantity":"5","unit":"g","calories":44,"protein":0,"carbs":0,"fats":5}
    ], "preparation":"Cocinar el salmón a la plancha u horno y servir con la patata y las verduras."
  },
  "o1_sna": {
    "name":"Snack: Yogur alto en proteína con almendras", "calories":237, "protein":23, "carbs":11, "fats":8,
    "ingredients":[
      {"name":"Yogur alto en proteína natural","quantity":"200","unit":"g","calories":150,"protein":20,"carbs":8,"fats":0.5},
      {"name":"Almendras","quantity":"15","unit":"g","calories":87,"protein":3,"carbs":3,"fats":7.5}
    ], "preparation":"Mezclar y consumir frío."
  },

  "o2_des": {
    "name":"Desayuno: Tortilla con aguacate y manzana", "calories":492, "protein":33, "carbs":30, "fats":29,
    "ingredients":[
      {"name":"Huevos","quantity":"3","unit":"unidad(es)","calories":234,"protein":19.5,"carbs":1.7,"fats":16.5},
      {"name":"Claras de huevo","quantity":"100","unit":"g","calories":52,"protein":11,"carbs":0.7,"fats":0},
      {"name":"Aguacate","quantity":"80","unit":"g","calories":128,"protein":1.6,"carbs":6.8,"fats":12},
      {"name":"Manzana","quantity":"150","unit":"g","calories":78,"protein":0.5,"carbs":21,"fats":0.2}
    ], "preparation":"Preparar la tortilla y acompañar con aguacate y manzana."
  },
  "o2_com": {
    "name":"Comida: Pavo con quinoa y verduras", "calories":657, "protein":49, "carbs":46, "fats":33,
    "ingredients":[
      {"name":"Pechuga de pavo","quantity":"130","unit":"g","calories":176,"protein":39,"carbs":0,"fats":2.6},
      {"name":"Quinoa cocida","quantity":"150","unit":"g","calories":180,"protein":6,"carbs":32,"fats":3},
      {"name":"Verduras variadas","quantity":"200","unit":"g","calories":80,"protein":4,"carbs":14,"fats":1},
      {"name":"Aceite de oliva virgen extra","quantity":"25","unit":"g","calories":221,"protein":0,"carbs":0,"fats":25}
    ], "preparation":"Cocinar el pavo y las verduras, servir con la quinoa y añadir el aceite."
  },
  "o2_cen": {
    "name":"Cena: Ternera magra con patata y verduras", "calories":601, "protein":38, "carbs":47, "fats":31,
    "ingredients":[
      {"name":"Ternera magra","quantity":"120","unit":"g","calories":240,"protein":31,"carbs":0,"fats":12},
      {"name":"Patata cocida o asada","quantity":"220","unit":"g","calories":169,"protein":4.4,"carbs":37.4,"fats":0.2},
      {"name":"Verduras variadas","quantity":"150","unit":"g","calories":60,"protein":3,"carbs":10,"fats":0.5},
      {"name":"Aceite de oliva virgen extra","quantity":"15","unit":"g","calories":132,"protein":0,"carbs":0,"fats":15}
    ], "preparation":"Cocinar la ternera al punto deseado y acompañar con patata y verduras."
  },
  "o2_sna": {
    "name":"Snack: Batido whey de proteína", "calories":250, "protein":29, "carbs":8, "fats":13,
    "ingredients":[
      {"name":"Proteína whey","quantity":"30","unit":"g","calories":120,"protein":24,"carbs":3,"fats":2},
      {"name":"Bebida de almendra sin azúcar","quantity":"250","unit":"ml","calories":40,"protein":1,"carbs":2,"fats":3},
      {"name":"Crema de cacahuete","quantity":"15","unit":"g","calories":90,"protein":4,"carbs":3,"fats":7.5}
    ], "preparation":"Triturar todos los ingredientes con hielo hasta obtener un batido homogéneo."
  },

  "o3_des": {
    "name":"Desayuno: Yogur, avena, frutos rojos y nueces", "calories":476, "protein":38, "carbs":48, "fats":13,
    "ingredients":[
      {"name":"Yogur griego alto en proteína","quantity":"300","unit":"g","calories":180,"protein":30,"carbs":12,"fats":0},
      {"name":"Copos de avena","quantity":"40","unit":"g","calories":148,"protein":5.2,"carbs":24,"fats":2.8},
      {"name":"Frutos rojos","quantity":"100","unit":"g","calories":50,"protein":1,"carbs":10,"fats":0.5},
      {"name":"Nueces","quantity":"15","unit":"g","calories":98,"protein":2,"carbs":2,"fats":10}
    ], "preparation":"Mezclar todos los ingredientes en un bol."
  },
  "o3_com": {
    "name":"Comida: Bacalao con garbanzos y verduras", "calories":669, "protein":50, "carbs":46, "fats":33,
    "ingredients":[
      {"name":"Bacalao","quantity":"170","unit":"g","calories":153,"protein":35.7,"carbs":0,"fats":1.7},
      {"name":"Garbanzos cocidos","quantity":"120","unit":"g","calories":197,"protein":10.5,"carbs":32,"fats":3},
      {"name":"Verduras variadas","quantity":"200","unit":"g","calories":80,"protein":4,"carbs":14,"fats":1},
      {"name":"Aceite de oliva virgen extra","quantity":"27","unit":"g","calories":239,"protein":0,"carbs":0,"fats":27}
    ], "preparation":"Cocinar el bacalao y servir con los garbanzos y las verduras salteadas."
  },
  "o3_cen": {
    "name":"Cena: Pollo con arroz y verduras", "calories":613, "protein":43, "carbs":46, "fats":27,
    "ingredients":[
      {"name":"Pechuga de pollo","quantity":"120","unit":"g","calories":198,"protein":37.2,"carbs":0,"fats":4.3},
      {"name":"Arroz cocido","quantity":"130","unit":"g","calories":169,"protein":3.5,"carbs":36.4,"fats":0.4},
      {"name":"Verduras variadas","quantity":"150","unit":"g","calories":60,"protein":3,"carbs":10,"fats":0.5},
      {"name":"Aceite de oliva virgen extra","quantity":"21","unit":"g","calories":186,"protein":0,"carbs":0,"fats":21}
    ], "preparation":"Cocinar el pollo a la plancha y servir con arroz y verduras."
  },
  "o3_sna": {
    "name":"Snack: Queso fresco batido con nueces", "calories":212, "protein":20, "carbs":8, "fats":11,
    "ingredients":[
      {"name":"Queso fresco batido","quantity":"150","unit":"g","calories":147,"protein":18,"carbs":6,"fats":4.5},
      {"name":"Nueces","quantity":"10","unit":"g","calories":65,"protein":1.5,"carbs":1.5,"fats":6.5}
    ], "preparation":"Mezclar y consumir frío."
  }
};

const dailyMenus = [
  {"name":"Opciones uno","targetMacros":{"calories":1977,"protein":159,"carbs":144,"fats":75},"baselineTotals":{"calories":1977,"protein":159,"carbs":144,"fats":75},"desayuno":["o1_des"],"comida":["o1_com"],"cena":["o1_cen"],"extra":["o1_sna"]},
  {"name":"Opciones dos","targetMacros":{"calories":2000,"protein":149,"carbs":131,"fats":106},"baselineTotals":{"calories":2000,"protein":149,"carbs":131,"fats":106},"desayuno":["o2_des"],"comida":["o2_com"],"cena":["o2_cen"],"extra":["o2_sna"]},
  {"name":"Opciones tres","targetMacros":{"calories":1970,"protein":151,"carbs":148,"fats":84},"baselineTotals":{"calories":1970,"protein":151,"carbs":148,"fats":84},"desayuno":["o3_des"],"comida":["o3_com"],"cena":["o3_cen"],"extra":["o3_sna"]}
];
