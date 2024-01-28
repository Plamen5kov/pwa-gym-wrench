
export interface Set {
    weight: number,
    reps: number
}

export interface Exercise {
    name: string,
    primaryMuscles: Record<string, any>,
    secondaryMuscles: Record<string, any>,
    sets: Array<Set>,
    volume?: number | null
}

export interface InvolvedMuscles extends Record<string, number> { }