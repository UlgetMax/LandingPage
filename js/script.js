document.querySelector('.feedback__additonService-title').addEventListener('click', function() {
    this.classList.toggle('active');
    
    const serviceBlock = document.querySelector('.additonService__block');
    serviceBlock.classList.toggle('hidden');
});
