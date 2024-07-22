import { ReactNode, FC } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1700px] bg-white mx-auto min-h-screen flex flex-col ">
      {children}
    </div>
  );
};

export default Container;
