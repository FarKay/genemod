import { Link } from "react-router-dom";

const navItems = [
  { name: "products", image: "/desktop/arrow-down.png", path: "/products" },
  { name: "solutions", image: "/desktop/arrow-down.png", path: "/solutions" },
  { name: "resources", image: "/desktop/arrow-down.png", path: "/resources" },
  { name: "pricing", image: "/desktop/arrow-down.png", path: "/pricing" },
  { name: "company", image: "/desktop/arrow-down.png", path: "/company" },
];

function Menu() {
  return (
    <nav>
      <ul className="lg:flex lg:capitalize lg:gap-2 lg:justify-center lg:items-center hidden">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="lg:flex lg:gap-2 lg:justify-center lg:items-center lg:py-2 lg:px-3"
          >
            <Link to={item.path}>
              <span className="lg:text-base lg:font-lato lg:font-normal lg:text-[#404968] ">
                {item.name}
              </span>
            </Link>
            <div>
              <img src={item.image} alt={`${item.name} arrow`} />
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
