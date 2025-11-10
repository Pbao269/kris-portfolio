import { useCallback, useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Navbar = ({ navOpen, onNavigate }) => {

  const lastActiveLink = useRef();
  const activeBox = useRef();

  const updateActiveBox = useCallback((element) => {
    if (!element || !activeBox.current) return;
    activeBox.current.style.top = element.offsetTop + 'px';
    activeBox.current.style.left = element.offsetLeft + 'px';
    activeBox.current.style.width = element.offsetWidth + 'px';
    activeBox.current.style.height = element.offsetHeight + 'px';
  }, []);

  const initActiveBox = useCallback(() => {
    updateActiveBox(lastActiveLink.current);
  }, [updateActiveBox]);

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, [initActiveBox]);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    const currentLink = event.currentTarget;
    currentLink.classList.add('active');
    lastActiveLink.current = currentLink;

    updateActiveBox(currentLink);
    onNavigate?.();
  }

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];
  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')} id="site-nav" aria-label="Primary Navigation">
      {
      navItems.map(({label, link, className, ref}, key) =>
      (
        <a href={link} key={key} ref={ref} className={className} onClick={activeCurrentLink}>
          {label}
        </a>
      ))
      }
      <div className="active-box" ref={activeBox}>

      </div>
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  onNavigate: PropTypes.func
}

export default Navbar
