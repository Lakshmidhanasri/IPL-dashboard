// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardsDetails} = props
  const {id, name, teamImageUrl} = teamCardsDetails

  return (
    <li className="list-container">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} className="team-image" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
