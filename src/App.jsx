import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ADD_DATA, DELETE_DATA, EDIT_DATA, ALL_DATA_VIEW } from "./action/crudAction";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const [work, setWork] = useState("");
  const [editId, setEditId] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      dispatch(EDIT_DATA(editId, work))
      setEditId("")
      setWork("")
    } else {
      dispatch(ADD_DATA({ work }));
      setWork("");
    }

  };

  let allWork = useSelector(state => state.crudReducer.users)

  const EDIT_DATA_HANDLE = (item) => {
    setEditId(item.id)
    setWork(item.work)
  }

  useEffect(() => {
    dispatch(ALL_DATA_VIEW())
  }, [dispatch])
  return (
    <>
      <Container>
        <div className="mx-auto w-75 col-lg-10 justify-content-center d-flex">
          <div className="w-100">
            <h1 className="justify-content-center d-flex text-white">TO DO LIST</h1>
            <div className="mb-4">
              <form action="" className="d-flex justify-content-between" onSubmit={handleSubmit}>
                <input type="text" className="form-control px-3 py-2" placeholder="Enter Your Work..." onChange={(e) => setWork(e.target.value)} value={work}></input>
                <button className="btn btn-primary mx-1" type="submit"> {editId ? "Update" : "Submit"}</button>
              </form>
            </div>
            <div className="box">
              <table className="table table-striped table-dark" border={"1px"} >
                <thead>
                  <tr>
                    <th className="work">Work</th>
                    <th className="action">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allWork.map((item) => {
                      return (
                        <tr key={item.id} >
                          <td className="w-75">{item.work}</td>
                          <td><button className="btn btn-danger mx-2 mt-1" onClick={() => dispatch(DELETE_DATA(item.id))}>Remove</button>
                              <button className="btn btn-success mx-2 mt-1" onClick={() => EDIT_DATA_HANDLE(item)} >Modify</button>
                            </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;