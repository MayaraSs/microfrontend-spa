import Header from "./styles";

const Menu = () => {
  const menu = [
    {
      title: "React",
      href: "#home",
    },
    {
      title: "Vue",
      href: "#aboutus",
    },
    {
      title: "TodoList",
      href: "#team",
    },
  ];
  return (
    <Header>
      <ul>
        {menu.map((item, i) => (
          <a key={i} href={item.href}>
            {item.title}
          </a>
        ))}
      </ul>
    </Header>
  );
};

export default Menu;
