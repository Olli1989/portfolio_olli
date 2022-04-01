const choose = document.querySelectorAll('.work_choose-card')
const workGrid = document.querySelector('.work_grid')


const react = [{
  imgUrl: 'images/about01.png',
  category: 'React1',
  title: 'Instagram Clone',
  desc: 'Instagram Clone Tutorial with Scrimba',
  liveUrl: '',
  githubUrl: ''
}]

const cssHtml = {
  
}
const java = {
  
}

const workCardGenerater = (arr) =>{
  let html = ''
  if (arr.length > 0) {
    for(let i = 0; i < arr.length; i++) {
      html += `
      <div class="work_card">
        <div class="work_card-img">
          <img src="${arr[i].imgUrl}" alt="" />
        </div>
        <div class="work_card-hero">
          <p>${arr[i].category}</p>
        </div>
        <div class="work_card-desc">
          <h3>${arr[i].title}</h3>
          <p>${arr[i].desc}</p>
        </div>
      </div>
      ` 

    }
    workGrid.innerHTML = html
  }
}

choose.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item);
    if (item.dataset.number == 1){
      workCardGenerater(react)
    } else if(item.dataset.number == 2) {
      
    } else if(item.dataset.number == 3) {

    } else if(item.dataset.number == 4) {

    }
  })
})

