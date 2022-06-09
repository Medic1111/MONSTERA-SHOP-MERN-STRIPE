import classes from "./CheckOut.module.css";
import Png from "../../assets/transparent.png";
import { useDispatch, useSelector } from "react-redux";
import { failSuccessActions } from "../../features/failSuccessModal";

const CheckOut = () => {
  const dispatch = useDispatch();

  const hasFailed = useSelector((state) => state.failSuccess.hasFailed);

  const closeCheckOutHandler = () => {
    dispatch(failSuccessActions.setIsModal());
  };

  return (
    <div className={classes.div}>
      <h2 className={classes.h2}>
        {!hasFailed
          ? "PAYMENT PROCESSED. THANK YOU."
          : "PAYMENT NOT PROCESSED. PLEASE, TRY AGAIN."}
      </h2>
      <img className={classes.img} src={Png} />
      <button onClick={closeCheckOutHandler} className={classes.btn}>
        CLOSE
      </button>
    </div>
  );
};

export default CheckOut;
