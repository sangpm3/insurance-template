function handleSubmitForm(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const job = document.getElementById("job").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;

  // console.log("log fullName: ", fullName.value);
  // console.log("log job: ", job.value);
  // console.log("log phoneNumber: ", phoneNumber.value);
  // console.log("log address: ", address.value);

  console.log("log fullName: ", fullName);
  console.log("log job: ", job);
  console.log("log phoneNumber: ", phoneNumber);
  console.log("log address: ", address);

  const recipient = "sangpm3@gmail.com";
  const subject = "Thông tin submit";
  const body = `Họ và tên: ${fullName}. Nghề nghiệp: ${job}. Số điện thoại: ${phoneNumber}. Địa chỉ: ${address}`;

  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // window.location.href = mailtoLink;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "2dulieucuatoi@gmail.com",
    Password: "E45A5330E42FBFFDC84673296498AE2D5883",
    From: "2dulieucuatoi@gmail.com",

    To: "sangpm3@gmail.com",
    Subject: "Sending Email using javascript",
    Body: body,
  }).then(function (message) {
    alert("mail sent successfully");
  });
}

const form = document.getElementById("submitForm");
const log = document.getElementById("btnSubmit");
form.addEventListener("submit", handleSubmitForm);

function scrollToTop() {
  window.scrollTo(0, 0);
}
