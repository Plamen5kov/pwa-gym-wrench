import { Workout, InvolvedMuscles, Exercise } from "@/interfaces/exercise"
import { DIFICULTY_MAX, DIFICULTY_MIN } from "./constants"

export class CalculationUtility {

    public static getInvolvedMuscles(workout: Workout): InvolvedMuscles {

        return Object.values(workout)
            // calculate volume per muscle and add it to a volume property inside each muscle
            .map((exercise: Exercise) => {
                const workoutVolume = Object.values(exercise.sets).reduce((acc, s) => acc + (s.weight * s.reps), 0)
                return {
                    name: exercise.name,
                    primaryMuscles: {
                        ...CalculationUtility
                            .mergeMuscleGroupsAndAddCalculatedVolume(exercise.primaryMuscles, workoutVolume)
                            .reduce(CalculationUtility.mergeObjects, {})
                    },
                    secondaryMuscles: {
                        ...CalculationUtility
                            .mergeMuscleGroupsAndAddCalculatedVolume(exercise.secondaryMuscles, workoutVolume)
                            .reduce(CalculationUtility.mergeObjects, {})
                    },
                }
            })
            // merge primary and secondary muscles
            .map((transformedExercise: any) => {
                const primaryMuscleVol = Object
                    .entries(transformedExercise.primaryMuscles)
                    .map(CalculationUtility.transformAndAddVolume)
                    .reduce(CalculationUtility.mergeObjects, {})
                const secondaryMuscleVol = Object
                    .entries(transformedExercise.secondaryMuscles)
                    .map(CalculationUtility.transformAndAddVolume)
                    .reduce(CalculationUtility.mergeObjects, {})

                const merged = [primaryMuscleVol, secondaryMuscleVol].reduce(CalculationUtility.mergeMuslesIntercection, {})
                return { ...merged }
            })
            //merge muscles from different exercises and add volumes where muscles overlap
            .reduce(CalculationUtility.mergeMuslesIntercection, {})
    }

    public static mergeMuslesIntercection = (acc: any, val: any) => {
        const intersectProps = Object.keys(val).filter(k => Object.hasOwn(acc, k))
        const calculatedIntersect = intersectProps.reduce((ac: any, ip: any) => ({ ...ac, [ip]: acc[ip] + val[ip] }), {})
        const augmentedVal = { ...val, ...calculatedIntersect }

        return { ...acc, ...augmentedVal }
    }

    public static mergeObjects = (acc: any, val: any) => ({ ...acc, ...val })

    public static mergeMuscleGroupsAndAddCalculatedVolume(arr: any, calculatedVolume: number) {
        return Object.entries(arr)
            .map(([key, val]: any) => ({
                [key]: {
                    participation: val.participation,
                    volume: Math.round(calculatedVolume * val.participation)
                }
            }))
    }

    public static transformAndAddVolume = ([key, val]: any, _: any, arr: any) => ({ [key]: val.volume })

    public static arrayToObjectKeysWithValue(arr: Array<string | number>, defaultValue: number = 1) {
        return arr.reduce((acc, value) => ({ ...acc, [value]: defaultValue }), {})
    }

    public static calculateDificultyPerMuscle(volume: number, minVolumePerMuscle: number, maxVolumePerMuscle: number) {
        return this.scaleBetween(volume, DIFICULTY_MIN, DIFICULTY_MAX, minVolumePerMuscle, maxVolumePerMuscle)
    }

    public static scaleBetween(unscaledNum: number, minAllowed: number, maxAllowed: number, min: number, max: number) {
        return Math.round((maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed);
    }

}
