import React from 'react'
import { Card } from 'semantic-ui-react'
import { Playersdata } from "../assets/player";

const Players = () => {
    
    return (
        <Card.Group>
          {Playersdata.map(Play => {
            return (
              <Card>
                <Card.Content>
                <Card.Header>{Play.PLAYER}</Card.Header>
                <Card.Meta>Age is {Play.AGE}</Card.Meta>
                  <Card.Description>
                      <ul>
                          <li>Team is {Play.TEAM}</li>
                          <li>High Score {Play.HS} Runs</li>
                          {/* <li>Win by {item.win_by_wickets} Wickets</li>
                          <li>{item.date}</li> */}
                      </ul>
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      );
}

export default Players