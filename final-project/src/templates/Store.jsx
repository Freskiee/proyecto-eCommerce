import PropTypes from "prop-types";
import { NavigationBar } from "../components";

const StoreTemplate = (props) => {
  return (
    <div>
        <NavigationBar />
      {
        props.children
      }
    </div>
  )
}

StoreTemplate.propTypes={
    children: PropTypes.any
}

export default StoreTemplate
