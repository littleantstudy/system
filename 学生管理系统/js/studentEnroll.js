//正则表达式验证名字和密码，名字必须为汉字，密码必须为至少八位，且至少包含1个大写字母和一个小写字母和数字
let regName = /^[\u4E00-\u9FFF]+$/;
let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

function checkPassword() {
    document.getElementById("password").addEventListener("input", function () {
      
        let password = document.getElementById("password").value;
        // console.log(password);
        let passwordError = document.getElementById("passwordError");
        if (!regPassword.test(password)) {
            document.getElementById("passwordError").style.display = "block";
            passwordError.innerHTML = "密码不符合要求，只能使用大写，小写，数字的集合,且至少八位";
            return false;
        }
        else {
            document.getElementById("passwordError").style.display = "none";
            return true;
        }
            
        })
};


function checkName() {
    document.getElementById("name").addEventListener("input", function () {
        
    let name = this.value;
    let nameError = document.getElementById("nameError");
    if (!regName.test(name)) {
        document.getElementById("nameError").style.display = "block";
        nameError.innerHTML = "名字只能是汉字";   
        return false;
    }
    else {
        document.getElementById("nameError").style.display = "none";
        return true;
      
    }
    })        
}    

checkPassword();
checkName();

//这两个函数用来调整焦点，当鼠标点击其他输入框时提示文字消失
document.getElementById("password").addEventListener("blur", () => {
    document.getElementById("passwordError").style.display = "none";
});
document.getElementById("name").addEventListener("blur", () => {
    document.getElementById("nameError").style.display = "none";
});

//表单提交注册信息
document.getElementById("basicMessage").addEventListener("submit", (event) => {
    event.preventDefault();
    if (checkName() === true && checkPassword() === true) {
        const stuMessage =
        {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        periods: document.getElementById("periods").value,
        name: document.getElementById("name").value,
        age:document.getElementById("age").value,
        sex: document.getElementsByName("sex").value,
        kind: document.getElementById("kind").value,
        };
        //转换为JSON格式进行传输
        JSON.stringify(stuMessage);
        axios.post("http://43.143.169.168:9090/user/register", stuMessage)
            .then((response) => {
                console.log(response);
        })
            .catch((error) => {
            console.log(error);
        })
        
    }

   
 }
);
