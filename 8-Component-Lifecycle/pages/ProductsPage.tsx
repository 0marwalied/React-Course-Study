import { Component } from "react";

interface IState {
  products: [];
}
class ProductsPage extends Component<object, IState> {
  constructor() {
    super(Object);
    this.state = {
      products: [],
    };
  }

  componentDidMount(): void {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ products: data.products });
        console.log(data);
      });
  }

  componentWillUnmount(): void {
    console.log("ProductsPage unmounted");
  }

  componentDidUpdate(): void {
    console.log("ProductsPage updated");
  }

  render() {
    return <>ProductsPage</>;
  }
}
export default ProductsPage;
