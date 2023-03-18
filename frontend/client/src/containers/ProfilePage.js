import React, { useRef, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Navigate, useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { changeUserImage } from "../features/user";

export default function PersonalProfile() {
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const editProfile = () => {
    navigate("/edit-profile");
  };
  const [photo, setPhoto] = useState("");
  const profilePicture = () => {
    navigate("/profile-picture");
  };
  let email = null;
  if (user) {
    email = user.email;
  }

  const toast = useRef(null);

  const onUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded",
    });
    console.log("sdfasfssadfsafasfsafasdfhrjfgjfgjgfg");
  };
  const addphoto = (files, email) => {
    console.log(email);
    console.log(files);
    setPhoto(files);
    setPhoto(user.image_urld);
    console.log("ghdfhdfhdfhgvghd");
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", "User_profile");
    data.append("cloud_name", "dgptf7y5v");

    fetch("https://api.cloudinary.com/v1_1/dgptf7y5v/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        const url = data.url;
        console.log(url);
        console.log(email);
        let obj = {
          url: data.url,
          email,
        };
        dispatch(changeUserImage(obj));
      })
      .then((res) => {
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Profile site | Home" content="Profile">
      <section className="vh-75" style={{ backgroundColor: "#f4f5f7" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
                <MDBRow className="g-0">
                  <MDBCol
                    md="4"
                    className="gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBottomLeftRadius: ".5rem",
                    }}
                  >
                    <MDBCol style={{ marginTop: "36px" }}>
                      <MDBCardImage
                        src={
                          user
                            ? user.image_url
                            : "https://www.pngfind.com/pngs/m/545-5453533_man-profile-circle-shape-photo-comments-anonymous-user.png"
                        }
                        alt="Avatar"
                        className="mt-2"
                        style={{ width: "80px" }}
                        fluid
                      />
                      <MDBTypography tag="h5"></MDBTypography>

                      <div className="card flex justify-content-center">
                        <Toast ref={toast}>{toast}</Toast>
                        <FileUpload
                          mode="basic"
                          name="demo[]"
                          customUpload={true}
                          accept="image/*"
                          uploadHandler={(e) => addphoto(e.files[0], email)}
                          maxFileSize={1000000}
                          onUpload={onUpload}
                        />
                      </div>
                    </MDBCol>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>

                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">First Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user && user.first_name}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Last Name</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user && user.last_name}
                          </MDBCardText>
                        </MDBCol>
                        <MDBCol size="12" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">
                            {user && user.email}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </Layout>
  );
}
