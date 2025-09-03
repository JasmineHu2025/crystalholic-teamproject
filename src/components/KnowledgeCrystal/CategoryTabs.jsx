const categories = ["靈感智慧", "專注自信", "愛情人緣", "平安守護", "放鬆靜心"];

export default function CategoryTabs({ current, onClick }) {
  return (
    <ul className="know-crystal-category-menu">
      {categories.map((cat) => (
        <li
          key={cat}
          className={current === cat ? "active" : ""}
          onClick={() => onClick(cat)}
        >
          {cat}
        </li>
      ))}
    </ul>
  );
}