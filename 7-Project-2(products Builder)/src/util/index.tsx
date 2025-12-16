export const renderColors = (colors: string[], max: number = 5) => {
  if (colors.length > max) {
    const remain = colors.length - max;
    return (
      <>
        {colors.map((color, index) =>
          index < max ? (
            <li
              className="rounded-4xl w-5 h-5 cursor-pointer"
              style={{ backgroundColor: color }}
            ></li>
          ) : null
        )}
        <p>+{remain}</p>
      </>
    );
  }
  return colors.map((color) => (
    <li
      className="rounded-4xl w-5 h-5 cursor-pointer"
      style={{ backgroundColor: color }}
    ></li>
  ));
};

export const handleDesciption = (
  description: string,
  max: number = 50
): string => {
  if (description.length > max) return `${description.substring(0, max)}...`;
  return description;
};
