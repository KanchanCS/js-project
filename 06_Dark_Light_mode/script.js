const fullDarkModeCheckbox = document.querySelector('#full-dark-mode')
const containedDarkModeChekbox = document.querySelector('#contained-dark-mode')
const container = document.querySelector('.container')
const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'))
const isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'))

if (isFullDarkMode) {
    fullDarkModeCheckbox.checked =true
}
if (isContainedDarkMode) {
    containedDarkModeChekbox.checked = true
}
    changrFullDarkMode()
    changrContainedDarkMode()

fullDarkModeCheckbox.addEventListener('change', () => {
    changrFullDarkMode()
    changrContainedDarkMode()
})
containedDarkModeChekbox.addEventListener('change', () => {
    changrContainedDarkMode()

})

function changrContainedDarkMode() {
    if (containedDarkModeChekbox.checked) {
        container.classList.add('dark')
        localStorage.setItem('containedDarkModeCheckbox', true)

    } else {
        container.classList.remove('dark')
        localStorage.setItem('containedDarkModeCheckbox', false)
    }
}

function changrFullDarkMode() {
    if (fullDarkModeCheckbox.checked) {

        document.body.classList.add('dark')
        localStorage.setItem('fullDarkModeCheckbox', true)
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('fullDarkModeCheckbox', false)
    }

    // containedDarkModeChekbox.checked = fullDarkModeCheckbox.checked
}