const topMenu = document.getElementById('ch-top-menu')
const toggleTopMenuIcon = document.getElementById('ch-toggle-top-menu-icon')
document.addEventListener('click', (e) => {
   if (toggleTopMenuIcon.contains(e.target)){
    //click to Toggle Top Menu Icon
    topMenu.classList.toggle('hidden')
    topMenu.classList.toggle('ch-topmenu-expanded')

   }else {
    //click outside from Toggle
if(topMenu.classList.contains('ch-topmenu-expanded')){
    topMenu.classList.remove('ch-topmenu-expanded')
    topMenu.classList.add('hidden')
}
   }
})