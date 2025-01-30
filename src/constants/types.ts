export type FoodCategory = {
    _id: string;
    categoryName: string;
    count: number;
    foods:{
        _id: string;
        foodName: string;
        price: number;
        image: string;
        ingrediemts: string;
        createdAt: string;
        updatedAt: string;
    }[];
    };

export type Food = {
    _id: string;
    foodName: string;
    price: number;
    image: string;
    ingrediemts: string;
    };


