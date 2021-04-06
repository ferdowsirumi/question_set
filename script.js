/* Hazera Ferdowsi : ID: 301168815 */

var feedbackForm = document.getElementById("feedbackForm");

function resetForm()
{
  confirm("Are you sure to clear the form?");
  if(feedbackForm!=null)
  {
    feedbackForm.reset();
  }
  event.preventDefault();
  return false;
}