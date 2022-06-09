import dummyData from "../../data/data";
import nextId from "react-id-generator";
import PlantListWrapper from "../wrappers/PlantListWrapper/PlantListWrapper";
import PlantItem from "../PlantItem/PlantItem";
const PlantList = () => {
  return (
    <PlantListWrapper>
      {dummyData.map((obj, index) => {
        return (
          <PlantItem
            key={`obj_${index}`}
            id={nextId()}
            name={obj.name}
            price={obj.price}
            description={obj.description}
            src={obj.src}
          />
        );
      })}
    </PlantListWrapper>
  );
};

export default PlantList;
