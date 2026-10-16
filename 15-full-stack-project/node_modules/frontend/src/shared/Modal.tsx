"use client";

import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useRef } from "react";

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

  return (
    <Dialog.Root
      initialFocusEl={() => ref.current}
      closeOnInteractOutside
      closeOnEscape
      open={isSuccess ? false : undefined}
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
