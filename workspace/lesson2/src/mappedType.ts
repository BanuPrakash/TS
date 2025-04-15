type Point = {
    x: number,
    y: number
}

let point:Point = {x : 10, y: 33};
point.x = 44;

// Mapped Type
type ReadOnlyType<T> = {
    readonly [K in keyof T]: T[K]
}


type ImmutablePoint  = ReadOnlyType<Point>

let readPoint: ImmutablePoint = point;

readPoint.x = 22;

type Muttable<T> = {
    -readonly [K in keyof T]: T[K]
}

type OptionalType<T> = {
    [K in keyof T]?: T[K]
}
