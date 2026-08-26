import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const ProductDetailsSkeleton = () => {
  return (
    <Box bg={"gray.700"} p={5} rounded="" maxW="sm" mx="auto">
      <Skeleton height="200px" />
      <SkeletonText mt="4" noOfLines={1} spaceX={4} mx="auto" maxW="200px" />
      <SkeletonText mt="4" noOfLines={3} spaceX={4} />
      <SkeletonText mt="4" noOfLines={1} spaceX={4} maxW="120px" />
      <Skeleton mt="4" height="50px" spaceX={4} maxW="120px" rounded="lg" />
    </Box>
  );
};

export default ProductDetailsSkeleton;
