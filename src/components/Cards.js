import React, { useState } from "react";
import items from "../Data";
import Card from "./Card";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToBagAction } from "../redux/actions/bag_action";
import "../styles/styles.css";

function Cards(props) {
  const { newBag, addToBagAction } = props;
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
    addToBagAction(product);
  };

  return (
    <>
      <div>
        <ul className="cards">
          {newBag.map((c) => {
            return (
              <li className="card">
                <h3>{c.title}</h3>
                <h4>Unité(s):</h4> <span>{c.unite}</span>
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

const mapStateToProps = ({ newBag }) => {
  return {
    newBag,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ addToBagAction }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
