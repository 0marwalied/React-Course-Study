import { toaster } from "@/components/ui/toaster";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

interface IProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  okTxt?: string;
  whatToDo: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
}

const AlertDialog = ({
  children,
  whatToDo,
  title,
  description,
  okTxt,
  isLoading,
  isSuccess,
}: IProps) => {
  if (isSuccess) {
    toaster.create({
      title: "Product deleted",
      description: `The product has been deleted.`,
      type: "info",
    });
  }
  return (
    <Dialog.Root
      role="alertdialog"
      closeOnInteractOutside
      closeOnEscape
      open={isSuccess ? false : undefined}
      placement={"center"}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>{description}</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>

              <Button
                loading={isLoading}
                colorPalette="red"
                onClick={whatToDo}
                spinner={<BeatLoader size={8} color="white" />}
              >
                {okTxt}
              </Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AlertDialog;
