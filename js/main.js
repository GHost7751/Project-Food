document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabsPerent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabContent.forEach((i) => {
            i.style.display = "none";
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }


    function showTabContent(i = 0) {
        tabContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent();
    showTabContent();


    tabsPerent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item,i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                  
                }
            })
        }
    })
})