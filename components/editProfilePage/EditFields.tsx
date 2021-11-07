import * as React from "react";
import { userService } from "../../Services/userService";
import { alertService } from "../../Services/alertService";
import { useRouter } from "next/router";
import Loader from "../general/Loader";

const EditFields = () => {
  const router = useRouter();
  const fileInput = React.useRef(null);
  const [isSaving, setisSaving] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(true)
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    email: "",
    address: "",
    avatarUrl: "",
  });

  const [picture, setPicture] = React.useState(null);
  const [imgData, setImgData] = React.useState(null);
  const returnUrl = router.query.returnUrl || "/dashboard/profile";

  function handleSubmit(event: any) {
    event.preventDefault();
    setisSaving(true);

    const result = userService
      .updateUser(user)
      .then(() => {
        const returnUrl = router.query.returnUrl || "/dashboard/profile";

        alertService.success("update successful");

        var delayInMilliseconds = 2000; //1 second

        setTimeout(function () {
          //your code to be executed after 1 second
          router.push(returnUrl);
        }, delayInMilliseconds);
      })
      .catch(() => {
        alertService.error("error updating your details");
      })
      .finally(() => {
        setisSaving(false);
      });
  }

  React.useEffect(() => {
    const getUser = () => {
      userService
        .getUser()
        .then((data) => {
          setUser(data.data);
          setisLoading(false)
        })
        .catch(() => {
          userService.logout();
        });
    };
    console.log("&&&&&&&&&&&&&&&&&", user);
    getUser();
  }, []);

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });

    if (event.target.files) {
      console.log("picture: ", event.target.files);
      setPicture(event.target.files[0]);
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const removePicture = () => {
    setImgData(null);
    setPicture(null);
  };

  const renderFileInput = () => (
    <div>
      <input type="file" name="selectedFile" onChange={handleChange} />;
    </div>
  );

  const onFileUpload = () => {
    event?.preventDefault();
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("image", picture, picture.name);

    // Details of the uploaded file
    console.log(picture);

    // Request made to the backend api
    // Send formData object

    userService
      .uploadPicture(formData)
      .then(() => {
        // get return url from query parameters or default to '/'
        alertService.success("upload successful");

        console.log(result);
      })
      .catch(() => {
        alertService.error("upload issues occured");
      })
      .finally(() => {
        var delayInMilliseconds = 1000; //1 second

        setTimeout(function () {
          //your code to be executed after 1 second
          router.push(returnUrl);
        }, delayInMilliseconds);
      });
    //axios.post("api/uploadfile", formData);
  };

  return (
    <>
      {isLoading == true ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="w-full px-8 lg:px-0 lg:w-8/12 mx-auto flex-col my-12">
          <div className="bg-white dark:bg-gray-800 w-11/12 p-4 mx-auto mb-1 rounded-md">
            <div className="border-2 border-cashfer-purple h-32 w-32 rounded-full overflow-hidden mx-auto mb-2">
              <img
                className=" w-full h-full object-cover"
                src={
                  user.avatarUrl == null
                    ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    : user.avatarUrl
                }
              />
            </div>
            <div className="text-center">
              <button
                onClick={() => fileInput.current.click()}
                className="text-xs bg-cashfer-purple p-2 rounded-md text-white"
              >
                change picture
              </button>
              <span className="text-xs"> (2mb Max)</span>
              <input
                ref={fileInput}
                style={{ display: "none" }}
                type="file"
                name="selectedFile"
                onChange={handleChange}
                
              />
            </div>
          </div>
          {imgData && (
            <div className="lg:w-11/12 mx-auto my-2 dark:bg-gray-800 flex-col p-2 text-center">
              <div className="w-24 h-full mx-auto">
                <img className="w-24 h-full" src={imgData} />
              </div>

              <div className="space-x-3 mt-2">
                <form
                  className="space-x-3 mt-2"
                  action=""
                  onSubmit={onFileUpload}
                >
                  <button className="text-xs bg-cashfer-purple text-white px-2 py-1 rounded-md">
                    upload
                  </button>
                  <button
                    className="text-xs bg-cashfer-purple text-white px-2 py-1 rounded-md"
                    onClick={removePicture}
                  >
                    remove
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="w-full py-8 lg:w-11/12 mx-auto bg-white dark:bg-gray-800 lg:p-12 rounded-lg">
            {" "}
            <form action="" onSubmit={handleSubmit}>
              <div className="block w-10/12 lg:w-full mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-between lg:gap-4 mb-4">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                  <label className="text-gray-500 text-xs" htmlFor="">
                    First Name
                  </label>
                  <div className="">
                    <input
                      className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                      type="text"
                      placeholder=""
                      value={user.firstName}
                      onChange={handleChange}
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <label className="text-gray-500 text-xs" htmlFor="">
                    Last Name
                  </label>
                  <div className="">
                    <input
                      className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                      type="text"
                      placeholder=""
                      value={user.lastName}
                      onChange={handleChange}
                      name="lastName"
                    />
                  </div>
                </div>
              </div>

              <div className="block w-10/12 lg:w-full mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-between lg:gap-4 mb-4">
                <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0">
                  <label className="text-gray-500 text-xs" htmlFor="">
                    Email
                  </label>
                  <div className="">
                    <input
                      className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                      type="text"
                      placeholder=""
                      value={user.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mx-auto">
                  <label className="text-gray-500 text-xs" htmlFor="">
                    Username
                  </label>
                  <div className="">
                    <input
                      className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                      type="text"
                      placeholder=""
                      value={user.userName}
                      onChange={handleChange}
                      name="userName"
                    />
                  </div>
                </div>
              </div>

              <div className="block w-10/12 lg:w-full mx-auto lg:mx-0 lg:flex lg:items-center lg:justify-between lg:gap-4 mb-4">
                <div className="w-full lg:w-1/2 mx-auto mb-4 lg:mb-0">
                  <label className="text-gray-500 text-xs" htmlFor="">
                    Phone Number
                  </label>
                  <div className="">
                    <input
                      className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                      type="text"
                      placeholder=""
                      value={user.phoneNumber}
                      onChange={handleChange}
                      name="phoneNumber"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 mx-auto">
                  <label className="text-gray-500 text-xs" htmlFor="">
                    Address
                  </label>
                  <div className="">
                    <input
                      className="w-full border pl-1 focus:outline-none focus:ring
                focus:border-cashfer-purple focus-within:text-purple-400 mt-2 h-9"
                      type="text"
                      placeholder=""
                      value={user.address}
                      onChange={handleChange}
                      name="address"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full lg:mx-auto lg:w-2/5 bg-cashfer-purple text-white rounded-lg text-center mt-16 hover:opacity-90">
                <button className="w-full h-hull p-3">
                  {isSaving == true ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditFields;
