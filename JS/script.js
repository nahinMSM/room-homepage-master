const section = document.querySelector('.section')
  const containerWidth = section.offsetWidth
  let currentScroll = 0

  document.querySelector('.bts-left').addEventListener('click', () => {
    currentScroll = Math.max(0, currentScroll - containerWidth)
    section.scrollTo({
      left: currentScroll,
      behavior: 'smooth'
    })
  })

  document.querySelector('.bts-right').addEventListener('click', () => {
    currentScroll = Math.min(currentScroll + containerWidth, section.scrollWidth - section.clientWidth)
    section.scrollTo({
      left: currentScroll,
      behavior: 'smooth'
    })
  })

  document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.hamburger').style.display="none"
    document.querySelector('.logoMobile').style.display="none"
    document.querySelector('.close').style.display="block"
    document.querySelector('.BG-headerMobile').style.display="block"
    MenuMobile.style.display = "block"
    document.querySelector('.headerMobile').style.position = "fixed"
  })

  document.querySelector('.close').addEventListener("click", () => {
    document.querySelector('.hamburger').style.display="block"
    document.querySelector('.logoMobile').style.display="block"
    document.querySelector('.close').style.display="none"
    document.querySelector('.BG-headerMobile').style.display="none"
    MenuMobile.style.display = "none"
    document.querySelector('.headerMobile').style.position = "absolute"
  })

  const MenuMobile = document.querySelector('.menuMobile')
  MenuMobile.innerHTML = 
  `<div>
      <a href="#">home</a>
      <a href="#">shop</a>
      <a href="#">about</a>
      <a href="#">contact</a>
  </div>`