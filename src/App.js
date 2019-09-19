import React, {Component} from 'react';
import Komentar from './components/Komentar';
import Tabel from './components/Tabel';
import Feedback from './components/Feedback';
import {Grid} from 'semantic-ui-react';

class App extends Component{
  render(){
    return(
      <div>
          <Tabel/>
          <br/> <br/>
          <Grid container>
            <Grid.Column floated='left' width={5}>
              <Komentar/>
            </Grid.Column>
            <Grid.Column floated='right' width={5}>
              <Feedback/>
            </Grid.Column>
          </Grid>
      </div>
    );
  }
}

export default App;