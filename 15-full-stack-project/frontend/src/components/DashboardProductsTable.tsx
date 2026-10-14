import {
  useDeleteDashboardProductMutation,
  useGetDashboardProductsQuery,
} from "@/app/services/products";
import {
  Table,
  Image,
  Button,
  Field,
  Input,
  NumberInput,
  Fieldset,
} from "@chakra-ui/react";
import DashboardProductsTableSkeleton from "./DashboardProductsTableSkeleton";
import type { Product } from "@/data";
import { Link } from "react-router";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import AlertDialog from "../shared/AlertDialog";
import CustomModal from "@/shared/Modal";

const DashboardProductsTable = () => {
  const { isLoading, data } = useGetDashboardProductsQuery({
    page: 1,
  });
  const [deleteProduct, { isLoading: isDeleting, isSuccess }] =
    useDeleteDashboardProductMutation();
  if (isLoading) return <DashboardProductsTableSkeleton />;
  if (data.data.length === 0)
    return <p className="text-center text-gray-500">No products found.</p>;

  return (
    <>
      <Table.Root size="sm" variant={"outline"}>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>ID</Table.ColumnHeader>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Category</Table.ColumnHeader>
            <Table.ColumnHeader>Thumbnail</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
            <Table.ColumnHeader>Stock</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Action</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data
            ? data.data.map((item: Product) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell>{item.category?.title}</Table.Cell>
                  <Table.Cell>
                    <Image
                      borderRadius="full"
                      objectFit="cover"
                      boxSize="40px"
                      src={`${import.meta.env.VITE_BASE_URL}${item.thumbnail?.url}`}
                      alt={item.title}
                    />
                  </Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.stock}</Table.Cell>
                  <Table.Cell
                    textAlign="end"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      bg="purple.500"
                      variant="solid"
                      _hover={{ bg: "purple.600" }}
                    >
                      <Link to={`/products/${item.documentId}`}>
                        <AiOutlineEye size={17} />
                      </Link>
                    </Button>
                    <AlertDialog
                      title="Are you sure?"
                      description="Do you really want to destroy this product? this product cannot be undone."
                      okTxt="Destroy"
                      isLoading={isDeleting}
                      isSuccess={isSuccess}
                      whatToDo={() => {
                        deleteProduct(item.documentId);
                      }}
                    >
                      <Button bg="red.500" _hover={{ bg: "red.600" }}>
                        <BsTrash size={17} />
                      </Button>
                    </AlertDialog>
                    <CustomModal
                      trigger={
                        <Button bg="blue.500" _hover={{ bg: "blue.600" }}>
                          <FiEdit size={17} />
                        </Button>
                      }
                      whatToDo={() => {
                        console.log("Edit product");
                      }}
                      title="Update Product"
                    >
                      <Fieldset.Root size="lg" maxW="md">
                        <Fieldset.Content>
                          <Field.Root>
                            <Field.Label>Title</Field.Label>
                            <Input placeholder="Product Title" />
                          </Field.Root>

                          <Field.Root>
                            <Field.Label>Price</Field.Label>
                            <NumberInput.Root defaultValue="10" w="100%">
                              <NumberInput.Control />
                              <NumberInput.Input />
                            </NumberInput.Root>
                          </Field.Root>
                        </Fieldset.Content>
                      </Fieldset.Root>
                    </CustomModal>
                  </Table.Cell>
                </Table.Row>
              ))
            : null}
        </Table.Body>
        <Table.Caption mt="5">
          Total Entries: {data?.data?.length ?? 0}
        </Table.Caption>
      </Table.Root>
    </>
  );
};

export default DashboardProductsTable;
