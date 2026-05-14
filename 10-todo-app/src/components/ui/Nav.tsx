interface NavProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Nav = ({ children, ...rest }: NavProps) => {
  return <nav {...rest}>{children}</nav>;
};
export default Nav;
