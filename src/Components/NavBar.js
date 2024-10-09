import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><Link to="/" style={styles.link}>Home</Link></li>
        <li style={styles.navItem}><Link to="/new" style={styles.link}>New Component</Link></li>
        <li style={styles.navItem}><Link to="/mtcse" style={styles.link}>M.Tech CSE</Link></li>
        <li style={styles.navItem}><Link to="/mtece" style={styles.link}>M.Tech ECE</Link></li>
        <li style={styles.navItem}><Link to="/mtme" style={styles.link}>M.Tech ME</Link></li>
        <li style={styles.navItem}><Link to="/mtmech" style={styles.link}>M.Tech MECH</Link></li>
        <li style={styles.navItem}><Link to="/mtsm" style={styles.link}>M.Tech SM</Link></li>
        <li style={styles.navItem}><Link to="/phdcse" style={styles.link}>Ph.D CSE</Link></li>
        <li style={styles.navItem}><Link to="/phdece" style={styles.link}>Ph.D ECE</Link></li>
        <li style={styles.navItem}><Link to="/phdme" style={styles.link}>Ph.D ME</Link></li>
        <li style={styles.navItem}><Link to="/phddes" style={styles.link}>Ph.D Design</Link></li>
        <li style={styles.navItem}><Link to="/phdeng" style={styles.link}>Ph.D English</Link></li>
        <li style={styles.navItem}><Link to="/phdmath" style={styles.link}>Ph.D Mathematics</Link></li>
        <li style={styles.navItem}><Link to="/phdphy" style={styles.link}>Ph.D Physics</Link></li>
        <li style={styles.navItem}><Link to="/btchcse" style={styles.link}>B.Tech CSE</Link></li>
        <li style={styles.navItem}><Link to="/btchme" style={styles.link}>B.Tech ME</Link></li>
        <li style={styles.navItem}><Link to="/btchece" style={styles.link}>B.Tech ECE</Link></li>
        <li style={styles.navItem}><Link to="/btchsm" style={styles.link}>B.Tech SM</Link></li>
        <li style={styles.navItem}><Link to="/bdes" style={styles.link}>B.Design</Link></li>
        <li style={styles.navItem}><Link to="/mdes" style={styles.link}>M.Des</Link></li>
        <li style={styles.navItem}><Link to="/course-proposal" style={styles.link}>Course Proposal Form</Link></li>
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
    flexWrap: 'wrap',
  },
  navItem: {
    marginRight: '20px',
    marginBottom: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default NavBar;