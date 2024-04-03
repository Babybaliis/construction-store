import React, {useEffect, useState} from 'react';
import '../style/style.scss';
import SearchForm from "../components/SearchForm";
import {Product} from "../../Types";
import ProductApi from "../api/ProductApi";
import ProductTable from "../components/ProductTable";

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isHavePagination, setIsHavePagination] = useState<boolean>(false)

    const handleSearch = (id: number | null, name: string, type: string) => {
        setIsHavePagination(!!id || name.length > 0 || type.length > 0)
        setProducts(ProductApi.getProducts(id, name, type));
    };

    useEffect(() => {
        handleSearch(null, '', '');
    }, []);

    return (
        <main className="products">
            <div className="container">
                <SearchForm onSearch={handleSearch}/>
                <ProductTable products={products} isHavePagination={isHavePagination}/>
            </div>
        </main>

    );
};

export default Products;
