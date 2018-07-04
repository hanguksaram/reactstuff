




export const getDivPositionsOnResize = () => {
    console.log("petya");
    let evenSectionsHeights, oddSectionsHeights, joinSecitonHeights, navs
    const eventHandler = () => {
        evenSectionsHeights = Array.from(document.querySelectorAll('section:not(.main):nth-child(even)'))
                                    .map((elem) => elem.offsetTop)
        oddSectionsHeights = Array.from(document.querySelectorAll('section:not(.main):nth-child(odd)'))
                                    .map((elem) => elem.offsetTop)
        joinSecitonHeights = [evenSectionsHeights, oddSectionsHeights]  
        navs = document.getElementsByClassName('navs');
       
      }
  window.addEventListener('load', eventHandler)
  window.addEventListener('resize', eventHandler) 
  return {joinSecitonHeights, navs}
} 
export const changeNavColorsOnScroll = (func) => {
    const {joinSecitonHeights, navs} = func()
    window.addEventListener("scroll", () => {
        console.log('scrolled');
        const scrollPostion = document.documentElement.scrollTop;
       
        for (let i = 0; i < 2; i ++){
        if ((joinSecitonHeights[0][0] <= scrollPostion && scrollPostion <= joinSecitonHeights[1][0]) || (joinSecitonHeights[0][1] <= scrollPostion && scrollPostion <= joinSecitonHeights[1][1])){
            
            
                navs[i].classList.add('navs--modified')
            }
        else {
            if (navs[i].classList.contains('navs--modified')) navs[i].classList.remove('navs--modified')
        }
        }
       
                                 
                         
   })
}