import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#8000ff', padding: 20, color: 'white'}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <Link style={{fontWeight:"bold"}} to='/'>Home</Link>
      <Link style={{fontWeight:"bold"}}to='/about'>About</Link>
      <Link style={{fontWeight:"bold"}}to='/products'>Products</Link>
      <Link style={{fontWeight:"bold"}}to='/products/men'>Men</Link>
      <Link style={{fontWeight:"bold"}}to='/products/women'>Women</Link>
      <Link style={{fontWeight:"bold"}}to='/products/kids'>Kids</Link>
      <Link style={{fontWeight:"bold"}}to='/products/homedecor'>Home Decor</Link>
    </nav>
  );
};
