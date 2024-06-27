//import { createClient } from "@supabase/supabase-js";

// // Create a single supabase client for interacting with your database
// const supabase = createClient(
//   "https://onsaseklbpsmdexhtndh.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uc2FzZWtsYnBzbWRleGh0bmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk0OTQ1NjcsImV4cCI6MjAzNTA3MDU2N30.NeoUGm-geYZRLeaCyvjoMtSh4kcAvEa97ol83RRrLbg"
// );

let imageSrc = "";

function SetMainDogImage() {
  var imgUrl = fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data["status"] === "success") {
        imageSrc = data["message"];
        const elem = document.getElementById("main-image");
        elem.setAttribute("src", imageSrc);
      } else {
        console.error("Fetch unsuccessful:", data);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function AddDogImageToFav() {}

SetMainDogImage();
