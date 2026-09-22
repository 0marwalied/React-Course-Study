import { useGetDashboardProductsQuery } from "@/app/services/apiSlice";
import { Table } from "@chakra-ui/react";
import DashboardProductsTableSkeleton from "./DashboardProductsTableSkeleton";
import type { Product } from "@/data";

const DashboardProductsTable = () => {
  const { isLoading, isError, data } = useGetDashboardProductsQuery({
    page: 1,
  });
  console.log({ isLoading, isError, data });
  if (isLoading) return <DashboardProductsTableSkeleton />;
  return (
    <Table.Root size="sm" variant={"outline"}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Product</Table.ColumnHeader>
          <Table.ColumnHeader>Category</Table.ColumnHeader>
          <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.data.map((item: Product) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>{item.category?.title}</Table.Cell>
            <Table.Cell textAlign="end">{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

// const items = [
//   { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
//   { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
//   { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
//   { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
//   { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
// ];

export default DashboardProductsTable;
