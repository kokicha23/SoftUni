async function lockedProfile() {
    let mainContainer = document.getElementById('main');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    if (response.status !== 200) return;

    const data = await response.json();


    for (let key in data) {
        let dataObj = data[key];

        let profileDiv = document.createElement('div');
        let userImage = document.createElement('img');
        let lockLabel = document.createElement('label');
        let lockInput = document.createElement('input');
        let unlockLabel = document.createElement('label');
        let unlockInput = document.createElement('input');
        let usernameLabel = document.createElement('label');
        let usernameInput = document.createElement('input');
        let hiddenFieldDiv = document.createElement('div');
        let emailLabel = document.createElement('label');
        let emailInput = document.createElement('input');
        let ageLabel = document.createElement('label');
        let ageInput = document.createElement('input');
        let showMoreButton = document.createElement('button');

        profileDiv.classList.add('profile');

        userImage.setAttribute('src', './iconProfile2.png')
        userImage.classList.add('userIcon');

        lockLabel.textContent = 'Lock ';

        lockInput.setAttribute('type', 'radio');
        lockInput.setAttribute('name', 'user1Locked');
        lockInput.setAttribute('value', 'lock');
        lockInput.setAttribute('checked', true);

        unlockLabel.textContent = ' Unlock ';

        unlockInput.setAttribute('type', 'radio');
        unlockInput.setAttribute('name', 'user1Locked');
        unlockInput.setAttribute('value', 'unlock');

        usernameLabel.textContent = 'Username';

        usernameInput.setAttribute('type', 'text');
        usernameInput.setAttribute('name', 'user1Username');
        usernameInput.setAttribute('value', dataObj.username);
        usernameInput.setAttribute('disabled', true);
        usernameInput.setAttribute('readonly', true);

        hiddenFieldDiv.classList.add('hiddenInfo');

        emailLabel.textContent = 'Email:';

        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('name', 'user1Email');
        emailInput.setAttribute('value', dataObj.email);
        emailInput.setAttribute('disabled', true);
        emailInput.setAttribute('readonly', true);

        ageLabel.textContent = 'Age:';

        ageInput.setAttribute('type', 'email');
        ageInput.setAttribute('name', 'user1Age');
        ageInput.setAttribute('value', dataObj.age);
        ageInput.setAttribute('disabled', true);
        ageInput.setAttribute('readonly', true);

        showMoreButton.textContent = 'Show more';
        showMoreButton.addEventListener('click', (e) => {
            if (!unlockInput.checked) return;

            if (e.currentTarget.textContent === 'Hide it') {
                e.currentTarget.textContent = 'Show more';
                hiddenFieldDiv.classList.add('hiddenInfo');
            } else if (e.currentTarget.textContent === 'Show more') {
                e.currentTarget.textContent = 'Hide it';
                hiddenFieldDiv.classList.remove('hiddenInfo');
            }
        });

        hiddenFieldDiv.appendChild(document.createElement('hr'));
        hiddenFieldDiv.appendChild(emailLabel);
        hiddenFieldDiv.appendChild(emailInput);
        hiddenFieldDiv.appendChild(ageLabel);
        hiddenFieldDiv.appendChild(ageInput);

        profileDiv.appendChild(userImage);
        profileDiv.appendChild(lockLabel);
        profileDiv.appendChild(lockInput);
        profileDiv.appendChild(unlockLabel);
        profileDiv.appendChild(unlockInput);
        profileDiv.appendChild(document.createElement('br'));
        profileDiv.appendChild(document.createElement('hr'));
        profileDiv.appendChild(usernameLabel);
        profileDiv.appendChild(usernameInput);
        profileDiv.appendChild(hiddenFieldDiv);
        profileDiv.appendChild(showMoreButton);

        mainContainer.appendChild(profileDiv);
    }
}