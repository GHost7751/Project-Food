document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabContent = document.querySelectorAll('.tabcontent'),
    tabsPerent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabContent.forEach((i) => {
            i.classList.add('hide')
            i.classList.remove('show', 'fade')
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active')
        })
    }


    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
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