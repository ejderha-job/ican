export interface Task {
    categoryId: number;
    props:{
        name: string;
        description: string;
        price: number;
    }
}