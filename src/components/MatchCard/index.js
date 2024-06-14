// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchstatusClassName = `match-status ${getMatchClassName(matchStatus)}`
  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchstatusClassName}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
