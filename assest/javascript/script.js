function handleSubmitForm(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const job = document.getElementById("job").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;

  console.log("log fullName: ", fullName);
  console.log("log job: ", job);
  console.log("log phoneNumber: ", phoneNumber);
  console.log("log address: ", address);

  jQuery.ajax({
    url: `https://docs.google.com/forms/d/e/1FAIpQLSdUhVH-nUEJk5tYEG2bbKW9FjE2zYLsmd_ImHF71p0ZEtrDxg/formResponse?submit=Submit?usp=pp_url&entry.1343648701=${fullName}&entry.1853088013=${job}&entry.2000615805=${phoneNumber}&entry.1047505472=${address}`,
    type: "post",
    // data: { name: "yogesh", salary: 35000, email: "yogesh@makitweb.com" },
    success: function (response) {
      console.log("log response: ", response);
    },
  });
}

const form = document.getElementById("submitForm");
const log = document.getElementById("btnSubmit");
form.addEventListener("submit", handleSubmitForm);

function scrollToTop() {
  window.scrollTo(0, 0);
}

// https://script.google.com/macros/s/AKfycbzbF039JBRsF34jRqGm4Xzs9l5qSOk4HLapW6bOKlML2159hnWnEpMU_sfttAzS-4LMzQ/exec

// AKfycbzbF039JBRsF34jRqGm4Xzs9l5qSOk4HLapW6bOKlML2159hnWnEpMU_sfttAzS-4LMzQ
