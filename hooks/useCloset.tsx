// 1   add clothes
// 2
// 3
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import { ClothType, FileType } from "../types/types";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";

import Toast from "react-native-toast-message";

export const UseCloset = () => {
  const { state } = useAuthContext();

  const [clothesList, setClothesList] = useState<ClothType[]>([]);
  const [Categories, setCategories] = useState([""]);

  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  //  add un cloth do db
  const AddCloth = async (
    clothName: string,
    File: FileType,
    catvalue: string,
    closeModalHandler: () => void
  ) => {
    setIsLoading(true);

    // if (state.user?.username) {
    //   const data = {
    //     Username: state.user.username,
    //     Name: clothName,
    //     Category: catvalue,
    //     url: "",
    //   };
    //   setData(data);
    // } else {
    //   console.log("User does not exist");
    //   setIsLoading(false);
    // }

    try {
      console.log(apiUrl);
      const fileUri = File.uri;

      if (fileUri) {
        // this will upload only the picture
        const response = await FileSystem.uploadAsync(
          `${apiUrl}/uploadPic`,
          fileUri,

          {
            fieldName: `file`,
            httpMethod: "POST", // Change to POST method
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          }
        );
        //  if picture upload work we have url to use
        if (response.status === 200) {
          console.log("s");
          try {
            const axiosResponse = await axios.post(`${apiUrl}/addCloth`, {
              Username: state.user?.username,
              Name: clothName,
              Category: catvalue,
              url: response.body,
            });

            if (axiosResponse.status === 200) {
              console.log("e");
              closeModalHandler();
              Toast.show({
                type: "success",
                text1: "upload success",
                text2: "Picture successfully added to your closet!",
              });
            }
          } catch (axiosError) {
            console.log("Axios error:", axiosError);
          }
        }
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    setIsLoading(false);
  };

  //  getAll cloth from DB

  const getAllCloth = () => {
    axios
      .post(`${apiUrl}/getAllCloth`, {
        username: state.user?.username,
      })
      .then((response) => {
        // console.log("we get all the data");
        console.log("res datas : ", response.data);
        //  extract all the category from the dataList
        setClothesList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cloth data:", error);
      });
    clothesList.map((item: ClothType) => {
      console.log(item.Name);
    });
  };
  //  this will extract categories from Cloth list
  useEffect(() => {
    const tmpAry: string[] = [];
    clothesList.map((item: ClothType) => {
      if (!tmpAry.includes(item.Category)) {
        tmpAry.push(item.Category);
      }
    });
    setCategories(tmpAry);
  }, [clothesList]);
  //  run to get the data
  useEffect(() => {
    getAllCloth();
  }, []);

  return { AddCloth, getAllCloth, isLoading, Categories, clothesList };
};
