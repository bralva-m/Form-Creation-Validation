async function fetchUserData() {
const apiUrl='https://jsonplaceholder.typicode.com/users';
const dataContainer= document.getElementById('api-data');
    try{
        const response = await fetch(apiUrl);
        const users= await response.json();

        dataContainer.innerHTML = '';
     const userList =document.createElement('ul');    
        
     users.forEach(user => {
       const username =document.createElement('li');
       username.textContent = user.name;
        userList.appendChild(username);
})
        dataContainer.append(userList);

}catch(error) {
    dataContainer.innerHTML = '';
    console.error('Failed to load user data.');
}

}
document.addEventListener('DOMContentLoaded', () =>{
    fetchUserData();
})