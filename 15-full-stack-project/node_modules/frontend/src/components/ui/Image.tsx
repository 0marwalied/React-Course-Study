interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  style?: React.CSSProperties;
}

const Image = ({ src, alt, style, ...props }: IProps) => {
  return <img src={src} alt={alt} style={style} {...props} />;
};

export default Image;
