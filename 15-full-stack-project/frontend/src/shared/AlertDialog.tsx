import { toaster } from "@/components/ui/toaster";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);

  // close only when isSuccess flips to true; it stays true after, so don't force-close
  useEffect(() => {
    if (!isSuccess || !open) return;
    setOpen(false);
    toaster.create({
      title: "Product deleted",
      description: `The product has been deleted.`,
      type: "info",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Dialog.Root
      role="alertdialog"
      closeOnInteractOutside
      closeOnEscape
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
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
