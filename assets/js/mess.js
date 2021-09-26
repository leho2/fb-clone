const app = (() => {

    return {
        handle(){
            //tính chiều cao list layout trái
            const leftLayoutHeight = $('.container-left').clientHeight
            const leftLayoutTopHeiht = $('.container-left__head').clientHeight
            $('.container-left__list').style.height = leftLayoutHeight - leftLayoutTopHeiht + 'px'

            //onclick mở layout phải
            const dropdownBtns = $$('.dropdown-head')
            dropdownBtns.forEach((dropdownBtn) => {
                dropdownBtn.onclick = () => {
                    dropdownBtn.nextElementSibling.classList.toggle('active')
                }
            })
        },
        start(){
            this.handle()
        }
    }
})().start()