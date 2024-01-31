const products = [

   {
      id: '1',
      category: 'mates',
      nombre: "Mate Imperial de Acero Inoxidable",
      imagen: "data:image/jpeg;base64,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",
      precio: "$16890",
      descripcion: "El Mate Imperial de Acero Inoxidable es una obra maestra de diseño y funcionalidad. Fabricado con los más altos estándares de calidad, este mate combina la elegancia del acero inoxidable con la tradición del mate argentino.",
   },

   {
      id: '2',
      category: 'mates',
      nombre: "Mate Camionero de Acero Inoxidable",
      imagen: "data:image/jpeg;base64,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",
      precio: "$11900",
      descripcion: "El Mate Camionero de Acero Inoxidable es una opción resistente y funcional diseñada para acompañarte en tus viajes. Fabricado con acero inoxidable de alta calidad, este mate ha sido creado pensando en la comodidad y durabilidad para los amantes del mate que están siempre en movimiento.",
   },

   {
      id: '3',
      category: 'mates',
      nombre: "Mate Camionero de Madera",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYM2I6M-ifMXK-O83PgZxh-ywDZ4Hy2iTUNBQBjhEIA&s",
      precio: "$10980",
      descripcion: "El Mate Camionero de Madera es una fusión perfecta entre tradición y estilo moderno. Fabricado con madera de alta calidad, este mate está diseñado para los amantes del mate que aprecian la calidez y la estética única de la madera natural.",
   },

   {
      id: '4',
      category: 'mates',
      nombre: "Mate Imperial de Color Marrón de Acero",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAWBg0xZmYuscd1xm8WEbtnXni2tF_KvCg1K81QlmiCg&s",
      precio: "$18900",
      descripcion: "El Mate Imperial de Color Marrón de Acero fusiona la robustez del acero con la calidez del color marrón, creando una pieza única que combina durabilidad con estilo. Este mate es una elección elegante para aquellos que buscan un equilibrio entre resistencia y estética.",
   },

   {
      id: '5',
      category: 'mates',
      nombre: "Mate de Algarrobo",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-bhSd875wSIIZ70_svF-_cl76KsNuUcIRg&usqp=CAU",
      precio: "$11890",
      descripcion: "El Mate de Algarrobo es una obra maestra artesanal que destaca por la belleza natural de la madera de algarrobo. Este mate refleja la tradición y la artesanía, ofreciendo una experiencia auténtica para los amantes del mate que aprecian la calidez y la singularidad de los materiales naturales.",
   },

   {
      id: '6',
      category: 'mates',
      nombre: "Mate de Calabaza Intervenido con Diseño de Cocodrilo",
      imagen: 'data:image/jpeg;base64,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',
      precio: "$9990",
      descripcion: "Sumérgete en la exquisita combinación de la tradición del mate de calabaza y el arte único de un diseño intervenido con motivo de cocodrilo. Este mate es mucho más que un recipiente; es una obra de arte funcional que aporta un toque distintivo a tu experiencia mateada.",
   },

   {
      id: "7",
      category: "termos",
      nombre: "Termo de Acero Inoxidable 1L con Funda de Silicona",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYoBaL0Jl__DmbggydoLAGZZe7hczk4MpqKnKHCzP68LiFmFkbagLJhBVOrLnMyq4izo&usqp=CAU",
      precio: "$25990",
      descripcion: "Este termo de acero inoxidable con una capacidad de 1 litro es perfecto para mantener tus bebidas calientes o frías durante horas. Viene con una práctica funda de silicona para un agarre seguro y cómodo.",
    },

    {
      id: "8",
      category: "termos",
      nombre: "Termo de Viaje de Doble Pared 750ml con Taza Integrada",
      imagen: 'https://m.media-amazon.com/images/I/51KlV1SBt4L.jpg',
      precio: "$22990",
      descripcion: "Este termo de viaje de doble pared con una capacidad de 750ml viene con una taza integrada, ideal para llevar tus bebidas favoritas contigo mientras estás en movimiento. Mantiene las bebidas calientes o frías durante horas."
   },

   {
      id: "9",
      category: "termos",
      nombre: "Termo Eléctrico Peabody de Acero Inoxidable 1.5 Litros",
      imagen: 'https://www.bidcom.com.ar/publicacionesML/productos/PEABO01X/1000x1000-PEABO01N.jpg',
      precio: "$44990",
      descripcion: "El termo eléctrico Peabody de acero inoxidable con capacidad de 1.5 litros es perfecto para mantener tus bebidas calientes en todo momento. Con su función eléctrica, puedes mantener tu café, té o agua caliente durante horas."
   },

   {
      id: "10",
      category: "accesorios",
      nombre: "Matera de Cuero con Diseño Tradicional",
      imagen: 'https://acdn.mitiendanube.com/stores/990/559/products/matera-de-cuero-11-e53bdb461217a764c216465192735383-1024-1024.jpg',
      precio: "$10490",
      descripcion: "Esta matera de cuero con diseño tradicional es el accesorio ideal para transportar y proteger tu termo y mate. Fabricada con cuero de alta calidad y con un diseño artesanal, esta matera combina estilo y funcionalidad. Cuenta con compartimentos internos para organizar tus accesorios y un cierre seguro para mayor comodidad."
    },

    {
      id: "11",
      category: "accesorios",
      nombre: "Despolvillador de Yerba Mate",
      imagen: 'https://acdn.mitiendanube.com/stores/001/707/768/products/buenacepa-despolvillador-colores1-c833bd5314c66eb65116263575554543-640-0.jpg',
      precio: "$6000",
      descripcion: "El despolvillador de yerba mate es ideal para mantener tu yerba mate libre de polvo. Su diseño práctico te permite colar la yerba de manera eficiente y sin esfuerzo. Fabricado con materiales de alta calidad, es resistente y fácil de usar."
    },

    {
      id: "12",
      category: "accesorios",
      nombre: "Bombilla de Acero Inoxidable Curvada",
      imagen: 'https://apolomates.com.ar/wp-content/uploads/2016/08/Pico-de-loro-acero-1.jpg',
      precio: "$4490",
      descripcion: "Esta bombilla de acero inoxidable curvada es el complemento perfecto para tu mate. Su diseño ergonómico te permite disfrutar de tu mate de manera cómoda y práctica. Fabricada con materiales de alta calidad, es resistente y fácil de limpiar."
    }
       
]


export const getProducts = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products)
      }, 500)
   })
}

export const getProductById = (productId) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products.find(prod => prod.id === productId))
      }, 500)
   })
}

export const getProductsByCategory = (productCategory) => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(products.filter(prod => prod.category === productCategory))
      }, 500)
   })
}

