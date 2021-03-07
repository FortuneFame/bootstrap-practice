const refs = {
    btnOpenModalFooter: document.querySelector('[data-modal-footer-open]'),
    backdropModalFooter: document.querySelector('[data-modal-footer]'),
    btnCloseModalFooter: document.querySelector('[data-modal-footer-close]'),
};

refs.btnOpenModalFooter.addEventListener('click', onOpenModalFooter);
refs.btnCloseModalFooter.addEventListener('click', onCloseModalFooter);

function onOpenModalFooter() {
    preventDefault();
    window.addEventListener('keydown', onKeyPress);

    refs.backdropModalFooter.classList.add('modal-is-open')
}

function onCloseModalFooter() {
    refs.backdropModalFooter.classList.remove('.modal-is-open')
    window.removeEventListener('keydown', onKeyPress);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModalFooter()
  };
}