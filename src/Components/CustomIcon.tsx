import * as React from "react";
interface CustomIconProps {
   children: React.ReactNode;
}

const CustomIcon: React.FC<CustomIconProps & React.DetailedHTMLProps<React.HTMLAttributes<SVGElement>, SVGElement>> = ({
   children,
   ...rest
}) => {
   const childrenWithProps = React.Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
         return React.cloneElement(child, { ...rest });
      }
      return child;
   });
   return <>{childrenWithProps}</>;
};

export default CustomIcon;
