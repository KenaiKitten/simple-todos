import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
 
import { Tasks } from '../api/tasks.js';
 
import Task from './Task.js';
 
// App component - represents the whole app
class App extends Component {
  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
...some lines skipped...
    );
  }
}
 
export default withTracker(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);