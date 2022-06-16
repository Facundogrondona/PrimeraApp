const products = [
    {
        id: 1,
        nombre: 'Bowl de aguacate',
        receta: 'Bowl de aguacate: ¡Este postre además de ser delicioso es súper nutritivo! Disfruta de los grandes sabores que aportan el aguacate y los frutos rojos, bañados con una exquisita salsa de frutilla.',
        precio: 350,
        imagen:  '/img/recetas/bowl-de-aguacate.jpg',
        stock: 10,
        category: 'postre'
    },
    {
        id: 2,
        nombre: 'Ensalada de kiwi',
        receta: 'Receta refrescante y llena de vitaminas para su desayuno.',
        precio: 200,
        imagen: '/img/recetas/ensalada-de-kiwi.jpg',
        stock: 0,
        category: 'postre'
    },
    {
        id: 3,
        nombre: 'Mix de vegetales',
        receta: 'Mix de vegetales: La opción ideal si querés nutrirte y no tenés mucho tiempo. Este mix reúne los principales vegetales que no pueden faltar en un almuerzo o cena.',
        precio: 300,
        imagen: '/img/recetas/mix-de-vegetales.jpg',
        stock: 5,
        category: 'principal'
    },
    {
        id: 4,
        nombre: 'Pimentones a la Juliana',
        receta: 'Pimientos a la juliana: Disfruta de esta explosión de colores con esta súper ensalada con pimientos rojos, verdes y amarillos rehogados suavemente con finas hierbas.',
        precio: 300,
        imagen: '/img/recetas/pimentones-a-la-juliana.jpg',
        stock: 15,
        category: 'principal'
    },
    {
        id: 5,
        nombre: 'Plato oriental',
        receta: 'Plato oriental: Transpórtate a oriente con éste plato que reúne los principales sabores de ésta cultura. Ideal si te gustan los platos exóticos.',
        precio: 400,
        imagen: '/img/recetas/plato-oriental.jpg',
        stock: 3,
        category: 'principal'
    },
    {
        id: 6,
        nombre: 'Remolachas horneadas',
        receta: 'Remolachas horneadas: Una guarnición ideal para acompañar cualquiera de tus comidas. Probá estas remolachas hervidas al vapor y potencia el sabor de tus platos.',
        precio: 380,
        imagen: '/img/recetas/remolachas-horneadas.jpg',
        stock: 8,
        category: 'principal'
    }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 3000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },2000)
    })
}