async function solution() {
    let parentSection = document.querySelector('#main');
    const allInfo = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let response = await fetch(allInfo);
    let data = await response.json();

    for (el of data) {
        const baseUrl = `http://localhost:3030/jsonstore/advanced/articles/details/${el._id}`;
        let promise = await fetch(baseUrl);
        let finalData = await promise.json();
        console.log(finalData)
        let accordionDiv = document.createElement('div');
        accordionDiv.setAttribute('class', 'accordion');

        let headingDiv = document.createElement('div');
        headingDiv.setAttribute('class', 'head');

        let span = document.createElement('span');
        span.textContent = `${el.title}`;

        let showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'MORE';
        showMoreButton.setAttribute('class', 'button');
        showMoreButton.setAttribute('id', `${el._id}`)

        showMoreButton.addEventListener('click', onClick)

        function onClick(e) {


            if (e.currentTarget.textContent === 'LESS') {
                e.currentTarget.textContent = 'MORE';
                secondDiv.setAttribute('class', 'extra');
            } else {
                e.currentTarget.textContent = 'LESS';
                secondDiv.classList.remove('extra');
            }
        }

        headingDiv.appendChild(span);
        headingDiv.appendChild(showMoreButton);

        let secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'extra');

        let paragraph = document.createElement('p');
        paragraph.textContent = `${finalData.content}`;

        secondDiv.appendChild(paragraph);


        accordionDiv.appendChild(headingDiv);
        accordionDiv.appendChild(secondDiv);

        parentSection.appendChild(accordionDiv)




    }








}

solution()