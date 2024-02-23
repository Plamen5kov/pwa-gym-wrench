import { Workout } from "@/interfaces/exercise"
import { MuscleType } from "react-body-highlighter"

export const DIFICULTY_COLORS = ["#44ce1b", "#bbdb44", "#f7e379", "#f2a134", "#e51f1f"]
export const DIFICULTY_MAX = DIFICULTY_COLORS.length
export const DIFICULTY_MIN = 0

export const exampleWorkout: Workout = {
    "bench press": {
        name: "bench press",
        primaryMuscles: {
            [MuscleType.CHEST]: {
                participation: 1
            },
            [MuscleType.FRONT_DELTOIDS]: {
                participation: 1
            }
        },
        secondaryMuscles: {
            [MuscleType.FRONT_DELTOIDS]: {
                participation: 0.5
            },
            [MuscleType.TRICEPS]: {
                participation: 0.5
            },
            [MuscleType.GLUTEAL]: {
                participation: 0.2
            }
        },
        sets: {
            0: {
                weight: 81,
                reps: 1
            },
            1: {
                weight: 82,
                reps: 2
            },
            2: {
                weight: 83,
                reps: 3
            },
            3: {
                weight: 84,
                reps: 4
            }
        }
    },
    "pullups": {
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
        sets: {
            0: {
                weight: 71,
                reps: 1
            },
            1: {
                weight: 72,
                reps: 2
            },
            2: {
                weight: 73,
                reps: 3
            }
        }
    },
    "squat": {
        name: "squat",
        primaryMuscles: {
            [MuscleType.QUADRICEPS]: {
                participation: 1
            },
        },
        secondaryMuscles: {
            [MuscleType.LOWER_BACK]: {
                participation: 0.5
            },
        },
        sets: {
            0: {
                weight: 60,
                reps: 8
            },
            1: {
                weight: 61,
                reps: 8
            },
            2: {
                weight: 62,
                reps: 7
            },
            3: {
                weight: 63,
                reps: 6
            },
            4: {
                weight: 64,
                reps: 5
            }
        }
    }
}

const setPerExercise = {
    //exerciseIndex: setIndex
    "0": 1,
    "1": 2
}

const weightRepsPerExerciseSet = {
    "01": {
        weight: 1,
        set: 2
    },
    "00": {
        weight: 12,
        set: 24
    },
}

const exampleResultOfWorkoutTransformation: Record<string, number> = {
    [MuscleType.CHEST]: 1920,
    [MuscleType.UPPER_BACK]: 1620,
    [MuscleType.TRICEPS]: 980,
    [MuscleType.BICEPS]: 320,
    [MuscleType.LOWER_BACK]: 320,
}

export const DIFICULTIES_PER_WEEK = Object.freeze({
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
})