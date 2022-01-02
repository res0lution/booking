import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/client";
import { NavDropdown } from "react-bootstrap";

import { loadUser } from "../../redux/actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.loadedUser);

  useEffect(() => {
    if (!user) {
      dispatch(loadUser());
    }
  }, [dispatch, user]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <Link href="/">
              <Image
                src="/images/bookit_logo.png"
                alt="BookIT"
                width={145}
                height={35}
              />
            </Link>
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          {user ? (
            <div className="ml-4 dropdown d-line d-flex align-items-center">
              <figure className="avatar avatar-nav">
                <Image
                  src={user.avatar && user.avatar.url}
                  alt={user && user.name}
                  className="rounded-circle"
                  width={30}
                  height={30}
                />
              </figure>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={user && user.name}
                menuVariant="dark"
              >
                {user.role === "admin" && (
                  <>
                    <NavDropdown.Item href="#action/3.1">
                      <Link href="/admin/rooms">
                        <a className="dropdown-item">Rooms</a>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.1">
                      <Link href="/admin/bookings">
                        <a className="dropdown-item">Bookings</a>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.1">
                      <Link href="/admin/users">
                        <a className="dropdown-item">Users</a>
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.1">
                      <Link href="/admin/reviews">
                        <a className="dropdown-item">Reviews</a>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </>
                )}
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/bookings/me">
                    <a className="dropdown-item">My Bookings</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link href="/me/update">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <Link href="/" onClick={logoutHandler}>
                    <a className="dropdown-item">Logout</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <a className="btn btn-danger px-4 text-white login-header-btn float-right">
                  Login
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
