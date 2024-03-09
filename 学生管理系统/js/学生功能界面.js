const POST = {
    method: 'post',
    url: 'https://2eab-117-136-90-216.ngrok-free.app/Admin_war//SelectAllServlets',
    
}
axios(POST)
    .then((response) => {
        console.log(response.data)
        let a = response.data.data
        let name = document.querySelector('.NAME');
        let number = document.querySelector('.number');
        let kind = document.querySelector('.kind');
        let studentNumber = document.querySelector('.studentNumber');
        let phone = document.querySelector('.phone');
        let profession = document.querySelector('.profession');
        let theClass = document.querySelector('.class');
        console.log(a)
        name.textContent = a[0].name;
        number.textContent = a[0].periods;
    })
    .catch((error) => {
        console.log(error);
})








































