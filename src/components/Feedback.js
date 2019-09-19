import React, {Component} from 'react';
import {Feed, Icon } from 'semantic-ui-react';
class Feedback extends Component {
	render(){
		return(
			<Feed size='large'>
		    <Feed.Event>
		      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
		      <Feed.Content>
		        <Feed.Summary>
		          <Feed.User>Elliot Fu</Feed.User> added you as a friend
		          <Feed.Date>1 Hour Ago</Feed.Date>
		        </Feed.Summary>
		        <Feed.Meta>
		          <Feed.Like>
		            <Icon name='like' />4 Likes
		          </Feed.Like>
		        </Feed.Meta>
		      </Feed.Content>
		    </Feed.Event>

		    <Feed.Event>
		      <Feed.Label icon='pencil' />
		      <Feed.Content>
		        <Feed.Summary>
		          You submitted a new post to the page
		          <Feed.Date>3 days ago</Feed.Date>
		        </Feed.Summary>
		        <Feed.Extra text>
		          I'm having a BBQ this weekend. Come by around 4pm if you can.
		        </Feed.Extra>
		        <Feed.Meta>
		          <Feed.Like>11 Likes</Feed.Like>
		        </Feed.Meta>
		      </Feed.Content>
		    </Feed.Event>

		    <Feed.Event>
		      <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
		      <Feed.Content>
		        <Feed.Date>4 days ago</Feed.Date>
		        <Feed.Summary>
		          <p>Helen Troy added 2 new friend</p>
		        </Feed.Summary>

		        <Feed.Extra images>
		        	<img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt='user1' />
		          <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt='user2' />
		        </Feed.Extra>

		        <Feed.Meta like='1 Like' />
		      </Feed.Content>
		    </Feed.Event>
		  </Feed>
		);
	}
}

export default Feedback;