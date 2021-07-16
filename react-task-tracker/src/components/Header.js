import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, ShowAdd }) => {

  return (
    <header className="header">
      <p>{title}</p>
      <Button color={ShowAdd ? 'red' : 'green'} text={ShowAdd ? 'Close' : 'Add'} onClick={onAdd} />
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
