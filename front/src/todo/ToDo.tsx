import React, { Suspense, useEffect, lazy } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ToDoAddForm from "./ToDoAddForm";
import * as Api from "../api/Api";
import ToDoEditForm from "./ToDoEditForm";
import Header from "../layout/Header";
import ToDoSkeleton from "../ToDoSkeleton";

const ToDoList = lazy(() => import("./ToDoList"));

export type ToDoData = {
  todo: string;
  isCompleted: boolean;
  id: Number;
  userId: Number;
} | null;
export interface ToDoProps {
  todos: { todo: string; isCompleted: boolean; id: Number; userId: Number }[];
  handleDelete: (item: ToDoData) => void;
  handleEditClick: (item?: ToDoData) => void;
  handleEdit: (item: ToDoData) => void;
}

const ToDo = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);
  const [isEditData, setIsEditData] = React.useState<ToDoData>(null);
  const [todos, setTodos] = React.useState<ToDoProps["todos"]>([]);

  const handleAdd = () => setIsClicked((prev) => !prev);

  const handleEditClick = (item?: ToDoData) => {
    setIsEdited((prev) => !prev);
    if (item) {
      setIsEditData(item);
    }
  };

  const handleUpdate = (data: ToDoData) => {
    const copied = [...todos];
    data !== null && copied.push(data);

    setTodos(copied);
  };

  const handleEdit = (data: ToDoData) => {
    const copied = [...todos];
    const index = copied.findIndex((item) => item.id === data?.id);
    copied[index] = { ...copied[index], ...data };
    setTodos(copied);
  };

  const handleDelete = async (item: any) => {
    const question = window.confirm("정말 삭제하시겠습니까?");
    if (question) {
      await Api.delete(`todos/${item.id}`);
      const copied = [...todos];
      await copied.splice(todos.indexOf(item), 1);
      await setTodos(copied);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await Api.get("todos");
      await setTodos(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {isClicked && (
        <ToDoAddForm handleAdd={handleAdd} handleUpdate={handleUpdate} />
      )}
      {isEdited && (
        <ToDoEditForm
          handleEditClick={handleEditClick}
          handleEdit={handleEdit}
          isEditData={isEditData}
        />
      )}
      <Div>
        <Header title={"Todo List"} />
        <Container>
          <button onClick={() => setIsClicked((prev) => !prev)}>
            할일 추가 버튼
          </button>
          <Ul>
            <Suspense
              fallback={
                [1, 2, 3, 4, 5].map((num) => (
                  <ToDoSkeleton key={`todolistLoading-${num}`} />
                ))
                // </ul>
              }
            >
              <ToDoList
                todos={todos}
                handleDelete={handleDelete}
                handleEditClick={handleEditClick}
                handleEdit={handleEdit}
              />
            </Suspense>
          </Ul>
        </Container>
      </Div>
    </>
  );
};

export const Div = styled.div`
  min-height: 90vh;
`;

export const Container = styled.div`
  padding: 0 10%;
  min-height: 75vh;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export default ToDo;
