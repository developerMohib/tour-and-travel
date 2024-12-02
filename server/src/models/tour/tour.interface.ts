interface ITour {
    name: string;
    durationHours: number;
    avarageRating: number;
    price: number;
    coverImage: string;
    image: string[];
    startDate: Date;
    startLocation: string;
    location: string[];
    slug: string;
}

export { ITour };
