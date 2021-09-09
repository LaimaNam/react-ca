import Link from 'next/link';
import style from '../../styles/Header.module.css';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div>Logo</div>
        <nav>
          <ul className={style.ul}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/articles">Articles</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* styles */}
      {/* <style jsx>
        {`
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 800px;
            margin: auto;
          }
          ul {
            list-style: none;
            display: flex;
            gap: 20px;
            padding: 10px;
          }
        `}
      </style> */}
    </>
  );
};

export default Header;
