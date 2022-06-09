import classes from "./PlantListWrapper.module.css";

const PlantListWrapper = (props) => {
  return (
    <main>
      <ul className={classes.ul}>{props.children}</ul>
    </main>
  );
};

export default PlantListWrapper;
