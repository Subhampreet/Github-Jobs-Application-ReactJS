import React, { Fragment } from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="card">
       <img src="/0.jpg" />  
       <div className="heading">About the App</div>
      <p>
      <b>GitHub</b>, Inc. is an American multinational corporation that provides hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and continuous integration.
      <br /> <br />
      <b>Github Profile Finder</b> is built using React JS. It simply searches the profile using the username and displays the profile details, along with the the repositories. It also labels the profile hireable or non-hireable according to contribution made and user activity. The app uses the github api to fetch data from github.

      </p>

      <div className="heading">Features</div>
      <ul>
        <li>- Fetches all profiles with the provided username</li>
        <li>- Displays all the details of the selected profile</li>
        <li>- Labels the profile as hireable or non-hireable</li>
      </ul>
      
      </div>
    </div>
  );
};

export default About;