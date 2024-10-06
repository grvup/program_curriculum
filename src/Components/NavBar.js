import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/course-proposal" style={styles.link}>Course Proposal Form</Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#007BFF',
    padding: '10px',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default NavBar;
