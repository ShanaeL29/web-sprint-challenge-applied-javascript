import axios from "axios";

// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

const Tabs = (topics) => {
  //INSTANTIATION OF ELEMENTS
  const topicsElement = document.createElement("div");
  const topicTab1 = document.createElement("div");
  const topicTab2 = document.createElement("div");
  const topicTab3 = document.createElement("div");
  const topicTab4 = document.createElement("div");
  const topicTab5 = document.createElement("div");

  //HIERARCHY
  topicsElement.appendChild(topicTab1);
  topicsElement.appendChild(topicTab2);
  topicsElement.appendChild(topicTab3);
  topicsElement.appendChild(topicTab4);
  topicsElement.appendChild(topicTab5);

  //ASSIGNING ATTRIBUTES
  topicsElement.classList.add("topics");
  topicTab1.classList.add("tab");
  topicTab2.classList.add("tab");
  topicTab3.classList.add("tab");
  topicTab4.classList.add("tab");
  topicTab5.classList.add("tab");

  //APPLYING CONTENT
  topicTab1.textContent = topics[0];
  topicTab2.textContent = topics[1];
  topicTab3.textContent = topics[2];
  topicTab4.textContent = topics[3];
  topicTab5.textContent = topics[4];

  return topicsElement;
};

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((res) => {
      console.log(res);
      const topics = res.data.topics;
      const tab = Tabs(topics);
      document.querySelector(selector).appendChild(tab);
    })
    .catch((err) => {
      console.error(err);
    });
};

export { Tabs, tabsAppender };

// ---------------------- FAILED ATTEMPTS AT TRYING TO MAKE CODE MORE EFFICIENT -------------------
// topics.forEach((topic, index) => {
//   const topic = document.createElement("div");
//   topic.classList.add("tab");
//   topic.textContent = `${topics[index]}`;
//   topicsElement.appendChild(topic);
// });
// const tabs = document.querySelectorAll(".topics div");
// tabs.forEach((tab) => {
//   tab.classList.add("tab");
//   topicsElement.appendChild(tab);
//   // tab.textContent = `${topics[index]}`;
// });

// topicsList.forEach((topic) => {
//   topic.classList.add("tab");
// });

// for (let topic of topicsElement) {
//   topicsList.appendChild(topic);
// }

// HIERARCHY OF ELEMENTS
// const topicsList = document.querySelector('.topics')

//  topics.forEach((topic) => {
//   topic.classList.add("tab");
// });
