import {addDoc,collection,deleteDoc,doc,getDocs,getFirestore,updateDoc} from "firebase/firestore";
import { app } from "../Firebase";

export const ADD_DATA = (data) => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      await addDoc(collection(db, "user"), {
        work: data.work,
      });
      dispatch(ALL_DATA_VIEW());
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const ALL_DATA_VIEW = () => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      let data = await getDocs(collection(db, "user"));
      let todo = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      dispatch({ type: "VIEW_DATA", payload: todo });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const DELETE_DATA = (id) => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      const delRec = doc(db, "user", id);
      await deleteDoc(delRec);
      dispatch(ALL_DATA_VIEW());
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const EDIT_DATA = (editId, work) => {
  return async (dispatch) => {
    try {
      const db = getFirestore(app);
      const updateUser = doc(db, "user", editId);
      await updateDoc(updateUser, { work: work });
      dispatch(ALL_DATA_VIEW());
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};
