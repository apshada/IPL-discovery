import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import { items } from "../assets/ipl";
import iplimg from '../assets/ipl.jpg'

const CardExampleGroupProps = ({ posts, loading }) => {
  if(loading){
    return <h2>Loading ....</h2>
  }

    
    return (
        <Card.Group>
          {posts.map(item => {
            return (
              <Card>
                <Card.Content>
                <Card.Header>{item.team1} VS {item.team2}</Card.Header>
                <Card.Meta>{item.winner}</Card.Meta>
                  <Card.Description>
                      <ul>
                          <li>{item.venue}</li>
                          <li>Win by {item.win_by_runs} Runs</li>
                          <li>Win by {item.win_by_wickets} Wickets</li>
                          <li>{item.date}</li>
                      </ul>
                  </Card.Description>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      );
}

export default CardExampleGroupProps