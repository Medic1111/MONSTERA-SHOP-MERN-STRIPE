import classes from "./Hero.module.css";
import HeroPic from "../../assets/hero.jpg";

const Hero = () => {
  return <img className={classes.heroPic} src={HeroPic} />;
};

export default Hero;
