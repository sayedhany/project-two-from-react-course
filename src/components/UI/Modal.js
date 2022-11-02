import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";
function Backdrop(props) {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
}
function ModalOverlays(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");
export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </Fragment>
  );
}
