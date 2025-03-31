import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import video from "./assets/video4.mp4";
import {
  BackgroundVideo,
  Button,
  Check,
  Container,
  Input,
  ListItem,
  TodoList,
  Trash,
} from "./styles";

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState([]);

  function inputMudou(event) {
    setInputTask(event.target.value);
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, checked: false }]);
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setList(newList);
  }

  function deletarItem(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder="O que tenha para fazer..." />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>
        <BackgroundVideo autoPlay loop muted>
          <source src={video} />
        </BackgroundVideo>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem $isChecked={item.checked} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Nenhuma tarefa cadastrada</h3>
          )}
        </ul>
      </TodoList>
    </Container>
  );
}

export default App;
