import { lazy } from 'react'
import { IconFile, IconUser } from '../icons'
// import IconCart from '../icons/IconCart'
// import IconConfig from '../icons/IconConfig'
import IconOptions from '../icons/IconOptions'
// import IconBank from '../icons/IconBank'
import { Route } from '../interfaces'

// import EditCategoryProduct from '../pages/home/products/categorys/EditCategoryProduct'
const Imagenes = lazy(() => import('../pages/home/imagenes/Imagenes'))
const Pedidos = lazy(() => import('../pages/home/pedidos/Pedidos'))
const Abonado = lazy(() => import('../pages/home/abonado/Abonado'))
const EditarAbonado = lazy(() => import('../pages/home/abonado/EditarAbonado'))
const Eventos = lazy(() => import('../pages/home/eventos/Eventos'))
const CrearEvento = lazy(() => import('../pages/home/eventos/CrearEvento'))
const Precios = lazy(() => import('../pages/home/precios/Precio'))
const PrecioButacas = lazy(() => import('../pages/home/precios/PrecioButacas'))
const PrecioReferencial = lazy(
  () => import('../pages/home/precios/PrecioReferencia')
)
const DetallePedido = lazy(() => import('../pages/home/pedidos/DetallePedido'))
// const BlogsPage = lazy(() => import('../pages/home/blogs/BlogsPage'))
// const ProductsPage = lazy(() => import('../pages/home/products/ProductsPage'))
// const CreateProduct = lazy(() => import('../pages/home/products/CreateProduct'))
// const EditProduct = lazy(() => import('../pages/home/products/EditProduct'))

// const CategoryProduct = lazy(
//   () => import('../pages/home/products/categorys/CategoryProduct')
// )

// const CreateCategoryProducto = lazy(
//   () => import('../pages/home/products/categorys/CreateCategoryProduct')
// )
// const EditCategoryProducto = lazy(
//   () => import('../pages/home/products/categorys/EditCategoryProduct')
// )

// const CategoryBlog = lazy(
//   () => import('../pages/home/blogs/categorys/CategoryBlog')
// )
// const CreateCategoryBlog = lazy(
//   () => import('../pages/home/blogs/categorys/CreateCategoryBlog')
// )
// const EditCategoryBlog = lazy(
//   () => import('../pages/home/blogs/categorys/EditCategoryBlog')
// )
// const CreateBlog = lazy(() => import('../pages/home/blogs/CreateBlog'))
// const EditBlog = lazy(() => import('../pages/home/blogs/EditBlog'))
// const Profile = lazy(() => import('../pages/home/Profile'))
// const Banks = lazy(() => import('../pages/home/banks/Banks'))
// const CreateBank = lazy(() => import('../pages/home/banks/CreateBank'))
// const EditBank = lazy(() => import('../pages/home/banks/EditarBank'))

