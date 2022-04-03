const choose = document.querySelectorAll('.work_choose-card')
const workGrid = document.querySelector('.work_grid')


const react = [{
  imgUrl: 'images/about01.png',
  category: 'React',
  title: 'Instagram Clone',
  desc: 'Instagram Clone Tutorial with Scrimba',
  liveUrl: '',
  githubUrl: ''
},
{
  imgUrl: 'images/about01.png',
  category: 'React',
  title: 'Quizapp',
  desc: 'Million Dollar Show',
  liveUrl: '',
  githubUrl: ''
}]

const cssHtml = [{
  imgUrl: 'images/about01.png',
  category: 'CSS/HTML',
  title: 'NFT Preview Card',
  desc: 'Frontend Mentor - NFT Preview Card',
  liveUrl: '',
  githubUrl: ''
},
{
  imgUrl: 'images/about01.png',
  category: 'CSS/HTML',
  title: 'Stats Preview Card',
  desc: 'Frontend Mentor - Stats Preview Card',
  liveUrl: '',
  githubUrl: ''
},
{
  imgUrl: 'images/about01.png',
  category: 'CSS/HTML',
  title: '3 Column Preview Card',
  desc: 'Frontend Mentor - 3 Column Preview Card',
  liveUrl: '',
  githubUrl: ''
},
{
  imgUrl: 'images/about01.png',
  category: 'CSS/HTML',
  title: 'Social Proof Section',
  desc: 'Frontend Mentor - Social Proof Section',
  liveUrl: '',
  githubUrl: ''
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
  console.log(all)
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
    workGrid.innerHTML = html
  }
}

createAllArray()
//workCardGenerater(all)

choose.forEach(item => {
  item.addEventListener('click', (e) => {
    let workButton = e.target.innerText
    if (workButton== 'REACT'){
      workCardGenerater(react)
      console.log("allo")
    } else if(workButton== 'CSS/HTML') {
      workCardGenerater(cssHtml)
    } else if(workButton== 'Java') {
      workCardGenerater(java)
    } else if(workButton== 'ALL') {
      workCardGenerater(all)
    }
  })
})


