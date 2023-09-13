```const [name, setName] = useState("");
const [nameIsValid, setNameIsValid] = useState();

const [email, setEmail] = useState("");
const [emailIsValid, setEmailIsValid] = useState();

const [password, setPassword] = useState("");
const [passwordIsValid, setPasswordIsValid] = useState();

const [phone, setPhone] = useState("");
const [phoneIsValid, setPhoneIsValid] = useState();

const [formIsValid, setFormIsValid] = useState(false);
const userArr = [];
const data_reg = {
  name: name,
  email: email,
  password: password,
  phone: phone,
};

// hàm nhập name
const input_name = (e) => {
  setName(e.target.value);
};

// hàm nhập email
const input_email = (e) => {
  setEmail(e.target.value);
};

// hàm nhập password
const input_password = (e) => {
  setPassword(e.target.value);
};

// hàm nhập phone
const input_phone = (e) => {
  setPhone(e.target.value);
};

// kiểm tra xem name nhập có đúng không
const validateNameHandler = (e) => {
  setNameIsValid(e.target.value.trim().length > 0 ? true : false);
};

// kiểm tra xem email nhập có đúng cú pháp không
const validateEmailHandler = (e) => {
  setEmailIsValid(e.target.value.includes("@") ? true : false);
};

// kiếm tra xem password nhập có đúng không
const validatePasswordHandler = (e) => {
  setPasswordIsValid(e.target.value.trim().length > 8 ? true : false);
};

// kiếm tra xem phone nhập có đúng không
const validatePhonedHandler = (e) => {
  setPhoneIsValid(e.target.value.trim().length > 8 ? true : false);
};

const button = (e) => {
  e.preventDefault();
  test();

  console.log("nameIsValid");
  console.log(nameIsValid);
  console.log(name);

  console.log("emailIsValid");
  console.log(emailIsValid);
  console.log(email);

  console.log("passwordIsValid");
  console.log(passwordIsValid);
  console.log(password);

  console.log("phoneIsValid");
  console.log(phoneIsValid);
  console.log(phone);

  console.log(formIsValid);
};

// tại hàm kiếm tra
const test = () => {
  setNameIsValid(name.trim().length > 0 ? true : false);
  setEmailIsValid(email.includes("@") ? true : false);
  setPasswordIsValid(password.trim().length > 8 ? true : false);
  setPhoneIsValid(phone.trim().length > 9 ? true : false);

  setFormIsValid(
    setEmailIsValid && setNameIsValid && setPasswordIsValid && setPhoneIsValid
  );
};```