import { createSlice } from '@reduxjs/toolkit';

// Plant images will be imported from public folder
const plantImages = {
  monstera: '/images/monstera.jpg',
  ficus: '/images/ficus.jpg',
  pothos: '/images/pothos.jpg',
  snake: '/images/snake-plant.jpg',
  zz: '/images/zz-plant.jpg',
  peace: '/images/peace-lily.jpg',
  aloe: '/images/aloe-vera.jpg',
  spider: '/images/spider-plant.jpg',
  succulent: '/images/succulent.jpg',
};

const initialState = {
  products: [
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 35.99,
      image: plantImages.monstera,
      category: 'Large Plants',
      description: 'The Swiss Cheese Plant, known for its unique leaf holes and easy care.',
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 45.99,
      image: plantImages.ficus,
      category: 'Large Plants',
      description: 'Trendy indoor plant with large, violin-shaped leaves.',
    },
    {
      id: 3,
      name: 'Golden Pothos',
      price: 18.99,
      image: plantImages.pothos,
      category: 'Hanging Plants',
      description: 'Fast-growing vine with heart-shaped, golden-variegated leaves.',
    },
    {
      id: 4,
      name: 'Snake Plant',
      price: 24.99,
      image: plantImages.snake,
      category: 'Low Maintenance',
      description: 'Architectural plant with stiff, upright leaves that purify air.',
    },
    {
      id: 5,
      name: 'ZZ Plant',
      price: 29.99,
      image: plantImages.zz,
      category: 'Low Maintenance',
      description: 'Glossy, dark green leaves that thrive in low light conditions.',
    },
    {
      id: 6,
      name: 'Peace Lily',
      price: 22.99,
      image: plantImages.peace,
      category: 'Flowering Plants',
      description: 'Elegant white flowers and glossy leaves that remove air pollutants.',
    },
    {
      id: 7,
      name: 'Aloe Vera',
      price: 15.99,
      image: plantImages.aloe,
      category: 'Succulents',
      description: 'Medicinal plant with thick, fleshy leaves containing healing gel.',
    },
    {
      id: 8,
      name: 'Spider Plant',
      price: 19.99,
      image: plantImages.spider,
      category: 'Hanging Plants',
      description: 'Fast-growing plant that produces baby plantlets on long stems.',
    },
    {
      id: 9,
      name: 'Succulent Collection',
      price: 27.99,
      image: plantImages.succulent,
      category: 'Succulents',
      description: 'Assorted small succulents in decorative pots.',
    },
  ],
  categories: ['Large Plants', 'Hanging Plants', 'Low Maintenance', 'Flowering Plants', 'Succulents'],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // We don't need any reducers for products as they are static
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectCategories = (state) => state.products.categories;
export const selectProductsByCategory = (state, category) => 
  state.products.products.filter(product => product.category === category);

export default productsSlice.reducer;