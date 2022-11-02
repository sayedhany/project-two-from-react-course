import classes from "./Card.module.css";
// import Modal from "./Modal";
export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
