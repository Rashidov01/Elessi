import { v4 as uuidv4 } from 'uuid';
import { CgTrees } from 'react-icons/cg';
import {
    BsChevronRight,
    BsEggFried,
} from 'react-icons/bs';
import {
    GiFruitTree,
    GiFruitBowl,
    GiDrinkMe,
    GiCakeSlice,
    GiMeat,
    GiAnglerFish,
    GiKiwiFruit,
    GiGrapes,
    GiBananaBunch,
    GiPotato,
} from 'react-icons/gi';
import { GiCommercialAirplane } from 'react-icons/gi';
import { BsHeadset, BsShieldLock } from 'react-icons/bs';
import { HiRefresh } from 'react-icons/hi';

import imgs from './assets/imgs';
const userProducts = [];
const sentProduct = [];
const homeSlider = [
    {
        img: imgs.slider1,
        subTitle: 'ELESSI STORE',
        title: 'Fresh vegetables Sale up',
        spanTitle: 'to 30% Off',
        s:'',
        c:'',
    },
    {
        img: imgs.slider2,
        subTitle: 'Daily Promotions',
        title: 'Fresh Lemon discount up',
        spanTitle: '40% off',
        s:' statiks',
        c:'',
    },
    {
        img: imgs.slider3,
        subTitle: 'Shop our freshest',
        title: 'Fresh Hand-Picked Vegetables',
        spanTitle: 'Everyday!',
        s:' statiks',
        c:' centre'
    },
]
const demoData = [
    {
        title: 'Home Pages',
        items: [
            'Fashion',
            'Fashion 2',
            'Fashion 3',
            'Fashion 4',
            'Fashion 5',
        ]
    },
    {
        title: 'Home Pages1',
        items: [
            'Bag',
            'Bike',
            'Pets',
            'Baby',
            'Shoes',
            'Jewelry',
            'Watches',
            'Furniture',
            'Cosmetic',
        ]
    },
    {
        title: 'Home Pages2',
        items: [
            'T-Shirt',
            'Organic',
            'Face Mask',
            'Christmas',
            'Demo RTL',
        ]
    },
    {
        title: 'Features',
        items: [
            'Frequently Bought Together',
            'Variant Images Grouped',
            'Product — Video',
            'Product — 3D, AR models',
            'Advance Product Type',
            'Cookies law info',
            'Grid/List switcher',
            'Pickup Availability',
            'Compare',
        ]
    },
]
const iconData = [
    {
        icon: <GiFruitTree />,
        text: 'Fruits',
        chev: <BsChevronRight />,
        datas: [
            {
                title: 'Fresh Fruit',
                subTitle: [
                    'Apples & Bananas',
                    'Berries',
                    'Grapes',
                    'Mangoes',
                    'Melons',
                    'Pears',
                    'Plums & Apricots',
                    'Seasonal'
                ]
            },
            {
                title: 'Nut Gifts',
                subTitle: [
                    'Avocados & Peppers',
                    'Broccoli & Zucchini',
                    'Celery, Fennel & Leeks',
                    'Heirloom Tomatoes',
                    'Lettuce & Leafy',
                    'Mushrooms',
                ]
            }
        ]
    },
    {
        icon: <GiFruitBowl />,
        text: 'Vegetables',
        chev: <BsChevronRight />,
        datas: [
            {
                title: 'Fresh Fruit',
                subTitle: [
                    'Apples & Bananas',
                    'Berries',
                    'Grapes',
                    'Mangoes',
                    'Melons',
                    'Pears',
                    'Plums & Apricots',
                    'Seasonal'
                ]
            },
            {
                title: 'Nut Gifts',
                subTitle: [
                    'Avocados & Peppers',
                    'Broccoli & Zucchini',
                    'Celery, Fennel & Leeks',
                    'Heirloom Tomatoes',
                    'Lettuce & Leafy',
                    'Mushrooms',
                ]
            }
        ]
    },
    {
        icon: <GiDrinkMe />,
        text: 'Drinks',
        chev: <BsChevronRight />,
        datas: [
            {
                title: 'Fresh Fruit',
                subTitle: [
                    'Apples & Bananas',
                    'Berries',
                    'Grapes',
                    'Mangoes',
                    'Melons',
                    'Pears',
                    'Plums & Apricots',
                    'Seasonal'
                ]
            },
            {
                title: 'Nut Gifts',
                subTitle: [
                    'Avocados & Peppers',
                    'Broccoli & Zucchini',
                    'Celery, Fennel & Leeks',
                    'Heirloom Tomatoes',
                    'Lettuce & Leafy',
                    'Mushrooms',
                ]
            }
        ]
    },
    {
        icon: <BsEggFried />,
        text: 'Butter & Egges',
    },
    {
        icon: <CgTrees />,
        text: 'Trees',
    },
    {
        icon: <GiCakeSlice />,
        text: 'Cakes',
    },
    {
        icon: <GiMeat />,
        text: 'Meats',
    },
    {
        icon: <GiAnglerFish />,
        text: 'Fish',
    },
    {
        icon: <GiKiwiFruit />,
        text: 'Onions',
    },
    {
        icon: <GiGrapes />,
        text: 'Grapes',
    },
    {
        icon: <GiBananaBunch />,
        text: 'Banana',
    },
    {
        icon: <GiPotato />,
        text: 'Potatoes',
    },
]
const shopData = [
    {
        title: 'Shop Layouts',
        items: [
            'Grid Layout',
            'Masonry Layout',
            'Packery Layout',
            'Left Sidebar',
            'Right Sidebar',
            'Load more button',
            'Infinit scrolling',
            'Filters area',
            'Listing Collection',
            'RTL Shop page',
        ]
    }
]
const productData = [
    {
        title: 'Single Product',
        items: [
            'Product Detail Layout 1',
            'Product Detail Layout 2',
            'Product Detail Layout 3',
            'Product thumb at bottom',
            'Product thumb on right',
            'Advance Product Type',
            'Product Left Sidebar',
            'Product Right Sidebar',
            'Sidebar Full Height',
            'Product Tab Accordions',
            'ATC Button Full Width',
            'Product Full Width Layout',

        ]
    },
    {
        title: 'Single Product1',
        items: [
            'Product — Simple',
            'Product — Variable (Color/Size/etc.)',
            'Product — Pre-orders',
            'Product — Grouped',
            'Product — External / Affiliate',
            'Product — On Sale',
            'Product — Out of Stock',
            'Product — Video',
            'Product — 3D, AR models',
            'Product — Inner Zoom #1',
            'Product — External Zoom',
            'Product — Inner Zoom #2',

        ]
    },
    {
        title: 'Product Swatch',
        items: [
            'Swatch —  Color',
            'Swatch — Gallery',
            'Swatch — Images',
            'Swatch — Circle',
            'Swatch — Circle Color',
            'Swatch —  Radio',
            'Swatch — Radio Color',
            'Swatch — Rectangle',
            'Swatch — Rectangle Color',
            'Swatch — Simple',
            'Swatch — Simple Color',
            'Swatch — Advance Product Type',
        ]
    }
]
const data = {
    fruits: [
        {
            id:  uuidv4(),
            price: 5.00,
            name: "Pinkerton Avocado",
            img: imgs.fur1,
            img2: imgs.fur1_1,
            count:0,
            sum:0,
            sale: false,
            topRated: true,
            bestSelling: true,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id:  uuidv4(),
            price: 15.00,
            name: "Red Pithaya",
            img: imgs.fur2,
            img2: imgs.fur2_2,
            sale: true,
            count:0,
            sum:0,
            topRated: true,
            bestSelling: true,
            onSale: false,
            pro:70,
            salePercent: -25,
            saleCount: 20.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Bananas",
            img: imgs.fur3,
            img2: imgs.fur3_3,
            sale: false,
            topRated: false,
            count:0,
            sum:0,
            bestSelling: true,
            onSale: true,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Fresh Strawberries",
            img: imgs.fur4,
            img2: imgs.fur4_4,
            sale: true,
            count:0,
            sum:0,
            topRated: false,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: -50,
            saleCount: 20.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Organic Lemon",
            img: imgs.fur5,
            img2: imgs.fur5_5,
            sale: true,
            count:0,
            sum:0,
            topRated: false,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: -20,
            saleCount: 25.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Annurca Apples",
            img: imgs.fur6,
            img2: imgs.fur6_6,
            sale: false,
            topRated: false,
            count:0,
            sum:0,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "White Grape",
            img: imgs.fur7,
            img2: imgs.fur7_7,
            sale: false,
            topRated: false,
            count:0,
            sum:0,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 8.00,
            name: "Pomegranate",
            img: imgs.fur8,
            img2: imgs.fur8_8,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },

    ],
    vegatables: [
        {
            id: uuidv4(),
            price: 15.00,
            name: "Plum Tomato",
            img: imgs.vech1,
            img2: imgs.vech1_1,
            sale: false,
            topRated: true,
            count:0,
            sum:0,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Violet Cauliflower",
            img: imgs.vech2,
            img2: imgs.vech2_2,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -34,
            saleCount: 15.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Black Eggplants",
            img: imgs.vech3,
            img2: imgs.vech3_3,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Orange Cauliflower",
            img: imgs.vech4,
            img2: imgs.vech4_4,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Organic Almaverde",
            img: imgs.vech5,
            img2: imgs.vech5_5,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Red Onion",
            img: imgs.vech6,
            img2: imgs.vech6_6,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "Red Cabbage",
            img: imgs.vech7,
            img2: imgs.vech7_7,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Chili Pepper",
            img: imgs.vech8,
            img2: imgs.vech8_8,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },

    ],
    milks: [
        {
            id: uuidv4(),
            price: 10.00,
            name: "Peanut Butter",
            img: imgs.milk1,
            img2: imgs.milk1_1,
            sale: true,
            topRated: false,
            bestSelling: false,
            onSale: false,
            count:0,
            sum:0,
            pro:70,
            salePercent: -17,
            saleCount: 12.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Butter Pista",
            img: imgs.milk2,
            img2: imgs.milk2_2,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: true,
            pro:70,
            salePercent: -34,
            saleCount: 10.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 8.00,
            name: "Basil Pesto",
            img: imgs.milk3,
            img2: imgs.milk3_3,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: true,
            pro:70,
            salePercent: -20,
            saleCount: 10.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Sorbet Ice Cream",
            img: imgs.milk4,
            img2: imgs.milk4_4,
            sale: true,
            topRated: false,
            count:0,
            sum:0,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: -20,
            saleCount: 15.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Ratto Milk",
            img: imgs.milk5,
            img2: imgs.milk5_5,
            count:0,
            sum:0,
            sale: false,
            topRated: false,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Purea Lime",
            img: imgs.milk6,
            img2: imgs.milk6_6,
            count:0,
            sum:0,
            sale: true,
            topRated: false,
            bestSelling: false,
            onSale: false,
            pro:70,
            salePercent: -34,
            saleCount: 18.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Pineapple Slices",
            img: imgs.milk7,
            img2: imgs.milk7_7,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -20,
            saleCount: 25.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 16.00,
            name: "Pomegranate Juice",
            img: imgs.milk8,
            img2: imgs.milk8_8,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
    ],
    allProducts: [

        {
            id: 1,
            price: 5.00,
            name: "Pinkerton Avocado",
            img: imgs.fur1,
            img2: imgs.fur1_1,
            sale: false,
            topRated: true,
            bestSelling: true,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "Red Pithaya",
            img: imgs.fur2,
            img2: imgs.fur2_2,
            sale: true,
            topRated: true,
            bestSelling: true,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -25,
            saleCount: 20.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Bananas",
            img: imgs.fur3,
            img2: imgs.fur3_3,
            sale: false,
            topRated: false,
            bestSelling: true,
            count:0,
            sum:0,
            onSale: true,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Fresh Strawberries",
            img: imgs.fur4,
            img2: imgs.fur4_4,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -50,
            saleCount: 20.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Organic Lemon",
            img: imgs.fur5,
            img2: imgs.fur5_5,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -20,
            saleCount: 25.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Annurca Apples",
            img: imgs.fur6,
            img2: imgs.fur6_6,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "White Grape",
            img: imgs.fur7,
            img2: imgs.fur7_7,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 8.00,
            name: "Pomegranate",
            img: imgs.fur8,
            img2: imgs.fur8_8,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "Plum Tomato",
            img: imgs.vech1,
            img2: imgs.vech1_1,
            sale: false,
            topRated: true,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Violet Cauliflower",
            img: imgs.vech2,
            img2: imgs.vech2_2,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -34,
            saleCount: 15.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Black Eggplants",
            img: imgs.vech3,
            img2: imgs.vech3_3,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Orange Cauliflower",
            img: imgs.vech4,
            img2: imgs.vech4_4,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 18.00,
            name: "Organic Almaverde",
            img: imgs.vech5,
            img2: imgs.vech5_5,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Red Onion",
            img: imgs.vech6,
            img2: imgs.vech6_6,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 15.00,
            name: "Red Cabbage",
            img: imgs.vech7,
            img2: imgs.vech7_7,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Chili Pepper",
            img: imgs.vech8,
            img2: imgs.vech8_8,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 10.00,
            name: "Peanut Butter",
            img: imgs.milk1,
            img2: imgs.milk1_1,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -17,
            saleCount: 12.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Butter Pista",
            img: imgs.milk2,
            img2: imgs.milk2_2,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: true,
            pro:70,
            salePercent: -34,
            saleCount: 10.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 8.00,
            name: "Basil Pesto",
            img: imgs.milk3,
            img2: imgs.milk3_3,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: true,
            pro:70,
            salePercent: -20,
            saleCount: 10.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Sorbet Ice Cream",
            img: imgs.milk4,
            img2: imgs.milk4_4,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -20,
            saleCount: 15.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Ratto Milk",
            img: imgs.milk5,
            img2: imgs.milk5_5,
            sale: false,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },
        {
            id: uuidv4(),
            price: 12.00,
            name: "Purea Lime",
            img: imgs.milk6,
            img2: imgs.milk6_6,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -34,
            saleCount: 18.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 20.00,
            name: "Pineapple Slices",
            img: imgs.milk7,
            img2: imgs.milk7_7,
            sale: true,
            topRated: false,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            pro:70,
            salePercent: -20,
            saleCount: 25.00,
            save: false,
        },
        {
            id: uuidv4(),
            price: 16.00,
            name: "Pomegranate Juice",
            img: imgs.milk8,
            img2: imgs.milk8_8,
            sale: false,
            topRated: false,
            pro:70,
            bestSelling: false,
            count:0,
            sum:0,
            onSale: false,
            salePercent: 0,
            saleCount: 0,
            save: false,
        },

    ]
}
const homeSliderBotm = [
    {
        icn:<GiCommercialAirplane />,
        title:'Free Shipping',
        text:'Free Shipping for all US order',
    },
    {
        icn:<BsHeadset />,
        title:'Support 24/7',
        text:'We support 24h a day',
    },
    {
        icn:<HiRefresh />,
        title:'100% Money Back',
        text:'You have 30 days to Return',
    },
    {
        icn:<BsShieldLock />,
        title:'Payment Secure',
        text:'We ensure secure payment',
    }
]
const topSectionImgs = [
    {
        img:imgs.top1,
        title:'Milks & Creams',
    },
    {
        img:imgs.top2,
        title:'Fruits',
    },
    {
        img:imgs.top3,
        title:'Vegetables',
    },
    {
        img:imgs.top4,
        title:'Nut Gifts',
    },
    {
        img:imgs.top5,
        title:'Butter & Egges',
    },
    {
        img:imgs.top6,
        title:'Fresh Meats',
    },
    {
        img:imgs.top7,
        title:'Trees',
    },
]
const botmCards = [
    {
        img:imgs.botm1,
        title:'Joobie Ice Cream',
    },
    {
        img:imgs.botm2,
        title:'Fresh Guava Juice',
        
    },
    {
        img:imgs.botm3,
        title:'Fresh Vegetables',
        
    },
]
const partnores = [
    {
        img:imgs.part1,
        id:1,
    },
    {
        img:imgs.part2,
        id:2,
    },
    {
        img:imgs.part3,
        id:3,
    },
    {
        img:imgs.part4,
        id:4,
    },
    {
        img:imgs.part5,
        id:5,
    },
    {
        img:imgs.part6,
        id:6,
    },
    {
        img:imgs.part7,
        id:6,
    },

]
export {
    sentProduct,
    userProducts,
    partnores,
    botmCards,
    demoData,
    data,
    iconData,
    shopData,
    productData,
    homeSlider,
    homeSliderBotm,
    topSectionImgs,
}