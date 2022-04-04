function solve(){
  let author=document.querySelector('#creator');
  let title=document.querySelector('#title');
  let category=document.querySelector('#category');
  let content=document.querySelector('#content');

  let createButton=document.querySelector('.site-content form button');
  createButton.addEventListener('click',onClick)



  
function onClick(ev){
  ev.preventDefault()
  let parentSection=document.querySelector('.site-content main section');
  
  let article = document.createElement('article');
  
  let h1=document.createElement('h1');
  h1.textContent=title.value;
  article.appendChild(h1);

  let categoryP=document.createElement('p');
  categoryP.textContent='Category: ';
  
  let strongCategoryChild=document.createElement('strong');
  strongCategoryChild.textContent=category.value;
  categoryP.appendChild(strongCategoryChild)
  article.appendChild(categoryP)
  

  let creatorP=document.createElement('p');
  creatorP.textContent='Creator: ';
  
  let strongCreatorChild=document.createElement('strong');
  strongCreatorChild.textContent=author.value;
  creatorP.appendChild(strongCreatorChild)
  article.appendChild(creatorP)

  let contentP=document.createElement('p');
  contentP.textContent = content.value;
  article.appendChild(contentP)
  
  let buttonsDiv=document.createElement('div')
  buttonsDiv.className='buttons';
  
  let deleteButton=document.createElement('button');
  deleteButton.textContent='Delete';
  deleteButton.className='btn delete'
  let archiveButton=document.createElement('button');
  archiveButton.textContent='Archive';
  archiveButton.className='btn archive'

  buttonsDiv.appendChild(deleteButton)
  buttonsDiv.appendChild(archiveButton)
   
  article.appendChild(buttonsDiv)

  parentSection.appendChild(article)
      
      title.value = "";
      author.value = "";
      category.value = "";
      content.value = "";

      deleteButton.addEventListener('click',deletes)

      function deletes(){
         article.remove()
      }
      archiveButton.addEventListener('click',archive)

      function archive(){
        let olElement = document.querySelector("ol");
        let liElement = document.createElement("li");
        liElement.textContent = h1.textContent;
        olElement.appendChild(liElement);
        let sorted = Array.from(document.querySelectorAll("li")).sort((a,b)=> a.textContent.localeCompare(b.textContent));
        olElement.innerHTML = sorted.map(el => el.outerHTML).join('');
        article.remove()
       
      }
}
}
