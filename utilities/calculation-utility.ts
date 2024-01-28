import { MuscleType } from "react-body-highlighter"
import { DIFICULTY_COLORS } from "./constants"

interface Set {
    weight: number,
    reps: number
}

interface Exercise {
    name: string,
    primaryMuscles: Record<string, any>,
    secondaryMuscles: Record<string, any>,
    sets: Array<Set>,
    volume?: number | null
}

const exampleWorkout: Array<Exercise> = [
    {
        name: "bench press",
        primaryMuscles: {
            [MuscleType.CHEST]: {
                participation: 1
            }
        },
        secondaryMuscles: {
            [MuscleType.FRONT_DELTOIDS]: {
                participation: 0.5
            },
            [MuscleType.TRICEPS]: {
                participation: 0.5
            }
        },
        sets: [{
            weight: 80,
            reps: 8
        }, {
            weight: 80,
            reps: 8
        }, {
            weight: 80,
            reps: 8
        }]
    },
    {
        name: "pullups",
        primaryMuscles: {
            [MuscleType.UPPER_BACK]: {
                participation: 1
            }
        },
        secondaryMuscles: {
            [MuscleType.BICEPS]: {
                participation: 0.5
            },
            [MuscleType.LOWER_BACK]: {
                participation: 0.5
            }
        },
        sets: [{
            weight: 80,
            reps: 8
        }, {
            weight: 80,
            reps: 8
        }, {
            weight: 80,
            reps: 8
        }]
    }
]

const iteration1 = [
    {
        name: "bench press",
        primaryMuscles: {
            [MuscleType.CHEST]: {
                participation: 1,
                volume: 1920
            }
        },
        secondaryMuscles: {
            [MuscleType.UPPER_BACK]: {
                participation: 0.5,
                volume: 980
            },
            [MuscleType.TRICEPS]: {
                participation: 0.5,
                volume: 980
            }
        },
        sets: [{
            weight: 80,
            reps: 8
        }, {
            weight: 80,
            reps: 8
        }, {
            weight: 80,
            reps: 8
        }],
        volume: 1920
    },
    {
        name: "pullups",
        primaryMuscles: {
            [MuscleType.UPPER_BACK]: {
                participation: 1,
                volume: 640
            }
        },
        secondaryMuscles: {
            [MuscleType.BICEPS]: {
                participation: 0.5,
                volume: 320
            },
            [MuscleType.LOWER_BACK]: {
                participation: 0.5,
                volume: 320
            }
        },
        sets: [{
            weight: 80,
            reps: 8
        }],
        volume: 640
    }
]


const iteration2 = [
    {
        primaryMuscles: {
            [MuscleType.CHEST]: {
                participation: 1,
                volume: 1920
            },
            [MuscleType.UPPER_BACK]: {
                participation: 1,
                volume: 640
            }
        },
        secondaryMuscles: {
            [MuscleType.UPPER_BACK]: {
                participation: 0.5,
                volume: 980
            },
            [MuscleType.TRICEPS]: {
                participation: 0.5,
                volume: 980
            },
            [MuscleType.BICEPS]: {
                participation: 0.5,
                volume: 320
            },
            [MuscleType.LOWER_BACK]: {
                participation: 0.5,
                volume: 320
            }
        },
    },
]

export class CalculationUtility {
    public static DIFICULTY_MAX = DIFICULTY_COLORS.length
    public static DIFICULTY_MIN = 0

    public DIFICULTIES_PER_WEEK = {
        [MuscleType.CHEST]: { min: 9, max: 18 },
        [MuscleType.FRONT_DELTOIDS]: { min: 9, max: 18 },
        [MuscleType.UPPER_BACK]: { min: 12, max: 30 },
        [MuscleType.QUADRICEPS]: { min: 9, max: 18 },
        [MuscleType.HAMSTRING]: { min: 6, max: 12 },
        [MuscleType.BACK_DELTOIDS]: { min: 9, max: 18 },
        [MuscleType.BICEPS]: { min: 6, max: 12 },
        [MuscleType.TRICEPS]: { min: 6, max: 12 },
        [MuscleType.FOREARM]: { min: 0, max: 18 },
        [MuscleType.TRAPEZIUS]: { min: 0, max: 18 },
        [MuscleType.ABS]: { min: 0, max: 18 },
        [MuscleType.GLUTEAL]: { min: 0, max: 12 },
        [MuscleType.CALVES]: { min: 12, max: 18 },
        [MuscleType.NECK]: { min: 9, max: 18 },
        [MuscleType.LOWER_BACK]: { min: 0, max: 18 },
    }

    public static extractDataFromMuscles() {
        const mappedMuscleVolumes = this.getInvolvedMuscles(exampleWorkout)
        const maxVolume = (Object.values(mappedMuscleVolumes).sort())[0]
        // Object.keys(mappedMuscleVolumes).map(k => this.calculateDificultyPerMuscle(mappedMuscleVolumes[k].volume, 0, maxVolume))
    }

    public static getInvolvedMuscles(workout: Array<Exercise>) {
        return workout
            .map((w: Exercise) => ({
                ...w,
                volume: w.sets.reduce((acc, s) => acc + (s.weight * s.reps), 0)
            }))
        // .map((w: Exercise) => ({
        // 	...(this.arrayToObjectKeysWithValue(w.primaryMuscles, w.volume!)),
        // 	...(this.arrayToObjectKeysWithValue(w.secondaryMuscles, w.volume!))
        // }))
    }

    public static arrayToObjectKeysWithValue(arr: Array<string | number>, defaultValue: number = 1) {
        return arr.reduce((acc, value) => ({ ...acc, [value]: defaultValue }), {})
    }

    public static calculateDificultyPerMuscle(volume: number, minVolumePerMuscle: number, maxVolumePerMuscle: number) {
        return this.scaleBetween(volume, this.DIFICULTY_MIN, this.DIFICULTY_MAX, minVolumePerMuscle, maxVolumePerMuscle)
    }

    public static scaleBetween(unscaledNum: number, minAllowed: number, maxAllowed: number, min: number, max: number) {
        return Math.round((maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed);
    }

}
