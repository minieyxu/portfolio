import seal from '../assets/seal.png';

export default function Header({ currentPage }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="index.html" aria-label="Minie Xu, home">
        <span className="full-name">minie xu</span>
        <span className="short-name">mx</span>
        <img src={seal} width="36" height="36" alt="" />
      </a>
      <nav aria-label="Main navigation">
        <a href="index.html" aria-current={currentPage === 'home' ? 'page' : undefined}>Home</a>
        <a href="work.html#work" aria-current={currentPage === 'projects' ? 'page' : undefined}>Projects</a>
        <a href="photo.html" aria-current={currentPage === 'photo' ? 'page' : undefined}>Photo</a>
        <a href="about.html" aria-current={currentPage === 'about' ? 'page' : undefined}>About</a>
      </nav>
    </header>
  );
}
