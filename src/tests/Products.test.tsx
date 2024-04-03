import {fireEvent, render, screen} from '@testing-library/react';
import React from 'react';
import {Product} from "../../Types";
import ProductApi from "../api/ProductApi";
import Products from '../pages/Products';
import '@testing-library/jest-dom';

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

jest.mock("../api/ProductApi"); // Мокаем API

describe('Products', () => {
    it('renders correctly', () => {
        render(<Products/>);
        expect(screen.getByText('Поиск')).toBeInTheDocument();
    });

    it('calls the API and renders the products', async () => {
        const mockProducts: Product[] = [
            {id: 1, name: 'Product 1', type: 'Type 1'},
            {id: 2, name: 'Product 2', type: 'Type 2'},
        ];

        const mockTypes: string[] = [
            'type 1',
            'type 2'
        ];

        (ProductApi.getProducts as jest.Mock).mockReturnValue(mockProducts);
        (ProductApi.getTypes as jest.Mock).mockReturnValue(mockTypes);

        render(<Products/>);

        fireEvent.click(screen.getByText('Поиск'));
        for (const value of mockProducts) {
            const _ = async () => {
                expect(await screen.findByText(value.name)).toBeInTheDocument();
            }
        }
        for (const value of mockTypes) {
            const _ = async () => {
                expect(await screen.findByText(value)).toBeInTheDocument();
            }
        }
    });
});
