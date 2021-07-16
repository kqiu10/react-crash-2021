import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = () => {
    console.log('Click');
  }
  return (
    <header className="header">
      <p>{props.title}</p>
      <Button color='green' text='Hello' onClick={onClick} />
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
