import React, {useState, useEffect} from 'react';
import ProductApi from "../api/ProductApi";
import {Input, Button, Select, Row, Col} from 'antd';
import '../pages/Products.scss';

interface SearchFormProps {
    onSearch: (id: number | null, name: string, type: string) => void;
}

const SearchForm = ({onSearch}: SearchFormProps) => {
    const [types, setTypes] = useState<string[]>([]);
    const [id, setId] = useState<number | null>(null);
    const [name, setName] = useState<string>('');
    const [type, setType] = useState<string>('');

    const handleClick = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(id, name, type);
    };

    const onReset = (event: React.FormEvent) => {
        event.preventDefault();
        setId(null)
        setName('')
        setType('')
        onSearch(null, '', ''); // вызовите onSearch с пустыми параметрами
    };

    useEffect(() => {
        setTypes(ProductApi.getTypes());
    }, []);

    return (
        <section className="products-search">
            <Row gutter={16}>
                <Col>
                    <label>
                        Идентификатор:
                        <Input type="number" value={id || ''}
                               onChange={e => setId(Number(e.target.value))}
                        />
                    </label>
                </Col>
                <Col>
                    <label>
                        Наименование:
                        <Input type="text" value={name} onChange={e => setName(e.target.value)}/>
                    </label>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col>
                    <label>
                        <p>Вид товара:</p>
                        <Select
                            value={type}
                            onChange={setType}
                            style={{width: 120}}

                        >
                            <Select.Option value="">Все</Select.Option>
                            {!!types && types.filter((value, index, self) => self.indexOf(value) === index)
                                .map((type, index) => (
                                    <Select.Option key={index} value={type}>{type}</Select.Option>
                                ))
                            }
                        </Select>
                    </label>
                </Col>
                <Col>
                    <Button type="primary" onClick={handleClick}>Поиск</Button>
                    <Button onClick={onReset}>Сброс</Button>
                </Col>
            </Row>
        </section>
    );
};

export default SearchForm;
