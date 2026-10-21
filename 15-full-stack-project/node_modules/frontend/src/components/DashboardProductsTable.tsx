import {
  useCreateDashboardProductMutation,
  useDeleteDashboardProductMutation,
  useGetCategoriesQuery,
  useGetDashboardProductsQuery,
  useUpdateDashboardProductMutation,
  useUploadFileMutation,
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
  Flex,
  NativeSelect,
} from "@chakra-ui/react";
import DashboardProductsTableSkeleton from "./DashboardProductsTableSkeleton";
import type { Category, Product } from "@/data";
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
  const [productToCreate, setProductToCreate] = React.useState<Product | null>(
    null,
  );
  const [thumbnail, setThumbnail] = React.useState<File | null>(null);
  const [categoryId, setCategoryId] = React.useState("");
  const { data: categories } = useGetCategoriesQuery({});
  const [deleteProduct, { isLoading: isDeleting, isSuccess }] =
    useDeleteDashboardProductMutation();
  const [updateProduct, { isLoading: isUpdating, isSuccess: isUpdated }] =
    useUpdateDashboardProductMutation();
  const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
  const [createProduct, { isLoading: isCreating, isSuccess: isCreated }] =
    useCreateDashboardProductMutation();

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    theFunction: React.Dispatch<React.SetStateAction<Product | null>>,
  ) => {
    const { name, value } = e.target;
    console.log(name, value);
    theFunction((prev) => {
      // create form starts as null, so build from an empty object
      return { ...prev, [name]: value } as Product;
    });
  };

  const onThumbnailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setThumbnail(file);
  };

  // returns true (and warns) if a required field is empty
  const isMissingRequired = (p: Product | null, hasThumbnail: boolean) => {
    const isBlank = (v: unknown) => String(v ?? "").trim() === "";
    const missing =
      !p ||
      isBlank(p.title) ||
      isBlank(p.description) ||
      isBlank(p.price) ||
      isBlank(p.stock) ||
      !hasThumbnail;
    if (missing)
      toaster.create({
        title: "Missing fields",
        description:
          "Title, description, price, stock and thumbnail are required.",
        type: "error",
      });
    return missing;
  };

  // "" means no category: { set: [] } clears the relation
  const categoryPayload = categoryId || { set: [] };

  const categoryField = (
    <Field.Root>
      <Field.Label>Category</Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">No category</option>
          {categories?.data.map((c: Category) => (
            <option key={c.documentId} value={c.documentId}>
              {c.title}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  );

  const createProductModal = (
    <CustomModal
      trigger={
        <Button
          w="fit"
          alignSelf="flex-end"
          onClick={() => {
            setThumbnail(null);
            setCategoryId("");
          }}
        >
          Create
        </Button>
      }
      title="Create Product"
      isLoading={isCreating || isUploading}
      isSuccess={isCreated}
      okTxt="Create"
      whatToDo={async () => {
        if (isMissingRequired(productToCreate, Boolean(thumbnail))) return;
        if (!productToCreate) return;
        try {
          // Strapi 5: upload file first, then link its id in a JSON body
          let thumbnailId: number | undefined;
          if (thumbnail) {
            const formData = new FormData();
            formData.append("files", thumbnail);
            const [uploaded] = await uploadFile(formData).unwrap();
            thumbnailId = uploaded.id;
          }
          await createProduct({
            data: {
              title: productToCreate.title,
              description: productToCreate.description,
              price: Number(productToCreate.price),
              stock: Number(productToCreate.stock),
              thumbnail: thumbnailId,
              category: categoryPayload,
            },
          }).unwrap();

          setProductToCreate(null);
          setThumbnail(null);

          toaster.create({
            title: "Product created",
            description: "Product has been created.",
            type: "success",
          });
        } catch (error) {
          console.error("Error creating product:", error);
          toaster.create({
            title: "Creation failed",
            description: "Could not create the product.",
            type: "error",
          });
        }
      }}
    >
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Field.Root required>
            <Field.Label>
              Title <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Product Title"
              name="title"
              value={productToCreate?.title || ""}
              onChange={(e) => onChangeHandler(e, setProductToCreate)}
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Description <Field.RequiredIndicator />
            </Field.Label>
            <Input
              placeholder="Product Description"
              name="description"
              value={productToCreate?.description || ""}
              onChange={(e) => onChangeHandler(e, setProductToCreate)}
            />
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Price <Field.RequiredIndicator />
            </Field.Label>
            <NumberInput.Root w="100%">
              <NumberInput.Control />
              <NumberInput.Input
                name="price"
                value={productToCreate?.price || ""}
                onChange={(e) => onChangeHandler(e, setProductToCreate)}
              />
            </NumberInput.Root>
          </Field.Root>

          <Field.Root required>
            <Field.Label>
              Count in Stock <Field.RequiredIndicator />
            </Field.Label>
            <NumberInput.Root w="100%">
              <NumberInput.Control />
              <NumberInput.Input
                name="stock"
                value={productToCreate?.stock || ""}
                onChange={(e) => onChangeHandler(e, setProductToCreate)}
              />
            </NumberInput.Root>
          </Field.Root>

          {categoryField}

          <Field.Root required>
            <Field.Label>
              Thumbnail <Field.RequiredIndicator />
            </Field.Label>
            <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
              <FileUpload.HiddenInput onChange={onThumbnailChangeHandler} />
              <FileUpload.Dropzone>
                <Icon size="md" color="fg.muted">
                  <LuUpload />
                </Icon>
                <FileUpload.DropzoneContent>
                  <Box>Drag and drop files here</Box>
                  <Box color="fg.muted">.png, .jpg up to 5MB</Box>
                </FileUpload.DropzoneContent>
              </FileUpload.Dropzone>
              <FileUpload.List />
            </FileUpload.Root>
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </CustomModal>
  );

  if (isLoading) return <DashboardProductsTableSkeleton />;
  if (data.data.length === 0)
    return (
      <Flex direction="column" gap="4">
        {createProductModal}
        <Box textAlign="center" py="10">
          No products found.
        </Box>
      </Flex>
    );

  return (
    <Flex direction="column" gap="4">
      {createProductModal}
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
                      src={`${item.thumbnail?.url}`}
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
                      whatToDo={async () => {
                        console.log(
                          "Deleting product with ID:",
                          item.documentId,
                        );
                        await deleteProduct(item.documentId);
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
                            setCategoryId(item.category?.documentId ?? "");
                          }}
                        >
                          <FiEdit size={17} />
                        </Button>
                      }
                      whatToDo={async () => {
                        if (
                          isMissingRequired(
                            productToEdit,
                            Boolean(thumbnail || productToEdit?.thumbnail),
                          )
                        )
                          return;
                        if (!productToEdit) return;
                        try {
                          // Strapi 5: upload file first, then link its id in a JSON body
                          let thumbnailId: number | undefined;
                          if (thumbnail) {
                            const formData = new FormData();
                            formData.append("files", thumbnail);
                            const [uploaded] =
                              await uploadFile(formData).unwrap();
                            thumbnailId = uploaded.id;
                          }

                          await updateProduct({
                            id: productToEdit.documentId,
                            body: {
                              data: {
                                title: productToEdit.title,
                                description: productToEdit.description,
                                price: Number(productToEdit.price),
                                stock: Number(productToEdit.stock),
                                ...(thumbnailId && { thumbnail: thumbnailId }),
                                category: categoryPayload,
                              },
                            },
                          }).unwrap();

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
                      isLoading={isUpdating || isUploading}
                      isSuccess={isUpdated}
                    >
                      <Fieldset.Root size="lg" maxW="md">
                        <Fieldset.Content>
                          <Field.Root required>
                            <Field.Label>
                              Title <Field.RequiredIndicator />
                            </Field.Label>
                            <Input
                              placeholder="Product Title"
                              name="title"
                              value={productToEdit?.title || ""}
                              onChange={(e) =>
                                onChangeHandler(e, setProductToEdit)
                              }
                            />
                          </Field.Root>

                          <Field.Root required>
                            <Field.Label>
                              Description <Field.RequiredIndicator />
                            </Field.Label>
                            <Input
                              placeholder="Product Description"
                              name="description"
                              value={productToEdit?.description || ""}
                              onChange={(e) =>
                                onChangeHandler(e, setProductToEdit)
                              }
                            />
                          </Field.Root>

                          <Field.Root required>
                            <Field.Label>
                              Price <Field.RequiredIndicator />
                            </Field.Label>
                            <NumberInput.Root w="100%">
                              <NumberInput.Control />
                              <NumberInput.Input
                                name="price"
                                value={productToEdit?.price || ""}
                                onChange={(e) =>
                                  onChangeHandler(e, setProductToEdit)
                                }
                              />
                            </NumberInput.Root>
                          </Field.Root>

                          <Field.Root required>
                            <Field.Label>
                              Count in Stock <Field.RequiredIndicator />
                            </Field.Label>
                            <NumberInput.Root w="100%">
                              <NumberInput.Control />
                              <NumberInput.Input
                                name="stock"
                                value={productToEdit?.stock || ""}
                                onChange={(e) =>
                                  onChangeHandler(e, setProductToEdit)
                                }
                              />
                            </NumberInput.Root>
                          </Field.Root>

                          {categoryField}

                          <Field.Root required>
                            <Field.Label>
                              Thumbnail <Field.RequiredIndicator />
                            </Field.Label>
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
    </Flex>
  );
};

export default DashboardProductsTable;
