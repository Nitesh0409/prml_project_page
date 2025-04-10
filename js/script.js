document.addEventListener("DOMContentLoaded", () => {
  //---------------------------------------------------------------------------------
  project_data = {
    title: "PRML COURSE PROJECT",
    heading: "Handwritten Digit Recognition",
    year: "Pattern Recognition and Machine Learning - 2025",
    contributers: [
      {
        name: "Nitesh",
        linkedin: "https://www.linkedin.com/in/nitesh-k-kanojia-a839b9309/",
        profile_pic: "./profile_pics/nitesh.jpeg",
        email: "mailto:b23ee1047@iitj.ac.in",
      },
      {
        name: "Nitin Verma",
        linkedin: "https://www.linkedin.com/in/nitin-verma-2a08b028a/",
        profile_pic:
          "https://drive.google.com/thumbnail?id=1aL_BKDV1KJbXoSCaVlSFhTzcwLaGmmg6&sz=s511",
        email: "mailto:b23ee1048@iitj.ac.in",
      },
      {
        name: "Saurabh Kumar",
        linkedin: "https://www.linkedin.com/in/saurabh-kumar-07562728a/",
        profile_pic: "./profile_pics/sourabh.jpg",
        email: "mailto:b23ee1066@iitj.ac.in",
      },
      {
        name: "Vanshita Jeenwal",
        linkedin: "https://www.linkedin.com/in/vanshita-jeenwal-32746a288/",
        profile_pic: "./profile_pics/vanshita.jpeg",
        email: "mailto:b23ee1078@iitj.ac.in",
      },
      {
        name: "Shruti Sunil Vibhute",
        linkedin: "https://www.linkedin.com/in/shruti-vibhute-210b392b6",
        profile_pic: "./profile_pics/shruti.jpeg",
        email: "mailto:b23cs1070@iitj.ac.in",
      },
      {
        name: "Mallam Vishnu Priya",
        linkedin: "https://www.linkedin.com/in/vishnu-priya-mallam-698a5a2a3/",
        profile_pic: "./profile_pics/vishnu_priya.jpeg",
        email: "mailto:b23ee1040@iitj.ac.in",
      },
    ],
    navLinks: [
      { name: "Web Demo", url: "https://handwritten-digit-recognition-vjhi.vercel.app/" },
      {
        name: "Github",
        url: "https://github.com/NitinVerma2027/PRML-Apr2025",
      },
      {
        name: "Dataset",
        url: "https://drive.google.com/drive/folders/18h0hDWxSEFYIJUTYN8A-7ZpLEYUlZQ8s?usp=sharing",
      },
      { name: "YouTube", url: "https://youtu.be/GoP_YK_526g" },
    ],
    institute: "India Institute of Technology, Jodhpur",
    image_pairs: [
      {
        drawing_img: `./images/img_2.png`,
        drawing_caption: `handwritten digit`,
        prediction_images: `./images/pred_2.png`,
        prediction_caption: `Predicted digit`,
      },
      {
        drawing_img: `./images/img_6.png`,
        drawing_caption: `handwritten digit`,
        prediction_images: `./images/pred_6.png`,
        prediction_caption: `Predicted digit`,
      },
      {
        drawing_img: `./images/img_5.png`,
        drawing_caption: `handwritten digit`,
        prediction_images: `./images/pred_5.png`,
        prediction_caption: `iPredicted digit`,
      },
    ],
    yt_video: "https://youtu.be/GoP_YK_526g",
    exampleImages: [
      "./example_images/digit_0.png",
      "./example_images/digit_1.png",
      "./example_images/digit_2.png",
      "./example_images/digit_3.png",
      "./example_images/digit_4.png",
      "./example_images/digit_5.png",
      "./example_images/digit_6.png",
      "./example_images/digit_7.png",
      "./example_images/digit_8.png",
    ],
  };

  //---------------------------------------------------------------------------------

  const heading = document.getElementById("heading");
  heading.textContent = project_data.heading;

  const year = document.getElementById("course_year");
  year.textContent = project_data.year;

  const contributorDiv = document.querySelector(".contributers");
  contributorDiv.innerHTML = "<strong>Contributors:</strong><br>";

  project_data.contributers.forEach((person) => {
    contributorDiv.innerHTML += `
    <div>
      <a href="${person.linkedin}" target="_blank" rel="noopener noreferrer">
        ${person.name}
      </a>
    </div>`;
  });

  //---------------------------------------------------------------------------------

  const institute_name = document.getElementById("institute_name");
  institute_name.textContent = project_data.institute;

  const navigation = document.querySelector(".links");
  navigation.textContent = "";
  project_data.navLinks.forEach((link, index) => {
    navigation.innerHTML += `
    <a href="${link.url}" target="_blank" rel="noopener noreferrer">
      ${link.name}
    </a>
    ${index < project_data.navLinks.length - 1 ? "|" : ""}
  `;
  });

  //---------------------------------------------------------------------------------

  const yt_frame = document.querySelector("#frame_yt");
  let yt_url = project_data.yt_video;

  let video_id = yt_url.split("/").pop();

  yt_frame.src = `https://www.youtube.com/embed/${video_id}`;

  //---------------------------------------------------------------------------------

  let currentIndex = 0;

  const drawImg = document.getElementById("drawing_image");
  const predImg = document.getElementById("prediction_image");

  const sketchCaption = drawImg.nextElementSibling;
  const pred_caption = predImg.nextElementSibling;

  function updateImages(index) {
    const pair = project_data.image_pairs[index];
    drawImg.src = pair.drawing_img;
    predImg.src = pair.prediction_images;
    sketchCaption.innerText = pair.drawing_caption;
    pred_caption.innerText = pair.prediction_caption;
  }

  document.getElementById("left-btn").addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + project_data.image_pairs.length) %
      project_data.image_pairs.length;
    updateImages(currentIndex);
  });

  document.getElementById("right-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % project_data.image_pairs.length;
    updateImages(currentIndex);
  });

  updateImages(currentIndex);

  //---------------------------------------------------------------------------------

  const container = document.querySelector(".example_images");
  container.innerText = "";

  project_data.exampleImages.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Example Image";
    container.appendChild(img);
  });

  //---------------------------------------------------------------------------------

  const teamContainer = document.querySelector(".team_section");

  project_data.contributers.forEach((person) => {
    const card = document.createElement("div");
    card.classList.add("team_card");

    const profileImage = person.profile_pic;

    const fallbackImage =
      "https://cdn-icons-png.flaticon.com/512/149/149071.png"; // Generic user avatar

    card.innerHTML = `
    <img src="${profileImage}" alt="${person.name}" class="team_img"
         onerror="this.onerror=null;this.src='${fallbackImage}';" />
    <h3>${person.name}</h3>
    <div class="team_links">
      <a href="${person.linkedin}" target="_blank" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="${person.email}" target="_blank" title="gmail">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  `;

    teamContainer.appendChild(card);
  });
});

  //------------------------------------------😊 Thats All 😊---------------------------------------

