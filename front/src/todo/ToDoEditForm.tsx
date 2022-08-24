import * as Api from "../api/Api";
import React, { useEffect } from "react";
import styled from "styled-components";
import { ToDoData } from "./ToDo";
import { ButtonGroup, Form } from "./ToDoAddForm";

interface ToDoEditFormProps {
  handleEditClick: (item?: ToDoData) => void;
  handleEdit: (data: ToDoData) => void;
  isEditData: ToDoData;
}

const ToDoEditForm = ({
  isEditData,
  handleEdit,
  handleEditClick,
}: ToDoEditFormProps) => {
  const copied = { ...isEditData };
  const [editData, setEditData] = React.useState(copied);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "isCompleted") {
      setEditData({ ...editData, [e.target.id]: e.target.checked });
    } else setEditData({ ...editData, [e.target.id]: e.target.value });
  };
  // 할 일 수정(update) 핸들러
  const handleSubmit = async () => {
    console.log(editData);
    const res = await Api.put(`todos/${editData.id}`, {
      todo: editData.todo,
      isCompleted: editData.isCompleted,
    });
    await handleEdit(res.data);
    await handleEditClick();
  };

  return (
    <Container>
      <Form>
        <div>
          <div>완료 상태</div>
          <input
            id="isCompleted"
            type="checkbox"
            checked={editData.isCompleted && true}
            onChange={handleChange}
          />
        </div>
        <div>Task title</div>
        <input
          id="todo"
          type="text"
          value={editData.todo}
          onChange={handleChange}
        />

        <ButtonGroup>
          <button onClick={handleSubmit}>Edit</button>
          <button onClick={() => handleEditClick()}>취소</button>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  border: 2px solid red;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default ToDoEditForm;
