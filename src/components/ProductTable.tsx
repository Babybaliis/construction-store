import React from 'react';
import {Table} from 'antd';
import {Product} from "../../Types";

interface ProductTableProps {
    products: Product[];
    isHavePagination: boolean;
}

const ProductTable = ({products, isHavePagination}: ProductTableProps) => {
    const paginationSize = 5
    const columns = [
        {
            title: 'Идентификатор',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Наименование',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Вид товара',
            dataIndex: 'type',
            key: 'type',
        },
    ];

    const pageSize = isHavePagination ? paginationSize : !!products ? products.length : paginationSize
    return <Table className="products-table" columns={columns} dataSource={products} rowKey="id"
                  pagination={{pageSize: pageSize}}
    />;
};

export default ProductTable;
