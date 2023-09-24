export interface GeneralState {
    search: string;
    petsList: any[] | PetsList[];
    details: PetsList | undefined
}

export interface PetsList {
    _id: string
    breed: String,
    weight: String,
    maleHeight: String,
    femaleHeight: String,
    colors: String,
    origin: String,
    urlImg: string,
    details: string,
}