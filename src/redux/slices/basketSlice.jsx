import { createSlice } from '@reduxjs/toolkit'

const getBasket = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const initialState = {
    products: getBasket(),
    drawer: false,
    totalPrice: 0
}



const writeToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
}



export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                const extractedProduct = state.products.filter((product) => product.id != action.payload.id);
                findProduct.amount += action.payload.amount;
                state.products = [...extractedProduct, findProduct];
                writeToStorage(state.products);
            }
            else {
                state.products = [...state.products, action.payload];
                writeToStorage(state.products);
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        calculateBasket: (state) => {
            state.totalPrice = 0;
            state.products && state.products.map((product) => {
                state.totalPrice += product.price * product.amount;
            })
        },
        removeProduct: (state, action) => {

            const extractedProducts = state.products.filter((product) => product.id == action.payload.id);
            writeToStorage([extractedProducts]);
        }
    }
})

export const { addToBasket, setDrawer, calculateBasket, removeProduct } = basketSlice.actions

export default basketSlice.reducer  