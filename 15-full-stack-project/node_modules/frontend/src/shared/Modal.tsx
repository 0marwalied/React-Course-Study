"use client";

import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface IProps {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  title?: string;
  whatToDo?: () => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  okTxt?: string;
  cancelTxt?: string;
}

const CusomModal = ({
  children,
  title,
  trigger,
  whatToDo,
  isLoading,
  isSuccess,
  okTxt = "Save",
  cancelTxt = "Cancel",
}: IProps) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);

  // close only when isSuccess flips to true; it stays true after, so don't force-close
  useEffect(() => {
    if (isSuccess) setOpen(false);
  }, [isSuccess]);

  return (
    <Dialog.Root
      initialFocusEl={() => ref.current}
      closeOnInteractOutside
      closeOnEscape
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">{children}</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">{cancelTxt}</Button>
              </Dialog.ActionTrigger>
              <Button onClick={whatToDo} loading={isLoading}>
                {okTxt}
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default CusomModal;
