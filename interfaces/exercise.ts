
export interface Set {
    [key: number]: {
        weight: number,
        reps: number
    }
}

export interface Exercise {
    name: string
    primaryMuscles: Record<string, any>
    secondaryMuscles: Record<string, any>
    sets: Set
    volume?: number | null
}

export interface Workout {
    [key: string]: Exercise
}

export interface InvolvedMuscles extends Record<string, number> { }