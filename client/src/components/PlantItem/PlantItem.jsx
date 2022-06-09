import Form from "../Form/Form";
import classes from "./PlantItem.module.css";

const PlantItem = ({ id, src, name, description, price }) => {
  return (
    <li id={id} className={classes.li}>
      <img className={classes.plantPic} src={src} />
      <div className={classes.txtBox}>
        <h2 className={classes.h2}>{name}</h2>
        <p className={classes.description}>{description}</p>
        <p className={classes.price}>${price}</p>
        <Form id={id} name={name} price={price} />
      </div>
    </li>
  );
};

export default PlantItem;
