import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../../components/pagination";
import IconEyeD from "../../../icons/IconEyeD";
import useAllPedidos from "../../../services/useAllPedidos";

const Pedidos = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 10,
  });
  const [values, setValues] = useState({
    pagina: state.pagina,
    numeroPagina: state.numeroPagina,
    razonSocial: "",
    email: "",
    fechaInicial: "",
    fechaFinal: "",
  });

  const { db: pedidos, loading, nTotal } = useAllPedidos(values);
  const [form, setForm] = useState({
    searchText: "",
    fechaInicial: "",
    fechaFinal: "",
    tipo: "0",
  });
  console.log(form);
  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const generatedTotal = (items: number, itemporpage: number) => {
    const n = Math.ceil(items / itemporpage);
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1);
  };
  const paginas = generatedTotal(nTotal, state.numeroPagina);

  useEffect(() => {
    setValues({
      ...values,
      pagina: state.pagina,
      numeroPagina: state.numeroPagina,
    });
  }, [state]);

  console.log(form);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setData(pedidos);
  }, [data, state]);

  const handleSearch = () => {
    if (form.tipo === "0") {
      setValues({
        ...values,
        fechaFinal: form.fechaFinal,
        fechaInicial: form.fechaFinal,
        email: "",
        razonSocial: "",
      });
    }
    if (form.tipo === "1") {
      setValues({
        ...values,
        fechaFinal: form.fechaFinal,
        fechaInicial: form.fechaFinal,
        email: form.searchText,
        razonSocial: "",
      });
    }
    if (form.tipo === "2") {
      setValues({
        ...values,
        fechaFinal: form.fechaFinal,
        fechaInicial: form.fechaFinal,
        email: "",
        razonSocial: form.searchText,
      });
    }
  };

  const handleClear = () => {
    setForm({
      searchText: "",
      fechaInicial: "",
      fechaFinal: "",
      tipo: "0",
    });
  };

  return (
    <Container maxWidth="1930px" p={"10"}>
      <Flex flexDir={"column"}>
        <Box maxWidth={"full"}>
          <Heading as="h1" fontSize={22}>
            Pedidos
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: "gray.400" }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos tus pedidos.
          </Text>
        </Box>

        <Box maxWidth={"full"} marginTop="2rem">
          <Heading as="h4" fontSize={18}>
            Filtros
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: "gray.400" }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás filtrar tu información.
          </Text>
          <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-end">
            <div className="flex-col w-full gap-2 flex  sm:flex-row">
              <select
                onChange={handleChange}
                value={form.tipo}
                name="tipo"
                id=""
                className="py-3 px-4 w-full sm:w-auto"
              >
                <option value="0" className="mt-3">
                  Buscar por:
                </option>
                <option value="1">Email</option>
                <option value="2">Razón social</option>
              </select>
              <input
                type="text"
                onChange={handleChange}
                name="searchText"
                className=" p-2 border rounded-md border-primary w-full"
                value={form.searchText}
              />
            </div>
            <div className="flex gap-3">
              <div className="w-full">
                <label htmlFor="" className="text-sm">
                  Fecha de incio
                </label>
                <input
                  type="date"
                  className="w-full py-2 border rounded-md border-primary"
                  onChange={handleChange}
                  name="fechaInicial"
                  value={form.fechaInicial}
                />
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-sm">
                  Fecha final
                </label>
                <input
                  type="date"
                  className="w-full py-2 border rounded-md border-primary"
                  onChange={handleChange}
                  name="fechaFinal"
                  value={form.fechaFinal}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center gap-5 ">
              <button
                className="border border-primary w-full lg:w-full bg-primary text-white rounded-md py-2 px-5"
                onClick={handleSearch}
              >
                Filtrar
              </button>
              <button
                className="border border-lime-600 w-full lg:w-full bg-lime-600 text-white rounded-md py-2 px-5"
                onClick={handleClear}
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        </Box>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" h={"xl"}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.500"
              size="xl"
            />
          </Flex>
        ) : (
          <TableContainer mt={10}>
            <Table colorScheme="gray">
              <Thead fontWeight={"black"}>
                <Tr>
                  <Th color="gray.400">Nombres</Th>
                  <Th color="gray.400">Numero de comprobante</Th>
                  <Th color="gray.400">Transaccion Id</Th>
                  <Th color="gray.400">Email</Th>
                  <Th textAlign="center" color="gray.400">
                    Celular
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Fecha
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Detalles
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((pedido: any) => (
                  <Tr key={pedido.pedidoId}>
                    <Td>
                      {pedido?.Usuario?.nombres} {pedido?.Usuario?.apellidos}
                    </Td>
                    <Td>{pedido?.numeroComprobante}</Td>
                    <Td>{pedido?.transaccionId}</Td>
                    <Td>{pedido?.Usuario?.email}</Td>
                    <Td>{pedido?.Usuario?.celular}</Td>
                    <Td>{pedido?.fechaPedido}</Td>
                    <Td>
                      <Flex justifyContent="center" alignItems="center" gap={5}>
                        <IconButton
                          aria-label="detalle"
                          onClick={() => {
                            navigate(`/detalle-pedido/${pedido.pedidoId}}`, {
                              state: pedido,
                            });
                          }}
                        >
                          <IconEyeD />
                        </IconButton>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}

        <Pagination state={state} setstate={setState} paginas={paginas} />
      </Flex>
    </Container>
  );
};

export default Pedidos;
