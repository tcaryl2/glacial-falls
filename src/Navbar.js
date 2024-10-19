import './Navbar.css'

const Navbar = () => {
    return (  
        <nav>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Computer Science
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </li>
                <li>Data Science
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </li>
                <li>Economics
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </li>
                <li>Finance
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </li>
                <li>Mathematics
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;
