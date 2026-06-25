ხანგრძლივობა: 60 წუთი
თემა: DOM Events, Forms, Event Listeners, საბაზისო JavaScript ლოგიკა
სულ: 9 ქულა

სტუდენტის დავალება

შექმენით პატარა ვებ გვერდი, სადაც მომხმარებელი შეძლებს კურსის შესახებ უკუკავშირის დატოვებას.

გვერდზე უნდა იყოს:

<h1>Course Feedback</h1>

<form id="feedbackForm">
  <input id="nameInput" type="text" placeholder="Your name" />
  <select id="ratingInput">
    <option value="">Choose rating</option>
    <option value="1">1 - Bad</option>
    <option value="2">2 - Okay</option>
    <option value="3">3 - Good</option>
    <option value="4">4 - Very Good</option>
    <option value="5">5 - Excellent</option>
  </select>
  <textarea id="commentInput" placeholder="Your comment"></textarea>
  <button type="submit">Submit Feedback</button>
</form>

<p id="message"></p>

<ul id="feedbackList"></ul>
დაწერეთ JavaScript ისე, რომ:

ფორმის გაგზავნისას გვერდი არ დარეფრეშდეს.

თუ სახელი, შეფასება ან კომენტარი ცარიელია, გამოჩნდეს შეტყობინება:
“Please fill in all fields.”

თუ ყველა ველი შევსებულია, უკუკავშირი დაემატოს სიაში.

თითოეულ უკუკავშირის ჩანაწერში უნდა გამოჩნდეს სტუდენტის სახელი, შეფასება და კომენტარი.

წარმატებული გაგზავნის შემდეგ ფორმის ველები გასუფთავდეს.

წარმატებული გაგზავნის შემდეგ გამოჩნდეს შეტყობინება:
“Feedback added successfully.”
const feedBackInput=document.getElementById('feedBackInput');
const nameInput =  document.getElementById("nameInput");
const ratingInput = document.getElementById("ratingInput");
const commentInput = document.getElementById("commentInput");
const message = document.getElementById("message");
const feedbackList = document.getElementById("feedbackList");
const feedBackInputForm = document.getElementById("feedbackForm");

feedBackInputForm.addEventListener("submit", function(event){
event.preventDefault();
    const name = nameInput.value.trim();
    const rating = ratingInput.value;
    const comment = commentInput.value.trim();

    if(name === "" || rating === "" || comment === ""){
        //alert("please fill in all fields"); 
        message.textContent("please fill in all fields");return;
    };
        const li = document.createElement("li");
li.textContent = `Name: ${name} | Rating: ${rating} | Comment: ${comment}`;

feedbackList.appendChild(li);
feedBackInput.reset();
message.textContent = "feedback added succesfully";
feedBackInputForm.reset();

});
