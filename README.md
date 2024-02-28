
# E-commerce React Project
##¡Bienvenido al proyecto de e-commerce El Club del Mate!

Este proyecto React fue creado con el objetivo de proporcionar una plataforma de compra en línea para productos relacionados con el mate. Aquí encontrarás una variedad de componentes diseñados para brindar una experiencia de usuario fluida y agradable mientras navegas por los productos y realizas compras.

## Componentes

### NavBar
Este componente representa la barra de navegación que se encuentra en la parte superior del sitio. Contiene enlaces a las diferentes secciones del eCommerce.

### CartWidget
El componente CartWidget muestra un icono que representa el carrito de compras. Al hacer clic en este icono, los usuarios pueden ver el contenido de su carrito de compras.

### ItemListContainer
ItemListContainer es responsable de renderizar la lista de productos disponibles. Recibe datos del servidor y muestra los productos en función de los parámetros proporcionados.

### ItemList
Este componente muestra una lista de productos. Cada elemento de la lista es un componente ItemDetail que muestra los detalles del producto.

### ItemDetailContainer
ItemDetailContainer gestiona la lógica para obtener los detalles de un producto específico del servidor y pasarlos al componente ItemDetail.

### ItemDetail
ItemDetail muestra los detalles de un producto individual, como su nombre, imagen, descripción y precio. Permite a los usuarios agregar el producto al carrito de compras.

### ItemQuantitySelector
ItemQuantitySelector es un componente que permite a los usuarios seleccionar la cantidad de un producto que desean comprar.

### Description
Description muestra la descripción detallada de un producto.

### AddItemButton
AddItemButton es un botón que permite a los usuarios agregar un producto al carrito de compras.

### Checkout
Checkout es responsable de procesar el pago y finalizar la compra.

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Una vez que se completen las instalaciones, ejecuta `npm start` para iniciar el servidor de desarrollo.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y commitea (`git commit -am 'Agrega una nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Crea un nuevo Pull Request.

¡Esperamos que disfrutes navegando por nuestro e-commerce de mates y accesorios relacionados al mate! ¡Gracias por tu interés y apoyo!
