import './LinkList.styles.scss';

const LinkList = function ({ list }) {
  return (
    <ul className="link-list">
      {list.map(({ path, title }, ind) => {
        return (
          <li key={ind}>
            <a href={path}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
