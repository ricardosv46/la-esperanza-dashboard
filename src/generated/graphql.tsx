import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Banco = {
  __typename?: 'Banco';
  bancoId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  numeroCuenta?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  numeroCuenta?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['ID']>;
  categoriaBlogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type BlogInput = {
  blogId?: InputMaybe<Scalars['ID']>;
  categoriaBlogId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  numeroBlogs?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  descripcion?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type CategoriaProducto = {
  __typename?: 'CategoriaProducto';
  categoriaProductoId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type ComentarioBlog = {
  __typename?: 'ComentarioBlog';
  User?: Maybe<User>;
  blogId?: Maybe<Scalars['Int']>;
  comentarioBlogId?: Maybe<Scalars['ID']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type ComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  descripcion?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Contacto = {
  __typename?: 'Contacto';
  celular?: Maybe<Scalars['String']>;
  contactoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  tipoServicio?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ContactoInput = {
  celular?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['DateTime']>;
  descripcion?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  nombre?: InputMaybe<Scalars['String']>;
  tipoServicio?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['DateTime']>;
};

export type DatosEmpresa = {
  __typename?: 'DatosEmpresa';
  departamento?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  distrito?: Maybe<Scalars['String']>;
  emailContacto?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  nomEmpresa?: Maybe<Scalars['String']>;
  provincia?: Maybe<Scalars['String']>;
  ruc?: Maybe<Scalars['String']>;
};

export type DatosEmpresaInput = {
  departamento?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  distrito?: InputMaybe<Scalars['String']>;
  emailContacto?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  nomEmpresa?: InputMaybe<Scalars['String']>;
  provincia?: InputMaybe<Scalars['String']>;
  ruc?: InputMaybe<Scalars['String']>;
};

export type DatosTarjetaInput = {
  installments?: InputMaybe<Scalars['Int']>;
  payment_method_id?: InputMaybe<Scalars['String']>;
  source_id?: InputMaybe<Scalars['String']>;
  tipo_tarjeta?: InputMaybe<Scalars['Int']>;
  type_save?: InputMaybe<Scalars['Int']>;
};

export type Departamento = {
  __typename?: 'Departamento';
  DeparCodi?: Maybe<Scalars['ID']>;
  DeparNom?: Maybe<Scalars['String']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  cantidad?: Maybe<Scalars['Int']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  imagenPrincipal?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  productoId?: Maybe<Scalars['Int']>;
  titulo?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
};

export type DetallePedidoInput = {
  cantidad?: InputMaybe<Scalars['Int']>;
  detallePedidoId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  productoId?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['Float']>;
};

export type DireccionEnvio = {
  __typename?: 'DireccionEnvio';
  DeparCodi?: Maybe<Scalars['Int']>;
  DistCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  celular?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  direccionEnvioId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['Int']>;
};

export type DireccionEnvioInput = {
  DeparCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  celular?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  direccionEnvioId?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
};

export type DireccionUsuario = {
  __typename?: 'DireccionUsuario';
  DeparCodi?: Maybe<Scalars['Int']>;
  DeparNom?: Maybe<Scalars['String']>;
  DistCodi?: Maybe<Scalars['Int']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  ProvNom?: Maybe<Scalars['String']>;
  alias?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  direccion?: Maybe<Scalars['String']>;
  direccionUsuarioId?: Maybe<Scalars['Int']>;
  nombreAgencia?: Maybe<Scalars['String']>;
  tipoDireccion?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type DireccionUsuarioInput = {
  DeparCodi?: InputMaybe<Scalars['Int']>;
  DistCodi?: InputMaybe<Scalars['Int']>;
  ProvCodi?: InputMaybe<Scalars['Int']>;
  alias?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  direccionUsuarioId?: InputMaybe<Scalars['Int']>;
  nombreAgencia?: InputMaybe<Scalars['String']>;
  tipoDireccion?: InputMaybe<Scalars['String']>;
  usuarioId?: InputMaybe<Scalars['Int']>;
};

export type Distrito = {
  __typename?: 'Distrito';
  DistCodi?: Maybe<Scalars['ID']>;
  DistNom?: Maybe<Scalars['String']>;
  ProvCodi?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  precioEnvio?: Maybe<Scalars['Float']>;
};

export type DistritoInput = {
  DistCodi?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
};

export type EfectivoMovil = {
  __typename?: 'EfectivoMovil';
  created_at?: Maybe<Scalars['DateTime']>;
  efectivoMovilId?: Maybe<Scalars['ID']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenQr?: Maybe<Imagenes>;
  numeroCelular?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type EfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenQr?: InputMaybe<Scalars['Int']>;
  numeroCelular?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Filtros = {
  __typename?: 'Filtros';
  categorias?: Maybe<Array<Scalars['String']>>;
  precios?: Maybe<Array<Scalars['Float']>>;
};

export type GetAllBancos = {
  __typename?: 'GetAllBancos';
  data?: Maybe<Array<Banco>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllBlogs = {
  __typename?: 'GetAllBlogs';
  data?: Maybe<Array<Blog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaBlogs = {
  __typename?: 'GetAllCategoriaBlogs';
  data?: Maybe<Array<CategoriaBlog>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllCategoriaProductos = {
  __typename?: 'GetAllCategoriaProductos';
  data?: Maybe<Array<CategoriaProducto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllContactos = {
  __typename?: 'GetAllContactos';
  data?: Maybe<Array<Contacto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllDireccionesUsuarios = {
  __typename?: 'GetAllDireccionesUsuarios';
  data?: Maybe<Array<DireccionUsuario>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEfectivoMovil = {
  __typename?: 'GetAllEfectivoMovil';
  data?: Maybe<Array<EfectivoMovil>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllNotificacionPedidos = {
  __typename?: 'GetAllNotificacionPedidos';
  data?: Maybe<Array<Maybe<NotificacionPedido>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllProductos = {
  __typename?: 'GetAllProductos';
  data?: Maybe<Array<Producto>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSliders = {
  __typename?: 'GetAllSliders';
  data?: Maybe<Array<Slider>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras';
  data?: Maybe<Array<Vendedora>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetDatosAdicionalesPedido = {
  __typename?: 'GetDatosAdicionalesPedido';
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
  User?: Maybe<User>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AsignarDatosEmpresa: DatosEmpresa;
  CreateBancos: Banco;
  CreateBlog: Blog;
  CreateCategoriaBlog: CategoriaBlog;
  CreateCategoriaProducto: CategoriaProducto;
  CreateContactos: Contacto;
  CreateDireccionUsuario: DireccionUsuario;
  CreateEfectivoMovil: EfectivoMovil;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePrecioEnvioDistrito: Distrito;
  CreateProducto: Producto;
  CreateSlider: Slider;
  CreateUsuario: User;
  CreateVendedora: Vendedora;
  DeleteBancos: Scalars['String'];
  DeleteBlog: Scalars['String'];
  DeleteCategoriaBlog: Scalars['String'];
  DeleteCategoriaProducto: Scalars['String'];
  DeleteDireccionUsuario: Scalars['String'];
  DeleteEfectivoMovil: Scalars['String'];
  DeleteImagen: Scalars['String'];
  DeleteProducto: Scalars['String'];
  DeleteSlider: Scalars['String'];
  DeleteVendedora: Scalars['String'];
  Login: User;
  RecoverPasswordUsuario: User;
  UpdateBancos: Banco;
  UpdateCategoriaBlog: CategoriaBlog;
  UpdateCategoriaProducto: CategoriaProducto;
  UpdateDestacadoBlog: Blog;
  UpdateDestacadoProducto: Producto;
  UpdateDireccionUsuario: DireccionUsuario;
  UpdateEfectivoMovil: EfectivoMovil;
  UpdateEstadoBanco: Banco;
  UpdateEstadoBlog: Blog;
  UpdateEstadoCategoriaBlog: CategoriaBlog;
  UpdateEstadoCategoriaProducto: CategoriaProducto;
  UpdateEstadoContacto: Contacto;
  UpdateEstadoDistrito: Distrito;
  UpdateEstadoEfectivoMovil: EfectivoMovil;
  UpdateEstadoPedido: Pedido;
  UpdateEstadoProducto: Producto;
  UpdateEstadoSlider: Slider;
  UpdateEstadoVendedora: Vendedora;
  UpdateImagen: Imagenes;
  UpdatePasswordUsuario: User;
  UpdateProducto: Producto;
  UpdateSlider: Slider;
  UpdateUsuario: User;
  UpdateVendedora: Vendedora;
  UpdateVistoNotificacionPedido: NotificacionPedido;
  UpdateVistoPedido: Pedido;
  UploadVoucher: Pedido;
  updateBlog: Blog;
};


export type MutationAsignarDatosEmpresaArgs = {
  input: DatosEmpresaInput;
  logo?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationCreateBlogArgs = {
  input: BlogInput;
};


export type MutationCreateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationCreateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationCreateContactosArgs = {
  input?: InputMaybe<ContactoInput>;
};


export type MutationCreateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationCreateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3: ReciboInput;
  input4: DireccionEnvioInput;
  input5?: InputMaybe<DatosTarjetaInput>;
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreatePrecioEnvioDistritoArgs = {
  input: DistritoInput;
};


export type MutationCreateProductoArgs = {
  input: ProductoInput;
};


export type MutationCreateSliderArgs = {
  input: SliderInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationDeleteBancosArgs = {
  bancoId: Scalars['Int'];
};


export type MutationDeleteBlogArgs = {
  blogId: Scalars['Int'];
};


export type MutationDeleteCategoriaBlogArgs = {
  categoriaBlogId: Scalars['Int'];
};


export type MutationDeleteCategoriaProductoArgs = {
  categoriaProductoId: Scalars['Int'];
};


export type MutationDeleteDireccionUsuarioArgs = {
  direccionUsuarioId: Scalars['Int'];
};


export type MutationDeleteEfectivoMovilArgs = {
  efectivoMovilId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteProductoArgs = {
  productoId: Scalars['Int'];
};


export type MutationDeleteSliderArgs = {
  sliderId: Scalars['Int'];
};


export type MutationDeleteVendedoraArgs = {
  vendedoraId: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateBancosArgs = {
  input?: InputMaybe<BancoInput>;
};


export type MutationUpdateCategoriaBlogArgs = {
  input: CategoriaBlogInput;
};


export type MutationUpdateCategoriaProductoArgs = {
  input: CategoriaProductoInput;
};


export type MutationUpdateDestacadoBlogArgs = {
  input: UpdateDestacadoBlogInput;
};


export type MutationUpdateDestacadoProductoArgs = {
  input: UpdateDestacadoProductoInput;
};


export type MutationUpdateDireccionUsuarioArgs = {
  input: DireccionUsuarioInput;
};


export type MutationUpdateEfectivoMovilArgs = {
  input?: InputMaybe<EfectivoMovilInput>;
};


export type MutationUpdateEstadoBancoArgs = {
  input?: InputMaybe<UpdateEstadoBancoInput>;
};


export type MutationUpdateEstadoBlogArgs = {
  input: UpdateEstadoBlogInput;
};


export type MutationUpdateEstadoCategoriaBlogArgs = {
  input: UpdateEstadoCategoriaBlogInput;
};


export type MutationUpdateEstadoCategoriaProductoArgs = {
  input: UpdateEstadoCategoriaProductoInput;
};


export type MutationUpdateEstadoContactoArgs = {
  input?: InputMaybe<UpdateEstadoContactoInput>;
};


export type MutationUpdateEstadoDistritoArgs = {
  input: DistritoInput;
};


export type MutationUpdateEstadoEfectivoMovilArgs = {
  input?: InputMaybe<UpdateEstadoEfectivoMovilInput>;
};


export type MutationUpdateEstadoPedidoArgs = {
  input: UpdateEstadoPedidoInput;
};


export type MutationUpdateEstadoProductoArgs = {
  input: UpdateEstadoProductoInput;
};


export type MutationUpdateEstadoSliderArgs = {
  input?: InputMaybe<UpdateEstadoSliderInput>;
};


export type MutationUpdateEstadoVendedoraArgs = {
  input?: InputMaybe<UpdateEstadoVendedoraInput>;
};


export type MutationUpdateImagenArgs = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordUsuarioArgs = {
  input: UpdatePasswordInput;
};


export type MutationUpdateProductoArgs = {
  input: ProductoInput;
};


export type MutationUpdateSliderArgs = {
  input?: InputMaybe<SliderInput>;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
  photo?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateVendedoraArgs = {
  input?: InputMaybe<VendedoraInput>;
};


export type MutationUpdateVistoNotificacionPedidoArgs = {
  input: UpdateVistoNotificacionPedidoInput;
};


export type MutationUpdateVistoPedidoArgs = {
  input: UpdateVistoPedidoInput;
};


export type MutationUploadVoucherArgs = {
  idPedido: Scalars['Int'];
  voucher?: InputMaybe<Scalars['Upload']>;
};


export type MutationUpdateBlogArgs = {
  input: BlogInput;
};

export type NotificacionComentarioBlog = {
  __typename?: 'NotificacionComentarioBlog';
  Blog?: Maybe<Blog>;
  blogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  notificacionComentarioBlogId?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type NotificacionComentarioBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type NotificacionPedido = {
  __typename?: 'NotificacionPedido';
  created_at?: Maybe<Scalars['DateTime']>;
  notificacionPedidoId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  DireccionEnvio?: Maybe<DireccionEnvio>;
  Recibo?: Maybe<Recibo>;
  Usuario?: Maybe<User>;
  direccionEnvio?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  fechaPedido?: Maybe<Scalars['DateTime']>;
  medioPago?: Maybe<Scalars['String']>;
  numeroOperacion?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioEnvio?: Maybe<Scalars['Float']>;
  precioTotal?: Maybe<Scalars['Float']>;
  ticketPdf?: Maybe<Scalars['String']>;
  tipoEnvio?: Maybe<Scalars['String']>;
  tipoPago?: Maybe<Scalars['Int']>;
  tipoVenta?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  visto?: Maybe<Scalars['Int']>;
  voucher?: Maybe<Scalars['String']>;
};

export type PedidoInput = {
  direccionEnvio?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  fechaPedido?: InputMaybe<Scalars['Date']>;
  medioPago?: InputMaybe<Scalars['String']>;
  numeroOperacion?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioEnvio?: InputMaybe<Scalars['Float']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  tipoEnvio?: InputMaybe<Scalars['Int']>;
  tipoPago?: InputMaybe<Scalars['Int']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  visto?: InputMaybe<Scalars['Int']>;
};

export type Producto = {
  __typename?: 'Producto';
  CategoriaProducto?: Maybe<CategoriaProducto>;
  categoriaProductoId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  destacado?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  galeria?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipal?: Maybe<Imagenes>;
  imagenSecundaria?: Maybe<Imagenes>;
  keywords?: Maybe<Scalars['String']>;
  precioOferta?: Maybe<Scalars['Float']>;
  precioReal?: Maybe<Scalars['Float']>;
  productoId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  stockMinimo?: Maybe<Scalars['Float']>;
  stockReal?: Maybe<Scalars['Float']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['Int']>;
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  estado?: InputMaybe<Scalars['String']>;
  galeria?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  keywords?: InputMaybe<Scalars['String']>;
  precioOferta?: InputMaybe<Scalars['Float']>;
  precioReal?: InputMaybe<Scalars['Float']>;
  productoId?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  stockMinimo?: InputMaybe<Scalars['Float']>;
  stockReal?: InputMaybe<Scalars['Float']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type Provincia = {
  __typename?: 'Provincia';
  DeparCodi?: Maybe<Scalars['Int']>;
  ProvCodi?: Maybe<Scalars['ID']>;
  ProvNom?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  EmitirTicket: Scalars['String'];
  GetAllBancos: GetAllBancos;
  GetAllBlogs: GetAllBlogs;
  GetAllBlogsCategoriaSlug: GetAllBlogs;
  GetAllBlogsDestacados: GetAllBlogs;
  GetAllCategoriaBlogs: GetAllCategoriaBlogs;
  GetAllCategoriaProductos: GetAllCategoriaProductos;
  GetAllContactos: GetAllContactos;
  GetAllDepartamentos?: Maybe<Array<Departamento>>;
  GetAllDireccionUsuarios: GetAllDireccionesUsuarios;
  GetAllDistritos?: Maybe<Array<Distrito>>;
  GetAllEfectivoMovil: GetAllEfectivoMovil;
  GetAllImagenes?: Maybe<Array<Imagenes>>;
  GetAllNotificacionPedidos: GetAllNotificacionPedidos;
  GetAllPedidoUser: GetAllPedidos;
  GetAllPedidos: GetAllPedidos;
  GetAllProductos: GetAllProductos;
  GetAllProductosCategoriaSlug: GetAllProductos;
  GetAllProductosDestacados: GetAllProductos;
  GetAllProductosRelacionados: GetAllProductos;
  GetAllProvincias?: Maybe<Array<Provincia>>;
  GetAllSliders: GetAllSliders;
  GetAllTarjetaUsuario?: Maybe<Array<TarjetasUsuarios>>;
  GetAllVendedoras: GetAllVendedoras;
  GetBancoId: Banco;
  GetBlogSlug: Blog;
  GetBusquedaAvanzada: GetAllProductos;
  GetCategoriaBlogSlug: CategoriaBlog;
  GetCategoriaProductoSlug: CategoriaProducto;
  GetDatosEmpresa: DatosEmpresa;
  GetDireccionUsuarioId: DireccionUsuario;
  GetEfectivoMovilId: EfectivoMovil;
  GetFiltrosPalabraClave: Filtros;
  GetPedidoId: Pedido;
  GetPrecios?: Maybe<Array<Maybe<Scalars['Float']>>>;
  GetProductoSlug: Producto;
  GetReniec: Reniec;
  GetSliderId: Slider;
  GetVendedoraId: Vendedora;
};


export type QueryEmitirTicketArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBancosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllBlogsCategoriaSlugArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBlogsDestacadosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllCategoriaBlogsArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllCategoriaProductosArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllContactosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllDireccionUsuariosArgs = {
  usuarioId: Scalars['Int'];
};


export type QueryGetAllDistritosArgs = {
  ProCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEfectivoMovilArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllImagenesArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllNotificacionPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidoUserArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosCategoriaSlugArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProductosDestacadosArgs = {
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllProductosRelacionadosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllProvinciasArgs = {
  DepCode?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSlidersArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllTarjetaUsuarioArgs = {
  customer_id?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>;
};


export type QueryGetBancoIdArgs = {
  bancoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetBusquedaAvanzadaArgs = {
  categoriaSlug?: InputMaybe<Scalars['String']>;
  destacado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Array<Scalars['Float']>>;
  tipoOrdenacion?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaBlogSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriaProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetDireccionUsuarioIdArgs = {
  direccionesUsuariosId: Scalars['Int'];
};


export type QueryGetEfectivoMovilIdArgs = {
  efectivoMovilId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetFiltrosPalabraClaveArgs = {
  palabraClave?: InputMaybe<Scalars['String']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetProductoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetReniecArgs = {
  dni?: InputMaybe<Scalars['String']>;
};


export type QueryGetSliderIdArgs = {
  sliderId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetVendedoraIdArgs = {
  vendedoraId?: InputMaybe<Scalars['Int']>;
};

export type Recibo = {
  __typename?: 'Recibo';
  pedidoId?: Maybe<Scalars['Int']>;
  razonSocial?: Maybe<Scalars['String']>;
  reciboId?: Maybe<Scalars['ID']>;
  ruc?: Maybe<Scalars['String']>;
};

export type ReciboInput = {
  pedidoId?: InputMaybe<Scalars['Int']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  reciboId?: InputMaybe<Scalars['ID']>;
  ruc?: InputMaybe<Scalars['String']>;
};

export type Slider = {
  __typename?: 'Slider';
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  link?: Maybe<Scalars['String']>;
  sliderId?: Maybe<Scalars['ID']>;
  tipoLink?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SliderInput = {
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  sliderId?: InputMaybe<Scalars['ID']>;
  tipoLink?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type TarjetasUsuarios = {
  __typename?: 'TarjetasUsuarios';
  customer_id?: Maybe<Scalars['String']>;
  expiration_month?: Maybe<Scalars['Int']>;
  expiration_year?: Maybe<Scalars['Int']>;
  first_six_digits?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_four_digits?: Maybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateDestacadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  destacado?: InputMaybe<Scalars['String']>;
};

export type UpdateDestacadoProductoInput = {
  destacado?: InputMaybe<Scalars['String']>;
  productoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoBancoInput = {
  bancoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoBlogInput = {
  blogId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaBlogInput = {
  categoriaBlogId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoCategoriaProductoInput = {
  categoriaProductoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoContactoInput = {
  contactoId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEfectivoMovilInput = {
  efectivoMovilId?: InputMaybe<Scalars['ID']>;
  estado?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoPedidoInput = {
  estado?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoProductoInput = {
  estado?: InputMaybe<Scalars['String']>;
  productoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoSliderInput = {
  estado?: InputMaybe<Scalars['String']>;
  sliderId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoVendedoraInput = {
  estado?: InputMaybe<Scalars['String']>;
  vendedoraId?: InputMaybe<Scalars['ID']>;
};

export type UpdatePasswordInput = {
  id?: InputMaybe<Scalars['ID']>;
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type UpdateVistoNotificacionPedidoInput = {
  created_at?: InputMaybe<Scalars['DateTime']>;
  notificacionPedidoId?: InputMaybe<Scalars['Int']>;
  visto?: InputMaybe<Scalars['Int']>;
};

export type UpdateVistoPedidoInput = {
  pedidoId?: InputMaybe<Scalars['ID']>;
  visto?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  customer_id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fechaNacimiento?: Maybe<Scalars['DateTime']>;
  foto?: Maybe<Scalars['String']>;
  genero?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaNacimiento?: InputMaybe<Scalars['Date']>;
  foto?: InputMaybe<Scalars['String']>;
  genero?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  tipoUsuario?: InputMaybe<Scalars['Int']>;
};

export type Vendedora = {
  __typename?: 'Vendedora';
  apellidos?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  estado?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagenes>;
  link?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  vendedoraId?: Maybe<Scalars['ID']>;
};

export type VendedoraInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  link?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  vendedoraId?: InputMaybe<Scalars['ID']>;
};

export type Reniec = {
  __typename?: 'reniec';
  ApellidoMaterno?: Maybe<Scalars['String']>;
  ApellidoPaterno?: Maybe<Scalars['String']>;
  DNI?: Maybe<Scalars['String']>;
  FechaNacimiento?: Maybe<Scalars['String']>;
  Nombres?: Maybe<Scalars['String']>;
};

export type CreateBancosMutationVariables = Exact<{
  input?: InputMaybe<BancoInput>;
}>;


export type CreateBancosMutation = { __typename?: 'Mutation', CreateBancos: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } };

export type CreateBlogMutationVariables = Exact<{
  input: BlogInput;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', CreateBlog: { __typename?: 'Blog', titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateCategoriaBlogMutationVariables = Exact<{
  input: CategoriaBlogInput;
}>;


export type CreateCategoriaBlogMutation = { __typename?: 'Mutation', CreateCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateCategoriaProductoMutationVariables = Exact<{
  input: CategoriaProductoInput;
}>;


export type CreateCategoriaProductoMutation = { __typename?: 'Mutation', CreateCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type CreateProductoMutationVariables = Exact<{
  input: ProductoInput;
}>;


export type CreateProductoMutation = { __typename?: 'Mutation', CreateProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagenes', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null> | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', updated_at?: any | null, created_at?: any | null, descripcion?: string | null, keywords?: string | null, estado?: string | null, slug?: string | null, titulo?: string | null, categoriaProductoId?: string | null, imagenSecundaria?: { __typename?: 'Imagenes', estado?: string | null, titulo?: string | null, id?: string | null, url?: string | null } | null, imagenPrincipal?: { __typename?: 'Imagenes', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } | null } };

export type DeleteBancosMutationVariables = Exact<{
  bancoId: Scalars['Int'];
}>;


export type DeleteBancosMutation = { __typename?: 'Mutation', DeleteBancos: string };

export type DeleteBlogMutationVariables = Exact<{
  blogId: Scalars['Int'];
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', DeleteBlog: string };

export type DeleteCategoriaBlogMutationVariables = Exact<{
  categoriaBlogId: Scalars['Int'];
}>;


export type DeleteCategoriaBlogMutation = { __typename?: 'Mutation', DeleteCategoriaBlog: string };

export type DeleteCategoriaProductoMutationVariables = Exact<{
  categoriaProductoId: Scalars['Int'];
}>;


export type DeleteCategoriaProductoMutation = { __typename?: 'Mutation', DeleteCategoriaProducto: string };

export type DeleteProductoMutationVariables = Exact<{
  productoId: Scalars['Int'];
}>;


export type DeleteProductoMutation = { __typename?: 'Mutation', DeleteProducto: string };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, genero?: number | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, fechaNacimiento?: any | null, foto?: string | null, email?: string | null, apiToken?: string | null, customer_id?: string | null } };

export type UpdateBancosMutationVariables = Exact<{
  input?: InputMaybe<BancoInput>;
}>;


export type UpdateBancosMutation = { __typename?: 'Mutation', UpdateBancos: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', url?: string | null, estado?: string | null, titulo?: string | null, id?: string | null } | null } };

export type UpdateCategoriaBlogMutationVariables = Exact<{
  input: CategoriaBlogInput;
}>;


export type UpdateCategoriaBlogMutation = { __typename?: 'Mutation', UpdateCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateCategoriaProductoMutationVariables = Exact<{
  input: CategoriaProductoInput;
}>;


export type UpdateCategoriaProductoMutation = { __typename?: 'Mutation', UpdateCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateDestacadoBlogMutationVariables = Exact<{
  input: UpdateDestacadoBlogInput;
}>;


export type UpdateDestacadoBlogMutation = { __typename?: 'Mutation', UpdateDestacadoBlog: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, destacado?: string | null } };

export type UpdateDestacadoProductoMutationVariables = Exact<{
  input: UpdateDestacadoProductoInput;
}>;


export type UpdateDestacadoProductoMutation = { __typename?: 'Mutation', UpdateDestacadoProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null } };

export type UpdateEstadoBlogMutationVariables = Exact<{
  input: UpdateEstadoBlogInput;
}>;


export type UpdateEstadoBlogMutation = { __typename?: 'Mutation', UpdateEstadoBlog: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, estado?: string | null } };

export type UpdateEstadoCategoriaBlogMutationVariables = Exact<{
  input: UpdateEstadoCategoriaBlogInput;
}>;


export type UpdateEstadoCategoriaBlogMutation = { __typename?: 'Mutation', UpdateEstadoCategoriaBlog: { __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateEstadoCategoriaProductoMutationVariables = Exact<{
  input: UpdateEstadoCategoriaProductoInput;
}>;


export type UpdateEstadoCategoriaProductoMutation = { __typename?: 'Mutation', UpdateEstadoCategoriaProducto: { __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateEstadoProductoMutationVariables = Exact<{
  input: UpdateEstadoProductoInput;
}>;


export type UpdateEstadoProductoMutation = { __typename?: 'Mutation', UpdateEstadoProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null } };

export type UpdateProductoMutationVariables = Exact<{
  input: ProductoInput;
}>;


export type UpdateProductoMutation = { __typename?: 'Mutation', UpdateProducto: { __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, estado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null } };

export type CreateImagenMutationVariables = Exact<{
  imagen: Scalars['Upload'];
}>;


export type CreateImagenMutation = { __typename?: 'Mutation', CreateImagen: string };

export type DeleteImagenMutationVariables = Exact<{
  deleteImagenId: Scalars['Int'];
}>;


export type DeleteImagenMutation = { __typename?: 'Mutation', DeleteImagen: string };

export type UpdateBlogMutationVariables = Exact<{
  input: BlogInput;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type UpdateEstadoBancoMutationVariables = Exact<{
  input?: InputMaybe<UpdateEstadoBancoInput>;
}>;


export type UpdateEstadoBancoMutation = { __typename?: 'Mutation', UpdateEstadoBanco: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null } };

export type GetAllBancosQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBancosQuery = { __typename?: 'Query', GetAllBancos: { __typename?: 'GetAllBancos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllBlogsQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', GetAllBlogs: { __typename?: 'GetAllBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null }> | null } };

export type GetAllCategoriaBlogsQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaBlogsQuery = { __typename?: 'Query', GetAllCategoriaBlogs: { __typename?: 'GetAllCategoriaBlogs', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaBlog', categoriaBlogId?: string | null, titulo?: string | null, slug?: string | null, keywords?: string | null, descripcion?: string | null, estado?: string | null, created_at?: any | null, updated_at?: any | null, numeroBlogs?: number | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllCategoriaProductosQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllCategoriaProductosQuery = { __typename?: 'Query', GetAllCategoriaProductos: { __typename?: 'GetAllCategoriaProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'CategoriaProducto', categoriaProductoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, keywords?: string | null, descripcion?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null }> | null } };

export type GetAllProductosQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllProductosQuery = { __typename?: 'Query', GetAllProductos: { __typename?: 'GetAllProductos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Producto', productoId?: string | null, titulo?: string | null, slug?: string | null, estado?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, precioReal?: number | null, precioOferta?: number | null, stockMinimo?: number | null, stockReal?: number | null, keywords?: string | null, destacado?: string | null, categoriaProductoId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, galeria?: Array<{ __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null> | null, CategoriaProducto?: { __typename?: 'CategoriaProducto', titulo?: string | null } | null }> | null } };

export type GetBlogSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetBlogSlugQuery = { __typename?: 'Query', GetBlogSlug: { __typename?: 'Blog', blogId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, keywords?: string | null, estado?: string | null, destacado?: string | null, categoriaBlogId?: number | null, usuarioId?: number | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagenes', id?: string | null, titulo?: string | null, estado?: string | null, url?: string | null } | null, CategoriaBlog?: { __typename?: 'CategoriaBlog', titulo?: string | null } | null } };

export type GetBancoIdQueryVariables = Exact<{
  bancoId?: InputMaybe<Scalars['Int']>;
}>;


export type GetBancoIdQuery = { __typename?: 'Query', GetBancoId: { __typename?: 'Banco', bancoId?: string | null, titulo?: string | null, estado?: string | null, numeroCuenta?: string | null, created_at?: any | null, updated_at?: any | null, imagenPrincipal?: { __typename?: 'Imagenes', url?: string | null, titulo?: string | null, id?: string | null, estado?: string | null } | null } };

export type GetAllImagenesQueryVariables = Exact<{
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllImagenesQuery = { __typename?: 'Query', GetAllImagenes?: Array<{ __typename?: 'Imagenes', id?: string | null, url?: string | null, titulo?: string | null, estado?: string | null }> | null };


export const CreateBancosDocument = gql`
    mutation CreateBancos($input: BancoInput) {
  CreateBancos(input: $input) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    created_at
    updated_at
  }
}
    `;
export type CreateBancosMutationFn = Apollo.MutationFunction<CreateBancosMutation, CreateBancosMutationVariables>;

/**
 * __useCreateBancosMutation__
 *
 * To run a mutation, you first call `useCreateBancosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBancosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBancosMutation, { data, loading, error }] = useCreateBancosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBancosMutation(baseOptions?: Apollo.MutationHookOptions<CreateBancosMutation, CreateBancosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBancosMutation, CreateBancosMutationVariables>(CreateBancosDocument, options);
      }
export type CreateBancosMutationHookResult = ReturnType<typeof useCreateBancosMutation>;
export type CreateBancosMutationResult = Apollo.MutationResult<CreateBancosMutation>;
export type CreateBancosMutationOptions = Apollo.BaseMutationOptions<CreateBancosMutation, CreateBancosMutationVariables>;
export const CreateBlogDocument = gql`
    mutation CreateBlog($input: BlogInput!) {
  CreateBlog(input: $input) {
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    usuarioId
    created_at
    updated_at
  }
}
    `;
export type CreateBlogMutationFn = Apollo.MutationFunction<CreateBlogMutation, CreateBlogMutationVariables>;

/**
 * __useCreateBlogMutation__
 *
 * To run a mutation, you first call `useCreateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBlogMutation, { data, loading, error }] = useCreateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateBlogMutation, CreateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBlogMutation, CreateBlogMutationVariables>(CreateBlogDocument, options);
      }
export type CreateBlogMutationHookResult = ReturnType<typeof useCreateBlogMutation>;
export type CreateBlogMutationResult = Apollo.MutationResult<CreateBlogMutation>;
export type CreateBlogMutationOptions = Apollo.BaseMutationOptions<CreateBlogMutation, CreateBlogMutationVariables>;
export const CreateCategoriaBlogDocument = gql`
    mutation CreateCategoriaBlog($input: CategoriaBlogInput!) {
  CreateCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;
export type CreateCategoriaBlogMutationFn = Apollo.MutationFunction<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>;

/**
 * __useCreateCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useCreateCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoriaBlogMutation, { data, loading, error }] = useCreateCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>(CreateCategoriaBlogDocument, options);
      }
export type CreateCategoriaBlogMutationHookResult = ReturnType<typeof useCreateCategoriaBlogMutation>;
export type CreateCategoriaBlogMutationResult = Apollo.MutationResult<CreateCategoriaBlogMutation>;
export type CreateCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<CreateCategoriaBlogMutation, CreateCategoriaBlogMutationVariables>;
export const CreateCategoriaProductoDocument = gql`
    mutation CreateCategoriaProducto($input: CategoriaProductoInput!) {
  CreateCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type CreateCategoriaProductoMutationFn = Apollo.MutationFunction<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>;

/**
 * __useCreateCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useCreateCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoriaProductoMutation, { data, loading, error }] = useCreateCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>(CreateCategoriaProductoDocument, options);
      }
export type CreateCategoriaProductoMutationHookResult = ReturnType<typeof useCreateCategoriaProductoMutation>;
export type CreateCategoriaProductoMutationResult = Apollo.MutationResult<CreateCategoriaProductoMutation>;
export type CreateCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<CreateCategoriaProductoMutation, CreateCategoriaProductoMutationVariables>;
export const CreateProductoDocument = gql`
    mutation CreateProducto($input: ProductoInput!) {
  CreateProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      url
      estado
      titulo
      id
    }
    keywords
    destacado
    estado
    categoriaProductoId
    CategoriaProducto {
      updated_at
      created_at
      imagenSecundaria {
        estado
        titulo
        id
        url
      }
      imagenPrincipal {
        url
        estado
        titulo
        id
      }
      descripcion
      keywords
      estado
      slug
      titulo
      categoriaProductoId
    }
    created_at
    updated_at
  }
}
    `;
export type CreateProductoMutationFn = Apollo.MutationFunction<CreateProductoMutation, CreateProductoMutationVariables>;

/**
 * __useCreateProductoMutation__
 *
 * To run a mutation, you first call `useCreateProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductoMutation, { data, loading, error }] = useCreateProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductoMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductoMutation, CreateProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductoMutation, CreateProductoMutationVariables>(CreateProductoDocument, options);
      }
export type CreateProductoMutationHookResult = ReturnType<typeof useCreateProductoMutation>;
export type CreateProductoMutationResult = Apollo.MutationResult<CreateProductoMutation>;
export type CreateProductoMutationOptions = Apollo.BaseMutationOptions<CreateProductoMutation, CreateProductoMutationVariables>;
export const DeleteBancosDocument = gql`
    mutation DeleteBancos($bancoId: Int!) {
  DeleteBancos(bancoId: $bancoId)
}
    `;
export type DeleteBancosMutationFn = Apollo.MutationFunction<DeleteBancosMutation, DeleteBancosMutationVariables>;

/**
 * __useDeleteBancosMutation__
 *
 * To run a mutation, you first call `useDeleteBancosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBancosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBancosMutation, { data, loading, error }] = useDeleteBancosMutation({
 *   variables: {
 *      bancoId: // value for 'bancoId'
 *   },
 * });
 */
export function useDeleteBancosMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBancosMutation, DeleteBancosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBancosMutation, DeleteBancosMutationVariables>(DeleteBancosDocument, options);
      }
export type DeleteBancosMutationHookResult = ReturnType<typeof useDeleteBancosMutation>;
export type DeleteBancosMutationResult = Apollo.MutationResult<DeleteBancosMutation>;
export type DeleteBancosMutationOptions = Apollo.BaseMutationOptions<DeleteBancosMutation, DeleteBancosMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation DeleteBlog($blogId: Int!) {
  DeleteBlog(blogId: $blogId)
}
    `;
export type DeleteBlogMutationFn = Apollo.MutationFunction<DeleteBlogMutation, DeleteBlogMutationVariables>;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogMutation, { data, loading, error }] = useDeleteBlogMutation({
 *   variables: {
 *      blogId: // value for 'blogId'
 *   },
 * });
 */
export function useDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogMutation, DeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
      }
export type DeleteBlogMutationHookResult = ReturnType<typeof useDeleteBlogMutation>;
export type DeleteBlogMutationResult = Apollo.MutationResult<DeleteBlogMutation>;
export type DeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const DeleteCategoriaBlogDocument = gql`
    mutation DeleteCategoriaBlog($categoriaBlogId: Int!) {
  DeleteCategoriaBlog(categoriaBlogId: $categoriaBlogId)
}
    `;
export type DeleteCategoriaBlogMutationFn = Apollo.MutationFunction<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>;

/**
 * __useDeleteCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriaBlogMutation, { data, loading, error }] = useDeleteCategoriaBlogMutation({
 *   variables: {
 *      categoriaBlogId: // value for 'categoriaBlogId'
 *   },
 * });
 */
export function useDeleteCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>(DeleteCategoriaBlogDocument, options);
      }
export type DeleteCategoriaBlogMutationHookResult = ReturnType<typeof useDeleteCategoriaBlogMutation>;
export type DeleteCategoriaBlogMutationResult = Apollo.MutationResult<DeleteCategoriaBlogMutation>;
export type DeleteCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>;
export const DeleteCategoriaProductoDocument = gql`
    mutation DeleteCategoriaProducto($categoriaProductoId: Int!) {
  DeleteCategoriaProducto(categoriaProductoId: $categoriaProductoId)
}
    `;
export type DeleteCategoriaProductoMutationFn = Apollo.MutationFunction<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>;

/**
 * __useDeleteCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriaProductoMutation, { data, loading, error }] = useDeleteCategoriaProductoMutation({
 *   variables: {
 *      categoriaProductoId: // value for 'categoriaProductoId'
 *   },
 * });
 */
export function useDeleteCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>(DeleteCategoriaProductoDocument, options);
      }
export type DeleteCategoriaProductoMutationHookResult = ReturnType<typeof useDeleteCategoriaProductoMutation>;
export type DeleteCategoriaProductoMutationResult = Apollo.MutationResult<DeleteCategoriaProductoMutation>;
export type DeleteCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriaProductoMutation, DeleteCategoriaProductoMutationVariables>;
export const DeleteProductoDocument = gql`
    mutation DeleteProducto($productoId: Int!) {
  DeleteProducto(productoId: $productoId)
}
    `;
export type DeleteProductoMutationFn = Apollo.MutationFunction<DeleteProductoMutation, DeleteProductoMutationVariables>;

/**
 * __useDeleteProductoMutation__
 *
 * To run a mutation, you first call `useDeleteProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductoMutation, { data, loading, error }] = useDeleteProductoMutation({
 *   variables: {
 *      productoId: // value for 'productoId'
 *   },
 * });
 */
export function useDeleteProductoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductoMutation, DeleteProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductoMutation, DeleteProductoMutationVariables>(DeleteProductoDocument, options);
      }
export type DeleteProductoMutationHookResult = ReturnType<typeof useDeleteProductoMutation>;
export type DeleteProductoMutationResult = Apollo.MutationResult<DeleteProductoMutation>;
export type DeleteProductoMutationOptions = Apollo.BaseMutationOptions<DeleteProductoMutation, DeleteProductoMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    genero
    nombres
    apellidos
    celular
    fechaNacimiento
    foto
    email
    apiToken
    customer_id
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UpdateBancosDocument = gql`
    mutation UpdateBancos($input: BancoInput) {
  UpdateBancos(input: $input) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      url
      estado
      titulo
      id
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateBancosMutationFn = Apollo.MutationFunction<UpdateBancosMutation, UpdateBancosMutationVariables>;

/**
 * __useUpdateBancosMutation__
 *
 * To run a mutation, you first call `useUpdateBancosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBancosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBancosMutation, { data, loading, error }] = useUpdateBancosMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBancosMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBancosMutation, UpdateBancosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBancosMutation, UpdateBancosMutationVariables>(UpdateBancosDocument, options);
      }
export type UpdateBancosMutationHookResult = ReturnType<typeof useUpdateBancosMutation>;
export type UpdateBancosMutationResult = Apollo.MutationResult<UpdateBancosMutation>;
export type UpdateBancosMutationOptions = Apollo.BaseMutationOptions<UpdateBancosMutation, UpdateBancosMutationVariables>;
export const UpdateCategoriaBlogDocument = gql`
    mutation UpdateCategoriaBlog($input: CategoriaBlogInput!) {
  UpdateCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;
export type UpdateCategoriaBlogMutationFn = Apollo.MutationFunction<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>;

/**
 * __useUpdateCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriaBlogMutation, { data, loading, error }] = useUpdateCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>(UpdateCategoriaBlogDocument, options);
      }
export type UpdateCategoriaBlogMutationHookResult = ReturnType<typeof useUpdateCategoriaBlogMutation>;
export type UpdateCategoriaBlogMutationResult = Apollo.MutationResult<UpdateCategoriaBlogMutation>;
export type UpdateCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriaBlogMutation, UpdateCategoriaBlogMutationVariables>;
export const UpdateCategoriaProductoDocument = gql`
    mutation UpdateCategoriaProducto($input: CategoriaProductoInput!) {
  UpdateCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateCategoriaProductoMutationFn = Apollo.MutationFunction<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>;

/**
 * __useUpdateCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriaProductoMutation, { data, loading, error }] = useUpdateCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>(UpdateCategoriaProductoDocument, options);
      }
export type UpdateCategoriaProductoMutationHookResult = ReturnType<typeof useUpdateCategoriaProductoMutation>;
export type UpdateCategoriaProductoMutationResult = Apollo.MutationResult<UpdateCategoriaProductoMutation>;
export type UpdateCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriaProductoMutation, UpdateCategoriaProductoMutationVariables>;
export const UpdateDestacadoBlogDocument = gql`
    mutation UpdateDestacadoBlog($input: UpdateDestacadoBlogInput!) {
  UpdateDestacadoBlog(input: $input) {
    blogId
    titulo
    destacado
  }
}
    `;
export type UpdateDestacadoBlogMutationFn = Apollo.MutationFunction<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>;

/**
 * __useUpdateDestacadoBlogMutation__
 *
 * To run a mutation, you first call `useUpdateDestacadoBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDestacadoBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDestacadoBlogMutation, { data, loading, error }] = useUpdateDestacadoBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDestacadoBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>(UpdateDestacadoBlogDocument, options);
      }
export type UpdateDestacadoBlogMutationHookResult = ReturnType<typeof useUpdateDestacadoBlogMutation>;
export type UpdateDestacadoBlogMutationResult = Apollo.MutationResult<UpdateDestacadoBlogMutation>;
export type UpdateDestacadoBlogMutationOptions = Apollo.BaseMutationOptions<UpdateDestacadoBlogMutation, UpdateDestacadoBlogMutationVariables>;
export const UpdateDestacadoProductoDocument = gql`
    mutation UpdateDestacadoProducto($input: UpdateDestacadoProductoInput!) {
  UpdateDestacadoProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    created_at
    updated_at
  }
}
    `;
export type UpdateDestacadoProductoMutationFn = Apollo.MutationFunction<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>;

/**
 * __useUpdateDestacadoProductoMutation__
 *
 * To run a mutation, you first call `useUpdateDestacadoProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDestacadoProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDestacadoProductoMutation, { data, loading, error }] = useUpdateDestacadoProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDestacadoProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>(UpdateDestacadoProductoDocument, options);
      }
export type UpdateDestacadoProductoMutationHookResult = ReturnType<typeof useUpdateDestacadoProductoMutation>;
export type UpdateDestacadoProductoMutationResult = Apollo.MutationResult<UpdateDestacadoProductoMutation>;
export type UpdateDestacadoProductoMutationOptions = Apollo.BaseMutationOptions<UpdateDestacadoProductoMutation, UpdateDestacadoProductoMutationVariables>;
export const UpdateEstadoBlogDocument = gql`
    mutation UpdateEstadoBlog($input: UpdateEstadoBlogInput!) {
  UpdateEstadoBlog(input: $input) {
    blogId
    titulo
    estado
  }
}
    `;
export type UpdateEstadoBlogMutationFn = Apollo.MutationFunction<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>;

/**
 * __useUpdateEstadoBlogMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoBlogMutation, { data, loading, error }] = useUpdateEstadoBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>(UpdateEstadoBlogDocument, options);
      }
export type UpdateEstadoBlogMutationHookResult = ReturnType<typeof useUpdateEstadoBlogMutation>;
export type UpdateEstadoBlogMutationResult = Apollo.MutationResult<UpdateEstadoBlogMutation>;
export type UpdateEstadoBlogMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoBlogMutation, UpdateEstadoBlogMutationVariables>;
export const UpdateEstadoCategoriaBlogDocument = gql`
    mutation UpdateEstadoCategoriaBlog($input: UpdateEstadoCategoriaBlogInput!) {
  UpdateEstadoCategoriaBlog(input: $input) {
    categoriaBlogId
    titulo
    slug
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    estado
    created_at
    updated_at
    numeroBlogs
  }
}
    `;
export type UpdateEstadoCategoriaBlogMutationFn = Apollo.MutationFunction<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>;

/**
 * __useUpdateEstadoCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoCategoriaBlogMutation, { data, loading, error }] = useUpdateEstadoCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>(UpdateEstadoCategoriaBlogDocument, options);
      }
export type UpdateEstadoCategoriaBlogMutationHookResult = ReturnType<typeof useUpdateEstadoCategoriaBlogMutation>;
export type UpdateEstadoCategoriaBlogMutationResult = Apollo.MutationResult<UpdateEstadoCategoriaBlogMutation>;
export type UpdateEstadoCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoCategoriaBlogMutation, UpdateEstadoCategoriaBlogMutationVariables>;
export const UpdateEstadoCategoriaProductoDocument = gql`
    mutation UpdateEstadoCategoriaProducto($input: UpdateEstadoCategoriaProductoInput!) {
  UpdateEstadoCategoriaProducto(input: $input) {
    categoriaProductoId
    titulo
    slug
    estado
    keywords
    descripcion
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateEstadoCategoriaProductoMutationFn = Apollo.MutationFunction<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>;

/**
 * __useUpdateEstadoCategoriaProductoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoCategoriaProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoCategoriaProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoCategoriaProductoMutation, { data, loading, error }] = useUpdateEstadoCategoriaProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoCategoriaProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>(UpdateEstadoCategoriaProductoDocument, options);
      }
export type UpdateEstadoCategoriaProductoMutationHookResult = ReturnType<typeof useUpdateEstadoCategoriaProductoMutation>;
export type UpdateEstadoCategoriaProductoMutationResult = Apollo.MutationResult<UpdateEstadoCategoriaProductoMutation>;
export type UpdateEstadoCategoriaProductoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoCategoriaProductoMutation, UpdateEstadoCategoriaProductoMutationVariables>;
export const UpdateEstadoProductoDocument = gql`
    mutation UpdateEstadoProducto($input: UpdateEstadoProductoInput!) {
  UpdateEstadoProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    created_at
    updated_at
  }
}
    `;
export type UpdateEstadoProductoMutationFn = Apollo.MutationFunction<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>;

/**
 * __useUpdateEstadoProductoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoProductoMutation, { data, loading, error }] = useUpdateEstadoProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>(UpdateEstadoProductoDocument, options);
      }
export type UpdateEstadoProductoMutationHookResult = ReturnType<typeof useUpdateEstadoProductoMutation>;
export type UpdateEstadoProductoMutationResult = Apollo.MutationResult<UpdateEstadoProductoMutation>;
export type UpdateEstadoProductoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoProductoMutation, UpdateEstadoProductoMutationVariables>;
export const UpdateProductoDocument = gql`
    mutation UpdateProducto($input: ProductoInput!) {
  UpdateProducto(input: $input) {
    productoId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    precioReal
    precioOferta
    stockMinimo
    stockReal
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    galeria {
      id
      titulo
      estado
      url
    }
    keywords
    destacado
    estado
    categoriaProductoId
    created_at
    updated_at
  }
}
    `;
export type UpdateProductoMutationFn = Apollo.MutationFunction<UpdateProductoMutation, UpdateProductoMutationVariables>;

/**
 * __useUpdateProductoMutation__
 *
 * To run a mutation, you first call `useUpdateProductoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductoMutation, { data, loading, error }] = useUpdateProductoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductoMutation, UpdateProductoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProductoMutation, UpdateProductoMutationVariables>(UpdateProductoDocument, options);
      }
export type UpdateProductoMutationHookResult = ReturnType<typeof useUpdateProductoMutation>;
export type UpdateProductoMutationResult = Apollo.MutationResult<UpdateProductoMutation>;
export type UpdateProductoMutationOptions = Apollo.BaseMutationOptions<UpdateProductoMutation, UpdateProductoMutationVariables>;
export const CreateImagenDocument = gql`
    mutation CreateImagen($imagen: Upload!) {
  CreateImagen(imagen: $imagen)
}
    `;
export type CreateImagenMutationFn = Apollo.MutationFunction<CreateImagenMutation, CreateImagenMutationVariables>;

/**
 * __useCreateImagenMutation__
 *
 * To run a mutation, you first call `useCreateImagenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImagenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImagenMutation, { data, loading, error }] = useCreateImagenMutation({
 *   variables: {
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCreateImagenMutation(baseOptions?: Apollo.MutationHookOptions<CreateImagenMutation, CreateImagenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImagenMutation, CreateImagenMutationVariables>(CreateImagenDocument, options);
      }
export type CreateImagenMutationHookResult = ReturnType<typeof useCreateImagenMutation>;
export type CreateImagenMutationResult = Apollo.MutationResult<CreateImagenMutation>;
export type CreateImagenMutationOptions = Apollo.BaseMutationOptions<CreateImagenMutation, CreateImagenMutationVariables>;
export const DeleteImagenDocument = gql`
    mutation DeleteImagen($deleteImagenId: Int!) {
  DeleteImagen(id: $deleteImagenId)
}
    `;
export type DeleteImagenMutationFn = Apollo.MutationFunction<DeleteImagenMutation, DeleteImagenMutationVariables>;

/**
 * __useDeleteImagenMutation__
 *
 * To run a mutation, you first call `useDeleteImagenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImagenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImagenMutation, { data, loading, error }] = useDeleteImagenMutation({
 *   variables: {
 *      deleteImagenId: // value for 'deleteImagenId'
 *   },
 * });
 */
export function useDeleteImagenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImagenMutation, DeleteImagenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImagenMutation, DeleteImagenMutationVariables>(DeleteImagenDocument, options);
      }
export type DeleteImagenMutationHookResult = ReturnType<typeof useDeleteImagenMutation>;
export type DeleteImagenMutationResult = Apollo.MutationResult<DeleteImagenMutation>;
export type DeleteImagenMutationOptions = Apollo.BaseMutationOptions<DeleteImagenMutation, DeleteImagenMutationVariables>;
export const UpdateBlogDocument = gql`
    mutation updateBlog($input: BlogInput!) {
  updateBlog(input: $input) {
    blogId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    usuarioId
    created_at
    updated_at
  }
}
    `;
export type UpdateBlogMutationFn = Apollo.MutationFunction<UpdateBlogMutation, UpdateBlogMutationVariables>;

/**
 * __useUpdateBlogMutation__
 *
 * To run a mutation, you first call `useUpdateBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBlogMutation, { data, loading, error }] = useUpdateBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBlogMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBlogMutation, UpdateBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBlogMutation, UpdateBlogMutationVariables>(UpdateBlogDocument, options);
      }
export type UpdateBlogMutationHookResult = ReturnType<typeof useUpdateBlogMutation>;
export type UpdateBlogMutationResult = Apollo.MutationResult<UpdateBlogMutation>;
export type UpdateBlogMutationOptions = Apollo.BaseMutationOptions<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const UpdateEstadoBancoDocument = gql`
    mutation UpdateEstadoBanco($input: UpdateEstadoBancoInput) {
  UpdateEstadoBanco(input: $input) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    created_at
    updated_at
  }
}
    `;
export type UpdateEstadoBancoMutationFn = Apollo.MutationFunction<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>;

/**
 * __useUpdateEstadoBancoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoBancoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoBancoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoBancoMutation, { data, loading, error }] = useUpdateEstadoBancoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoBancoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>(UpdateEstadoBancoDocument, options);
      }
export type UpdateEstadoBancoMutationHookResult = ReturnType<typeof useUpdateEstadoBancoMutation>;
export type UpdateEstadoBancoMutationResult = Apollo.MutationResult<UpdateEstadoBancoMutation>;
export type UpdateEstadoBancoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoBancoMutation, UpdateEstadoBancoMutationVariables>;
export const GetAllBancosDocument = gql`
    query GetAllBancos($estado: String) {
  GetAllBancos(estado: $estado) {
    data {
      bancoId
      titulo
      estado
      numeroCuenta
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      created_at
      updated_at
    }
    numeroTotal
  }
}
    `;

/**
 * __useGetAllBancosQuery__
 *
 * To run a query within a React component, call `useGetAllBancosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBancosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBancosQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllBancosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBancosQuery, GetAllBancosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBancosQuery, GetAllBancosQueryVariables>(GetAllBancosDocument, options);
      }
export function useGetAllBancosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBancosQuery, GetAllBancosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBancosQuery, GetAllBancosQueryVariables>(GetAllBancosDocument, options);
        }
export type GetAllBancosQueryHookResult = ReturnType<typeof useGetAllBancosQuery>;
export type GetAllBancosLazyQueryHookResult = ReturnType<typeof useGetAllBancosLazyQuery>;
export type GetAllBancosQueryResult = Apollo.QueryResult<GetAllBancosQuery, GetAllBancosQueryVariables>;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs($pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllBlogs(pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
    numeroTotal
    data {
      blogId
      titulo
      slug
      descripcionCorta
      descripcionLarga
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      keywords
      estado
      destacado
      categoriaBlogId
      CategoriaBlog {
        titulo
      }
      usuarioId
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetAllCategoriaBlogsDocument = gql`
    query GetAllCategoriaBlogs($estado: String) {
  GetAllCategoriaBlogs(estado: $estado) {
    numeroTotal
    data {
      categoriaBlogId
      titulo
      slug
      keywords
      descripcion
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      estado
      created_at
      updated_at
      numeroBlogs
    }
  }
}
    `;

/**
 * __useGetAllCategoriaBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaBlogsQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllCategoriaBlogsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
      }
export function useGetAllCategoriaBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>(GetAllCategoriaBlogsDocument, options);
        }
export type GetAllCategoriaBlogsQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsQuery>;
export type GetAllCategoriaBlogsLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogsLazyQuery>;
export type GetAllCategoriaBlogsQueryResult = Apollo.QueryResult<GetAllCategoriaBlogsQuery, GetAllCategoriaBlogsQueryVariables>;
export const GetAllCategoriaProductosDocument = gql`
    query GetAllCategoriaProductos($estado: String) {
  GetAllCategoriaProductos(estado: $estado) {
    numeroTotal
    data {
      categoriaProductoId
      titulo
      slug
      estado
      keywords
      descripcion
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllCategoriaProductosQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaProductosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaProductosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaProductosQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllCategoriaProductosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>(GetAllCategoriaProductosDocument, options);
      }
export function useGetAllCategoriaProductosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>(GetAllCategoriaProductosDocument, options);
        }
export type GetAllCategoriaProductosQueryHookResult = ReturnType<typeof useGetAllCategoriaProductosQuery>;
export type GetAllCategoriaProductosLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaProductosLazyQuery>;
export type GetAllCategoriaProductosQueryResult = Apollo.QueryResult<GetAllCategoriaProductosQuery, GetAllCategoriaProductosQueryVariables>;
export const GetAllProductosDocument = gql`
    query GetAllProductos($pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllProductos(pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
    numeroTotal
    data {
      productoId
      titulo
      slug
      estado
      descripcionCorta
      descripcionLarga
      precioReal
      precioOferta
      stockMinimo
      stockReal
      imagenPrincipal {
        id
        titulo
        estado
        url
      }
      imagenSecundaria {
        id
        titulo
        estado
        url
      }
      galeria {
        id
        titulo
        estado
        url
      }
      keywords
      destacado
      estado
      categoriaProductoId
      CategoriaProducto {
        titulo
      }
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useGetAllProductosQuery__
 *
 * To run a query within a React component, call `useGetAllProductosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductosQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllProductosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductosQuery, GetAllProductosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductosQuery, GetAllProductosQueryVariables>(GetAllProductosDocument, options);
      }
export function useGetAllProductosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductosQuery, GetAllProductosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductosQuery, GetAllProductosQueryVariables>(GetAllProductosDocument, options);
        }
export type GetAllProductosQueryHookResult = ReturnType<typeof useGetAllProductosQuery>;
export type GetAllProductosLazyQueryHookResult = ReturnType<typeof useGetAllProductosLazyQuery>;
export type GetAllProductosQueryResult = Apollo.QueryResult<GetAllProductosQuery, GetAllProductosQueryVariables>;
export const GetBlogSlugDocument = gql`
    query GetBlogSlug($slug: String) {
  GetBlogSlug(slug: $slug) {
    blogId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      estado
      url
    }
    imagenSecundaria {
      id
      titulo
      estado
      url
    }
    keywords
    estado
    destacado
    categoriaBlogId
    CategoriaBlog {
      titulo
    }
    usuarioId
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetBlogSlugQuery__
 *
 * To run a query within a React component, call `useGetBlogSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetBlogSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
      }
export function useGetBlogSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogSlugQuery, GetBlogSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogSlugQuery, GetBlogSlugQueryVariables>(GetBlogSlugDocument, options);
        }
export type GetBlogSlugQueryHookResult = ReturnType<typeof useGetBlogSlugQuery>;
export type GetBlogSlugLazyQueryHookResult = ReturnType<typeof useGetBlogSlugLazyQuery>;
export type GetBlogSlugQueryResult = Apollo.QueryResult<GetBlogSlugQuery, GetBlogSlugQueryVariables>;
export const GetBancoIdDocument = gql`
    query GetBancoId($bancoId: Int) {
  GetBancoId(bancoId: $bancoId) {
    bancoId
    titulo
    estado
    numeroCuenta
    imagenPrincipal {
      url
      titulo
      id
      estado
    }
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetBancoIdQuery__
 *
 * To run a query within a React component, call `useGetBancoIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBancoIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBancoIdQuery({
 *   variables: {
 *      bancoId: // value for 'bancoId'
 *   },
 * });
 */
export function useGetBancoIdQuery(baseOptions?: Apollo.QueryHookOptions<GetBancoIdQuery, GetBancoIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBancoIdQuery, GetBancoIdQueryVariables>(GetBancoIdDocument, options);
      }
export function useGetBancoIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBancoIdQuery, GetBancoIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBancoIdQuery, GetBancoIdQueryVariables>(GetBancoIdDocument, options);
        }
export type GetBancoIdQueryHookResult = ReturnType<typeof useGetBancoIdQuery>;
export type GetBancoIdLazyQueryHookResult = ReturnType<typeof useGetBancoIdLazyQuery>;
export type GetBancoIdQueryResult = Apollo.QueryResult<GetBancoIdQuery, GetBancoIdQueryVariables>;
export const GetAllImagenesDocument = gql`
    query GetAllImagenes($estado: String) {
  GetAllImagenes(estado: $estado) {
    id
    url
    titulo
    estado
  }
}
    `;

/**
 * __useGetAllImagenesQuery__
 *
 * To run a query within a React component, call `useGetAllImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllImagenesQuery({
 *   variables: {
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllImagenesQuery, GetAllImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllImagenesQuery, GetAllImagenesQueryVariables>(GetAllImagenesDocument, options);
      }
export function useGetAllImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllImagenesQuery, GetAllImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllImagenesQuery, GetAllImagenesQueryVariables>(GetAllImagenesDocument, options);
        }
export type GetAllImagenesQueryHookResult = ReturnType<typeof useGetAllImagenesQuery>;
export type GetAllImagenesLazyQueryHookResult = ReturnType<typeof useGetAllImagenesLazyQuery>;
export type GetAllImagenesQueryResult = Apollo.QueryResult<GetAllImagenesQuery, GetAllImagenesQueryVariables>;