import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addItem } from "../actions/index";
import { deleteItem } from "../actions/index";
import Card from "./Card";
import "../styles/styles.css";

function Cards() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Renault",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 2,
      title: "Peageot",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 3,
      title: "Citroen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 4,
      title: "Dacia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 5,
      title: "Volkswagen",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 6,
      title: "Ford",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 7,
      title: "Nissan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 8,
      title: "Toyota",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 9,
      title: "Opel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 10,
      title: "Audi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 11,
      title: "Mercedes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 12,
      title: "BMW",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 13,
      title: "Fiat",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 14,
      title: "DS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
    {
      id: 15,
      title: "Kia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
    },
  ]);
  let [bag, setBag] = useState([
    {
      id: 15,
      title: "Kia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at quasi asperiores excepturi distinctio, veniam delectus, saepe libero aut ut rem vel, ipsam ullam optio! Aut sit a quidem magnam.",
      unite: 1,
    },
  ]);
  const addToBag = (product) => {
    console.log(product, "product");
    const existingItem = bag.filter((p) => p.id === product.id);
    if (existingItem.length > 0) {
      const withoutExistingItem = bag.filter((p) => p.id !== product.id);
      const updatingUniteItem = {
        ...existingItem[0],
        unite: existingItem[0].unite + product.unite,
      };
      setBag([...withoutExistingItem, updatingUniteItem]);
    } else {
      setBag([...bag, product]);
    }
  };

  return (
    <>
      <div>
        <ul>
          {bag.map((c) => {
            return (
              <li>
                {c.title} , {c.unite}
                {/* {console.log(c, "c")} */}
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="cards">
        {items.map((item) => {
          return <Card key={item.id} {...item} addToBag={addToBag} />;
        })}
      </ul>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ addItem }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
