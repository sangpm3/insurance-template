# Update Values to Submit Google Form Using Public API

To customize the Google Form submission via a public API, follow these steps:

1. Open the `script.js` file located at: `assets\javascript\script.js`.

2. Adjust the four values at the top of the file with the corresponding values from your Google Form link:

   - `FULL_NAME_ID`
   - `JOB_ID`
   - `PHONE_NUMBER_ID`
   - `ADDRESS_ID`

## How to Obtain the ID for Each Form Field:

1. Access your Google Form dashboard and select the desired form.

2. Choose the `prefill` mode.

3. Open the Developer Tools by pressing F12 or right-clicking and selecting "Developer tools."

4. Navigate to the "Network" tab.

5. Submit the form and locate the prefill request. Select the "Payload" tab.

6. Collect the field IDs based on the values you input during the form submission.

This process ensures that you update the script with the correct field IDs, enabling seamless interaction with the Google Form through the public API.
