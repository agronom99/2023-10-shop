import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул сірий",
          img: "chair-grey.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стіл",
          img: "table.webp",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "tables",
          price: "149.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "sofa.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "sofa",
          price: "549.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "wall-light.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "sofa",
          price: "24.99",
        },
        {
          id: 5,
          title: "Стілець білий",
          img: "chair-white.jpeg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          category: "sofa",
          price: "24.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);

  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id){
     this.setState({orders:this.state.orders.filter(el=>el.id !==id)})
  }

  addToOrder(item) {  
    // для того щоб не повторювались товари у корзині
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
