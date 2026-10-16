import {
  useDeleteDashboardProductMutation,
  useGetDashboardProductsQuery,
  useUpdateDashboardProductMutation,
} from "@/app/services/products";
import {
  Table,
  Image,
  Button,
  Field,
  Input,
  NumberInput,
  Fieldset,
  FileUpload,
  Box,
  Icon,
} from "@chakra-ui/react";
import DashboardProductsTableSkeleton from "./DashboardProductsTableSkeleton";
import type { Product } from "@/data";
import { Link } from "react-router";
import { AiOutlineEye } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import AlertDialog from "../shared/AlertDialog";
import CustomModal from "@/shared/Modal";
import { LuUpload } from "react-icons/lu";
import React from "react";
import { toaster } from "./ui/toaster";

const DashboardProductsTable = () => {
  const { isLoading, data } = useGetDashboardProductsQuery({
    page: 1,
  });
  const [productToEdit, setProductToEdit] = React.useState<Product | null>(
    null,
  );
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [deleteProduct, { isLoading: isDeleting, isSuccess }] =
    useDeleteDashboardProductMutation();
  const [updateProduct, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdateDashboardProductMutation();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductToEdit((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onThumbnailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setThumbnail(file);
  };

  if (isLoading) return <DashboardProductsTableSkeleton />;
  if (data.data.length === 0)
    return <p className="text-center text-gray-500">No products found.</p>;
  console.log(productToEdit);

  console.log(thumbnail);

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
                        <Button
                          bg="blue.500"
                          _hover={{ bg: "blue.600" }}
                          onClick={() => {
                            setProductToEdit(item);
                            setThumbnail(null);
                          }}
                        >
                          <FiEdit size={17} />
                        </Button>
                      }
                      whatToDo={async () => {
                        if (!productToEdit) return;
                        const formData = new FormData();

                        formData.append(
                          "data",
                          JSON.stringify({
                            title: productToEdit.title,
                            description: productToEdit.description,
                            price: Number(productToEdit.price),
                            stock: Number(productToEdit.stock),
                          }),
                        );

                        if (thumbnail)
                          formData.append("files.thumbnail", thumbnail);

                        try {
                          await updateProduct({
                            id: productToEdit.documentId,
                            body: formData,
                          });

                          setProductToEdit(null);
                          setThumbnail(null);

                          toaster.create({
                            title: "Product updated",
                            description: "Product has been updated.",
                            type: "success",
                          });
                        } catch (error) {
                          console.error("Failed to update product:", error);
                          toaster.create({
                            title: "Update failed",
                            description: "Could not update the product.",
                            type: "error",
                          });
                        }
                      }}
                      title="Update Product"
                      okTxt="Update"
                      isLoading={isUpdating}
                      isSuccess={isUpdated}
                    >
                      <Fieldset.Root size="lg" maxW="md">
                        <Fieldset.Content>
                          <Field.Root>
                            <Field.Label>Title</Field.Label>
                            <Input
                              placeholder="Product Title"
                              name="title"
                              value={productToEdit?.title || ""}
                              onChange={onChangeHandler}
                            />
                          </Field.Root>

                          <Field.Root>
                            <Field.Label>Description</Field.Label>
                            <Input
                              placeholder="Product Description"
                              name="description"
                              value={productToEdit?.description || ""}
                              onChange={onChangeHandler}
                            />
                          </Field.Root>

                          <Field.Root>
                            <Field.Label>Price</Field.Label>
                            <NumberInput.Root w="100%">
                              <NumberInput.Control />
                              <NumberInput.Input
                                name="price"
                                value={productToEdit?.price || ""}
                                onChange={onChangeHandler}
                              />
                            </NumberInput.Root>
                          </Field.Root>

                          <Field.Root>
                            <Field.Label>Count in Stock</Field.Label>
                            <NumberInput.Root w="100%">
                              <NumberInput.Control />
                              <NumberInput.Input
                                name="stock"
                                value={productToEdit?.stock || ""}
                                onChange={onChangeHandler}
                              />
                            </NumberInput.Root>
                          </Field.Root>

                          <Field.Root>
                            <Field.Label>Thumbnail</Field.Label>
                            <FileUpload.Root
                              maxW="xl"
                              alignItems="stretch"
                              maxFiles={10}
                            >
                              <FileUpload.HiddenInput
                                onChange={onThumbnailChangeHandler}
                              />
                              <FileUpload.Dropzone>
                                <Icon size="md" color="fg.muted">
                                  <LuUpload />
                                </Icon>
                                <FileUpload.DropzoneContent>
                                  <Box>Drag and drop files here</Box>
                                  <Box color="fg.muted">
                                    .png, .jpg up to 5MB
                                  </Box>
                                </FileUpload.DropzoneContent>
                              </FileUpload.Dropzone>
                              <FileUpload.List />
                            </FileUpload.Root>
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
