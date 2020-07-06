const btnOpen = document.querySelector('.btn-open'),
      modal = document.querySelector('.modal');

btnOpen.addEventListener('click', () => {
    modal.classList.toggle('open-modal');

    if(modal.classList.contains('open-modal')) {
        btnOpen.textContent = "Закрыть";
    } else {
        btnOpen.textContent = "Открыть";
    }
});
