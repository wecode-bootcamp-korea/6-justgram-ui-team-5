function fetchFeeds() {
  return fetch("./JSON/feeds.json").then((res) => res.json());
}

function fetchProfile() {
  return fetch("./JSON/profile.json").then((res) => res.json());
}
const $cardTop = document.querySelectorAll("#cardTop");
const $cardTopUsername = document.querySelectorAll("#cardTopUsername");
(async () => {
  const $cardTopUsername = document.querySelector("#cardTopUsername");
  let feed = await fetchFeeds();
  let profile = await fetchProfile();
  feed.forEach((e) => {
    console.log(e.id);
    console.log(e.writer);
    console.log(e.pictureUrl);
    e.list.forEach((n) => {
      console.log(n.user);
      console.log(n.content);
    });
  });

  profile.forEach((e) => {
    console.log(e.userName);
    console.log(e.profileUrl);
  });
  console.log($cardTopUsername.innerHTML);
  // $cardTopUsername[0] = feed.writer;
})();
