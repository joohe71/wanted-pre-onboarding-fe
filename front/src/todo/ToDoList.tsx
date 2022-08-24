import React from "react";
import { ToDoData, ToDoProps } from "./ToDo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import * as Api from "../api/Api";

interface ToDoStyle {
  todoData: ToDoData;
}

const ToDoList = ({
  todos,
  handleDelete,
  handleEditClick,
  handleEdit,
}: ToDoProps) => {
  const navigate = useNavigate();

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    data: ToDoData
  ) => {
    const res = await Api.put(`todos/${e.currentTarget.id}`, {
      todo: data?.todo,
      isCompleted: e.target.checked,
    });
    await handleEdit(res.data);
  };

  return (
    <React.Fragment>
      {todos.length === 0 && "할일이 없습니다. 할 일을 추가해주세요"}
      {todos?.map((value, index) => (
        <Group key={`todo-${index}`}>
          <Li key={`todo-${index}`}>
            <input
              id={String(value.id)}
              name="isCompleted"
              type="checkbox"
              checked={value.isCompleted && true}
              onChange={(e) => handleChange(e, value)}
            />
            <Span todoData={value}>{value.todo}</Span>
          </Li>
          <ButtonGroup>
            <Button onClick={() => handleEditClick(value)}>수정</Button>
            <Button onClick={() => handleDelete(value)}>삭제</Button>
          </ButtonGroup>
        </Group>
      ))}
    </React.Fragment>
  );
};

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    border-bottom: 1px solid #ff6e40;
    cursor: pointer;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10%;
`;

const Button = styled.button`
  padding: 5% 8%;
`;
const Li = styled.li`
  height: 40px;
  line-height: 40px;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Span = styled.span<ToDoStyle>`
  text-decoration: ${(props) => props.todoData?.isCompleted && "line-through"};
`;

export default ToDoList;
