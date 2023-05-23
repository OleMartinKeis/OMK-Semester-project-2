import { setUpdateProfileListener } from "../handlers/updateProfile.mjs";

export function profileTemplate(profileData) {
  const avatar = profileData.avatar;
  console.log("This is the profileTemplate's function's avatar" + avatar);

  let currentAvatar;

  if (avatar !== undefined) {
    currentAvatar = avatar;
  } else {
    currentAvatar =
      "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
  }

  const profileCard = document.querySelector("#profileContainer");

  profileCard.innerHTML += `
        <div class="card-profile mb-5" style="margin-top: 50px;">
            <div class="rounded-top d-flex flex-row" style="height: 200px">
                <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px">
                    <img src="${currentAvatar}" id="avatar" class="img-fluid img-thumbnail rounded-circle mb-2" style="width: 150px; height: 150px; margin-top:-15px; z-index: 1">
                </div>
                <div class="ms-3" style="margin-top: 130px">
                    <h5>${profileData.name ? profileData.name : "Unknown"}</h5>
                </div>
            </div>
            <div class="card-body">
                <div class="mb-5">
                    <p class="lead fw-normal mb-1">About</p>
                    <div class="p-4">
                        <p>Front-end Developer</p>
                        <form>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example27" >Name</label>
                                <input type="text" disabled name="name" placeholder="${
                                  profileData.name
                                }" class="form-control form-control-lg"/>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example27">Email</label>
                                <input type="email" disabled name="email" placeholder="${
                                  profileData.email
                                }"class="form-control form-control-lg"/>
                            </div>
                        </form>
                        <div>
                            <a href="/profile/edit/index.html?id=${
                              profileData.id
                            }" class="btn btn-primary btn-sm">Edit profile<a/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
            <a href="../../posts/" class="btn btn-primary btn-md" width="" style="text-decoration: none; margin-top: 15px;">Back to feed</a>
        </div>
`;

  return profileData;
}

export function renderProfileTemplate(profileData, parent) {
  parent.append(profileTemplate(profileData));
}
