import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { FileType } from "../types/types";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";

export const UseCloth = () => {
  const { state } = useAuthContext();
  const [Data, setData] = useState({});
  const [ImgUrl, setImgUrl] = useState("");
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const AddCloth = async (
    clothName: string,
    File: FileType,
    catvalue: string
  ) => {
    console.log("start");

    if (state.user?.username) {
      const data = {
        Username: state.user.username,
        Name: clothName,
        Category: catvalue,
        url: "",
      };
      setData(data);
    } else {
      console.log("User does not exist");
    }

    try {
      console.log(apiUrl);
      const fileUri = File.uri;

      if (fileUri) {
        const response = await FileSystem.uploadAsync(
          `${apiUrl}/uploadPic`,
          fileUri,

          {
            fieldName: `file`,
            httpMethod: "POST", // Change to POST method
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          }
        ).then((response) => {
          // setImgUrl(response.body);
          // setData((prevData) => ({
          //   ...prevData,
          //   url: response.body,
          // }));
          // console.log(Data, "zz");
          axios
            .post(`${apiUrl}/addCloth`, {
              Username: state.user?.username,
              Name: clothName,
              Category: catvalue,
              url: response.body,
            })
            .then(function (response) {
              // console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return { AddCloth };
};
