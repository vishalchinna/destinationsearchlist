import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  return (
    <li className="items">
      <img src={imgUrl} alt={name} className="pic" />
      <p>{name}</p>
    </li>
  )
}
export default DestinationItem
