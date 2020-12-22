import React, {  useState, useEffect } from 'react'
import { Grid, Menu, Segment, Pagination, Divider, Input } from 'semantic-ui-react'
import CardExampleGroupProps from './Card'
import Players from './Players'
import { items } from "../assets/ipl";
import PaginationExample from './Pagination';
import Checkbox from './Landing/checkbox';

const MenuExampleTabularOnRight = () => {
  const [activeItem, setActiveItem] = useState('Teams')    
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(items);
      setLoading(false);
      
    };

    fetchPosts();
  }, []);

  const handleItemClick = (e, { name }) => setActiveItem(name)

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  console.log(activeItem)
      // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
      return(

        <Grid>
          {/* <Nav /> */}
        <Grid.Column stretched width={12}>  
          <Segment>
            {activeItem === 'Players' &&
           <Players  posts={currentPosts} loading={loading} />
          }
          {activeItem === 'Teams'  &&
           <CardExampleGroupProps posts={currentPosts} loading={loading} />
          }
          {activeItem === 'Player of Match'  &&
           <CardExampleGroupProps posts={currentPosts} loading={loading} />
          }
          {activeItem === 'Venues'  &&
           <CardExampleGroupProps posts={currentPosts} loading={loading} />
          }

          <PaginationExample 
          
           postsPerPage={postsPerPage}
           totalPosts={posts.length}
           paginate={paginate}
          />
          </Segment>
        </Grid.Column>

        <Grid.Column width={4}>
          <Menu fluid vertical tabular='right'>
            <Menu.Item
              name='Teams'
              active={activeItem === 'Teams'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Players'
              active={activeItem === 'Players'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Player of Match'
              active={activeItem === 'Player of Match'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Venues'
              active={activeItem === 'Venues'}
              onClick={handleItemClick}
            />
          </Menu>
            <Divider> <h1>Filters </h1></Divider><br />
            <Checkbox inputData="Highest run" /> <br />
            <Checkbox inputData="Highest Wicket" /> <br />
            <Checkbox inputData="Highest Average" />
            <div class="form-group">
              <Divider>
    <h2 for="formControlRange">Range for Runs</h2>
    </Divider><br />
    <input type="range" class="form-control-range" id="formControlRange" />
      </div>
        </Grid.Column>
      </Grid>
      );
    }
  
export default MenuExampleTabularOnRight