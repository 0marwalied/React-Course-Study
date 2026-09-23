import { useGetDashboardProductsQuery } from "@/app/services/apiSlice";
import { Table, Image, Button } from "@chakra-ui/react";
import DashboardProductsTableSkeleton from "./DashboardProductsTableSkeleton";
import type { Product } from "@/data";
import { Link } from "react-router";

const DashboardProductsTable = () => {
  const { isLoading, data } = useGetDashboardProductsQuery({
    page: 1,
  });
  if (isLoading) return <DashboardProductsTableSkeleton />;

  return (
    <Table.Root size="sm" variant={"outline"}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>ID</Table.ColumnHeader>
          <Table.ColumnHeader>Title</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader>Thumbnail</Table.ColumnHeader>
          <Table.ColumnHeader>Price</Table.ColumnHeader>
          <Table.ColumnHeader>Stock</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.data.map((item: Product) => (
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
                justifyContent: "flex-end",
              }}
            >
              <Button bg="blue.500" color="white" _hover={{ bg: "blue.600" }}>
                <Link to={`/products/${item.documentId}`}>Open</Link>
              </Button>
              <Button bg="red.500" color="white" _hover={{ bg: "red.600" }}>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DashboardProductsTable;
