import {Product} from "../../Types";
import products from '../resource/products.json';
import types from '../resource/types.json';

export default {
    getProducts(id: number | null, name: string, type: string): Product[] {
        return products.filter(item =>
            (!id || item.id === id) &&
            (name === "" || item.name.includes(name)) &&
            (type === "" || item.type.toLocaleLowerCase() === type.toLocaleLowerCase())
        )
    },
    getTypes(): string[] {
        return types
    },
}