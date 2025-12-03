// Titulo: Plan de Entrenamiento

// Contenido de app_datos.js

// =================================================================================
// DATOS DE LA RUTINA (2 DÍAS)
// =================================================================================
const workoutData = {
    "dia1": {
        name: "Entreno A",
        exercises: [
            {
                order: 2,
                name: "Worm + Flexión",
                isSuperset: true,
                items: [
                    {
                        name: "Worm + Flexión",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                        imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Extensión de Tríceps en Columna",
                        subOrder: 2,
                        sets: 3,
                        reps: "15",
                        videoUrl: "https://youtu.be/MtGdJQ-Q0hs",
                        imageUrl: "https://i.ytimg.com/vi/MtGdJQ-Q0hs/mqdefault.jpg"
                    },
                    {
                        name: "Hollow - Nivel 4",
                        subOrder: 3,
                        sets: 3,
                        reps: "30s",
                        rest: "90s",
                        videoUrl: "https://youtu.be/RxFdlQ4oelM",
                        imageUrl: "https://i.ytimg.com/vi/RxFdlQ4oelM/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=FhJAsfzBj50",
                imageUrl: "https://i.ytimg.com/vi/FhJAsfzBj50/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Sentadilla con Salto",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                        imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
                    },
                    {
                        name: "Press Pallof Excéntrico con Banda Elástica",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://www.youtube.com/shorts/K4zseqb-hvo",
                        imageUrl: "https://i.ytimg.com/vi/K4zseqb-hvo/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Avanzada",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/nH9AQFIJ1rY",
                        imageUrl: "https://i.ytimg.com/vi/nH9AQFIJ1rY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/watch?v=1-Mum4hyIJ0",
                imageUrl: "https://i.ytimg.com/vi/1-Mum4hyIJ0/mqdefault.jpg"
            }
        ]
    },
    "dia2": {
        name: "Entreno B",
        exercises: [
            {
                order: 2,
                name: "Remo Unilateral con Banda Elástica",
                isSuperset: true,
                items: [
                    {
                        name: "Remo Unilateral con Banda Elástica",
                        subOrder: 1,
                        sets: 3,
                        reps: "10",
                        isSupersetStart: true,
                        videoUrl: "https://www.youtube.com/shorts/90NfKSOGEVI",
                        imageUrl: "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg"
                    },
                    {
                        name: "Gomas - Curl de Bíceps de Pie",
                        subOrder: 2,
                        sets: 3,
                        reps: "12-15",
                        videoUrl: "https://youtu.be/w4AydDM5bjU",
                        imageUrl: "https://i.ytimg.com/vi/w4AydDM5bjU/mqdefault.jpg"
                    },
                    {
                        name: "CARDIO - Lateral Climbers",
                        subOrder: 3,
                        sets: 3,
                        reps: "8",
                        rest: "90s",
                        videoUrl: "https://www.youtube.com/shorts/IKuy2laTdGY",
                        imageUrl: "https://i.ytimg.com/vi/IKuy2laTdGY/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://www.youtube.com/shorts/90NfKSOGEVI",
                imageUrl: "https://i.ytimg.com/vi/90NfKSOGEVI/mqdefault.jpg"
            },
            {
                order: 3,
                name: "Circuito Final",
                isSuperset: true,
                circuitDetails: {
                    totalRounds: 4,
                    restBetweenExercisesSeconds: 15,
                    restBetweenRoundsSeconds: 60
                },
                items: [
                    {
                        name: "Gomas - FacePull en Columna",
                        subOrder: 1,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/KnnWfHUjsKg",
                        imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
                    },
                    {
                        name: "Cuerpo Libre - Cardio - Predator Jacks",
                        subOrder: 2,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/uGmzXjFM0d8",
                        imageUrl: "https://i.ytimg.com/vi/uGmzXjFM0d8/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral de Rodillas",
                        subOrder: 3,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/pIf682Ral3A",
                        imageUrl: "https://i.ytimg.com/vi/pIf682Ral3A/mqdefault.jpg"
                    },
                    {
                        name: "Plancha - Lateral de Rodillas",
                        subOrder: 4,
                        sets: 1,
                        reps: "45s",
                        isCircuitItem: true,
                        videoUrl: "https://youtu.be/pIf682Ral3A",
                        imageUrl: "https://i.ytimg.com/vi/pIf682Ral3A/mqdefault.jpg"
                    }
                ],
                notes: "",
                videoUrl: "https://youtu.be/KnnWfHUjsKg",
                imageUrl: "https://i.ytimg.com/vi/KnnWfHUjsKg/mqdefault.jpg"
            }
        ]
    }
};

const exerciseAlternatives = {
};

console.log("Datos de rutina cargados desde el creador.");
// Export if using modules in the target app, or remove if it's a simple script include
// export { workoutData, exerciseAlternatives };
