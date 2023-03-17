
  
  var carouselContainer = document.querySelector('.carousel-container');
  var carouselItems = document.querySelector('.carousel-items');
  var prevButton = document.querySelector('.carousel-button-prev');
  var nextButton = document.querySelector('.carousel-button-next');
  var currentItemIndex = 0;
  
  function showItem(index) {
    carouselItems.style.transform = 'translateX(-' + index * 100 + '%)';
  }
  
  function nextItem() {
    currentItemIndex++;
    if (currentItemIndex >= carouselItems.children.length) {
      currentItemIndex = 0;
    }
    showItem(currentItemIndex);
  }
  
  function prevItem() {
    currentItemIndex--;
    if (currentItemIndex < 0) {
      currentItemIndex = carouselItems.children.length - 1;
    }
    showItem(currentItemIndex);
  }
  
  prevButton.addEventListener('click', prevItem);
  nextButton.addEventListener('click', nextItem);
  