export const homeRoutes: Route[] = [
  {
    icon: IconFile,
    name: 'Imagenes',
    path: 'imagenes',
    to: '/home/imagenes',
    component: Imagenes,
    subMenu: {
      value: false,
      paths: []
    }
  },
  {
    icon: IconFile,
    path: 'pedidos',
    name: 'Pedidos',
    to: '/home/pedidos',
    component: Pedidos,
    subMenu: {
      value: false,
      paths: [
        {
          icon: IconFile,
          name: 'Detalle Pedido',
          path: 'detalle-pedido/:id',
          to: '/home/detalle-pedido',
          component: DetallePedido,
          render: false
        }
      ]
    }
  },
  {
    icon: IconFile,
    name: 'Abonados',
    path: 'abonados',
    to: '/home/abonados',
    component: Abonado,
    subMenu: {
      value: false,
      paths: [
        {
          icon: IconFile,
          name: 'Editar-abonados',
          path: 'editar-abonados',
          to: '/home/editar-abonados/',
          component: EditarAbonado,
          render: false
        }
      ]
    }
  },
  {
    icon: IconUser,
    name: 'Eventos',
    to: '/home/eventos',
    path: 'eventos',
    component: Eventos,
    subMenu: {
      value: false,
      paths: [
        {
          icon: IconUser,
          name: 'Crear-evento',
          to: '/home/crear-evento',
          path: 'crear-evento',
          component: CrearEvento,
          render: false
        }
      ]
    }
  },
  {
    icon: IconFile,
    name: 'Precios',
    to: '/home/precios',
    path: 'precios',
    component: Precios,
    subMenu: {
      value: true,
      paths: [
        {
          icon: IconOptions,
          name: 'Precio de Butacas',
          path: 'butaca',
          to: '/home/butaca',
          component: PrecioButacas,
          render: true
        },
        {
          icon: IconFile,
          name: 'Precio de Referecial',
          path: 'referencial',
          to: '/home/referencial',
          component: PrecioReferencial,
          render: true
        }

        // {
        //   icon: IconOptions,
        //   name: 'Crear Categoria Blog',
        //   path: 'create-blog-category',
        //   to: '/home/create-blog-category',
        //   component: CreateCategoryBlog,
        //   render: false
        // },
        // {
        //   icon: IconOptions,
        //   name: 'Editar Categoria Blog',
        //   path: 'edit-blog-category/:id',
        //   to: '/home/edit-blog-category/:id',
        //   component: EditCategoryBlog,
        //   render: false
        // },
        // {
        //   icon: IconOptions,
        //   name: 'Crear Blog',
        //   path: 'create-blog',
        //   to: '/home/create-blog',
        //   component: CreateBlog,
        //   render: false
        // },
        // {
        //   icon: IconOptions,
        //   name: 'Editar Blog',
        //   path: 'edit-blog/:slug',
        //   to: '/home/edit-blog/:id',
        //   component: EditBlog,
        //   render: false
        // }
      ]
    }
  }
  // {
  //   icon: IconCart,
  //   name: 'Productos',
  //   to: '/home/products',
  //   path: 'products',
  //   component: ProductsPage,
  //   subMenu: {
  //     value: true,
  //     paths: [
  //       {
  //         icon: IconOptions,
  //         name: 'Categoria',
  //         path: 'products-category',
  //         to: '/home/products-category',
  //         component: CategoryProduct,
  //         render: true
  //       },
  //       {
  //         icon: IconCart,
  //         name: 'Productos',
  //         path: 'products',
  //         to: '/home/products',
  //         component: ProductsPage,
  //         render: true
  //       },
  //       {
  //         icon: IconOptions,
  //         name: 'Crear Categoria Producto',
  //         path: 'create-producto-category',
  //         to: '/home/create-producto-category',
  //         component: CreateCategoryProducto,
  //         render: false
  //       },
  //       {
  //         icon: IconOptions,
  //         name: 'Editar Categoria Producto',
  //         path: 'edit-producto-category/:id',
  //         to: '/home/edit-producto-category/:id',
  //         component: EditCategoryProducto,
  //         render: false
  //       },
  //       {
  //         icon: IconOptions,
  //         name: 'Crear Product',
  //         path: 'create-product',
  //         to: '/home/create-product',
  //         component: CreateProduct,
  //         render: false
  //       },
  //       {
  //         icon: IconOptions,
  //         name: 'Editar Product',
  //         path: 'edit-product/:id',
  //         to: '/home/edit-product/:id',
  //         component: EditProduct,
  //         render: false
  //       }
  //     ]
  //   }
  // },
  // {
  //   icon: IconBank,
  //   name: 'Bancos',
  //   to: '/home/bancos',
  //   path: 'bancos',
  //   component: Banks,
  //   subMenu: {
  //     value: true,
  //     paths: [
  //       {
  //         icon: IconOptions,
  //         name: 'Crear Banco',
  //         path: 'create-bank',
  //         to: '/home/create-bank',
  //         component: CreateBank,
  //         render: false
  //       },
  //       {
  //         icon: IconOptions,
  //         name: 'Editar Banco',
  //         path: 'edit-bank/:id',
  //         to: '/home/edit-bank/:id',
  //         component: EditBank,
  //         render: false
  //       },
  //       {
  //         icon: IconBank,
  //         name: 'Bancos',
  //         path: 'bancos',
  //         to: '/home/bancos',
  //         component: Banks,
  //         render: true
  //       }
  //     ]
  //   }
  // },
  // {
  //   icon: IconConfig,
  //   name: 'Configuraciones',
  //   to: '/home/configuraciones',
  //   path: 'configuraciones',
  //   component: Profile,
  //   subMenu: { value: false, paths: [] }
  // }
]

export const getRoutes = () => {
  const subRoutes = []
  const mainRoutes = []

  for (const { subMenu, ...mainRoute } of homeRoutes) {
    mainRoutes.push(mainRoute)

    for (const subMenu_ of subMenu.paths) {
      subRoutes.push(subMenu_)
    }
  }

  return { mainRoutes, subRoutes }
}
