import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (<ul>
    <li>
      <Link to = '/'>Home</Link>
    </li>
    <li>
    <Link to = '/Footer'>Footer</Link>
    </li>
    <li>
      <Link to = '/Contact'>Contact</Link>
      </li>
      <li>
    <Link to = '/Main'>Main</Link>
      </li>
      <li>
      <Link to = '/Navbar'>Navbar</Link>
      </li>
      <li>
      <Link to = '/Projects'>Projects</Link>
      </li>
      <li>
      <Link to = '/Resume'>Resume</Link>
      </li>
      <li>
      <Link to = '/SocialLinks'>Social </Link>
      </li>
    </ul>)
  }
}
