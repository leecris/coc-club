/**
 * Created by Admin on 2/28/2017.
 */
import React from 'react'
import { Link } from 'react-router';
class ClanItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { item } = this.props
    return(
      <div>
        <ul>
          <li>
            <Link to={`/clan/${encodeURIComponent(item.tag)}`} >
              {item.name}
            </Link>
          </li>
          <li>{item.type}</li>
          <li>{item.clanLevel}</li>
          <li>{item.clanPoint}</li>
          <li>{item.members}</li>
        </ul>
      </div>
    )
  }
}

export default ClanItem
