import PropTypes from 'prop-types';
import feather from "feather-icons";
import Parser from "html-react-parser";

function Icon({ icon, className, color, width, height }) {
  if (feather.icons[icon]) {
    return Parser(feather.icons[icon].toSvg({
        ...className && { class: className },
        ...color && { color },
        ...width && { width },
        ...height && { height },
    }));
  }
  return null;
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default Icon;