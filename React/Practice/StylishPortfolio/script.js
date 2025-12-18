function navLeft() {
    let logo = React.createElement('img', { src: './assets/main-logo.png', alt: 'logo', className: 'logo' });
    let about = React.createElement('a', { href: '#about', className: 'nav-link' }, 'About Me');
    let portfolio = React.createElement('a', { href: '#portfolio', className: 'nav-link' }, 'Portfolio');
    let services = React.createElement('a', { href: '#services', className: 'nav-link' }, 'Services');
    let blog = React.createElement('a', { href: '#blog', className: 'nav-link' }, 'blog');
    let navLinks = React.createElement('div', { className: 'nav-links' }, [about, portfolio, services, blog]);

    return React.createElement('nav', { className: 'nav-left' }, logo, navLinks);
}

function navRight() {
    let a = React.createElement('a', { href: '#' }, 'Book A Call');
    let i = React.createElement('i', { className: 'ri-arrow-right-up-line' }, null);

    let navRightDiv = React.createElement('div', { className: 'nav-right' }, [a, i]);
    return navRightDiv;
}

function navbar() {
    let navLeftDiv = navLeft();
    let navRightDiv = navRight();
    let navbar = React.createElement('header', { className: 'navbar' }, navLeftDiv, navRightDiv);
    return navbar;
}

function leftLineContainer() {
    let year = React.createElement('div', { class: 'year' }, '2025');
    let line = React.createElement('div', { class: 'line' }, null);
    let role = React.createElement('div', { class: 'role' }, 'Product designer');

    return React.createElement('div', { class: 'left-line-container' }, [year, line, role]);
}

function achievments() {
    let achNum1 = React.createElement('div', { class: 'ach-number' }, '+200');
    let achText1 = React.createElement('div', { class: 'ach-text' }, 'Project completed');
    let ach1 = React.createElement('div', { class: 'ach1' }, [achNum1, achText1]);

    let achNum2 = React.createElement('div', { class: 'ach-number' }, '+50');
    let achText2 = React.createElement('div', { class: 'ach-text' }, 'Startup raised');
    let ach2 = React.createElement('div', { class: 'ach2' }, [achNum2, achText2]);

    return React.createElement('div', { class: 'achievements' }, [ach1, ach2]);
}

function heroIntro() {
    let h1 = React.createElement('h1', {className: 'hero-title'}, 'Hello');
    let p = React.createElement('p', {className: 'hero-subtitle'}, "- It's D.Nova a design wizerd");

    return React.createElement('div', { className: 'hero-intro' }, [h1, p]);
}

function scroll() {
    let span = React.createElement('span', null, 'Scroll down');
    let i = React.createElement('i', { class: 'ri-arrow-down-line' }, null);

    return React.createElement('div', { class: 'scroll' }, [span, i]);
}

let content = React.createElement('div', { class: 'content' }, [achievments(), heroIntro(), scroll()]);

let main = React.createElement('main', null, [leftLineContainer(), content]);

let userProfile = React.createElement('img', { src: './assets/main-hero.png', id: 'user-profile' }, null);

let wrapper = React.createElement('div', { id: 'wrapper' }, [navbar(), main, userProfile]);

let root = ReactDOM.createRoot(document.querySelector('.parent'));

root.render(wrapper);