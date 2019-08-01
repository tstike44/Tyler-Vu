import React from "react";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Collapse,
	// Dropdown,
	// DropdownToggle,
	// DropdownMenu,
	// DropdownItem,
	Row
	// Column
} from "shards-react";

import './Navbar.css'

export default class NavExample extends React.Component {
	constructor(props) {
		super(props);

		this.toggleDropdown = this.toggleDropdown.bind(this);
		this.toggleNavbar = this.toggleNavbar.bind(this);

		this.state = {
			dropdownOpen: false,
			collapseOpen: false
		};
	}

	toggleDropdown() {
		this.setState({
			...this.state,
			...{
				dropdownOpen: !this.state.dropdownOpen
			}
		});
	}

	toggleNavbar() {
		this.setState({
			...this.state,
			...{
				collapseOpen: !this.state.collapseOpen
			}
		});
	}

	render() {
		return (
			<Navbar type="dark" theme="dark" expand="md">
				{/* <Row> */}
				{/* <div id='nav-div'> */}
					<NavbarToggler onClick={this.toggleNavbar} />
					<Collapse open={this.state.collapseOpen} navbar>
						<NavbarBrand id="name" className="nav-brand" href="#">
						Tyler Vu</NavbarBrand>
						<Nav navbar>
							<NavItem>
								<NavLink id="about-link" className="nav-item" active href="#">
									About
              </NavLink>
							</NavItem>
							<NavItem>
								<NavLink id="cv-link" className="nav-item" active href="#">
									CV
              </NavLink>
							</NavItem>
							<NavItem>
								<NavLink id="research-link" className="nav-item" href="#" active>
									Research
              </NavLink>
							</NavItem>
							<NavItem>
								<NavLink id="contact-link" className="nav-item" href="#" active>
									Contact
              </NavLink>
							</NavItem>
						</Nav>
					</Collapse>
					{/* </div> */}
				{/* </Row> */}
			</Navbar>
		);
	}
}