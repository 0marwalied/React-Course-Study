import type { HtmlHTMLAttributes } from "react";

interface Iprops extends HtmlHTMLAttributes<HTMLImageElement> {
  imageUrl: string;
  alt: string;
}

const Image = ({ imageUrl, alt, ...rest }: Iprops) => {
  return <img src={imageUrl} alt={alt} {...rest} />;
};
export default Image;
