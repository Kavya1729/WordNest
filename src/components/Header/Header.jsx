import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-cream-700">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Link to={item.slug} className="neon__button">
                      {item.name}
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </Link>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
