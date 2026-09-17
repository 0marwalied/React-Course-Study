import { Flex, Skeleton } from "@chakra-ui/react";

const DashboardProductsTableSkeleton = () => {
  return (
    <Flex direction="column" gap={2}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Flex
          key={index}
          alignItems="center"
          justifyContent="space-between"
          border="1px solid"
          h="50px"
          rounded="md"
          p={2}
        >
          <Skeleton h="9px" w="120px" bg="gray" />
          <Skeleton h="9px" w="120px" bg="gray" />
          <Skeleton h="9px" w="120px" bg="gray" />
          <Skeleton h="9px" w="120px" bg="gray" />
          <Skeleton h="9px" w="120px" bg="gray" />
          <Skeleton h="9px" w="120px" bg="gray" />

          <Flex gap={2}>
            <Skeleton h="30px" w="50px" bg="red.300" />
            <Skeleton h="30px" w="50px" bg="blue.300" />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default DashboardProductsTableSkeleton;
