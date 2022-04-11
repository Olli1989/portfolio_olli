const choose = document.querySelectorAll('.work_choose-card')
const workGrid = document.querySelector('.work_grid')
const toggleButton = document.getElementById('hamburger-menu')
const mobileLinks = document.querySelectorAll('.mobile_links')

toggleButton.addEventListener('click',() => {
  document.body.classList.toggle('nav-open')
})

mobileLinks.forEach(ele => {
  ele.addEventListener('click',()=>{
    document.body.classList.remove('nav-open')
  })
})


const react = [{
  imgUrl: 'images/about01.png',
  category: 'React',
  title: 'Instagram Clone',
  desc: 'Instagram Clone Tutorial with Scrimba',
  liveUrl: '',
  githubUrl: 'https://github.com/Olli1989/Instagram-Clone'
},
{
  imgUrl: 'images/about01.png',
  category: 'React',
  title: 'Quizapp',
  desc: 'Million Dollar Show',
  liveUrl: '',
  githubUrl: 'https://github.com/Olli1989/Quizapp'
}]

const cssHtml = [{
  imgUrl: 'images/nft-card-preview.jpg',
  category: 'CSS/HTML',
  title: 'NFT Preview Card',
  desc: 'Frontend Mentor - NFT Preview Card',
  liveUrl: 'https://olli1989.github.io/nft-preview-card-component/',
  githubUrl: 'https://github.com/Olli1989/nft-preview-card-component'
},
{
  imgUrl: 'images/stats-prev-card.jpg',
  category: 'CSS/HTML',
  title: 'Stats Preview Card',
  desc: 'Frontend Mentor - Stats Preview Card',
  liveUrl: 'https://olli1989.github.io/stats-preview-card/',
  githubUrl: 'https://github.com/Olli1989/stats-preview-card'
},
{
  imgUrl: 'images/3-column-preview.jpg',
  category: 'CSS/HTML',
  title: '3 Column Preview Card',
  desc: 'Frontend Mentor - 3 Column Preview Card',
  liveUrl: 'https://olli1989.github.io/3-column-preview-card/',
  githubUrl: 'https://github.com/Olli1989/3-column-preview-card'
},
{
  imgUrl: 'images/social-proof-section.jpg',
  category: 'CSS/HTML',
  title: 'Social Proof Section',
  desc: 'Frontend Mentor - Social Proof Section',
  liveUrl: 'https://olli1989.github.io/social-proof-section/',
  githubUrl: 'https://github.com/Olli1989/social-proof-section'
}]
const java = []

let all = []

const createAllArray = ()=> {
  all = [...react]
  cssHtml.map(ele => {
    all.push(ele)
  })
  java.map(ele => {
    all.push(ele)
  })
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
        <div class="work_links">
          <a href="${arr[i].liveUrl}" target="_blank"><i class="fa-solid fa-eye"></i></a>
          <a href="${arr[i].githubUrl}" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
      </div>
      ` 
    } 
  } else {
    html += `<div></div>`
  }
  
  workGrid.innerHTML = html
}

const clearActive = () => {
  choose.forEach(ele => {
    ele.classList.remove('choose-active')
  })
}

createAllArray()
workCardGenerater(all)

choose.forEach(item => {
  item.addEventListener('click', (e) => {
    let workButton = e.target.innerText
    clearActive()
    if (workButton== 'REACT'){
      item.classList.add('choose-active')
      workCardGenerater(react)
    } else if(workButton== 'CSS/HTML') {
      item.classList.add('choose-active')
      workCardGenerater(cssHtml)
    } else if(workButton== 'JAVA') {
      item.classList.add('choose-active')
      workCardGenerater(java)
    } else if(workButton== 'ALL') {
      item.classList.add('choose-active')
      workCardGenerater(all)
    }
  })
})


