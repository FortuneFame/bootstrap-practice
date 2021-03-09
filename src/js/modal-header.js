const refs = {
    openModalHeaderBtn: document.querySelector('[data-modal-header-open]'),
    modalHeader: document.querySelector('.js-lightbox-header'),
    closeModalHeaderBtn: document.querySelector('.lightbox-button'),
    overlayHeader: document.querySelector('.lightbox-overlay-header'),
};

refs.openModalHeaderBtn.addEventListener('click', onOpenModalHeader);
refs.closeModalHeaderBtn.addEventListener('click', onCloseModalHeader);



function onOpenModalHeader() {
    preventDefault();
    window.addEventListener('keydown', onPressModalHeaderESC);

    refs.modalHeader.classList.add('is-open');
    refs.overlayHeader.addEventListener('click', onClickOverlayHeader);
};

function onCloseModalHeader() {
    window.removeEventListener('keydown', onPressModalHeaderESC);

    refs.modalHeader.classList.remove('is-open');

};  

function onPressModalHeaderESC(e) {
    if (e.code === 'Escape') {
    onCloseModalHeader();
  }
};

function onClickOverlayHeader(e) {
    if (e.target === e.currentTarget) {
    onCloseModalHeader();
  }
};