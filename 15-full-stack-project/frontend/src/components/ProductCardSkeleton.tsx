import { HStack, SkeletonCircle, SkeletonText, Stack } from "@chakra-ui/react";

const ProductCardSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs" border="1px solid #a8b5c8" p="4" rounded="md">
      <HStack width="full">
        <SkeletonCircle mx="auto" size="200px" />
      </HStack>
      <SkeletonText noOfLines={6} height="20px" />
      {/* <Skeleton height="200px" /> */}
    </Stack>
  );
};

export default ProductCardSkeleton;
