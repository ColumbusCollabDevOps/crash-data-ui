export interface Near {
    type: string;
    coordinates: number[];
}

export interface CrashDataRequest {
    geoNear: string;
    near: Near;
    spherical: boolean;
    maxDistance: number;
}
