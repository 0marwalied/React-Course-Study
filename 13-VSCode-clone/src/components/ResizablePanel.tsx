import type { ReactNode } from "react";
import { Group, Panel, Separator } from "react-resizable-panels";

interface IProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
  showLeftPanel?: boolean;
}

const ResizablePanel = ({
  leftPanel,
  rightPanel,
  showLeftPanel = true,
}: IProps) => {
  return (
    <Group className="h-full" autoSave="condition">
      {showLeftPanel && (
        <>
          <Panel defaultSize="25%" id="left" collapsible>
            {leftPanel}
          </Panel>
          <Separator className="bg-gray-500 border-r-2" />
        </>
      )}
      <Panel>{rightPanel}</Panel>
    </Group>
  );
};

export default ResizablePanel;
