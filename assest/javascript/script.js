const FULL_NAME_ID = 1343648701;
const JOB_ID = 1853088013;
const PHONE_NUMBER_ID = 2000615805;
const ADDRESS_ID = 1047505472;

async function handleSubmitForm(event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const job = document.getElementById("job").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address").value;

  await jQuery.ajax({
    url: `https://docs.google.com/forms/d/e/1FAIpQLSdUhVH-nUEJk5tYEG2bbKW9FjE2zYLsmd_ImHF71p0ZEtrDxg/formResponse?submit=Submit?usp=pp_url&entry.${FULL_NAME_ID}=${fullName}&entry.${JOB_ID}=${job}&entry.${PHONE_NUMBER_ID}=${phoneNumber}&entry.${ADDRESS_ID}=${address}`,
    type: "post",
    success: function (response) {
      console.log("log response: ", response);
    },
  });

  alert("Submit success");
}

const form = document.getElementById("submitForm");
const log = document.getElementById("btnSubmit");
form.addEventListener("submit", handleSubmitForm);

function scrollToTop() {
  window.scrollTo(0, 0);
}
