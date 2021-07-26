import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation} from 'react-router-dom'
import Buttom from './Button'

const Header = ({ title, onAdd, ShowAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <p>{title}</p>
     {location.pathname === '/' && <Button color={ShowAdd ? 'red' : 'green'} text={ShowAdd ? 'Close' : 'Add'} onClick={onAdd} />}
    </header>
  )
}
Header.defaultProps = {
  title: "Task Tracker",
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
